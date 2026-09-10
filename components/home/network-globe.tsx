'use client'

import { useEffect, useRef } from 'react'

interface Node {
  /** spherical coords */
  theta: number
  phi: number
  /** projected cache */
  x: number
  y: number
  z: number
  pulse: number
}

/**
 * Signature animated network globe — a slowly rotating point-cloud sphere with
 * glowing nodes and short great-circle links, rendered on a canvas in the
 * EKSPA corporate-blue palette. Honors prefers-reduced-motion by drawing a
 * single static frame.
 */
export function NetworkGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let radius = 0

    const NODE_COUNT = 360
    const nodes: Node[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      // Fibonacci sphere distribution for even coverage
      const y = 1 - (i / (NODE_COUNT - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const golden = Math.PI * (3 - Math.sqrt(5))
      const t = golden * i
      nodes.push({
        theta: Math.atan2(r * Math.sin(t), r * Math.cos(t)),
        phi: Math.acos(y),
        x: 0,
        y: 0,
        z: 0,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      radius = Math.min(width, height) * 0.42
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let rotation = 0
    let raf = 0

    const project = (n: Node, rot: number) => {
      // convert spherical -> cartesian, apply Y-axis rotation + slight tilt
      const sinPhi = Math.sin(n.phi)
      let cx = sinPhi * Math.cos(n.theta + rot)
      let cy = Math.cos(n.phi)
      let cz = sinPhi * Math.sin(n.theta + rot)
      // tilt around X
      const tilt = -0.5
      const ty = cy * Math.cos(tilt) - cz * Math.sin(tilt)
      const tz = cy * Math.sin(tilt) + cz * Math.cos(tilt)
      cy = ty
      cz = tz
      n.x = width / 2 + cx * radius
      n.y = height / 2 + cy * radius
      n.z = cz
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) project(n, rotation)

      // links between nearby projected nodes on the front hemisphere
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i += 2) {
        const a = nodes[i]
        if (a.z < -0.1) continue
        for (let j = i + 1; j < i + 14 && j < nodes.length; j++) {
          const b = nodes[j]
          if (b.z < -0.1) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < radius * 0.34) {
            const depth = (a.z + b.z) / 2
            const alpha = Math.max(0, (1 - dist / (radius * 0.34)) * (0.12 + depth * 0.18))
            ctx.strokeStyle = `rgba(90, 161, 240, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      const time = rotation * 6
      for (const n of nodes) {
        const depth = (n.z + 1) / 2 // 0 back .. 1 front
        const pulse = 0.5 + 0.5 * Math.sin(time + n.pulse)
        const size = 0.6 + depth * 1.7 + pulse * 0.5
        const alpha = 0.15 + depth * 0.7
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        // brighter accent for a few pulsing nodes near the front
        if (depth > 0.75 && pulse > 0.85) {
          ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`
          ctx.shadowColor = 'rgba(90, 161, 240, 0.9)'
          ctx.shadowBlur = 8
        } else {
          ctx.fillStyle = `rgba(47, 127, 224, ${alpha})`
          ctx.shadowBlur = 0
        }
        ctx.fill()
      }
      ctx.shadowBlur = 0
    }

    if (reduceMotion) {
      rotation = 0.4
      draw()
      return () => ro.disconnect()
    }

    const loop = () => {
      rotation += 0.0016
      draw()
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      role="presentation"
    />
  )
}

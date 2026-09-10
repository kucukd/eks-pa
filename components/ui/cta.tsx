import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60'

const sizes = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-brand-500/90',
  secondary:
    'border border-border bg-transparent text-foreground hover:border-primary/60 hover:text-primary',
  ghost: 'text-muted-foreground hover:text-foreground',
}

export function ctaClasses(variant: Variant = 'primary', size: keyof typeof sizes = 'md') {
  return cn(base, sizes[size], variants[variant])
}

interface CtaLinkProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: keyof typeof sizes
  className?: string
  arrow?: 'right' | 'up-right' | 'none'
  external?: boolean
  onClick?: () => void
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  arrow = 'right',
  external,
  onClick,
}: CtaLinkProps) {
  const content = (
    <>
      {children}
      {arrow === 'right' && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
      {arrow === 'up-right' && (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(ctaClasses(variant, size), className)}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(ctaClasses(variant, size), className)} onClick={onClick}>
      {content}
    </Link>
  )
}

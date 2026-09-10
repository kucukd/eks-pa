import Image from 'next/image'
import { Play } from 'lucide-react'
import { Section, SectionHeader } from '@/components/section'
import type { Locale } from '@/lib/i18n'

interface VideoBlockProps {
  locale?: Locale
  eyebrow?: string
  title: string
  description?: string
  /** Local mp4 path or embed URL. If empty, a placeholder is shown. */
  src?: string
  poster: string
  /** If true, an iframe embed is used instead of <video> (YouTube/Vimeo). */
  embed?: boolean
}

export function VideoBlock({
  locale = 'tr',
  eyebrow,
  title,
  description,
  src,
  poster,
  embed = false,
}: VideoBlockProps) {
  const en = locale === 'en'
  const eyebrowLabel = eyebrow ?? (en ? 'Overview' : 'Tanıtım')
  const comingSoon = en ? 'Video coming soon' : 'Video yakında eklenecek'
  const unsupported = en
    ? 'Your browser does not support the video tag.'
    : 'Tarayıcınız video etiketini desteklemiyor.'
  const posterAlt = en
    ? `${title} — promo video preview`
    : `${title} — tanıtım videosu önizlemesi`
  return (
    <Section className="border-t border-border bg-ink-950/40">
      <div className="container-page">
        <SectionHeader eyebrow={eyebrowLabel} title={title} />
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}

        <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-video w-full">
            {src ? (
              embed ? (
                <iframe
                  src={src}
                  title={title}
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  preload="metadata"
                  poster={poster}
                  className="absolute inset-0 size-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                  {unsupported}
                </video>
              )
            ) : (
              <>
                <Image
                  src={poster || '/placeholder.svg'}
                  alt={posterAlt}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 grid place-items-center bg-ink-950/40">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_-4px_var(--color-brand-500)]">
                      <Play className="size-7 translate-x-0.5" aria-hidden />
                    </span>
                    <span className="mono-label text-ice-100">{comingSoon}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </figure>
      </div>
    </Section>
  )
}

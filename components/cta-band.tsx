import { CtaLink } from '@/components/ui/cta'
import { Eyebrow } from '@/components/section'
import { getDictionary } from '@/lib/dictionary'
import { route, type Locale } from '@/lib/i18n'

interface CtaBandProps {
  locale: Locale
  eyebrow?: string
  title?: string
  intro?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBand({
  locale,
  eyebrow,
  title,
  intro,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  const t = getDictionary(locale).cta
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 md:px-14 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/10 blur-[90px]" />
          </div>
          <div className="relative flex max-w-3xl flex-col gap-5">
            <Eyebrow>{eyebrow ?? t.eyebrow}</Eyebrow>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              {title ?? t.title}
            </h2>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {intro ?? t.intro}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={primaryHref ?? route(locale, 'contact')} size="lg">
                {primaryLabel ?? t.primary}
              </CtaLink>
              <CtaLink href={secondaryHref ?? route(locale, 'solutions')} variant="secondary" size="lg">
                {secondaryLabel ?? t.secondary}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

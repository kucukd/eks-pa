import Link from 'next/link'
import { Section, SectionHeader } from '@/components/section'
import { CtaLink } from '@/components/ui/cta'
import { getInsights } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function InsightsPreview({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const featured = getInsights(locale).slice(0, 3)

  return (
    <Section className="border-t border-border bg-ink-950/40">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={d.insightsEyebrow} title={d.insightsTitle} intro={d.insightsIntro} />
          <CtaLink href={route(locale, 'insights')} variant="secondary" className="shrink-0">
            {d.allInsights}
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={detailHref(locale, 'insights', article.slug)}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <span className="mono-label text-primary">{article.category}</span>
                <span className="mono-label text-muted-foreground/60">{article.readingTime}</span>
              </div>
              <h3 className="text-balance font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

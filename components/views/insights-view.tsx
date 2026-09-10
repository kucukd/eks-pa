import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { getInsights } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function InsightsView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.listing
  const insights = getInsights(locale)
  const [lead, ...rest] = insights

  return (
    <>
      <PageHero
        eyebrow={t.insightsEyebrow}
        title={t.insightsTitle}
        intro={t.insightsIntro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.insights, href: route(locale, 'insights') },
        ]}
      />

      <Section>
        <div className="container-page flex flex-col gap-4">
          {/* Lead article */}
          <Link
            href={detailHref(locale, 'insights', lead.slug)}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50 md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="mono-label text-primary">{lead.category}</span>
              <span className="mono-label text-muted-foreground/60">{lead.readingTime}</span>
            </div>
            <h2 className="max-w-3xl text-balance font-display text-2xl font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-3xl">
              {lead.title}
            </h2>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {lead.excerpt}
            </p>
          </Link>

          {/* Rest */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={detailHref(locale, 'insights', article.slug)}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="mono-label text-primary">{article.category}</span>
                  <span className="mono-label text-muted-foreground/60">{article.readingTime}</span>
                </div>
                <h2 className="text-balance font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={
          locale === 'en'
            ? 'Let’s apply our insights to your own operation'
            : 'İçgörülerimizi kendi operasyonunuza uygulayalım'
        }
        secondaryLabel={d.cta.secondary}
        secondaryHref={route(locale, 'solutions')}
      />
    </>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { BreadcrumbJsonLd, JsonLd } from '@/components/seo/json-ld'
import { company } from '@/lib/company-config'
import { getInsights } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDictionary(locale)
  const insights = getInsights(locale)
  const article = insights.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = insights.filter((a) => a.slug !== article.slug).slice(0, 3)
  const crumbs = [
    { name: d.common.breadcrumbHome, href: route(locale, 'home') },
    { name: d.nav.insights, href: route(locale, 'insights') },
    { name: article.title, href: detailHref(locale, 'insights', article.slug) },
  ]

  const readingSuffix = locale === 'en' ? 'read' : 'okuma'
  const relatedTitle = locale === 'en' ? 'Related Insights' : 'İlgili İçgörüler'

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          articleSection: article.category,
          author: { '@type': 'Organization', name: company.legalName },
          publisher: { '@type': 'Organization', name: company.legalName },
        }}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={article.excerpt}
        crumbs={crumbs}
      >
        <p className="mono-label mt-6 text-muted-foreground">
          {article.readingTime} {readingSuffix}
        </p>
      </PageHero>

      <Section>
        <div className="container-page">
          <article className="mx-auto flex max-w-2xl flex-col gap-6">
            {article.body.map((p, i) => (
              <p key={i} className="text-pretty text-lg leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </article>
        </div>
      </Section>

      {/* Related */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <h2 className="mono-label mb-8 text-muted-foreground">{relatedTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={detailHref(locale, 'insights', r.slug)}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="mono-label text-primary">{r.category}</span>
                <h3 className="text-balance font-display font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  )
}

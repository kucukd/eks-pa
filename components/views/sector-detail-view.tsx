import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { DetailSections } from '@/components/detail-sections'
import { CtaBand } from '@/components/cta-band'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import { getSectors } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function SectorDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDictionary(locale)
  const t = d.listing
  const sector = getSectors(locale).find((s) => s.slug === slug)
  if (!sector) notFound()

  const crumbs = [
    { name: d.common.breadcrumbHome, href: route(locale, 'home') },
    { name: d.nav.sectors, href: route(locale, 'sectors') },
    { name: sector.name, href: detailHref(locale, 'sectors', sector.slug) },
  ]

  const heroTitle =
    locale === 'en'
      ? `Solution architecture for the ${sector.name} industry`
      : `${sector.name} sektörü için çözüm mimarisi`

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={sector.detail.faq} />

      <PageHero
        eyebrow={d.detailMeta.sectorEyebrow}
        title={heroTitle}
        intro={sector.detail.problem}
        crumbs={crumbs}
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mono-label text-primary">{t.criticalProblem}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{sector.criticalProblem}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mono-label text-primary">{t.solutionCombo}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{sector.solutionCombo}</p>
          </div>
        </div>
      </PageHero>

      <DetailSections detail={sector.detail} locale={locale} />

      <CtaBand
        locale={locale}
        title={sector.ctaLabel}
        primaryLabel={sector.ctaLabel}
        primaryHref={route(locale, 'contact')}
        secondaryLabel={locale === 'en' ? 'All Industries' : 'Tüm Sektörler'}
        secondaryHref={route(locale, 'sectors')}
      />
    </>
  )
}

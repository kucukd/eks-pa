import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { DetailSections } from '@/components/detail-sections'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { VideoBlock } from '@/components/video-block'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import { getSolutions } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function SolutionDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDictionary(locale)
  const solution = getSolutions(locale).find((s) => s.slug === slug)
  if (!solution) notFound()

  const crumbs = [
    { name: d.common.breadcrumbHome, href: route(locale, 'home') },
    { name: d.nav.solutions, href: route(locale, 'solutions') },
    { name: solution.name, href: detailHref(locale, 'solutions', solution.slug) },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={solution.detail.faq} />

      <PageHero
        eyebrow={d.detailMeta.solutionEyebrow}
        title={solution.name}
        intro={solution.detail.problem}
        crumbs={crumbs}
      >
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-xl border border-border text-primary">
            <Icon name={solution.icon} className="size-6" />
          </span>
          {solution.proofTags.map((tag) => (
            <span
              key={tag}
              className="mono-label rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </PageHero>

      <DetailSections detail={solution.detail} locale={locale} />

      {solution.slug === 'dijital-arsiv-ve-kurumsal-bilgi' && (
        <VideoBlock
          locale={locale}
          eyebrow={d.video.solutionEyebrow}
          title={d.video.solutionTitle}
          description={d.video.solutionDescription}
          poster="/images/dijital-arsiv-video-poster.png"
        />
      )}

      <CtaBand
        locale={locale}
        title={
          locale === 'en'
            ? `Let’s start a defined PoC for ${solution.name}`
            : `${solution.name} için tanımlı bir PoC başlatalım`
        }
        secondaryLabel={locale === 'en' ? 'All Solutions' : 'Tüm Çözümler'}
        secondaryHref={route(locale, 'solutions')}
      />
    </>
  )
}

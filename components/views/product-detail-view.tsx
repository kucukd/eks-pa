import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { DetailSections } from '@/components/detail-sections'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { VideoBlock } from '@/components/video-block'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/json-ld'
import { getProducts } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function ProductDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDictionary(locale)
  const product = getProducts(locale).find((p) => p.slug === slug)
  if (!product) notFound()

  const crumbs = [
    { name: d.common.breadcrumbHome, href: route(locale, 'home') },
    { name: d.nav.products, href: route(locale, 'products') },
    { name: product.name, href: detailHref(locale, 'products', product.slug) },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={product.detail.faq} />

      <PageHero
        eyebrow={product.category}
        title={product.name}
        intro={product.tagline}
        crumbs={crumbs}
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                <Icon name={product.icon} className="size-5" />
              </span>
              <p className="mono-label text-primary">{d.detailMeta.problemLabel}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.problem}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mono-label text-primary">{d.detailMeta.roleLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.role}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      <VideoBlock
        locale={locale}
        eyebrow={d.video.productEyebrow}
        title={locale === 'en' ? `${product.name} product overview` : `${product.name} ürün tanıtımı`}
        description={
          locale === 'en'
            ? `Discover how ${product.name} supports secure, measurable and sustainable operations.`
            : `${product.name} ile güvenli, ölçülebilir ve sürdürülebilir operasyonların nasıl desteklendiğini keşfedin.`
        }
        poster="/images/dijital-arsiv-video-poster.png"
      />

      <DetailSections detail={product.detail} locale={locale} />

      <CtaBand
        locale={locale}
        title={
          locale === 'en'
            ? `Let’s plan a demo and PoC for ${product.name}`
            : `${product.name} için demo ve PoC planlayalım`
        }
        primaryLabel={d.home.requestDemo}
        primaryHref={route(locale, 'contact')}
        secondaryLabel={locale === 'en' ? 'All Products' : 'Tüm Ürünler'}
        secondaryHref={route(locale, 'products')}
      />
    </>
  )
}

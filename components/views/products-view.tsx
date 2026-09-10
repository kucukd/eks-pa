import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { ArrowUpRight } from 'lucide-react'
import { getProducts } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function ProductsView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.listing
  const products = getProducts(locale)
  const categories = Array.from(new Set(products.map((p) => p.category)))

  return (
    <>
      <PageHero
        eyebrow={t.productsEyebrow}
        title={t.productsTitle}
        intro={t.productsIntro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.products, href: route(locale, 'products') },
        ]}
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="mono-label rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>
      </PageHero>

      <Section>
        <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={detailHref(locale, 'products', p.slug)}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl font-bold tracking-tight">{p.name}</h2>
                </div>
                <span className="mono-label text-primary/80">{p.category}</span>
                <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                  {p.tagline}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.proofs.slice(0, 3).map((proof) => (
                  <span
                    key={proof}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {proof}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={
          locale === 'en'
            ? 'Experience our products with your own data'
            : 'Ürünlerimizi kendi verinizle deneyimleyin'
        }
        primaryLabel={d.home.requestDemo}
        primaryHref={route(locale, 'contact')}
        secondaryLabel={d.cta.secondary}
        secondaryHref={route(locale, 'solutions')}
      />
    </>
  )
}

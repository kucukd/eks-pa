'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Section, SectionHeader } from '@/components/section'
import { CtaLink } from '@/components/ui/cta'
import { Icon } from '@/components/icon'
import { getShowcaseProducts } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'
import { track } from '@/lib/analytics'

export function ProductsShowcase({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const showcaseProducts = getShowcaseProducts(locale)
  const [active, setActive] = useState(0)
  const product = showcaseProducts[active]

  return (
    <Section className="border-y border-border bg-ink-950/40">
      <div className="container-page">
        <SectionHeader eyebrow={d.productsEyebrow} title={d.productsTitle} intro={d.productsIntro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Tab list */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label={d.productsTablist}
          >
            {showcaseProducts.map((p, i) => (
              <button
                key={p.slug}
                role="tab"
                aria-selected={active === i}
                onClick={() => {
                  setActive(i)
                  track('product_tab_select', { product: p.slug })
                }}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full',
                  active === i
                    ? 'border-primary/60 bg-card text-foreground'
                    : 'border-border bg-transparent text-muted-foreground hover:border-border hover:bg-card/50 hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg border border-border',
                    active === i ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  <Icon name={p.icon} className="size-4" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-sm font-bold tracking-tight">{p.name}</span>
                  <span className="mono-label text-muted-foreground">{p.category}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div
            role="tabpanel"
            className="flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7 md:p-9"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h3>
                <span className="mono-label rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                  {product.category}
                </span>
              </div>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {product.tagline}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-ink-950/50 p-4">
                  <p className="mono-label text-primary">{d.problem}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.problem}</p>
                </div>
                <div className="rounded-xl border border-border bg-ink-950/50 p-4">
                  <p className="mono-label text-primary">{d.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.role}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {product.proofs.map((proof) => (
                  <li
                    key={proof}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-secondary-foreground"
                  >
                    {proof}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <CtaLink href={detailHref(locale, 'products', product.slug)}>{d.reviewProduct}</CtaLink>
              <CtaLink href={route(locale, 'contact')} variant="ghost" arrow="right">
                {d.requestDemo}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

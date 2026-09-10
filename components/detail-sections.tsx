import Link from 'next/link'
import { Section, SectionHeader } from '@/components/section'
import { Check } from 'lucide-react'
import type { DetailPage } from '@/lib/content'
import { getSolutions, getProducts } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, type Locale } from '@/lib/i18n'

function resolveRelated(
  slugs: string[] | undefined,
  kind: 'solution' | 'product',
  locale: Locale,
) {
  if (!slugs) return []
  const source = kind === 'solution' ? getSolutions(locale) : getProducts(locale)
  const base = kind === 'solution' ? route(locale, 'solutions') : route(locale, 'products')
  return slugs
    .map((slug) => source.find((s) => s.slug === slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .map((s) => ({ name: s.name, href: `${base}/${s.slug}` }))
}

export function DetailSections({
  detail,
  locale,
}: {
  detail: DetailPage
  locale: Locale
}) {
  const t = getDictionary(locale).detail
  const relatedProducts = resolveRelated(detail.relatedProducts, 'product', locale)
  const relatedSolutions = resolveRelated(detail.relatedSolutions, 'solution', locale)

  return (
    <>
      {/* Why now + audience */}
      <Section className="border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow={t.whyNowEyebrow} title={t.whyNowTitle} />
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {detail.whyNow}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mono-label text-primary">{t.audience}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {detail.audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <SectionHeader eyebrow={t.howEyebrow} title={t.howTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {detail.howItWorks.map((p, i) => (
              <p
                key={i}
                className="rounded-2xl border border-border bg-card p-6 text-pretty leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Flow */}
      <Section className="border-t border-border">
        <div className="container-page">
          <SectionHeader eyebrow={t.flowEyebrow} title={t.flowTitle} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.flow.map((step, i) => (
              <li
                key={i}
                className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Features */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <SectionHeader eyebrow={t.featuresEyebrow} title={t.featuresTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detail.features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display font-bold tracking-tight">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Integration & security + use cases */}
      <Section className="border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow={t.integrationEyebrow} title={t.integrationTitle} />
            <ul className="flex flex-col gap-3">
              {detail.integrationSecurity.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow={t.useCasesEyebrow} title={t.useCasesTitle} />
            <ul className="flex flex-col gap-3">
              {detail.useCases.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PoC approach */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="mono-label text-primary">{t.pocTitle}</h2>
            <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {detail.pocApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      {detail.faq.length > 0 && (
        <Section className="border-t border-border">
          <div className="container-page">
            <SectionHeader eyebrow={t.faqEyebrow} title={t.faqTitle} />
            <dl className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {detail.faq.map((item) => (
                <div key={item.question} className="bg-card p-6">
                  <dt className="font-display font-bold tracking-tight">{item.question}</dt>
                  <dd className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      {/* Related */}
      {(relatedProducts.length > 0 || relatedSolutions.length > 0) && (
        <Section className="border-t border-border bg-ink-950/40">
          <div className="container-page flex flex-col gap-8">
            {relatedSolutions.length > 0 && (
              <RelatedRow label={t.relatedSolutions} items={relatedSolutions} />
            )}
            {relatedProducts.length > 0 && (
              <RelatedRow label={t.relatedProducts} items={relatedProducts} />
            )}
          </div>
        </Section>
      )}
    </>
  )
}

function RelatedRow({
  label,
  items,
}: {
  label: string
  items: { name: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mono-label text-muted-foreground">{label}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

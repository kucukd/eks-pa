import { PageHero } from '@/components/page-hero'
import type { Locale } from '@/lib/i18n'

export interface LegalSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export function LegalPage({
  locale = 'tr',
  eyebrow,
  title,
  intro,
  breadcrumbLabel,
  breadcrumbHref,
  sections,
  updated,
}: {
  locale?: Locale
  eyebrow: string
  title: string
  intro: string
  breadcrumbLabel: string
  breadcrumbHref: string
  sections: LegalSection[]
  updated: string
}) {
  const en = locale === 'en'
  const updatedLabel = en ? 'Last updated' : 'Son güncelleme'
  const disclaimer = en
    ? 'This text is for information purposes only and does not constitute legal advice. Final legal texts must be verified by the legal team before publication.'
    : 'Bu metin bilgilendirme amaçlıdır ve yasal danışmanlık yerine geçmez. Nihai yasal metinler yayın öncesi hukuk ekibi tarafından doğrulanmalıdır.'

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        crumbs={[
          { name: en ? 'Home' : 'Ana Sayfa', href: en ? '/en' : '/' },
          { name: breadcrumbLabel, href: breadcrumbHref },
        ]}
      />
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <p className="mb-10 text-sm text-muted-foreground">
            {updatedLabel}: {updated}
          </p>
          <div className="grid gap-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.list ? (
                  <ul className="mt-4 grid gap-2.5">
                    {s.list.map((item, k) => (
                      <li key={k} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            {disclaimer}
          </p>
        </div>
      </section>
    </>
  )
}

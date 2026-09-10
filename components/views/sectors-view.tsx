import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { ArrowUpRight } from 'lucide-react'
import { getSectors } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function SectorsView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.listing
  const sectors = getSectors(locale)

  return (
    <>
      <PageHero
        eyebrow={t.sectorsEyebrow}
        title={t.sectorsTitle}
        intro={t.sectorsIntro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.sectors, href: route(locale, 'sectors') },
        ]}
      />

      <Section>
        <div className="container-page grid gap-4 md:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={detailHref(locale, 'sectors', s.slug)}
              className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-display text-xl font-bold tracking-tight">{s.name}</h2>
                <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mono-label text-primary">{t.criticalProblem}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.criticalProblem}</p>
                </div>
                <div>
                  <p className="mono-label text-primary">{t.solutionCombo}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.solutionCombo}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} secondaryLabel={d.cta.secondary} secondaryHref={route(locale, 'solutions')} />
    </>
  )
}

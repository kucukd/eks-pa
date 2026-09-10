import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { ArrowUpRight } from 'lucide-react'
import { getSolutions } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function SolutionsView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.listing
  const solutions = getSolutions(locale)

  return (
    <>
      <PageHero
        eyebrow={t.solutionsEyebrow}
        title={t.solutionsTitle}
        intro={t.solutionsIntro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.solutions, href: route(locale, 'solutions') },
        ]}
      />

      <Section>
        <div className="container-page grid gap-4 md:grid-cols-2">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={detailHref(locale, 'solutions', s.slug)}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-xl font-bold tracking-tight">{s.name}</h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.proofTags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-label rounded-full border border-border px-2.5 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  )
}

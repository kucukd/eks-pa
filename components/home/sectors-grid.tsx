import Link from 'next/link'
import { Section, SectionHeader } from '@/components/section'
import { ArrowUpRight } from 'lucide-react'
import { getSectors } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { detailHref, type Locale } from '@/lib/i18n'

export function SectorsGrid({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const sectors = getSectors(locale)

  return (
    <Section>
      <div className="container-page">
        <SectionHeader eyebrow={d.sectorsEyebrow} title={d.sectorsTitle} intro={d.sectorsIntro} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={detailHref(locale, 'sectors', s.slug)}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-bold tracking-tight">{s.name}</h3>
                <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{s.criticalProblem}</p>
                <p className="mono-label text-primary/80">{s.solutionCombo}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

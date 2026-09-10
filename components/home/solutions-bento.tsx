import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Section, SectionHeader } from '@/components/section'
import { CtaLink } from '@/components/ui/cta'
import { Icon } from '@/components/icon'
import { ArrowUpRight } from 'lucide-react'
import { getSolutions } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, detailHref, type Locale } from '@/lib/i18n'

export function SolutionsBento({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const solutions = getSolutions(locale)
  const featured = solutions.filter((s) => s.featured)
  const rest = solutions.filter((s) => !s.featured)

  return (
    <Section>
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={d.solutionsEyebrow} title={d.solutionsTitle} intro={d.solutionsIntro} />
          <CtaLink href={route(locale, 'solutions')} variant="secondary" className="shrink-0">
            {d.allSolutions}
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={detailHref(locale, 'solutions', s.slug)}
              className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50',
                'md:col-span-1 lg:first:col-span-2 lg:first:row-span-1',
              )}
            >
              <div className="flex flex-col gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight">{s.name}</h3>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {s.proofTags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="mono-label rounded-full border border-border px-2.5 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute right-6 top-6 size-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}

          {rest.map((s) => (
            <Link
              key={s.slug}
              href={detailHref(locale, 'solutions', s.slug)}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50 hover:bg-card"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border text-primary">
                <Icon name={s.icon} className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-bold tracking-tight">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

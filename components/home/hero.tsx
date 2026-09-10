import { CtaLink } from '@/components/ui/cta'
import { company, getCompanyCopy } from '@/lib/company-config'
import { getContent } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, type Locale } from '@/lib/i18n'
import { Icon } from '@/components/icon'
import { NetworkGlobe } from '@/components/home/network-globe'

export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).hero
  const copy = getCompanyCopy(locale)
  const { actionModel } = getContent(locale)

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 lg:pt-40">
      {/* Background: grid + radial brand glow, purely decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="absolute inset-0 bg-radial-brand opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <span className="mono-label inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {d.badgeSince(company.founded, company.parentGroup)}
            </span>

            <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl lg:text-[4.1rem]">
              {d.titleLine1}
              <br />
              <span className="text-primary">{d.titleAccent}</span>
              <br />
              {d.titleLine3}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
              {copy.valueProposition}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <CtaLink href={route(locale, 'contact')} size="lg">
                {d.talkToExpert}
              </CtaLink>
              <CtaLink href={route(locale, 'solutions')} variant="secondary" size="lg" arrow="right">
                {d.exploreArchitecture}
              </CtaLink>
            </div>

            {/* Trust row */}
            <ul className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:mx-0 lg:justify-start">
              {copy.trustRow.map((item) => (
                <li key={item} className="mono-label flex items-center gap-2 text-muted-foreground">
                  <span className="size-1 rounded-full bg-primary/60" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Globe column */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              <NetworkGlobe className="absolute inset-0 h-full w-full" />
              <div aria-hidden className="pointer-events-none absolute inset-[8%] rounded-full border border-primary/10" />
              <div aria-hidden className="pointer-events-none absolute inset-[22%] rounded-full border border-primary/5" />
            </div>
          </div>
        </div>

        {/* Action model strip */}
        <div className="mt-14 md:mt-20">
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
            {actionModel.map((step, i) => (
              <li key={step.key} className="flex flex-col gap-3 bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-border text-primary">
                    <Icon name={step.icon} className="size-4" />
                  </span>
                  <span className="mono-label text-muted-foreground/60">0{i + 1}</span>
                </div>
                <h2 className="font-display text-lg font-bold tracking-tight">{step.label}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

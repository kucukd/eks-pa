import { Section, SectionHeader } from '@/components/section'
import { company } from '@/lib/company-config'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

/**
 * Partners — an infinite, mask-faded marquee of partner wordmarks.
 * The track is duplicated so the -50% translate loops seamlessly; hovering pauses it.
 */
export function PartnersMarquee({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const items = [...company.partners, ...company.partners]

  return (
    <Section className="border-y border-border bg-ink-900/40">
      <div className="container-page">
        <SectionHeader align="center" eyebrow={d.partnersEyebrow} title={d.partnersTitle} intro={d.partnersIntro} />
      </div>

      <div className="marquee-track relative mt-14 overflow-hidden mask-fade-x">
        <ul className="animate-marquee flex w-max items-center gap-4 pr-4" aria-label={d.partnersAria}>
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= company.partners.length}
              className="flex h-16 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-8"
            >
              <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ice-100/70">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

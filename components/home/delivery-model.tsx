import { Section, SectionHeader } from '@/components/section'
import { getContent } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export function DeliveryModel({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const { deliveryModel } = getContent(locale)

  return (
    <Section className="border-y border-border bg-ink-950/40">
      <div className="container-page">
        <SectionHeader eyebrow={d.deliveryEyebrow} title={d.deliveryTitle} intro={d.deliveryIntro} />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
          {deliveryModel.map((step) => (
            <li key={step.step} className="flex flex-col gap-4 bg-card p-6">
              <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
                {step.step}
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

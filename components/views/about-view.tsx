import { PageHero } from '@/components/page-hero'
import { Section, SectionHeader } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { company, getCompanyCopy } from '@/lib/company-config'
import { getContent } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const valueCards = {
  tr: [
    {
      title: 'Kanıt önce gelir',
      description:
        'Uydurma metrik ve müşteri ismi kullanmayız. Söylediğimiz her sonucu ya ölçer ya da açıkça beklenti olarak etiketleriz.',
    },
    {
      title: 'Sorumluluk sınırı nettir',
      description:
        'Kim neyi, ne zaman ve hangi başarı kriterine göre yapacak — projenin başında tanımlarız.',
    },
    {
      title: 'Sistem düşünürüz',
      description:
        'Tek bir ürünü değil, görme–doğrulama–otomasyon–koruma–dönüşüm zincirinin tamamını tasarlarız.',
    },
  ],
  en: [
    {
      title: 'Evidence comes first',
      description:
        'We do not use fabricated metrics or client names. Every result we state is either measured or clearly labeled as an expectation.',
    },
    {
      title: 'Ownership is clearly defined',
      description:
        'Who does what, by when, and against which success criteria — we define it at the start of the project.',
    },
    {
      title: 'We think in systems',
      description:
        'We design not a single product but the entire see–verify–automate–protect–transform chain.',
    },
  ],
} as const

const metricLabels = {
  tr: { founded: 'Kuruluş', group: 'Grup', support: 'Destek' },
  en: { founded: 'Founded', group: 'Group', support: 'Support' },
} as const

export function AboutView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.about
  const copy = getCompanyCopy(locale)
  const { actionModel, deliveryModel, trustBlocks } = getContent(locale)
  const values = valueCards[locale]
  const m = metricLabels[locale]
  const en = locale === 'en'

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.about, href: route(locale, 'about') },
        ]}
      >
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          <div className="flex flex-col gap-1 bg-card p-6">
            <dt className="mono-label text-muted-foreground">{m.founded}</dt>
            <dd className="font-display text-2xl font-extrabold tracking-tight text-primary">
              {company.founded}
            </dd>
          </div>
          <div className="flex flex-col gap-1 bg-card p-6">
            <dt className="mono-label text-muted-foreground">{m.group}</dt>
            <dd className="font-display text-2xl font-extrabold tracking-tight">
              {company.parentGroup}
            </dd>
          </div>
          <div className="flex flex-col gap-1 bg-card p-6">
            <dt className="mono-label text-muted-foreground">{m.support}</dt>
            <dd className="font-display text-2xl font-extrabold tracking-tight">{copy.support}</dd>
          </div>
        </dl>
      </PageHero>

      {/* Story */}
      <Section>
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <SectionHeader eyebrow={t.storyEyebrow} title={t.storyTitle} />
            <div className="flex max-w-2xl flex-col gap-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.storyParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display font-bold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Action model */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <SectionHeader
            eyebrow={en ? 'Our Approach' : 'Yaklaşımımız'}
            title={en ? 'See → Verify → Automate → Protect → Transform' : 'Gör → Doğrula → Otomatikleştir → Koru → Dönüştür'}
            intro={en ? 'We build every solution on this five-step operational model.' : 'Her çözümü bu beş adımlı operasyonel modelin üzerine kuruyoruz.'}
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {actionModel.map((step) => (
              <li
                key={step.key}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">{step.label}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Delivery model */}
      <Section className="border-t border-border">
        <div className="container-page">
          <SectionHeader eyebrow={t.modelEyebrow} title={t.modelTitle} />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
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

      {/* Trust */}
      <Section className="border-t border-border bg-ink-950/40">
        <div className="container-page">
          <SectionHeader eyebrow={t.trustEyebrow} title={t.trustTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustBlocks.map((block) => (
              <div
                key={block.title}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display font-bold tracking-tight">{block.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  )
}

import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { Check } from 'lucide-react'
import { getSuccessStories } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import { route, type Locale } from '@/lib/i18n'

const labelStyles: Record<string, string> = {
  'Ölçülen sonuç': 'border-accent/40 text-accent',
  'PoC hedefi': 'border-primary/40 text-primary',
  'Beklenen iş etkisi': 'border-warning/40 text-warning',
}

const outcomeLabelEn: Record<string, string> = {
  'Ölçülen sonuç': 'Measured result',
  'PoC hedefi': 'PoC objective',
  'Beklenen iş etkisi': 'Expected business impact',
}

export function StoriesView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.listing
  const stories = getSuccessStories(locale)
  const en = locale === 'en'

  // Localized section labels (not present in dictionary as story-specific keys).
  const problemLabel = en ? 'Problem' : 'Problem'
  const approachLabel = en ? 'Approach' : 'Yaklaşım'

  return (
    <>
      <PageHero
        eyebrow={t.storiesEyebrow}
        title={t.storiesTitle}
        intro={t.storiesIntro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.stories, href: route(locale, 'stories') },
        ]}
      />

      <Section>
        <div className="container-page grid gap-4 lg:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 md:p-8"
            >
              <div className="flex flex-col gap-3">
                <span className="mono-label text-primary">{story.sector}</span>
                <h2 className="text-balance font-display text-xl font-bold leading-snug tracking-tight">
                  {story.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="mono-label text-muted-foreground">{problemLabel}</p>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{story.problem}</p>
                </div>
                <div>
                  <p className="mono-label text-muted-foreground">{approachLabel}</p>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{story.approach}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {story.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <Check className="size-3 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl border border-border bg-ink-950/50 p-5">
                <span
                  className={`mono-label inline-flex rounded-full border px-2.5 py-1 ${
                    labelStyles[story.outcomeLabel] ?? 'border-border text-muted-foreground'
                  }`}
                >
                  {en ? outcomeLabelEn[story.outcomeLabel] ?? story.outcomeLabel : story.outcomeLabel}
                </span>
                <p className="mt-3 leading-relaxed text-foreground/90">{story.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={
          en
            ? 'Let’s define a concrete success criterion for your operation too'
            : 'Sizin operasyonunuz için de tanımlı bir başarı kriteri belirleyelim'
        }
        secondaryLabel={d.cta.secondary}
        secondaryHref={route(locale, 'solutions')}
      />
    </>
  )
}

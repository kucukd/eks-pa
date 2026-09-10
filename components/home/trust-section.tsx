import { Section, SectionHeader } from '@/components/section'
import { getContent } from '@/lib/content-store'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

export function TrustSection({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home
  const { trustBlocks, certifications } = getContent(locale)
  const verifiedCerts = certifications.filter((c) => c.verified)

  return (
    <Section>
      <div className="container-page">
        <SectionHeader eyebrow={d.trustEyebrow} title={d.trustTitle} intro={d.trustIntro} />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        {verifiedCerts.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mono-label text-muted-foreground">{d.certifications}</span>
            {verifiedCerts.map((c) => (
              <span
                key={c.code}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
              >
                {c.code}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground/70">{d.certificationsPending}</p>
        )}
      </div>
    </Section>
  )
}

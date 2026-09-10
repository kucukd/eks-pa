import Image from 'next/image'
import { getCompanyCopy } from '@/lib/company-config'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

/**
 * Value-pillar photo strip — four full-bleed image cards with a title and short
 * description, mirroring the corporate site's value band, refined into an editorial grid.
 */
export function ValueStrip({ locale }: { locale: Locale }) {
  const pillars = getCompanyCopy(locale).valuePillars
  const label = getDictionary(locale).home.valueStripLabel

  return (
    <section aria-label={label} className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className="group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden border-b border-r border-border/60 p-7 lg:min-h-[26rem]"
          >
            <Image
              src={pillar.image || '/placeholder.svg'}
              alt={pillar.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={i === 0}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10 transition-opacity duration-500 group-hover:from-ink-950 group-hover:via-ink-950/40"
            />
            <span className="mono-label mb-3 text-primary">0{i + 1}</span>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ice-100/75">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

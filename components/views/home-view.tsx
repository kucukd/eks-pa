import { Hero } from '@/components/home/hero'
import { ValueStrip } from '@/components/home/value-strip'
import { SolutionsBento } from '@/components/home/solutions-bento'
import { ProductsShowcase } from '@/components/home/products-showcase'
import { SectorsGrid } from '@/components/home/sectors-grid'
import { DeliveryModel } from '@/components/home/delivery-model'
import { PartnersMarquee } from '@/components/home/partners-marquee'
import { ProofStrip } from '@/components/home/proof-strip'
import { HistoryTimeline } from '@/components/home/history-timeline'
import { TrustSection } from '@/components/home/trust-section'
import { InsightsPreview } from '@/components/home/insights-preview'
import { CtaBand } from '@/components/cta-band'
import type { Locale } from '@/lib/i18n'

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <ProofStrip locale={locale} />
      <ValueStrip locale={locale} />
      <SolutionsBento locale={locale} />
      <ProductsShowcase locale={locale} />
      <SectorsGrid locale={locale} />
      <DeliveryModel locale={locale} />
      <HistoryTimeline locale={locale} />
      <PartnersMarquee locale={locale} />
      <TrustSection locale={locale} />
      <InsightsPreview locale={locale} />
      <CtaBand locale={locale} />
    </>
  )
}

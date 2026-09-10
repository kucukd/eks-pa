import type { Metadata } from 'next'
import { InsightsView } from '@/components/views/insights-view'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Perspectives that translate technology into business language: articles on archiving, video analytics, identity and security.',
  alternates: { canonical: '/en/insights', languages: { tr: '/icgoruler', en: '/en/insights' } },
}

export default function EnInsightsPage() {
  return <InsightsView locale="en" />
}

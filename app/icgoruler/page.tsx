import type { Metadata } from 'next'
import { InsightsView } from '@/components/views/insights-view'

export const metadata: Metadata = {
  title: 'İçgörüler',
  description:
    'Teknolojiyi iş diline çeviren, doğru soruları soran değer odaklı yazılar. Güvenlik operasyonları, kurumsal bilgi, otomasyon, dijital kimlik ve yapay zekâ üzerine içgörüler.',
  alternates: { canonical: '/icgoruler', languages: { tr: '/icgoruler', en: '/en/insights' } },
}

export default function InsightsPage() {
  return <InsightsView locale="tr" />
}

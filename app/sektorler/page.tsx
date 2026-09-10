import type { Metadata } from 'next'
import { SectorsView } from '@/components/views/sectors-view'

export const metadata: Metadata = {
  title: 'Sektörler',
  description:
    'EKSPA çözümlerinin kamu, finans, sağlık, enerji ve altyapı, telekom, üretim ve lojistik ile akıllı şehir ve kampüs sektörlerindeki uygulamaları.',
  alternates: { canonical: '/sektorler', languages: { tr: '/sektorler', en: '/en/sectors' } },
}

export default function SectorsPage() {
  return <SectorsView locale="tr" />
}

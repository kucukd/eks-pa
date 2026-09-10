import type { Metadata } from 'next'
import { SectorsView } from '@/components/views/sectors-view'

export const metadata: Metadata = {
  title: 'Sectors',
  description:
    'Solutions combined around each industry’s critical problem — public sector, finance, healthcare, defense, energy and more.',
  alternates: { canonical: '/en/sectors', languages: { tr: '/sektorler', en: '/en/sectors' } },
}

export default function EnSectorsPage() {
  return <SectorsView locale="en" />
}

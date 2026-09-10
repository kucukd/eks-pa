import type { Metadata } from 'next'
import { SolutionsView } from '@/components/views/solutions-view'

export const metadata: Metadata = {
  title: 'Çözümler',
  description:
    'EKSPA çözüm aileleri: dijital arşiv, video yönetimi, robotik süreç otomasyonu, dijital kimlik, siber güvenlik, yapay zekâ görüntü işleme ve BT altyapısı.',
  alternates: { canonical: '/cozumler', languages: { tr: '/cozumler', en: '/en/solutions' } },
}

export default function SolutionsPage() {
  return <SolutionsView locale="tr" />
}

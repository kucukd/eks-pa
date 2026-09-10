import type { Metadata } from 'next'
import { HomeView } from '@/components/views/home-view'

export const metadata: Metadata = {
  alternates: { canonical: '/', languages: { tr: '/', en: '/en' } },
}

export default function HomePage() {
  return <HomeView locale="tr" />
}

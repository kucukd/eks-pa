import type { Metadata } from 'next'
import { AboutView } from '@/components/views/about-view'
import { company } from '@/lib/company-config'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: `${company.founded}'den beri kritik işleri akıllı sistemlere dönüştüren ${company.legalName}. Kurumsal kimliğimiz, çalışma modelimiz ve güven yaklaşımımız.`,
  alternates: { canonical: '/hakkimizda', languages: { tr: '/hakkimizda', en: '/en/about' } },
}

export default function AboutPage() {
  return <AboutView locale="tr" />
}

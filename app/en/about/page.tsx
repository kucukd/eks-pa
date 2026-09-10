import type { Metadata } from 'next'
import { AboutView } from '@/components/views/about-view'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Under the E-B Group umbrella, EKSPA has delivered technology solutions for critical operations in the public and private sectors since 1987.',
  alternates: { canonical: '/en/about', languages: { tr: '/hakkimizda', en: '/en/about' } },
}

export default function EnAboutPage() {
  return <AboutView locale="en" />
}

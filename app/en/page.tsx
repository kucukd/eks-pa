import type { Metadata } from 'next'
import { HomeView } from '@/components/views/home-view'

export const metadata: Metadata = {
  title: {
    absolute: 'EKS-PA | Critical Operations, Intelligent Systems',
  },
  description:
    'EKSPA securely brings together data, identity, video and business processes — turning organizations’ critical operations into measurable, sustainable systems.',
  alternates: { canonical: '/en', languages: { tr: '/', en: '/en' } },
}

export default function EnHomePage() {
  return <HomeView locale="en" />
}

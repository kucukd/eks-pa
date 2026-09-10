import type { Metadata } from 'next'
import { SolutionsView } from '@/components/views/solutions-view'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solution families designed around operational problems: digital archiving, video management, biometric identity, process automation and cyber security.',
  alternates: { canonical: '/en/solutions', languages: { tr: '/cozumler', en: '/en/solutions' } },
}

export default function EnSolutionsPage() {
  return <SolutionsView locale="en" />
}

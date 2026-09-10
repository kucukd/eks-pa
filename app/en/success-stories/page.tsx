import type { Metadata } from 'next'
import { StoriesView } from '@/components/views/stories-view'

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Example scenarios from the field showing how EKSPA turns critical operations into measurable outcomes.',
  alternates: {
    canonical: '/en/success-stories',
    languages: { tr: '/basari-hikayeleri', en: '/en/success-stories' },
  },
}

export default function EnStoriesPage() {
  return <StoriesView locale="en" />
}

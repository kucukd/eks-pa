import type { Metadata } from 'next'
import { StoriesView } from '@/components/views/stories-view'

export const metadata: Metadata = {
  title: 'Başarı Hikâyeleri',
  description:
    'EKSPA projelerinden anonimleştirilmiş başarı hikâyeleri. Problem, yaklaşım, kapsam ve beklenen iş etkisi; uydurma metrik olmadan, dürüst biçimde.',
  alternates: {
    canonical: '/basari-hikayeleri',
    languages: { tr: '/basari-hikayeleri', en: '/en/success-stories' },
  },
}

export default function SuccessStoriesPage() {
  return <StoriesView locale="tr" />
}

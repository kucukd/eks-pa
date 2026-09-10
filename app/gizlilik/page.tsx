import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description:
    'EKSPA gizlilik politikası: kişisel verilerin toplanması, kullanımı, saklanması ve paylaşımına ilişkin ilkeler.',
  alternates: { canonical: '/gizlilik', languages: { tr: '/gizlilik', en: '/en/privacy' } },
}

export default function GizlilikPage() {
  const c = getLegalContent('privacy', 'tr')
  return (
    <LegalPage
      locale="tr"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('tr', 'privacy')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

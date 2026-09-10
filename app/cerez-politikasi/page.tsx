import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'EKSPA web sitesinde kullanılan çerez türleri ve çerez tercihlerinizi yönetme yöntemleri.',
  alternates: { canonical: '/cerez-politikasi', languages: { tr: '/cerez-politikasi', en: '/en/cookie-policy' } },
}

export default function CerezPage() {
  const c = getLegalContent('cookies', 'tr')
  return (
    <LegalPage
      locale="tr"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('tr', 'cookies')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

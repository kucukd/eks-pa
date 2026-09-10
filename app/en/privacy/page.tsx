import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'EKSPA privacy policy: how data collected through the website is processed, stored and protected.',
  alternates: { canonical: '/en/privacy', languages: { tr: '/gizlilik', en: '/en/privacy' } },
}

export default function EnPrivacyPage() {
  const c = getLegalContent('privacy', 'en')
  return (
    <LegalPage
      locale="en"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('en', 'privacy')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'The cookie types used on the EKSPA website and how to manage your cookie preferences.',
  alternates: {
    canonical: '/en/cookie-policy',
    languages: { tr: '/cerez-politikasi', en: '/en/cookie-policy' },
  },
}

export default function EnCookiePolicyPage() {
  const c = getLegalContent('cookies', 'en')
  return (
    <LegalPage
      locale="en"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('en', 'cookies')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

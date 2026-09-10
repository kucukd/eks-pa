import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Data Protection Notice',
  description:
    'EKSPA data protection notice: the personal data we process, the purposes of processing, and the rights of data subjects.',
  alternates: { canonical: '/en/data-protection', languages: { tr: '/kvkk', en: '/en/data-protection' } },
}

export default function EnDataProtectionPage() {
  const c = getLegalContent('kvkk', 'en')
  return (
    <LegalPage
      locale="en"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('en', 'kvkk')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

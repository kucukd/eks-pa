import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalContent } from '@/lib/legal-content'
import { route } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description:
    'EKSPA kişisel verilerin korunması kapsamında aydınlatma metni: işlenen veriler, işleme amaçları ve ilgili kişi hakları.',
  alternates: { canonical: '/kvkk', languages: { tr: '/kvkk', en: '/en/data-protection' } },
}

export default function KvkkPage() {
  const c = getLegalContent('kvkk', 'tr')
  return (
    <LegalPage
      locale="tr"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      breadcrumbLabel={c.breadcrumbLabel}
      breadcrumbHref={route('tr', 'kvkk')}
      updated={c.updated}
      sections={c.sections}
    />
  )
}

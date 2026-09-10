import type { Metadata } from 'next'
import { ContactView } from '@/components/views/contact-view'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'EKSPA ile iletişime geçin. Çözüm danışmanlığı, ürün demoları ve teknik destek talepleriniz için ekibimize ulaşın.',
  alternates: { canonical: '/iletisim', languages: { tr: '/iletisim', en: '/en/contact' } },
}

export default function ContactPage() {
  return <ContactView locale="tr" />
}

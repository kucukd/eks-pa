import type { Metadata } from 'next'
import { ContactView } from '@/components/views/contact-view'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with EKSPA. Tell us about your critical operation and we will get back to you.',
  alternates: { canonical: '/en/contact', languages: { tr: '/iletisim', en: '/en/contact' } },
}

export default function EnContactPage() {
  return <ContactView locale="en" />
}

import type { Metadata } from 'next'
import { ProductsView } from '@/components/views/products-view'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'The deployable, field-proven counterpart of our solutions — platforms for archiving, video, identity, automation and security.',
  alternates: { canonical: '/en/products', languages: { tr: '/urunler', en: '/en/products' } },
}

export default function EnProductsPage() {
  return <ProductsView locale="en" />
}

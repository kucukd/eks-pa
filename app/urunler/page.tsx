import type { Metadata } from 'next'
import { ProductsView } from '@/components/views/products-view'

export const metadata: Metadata = {
  title: 'Ürünler',
  description:
    'EKSPA ürün ailesi: DASBase dijital arşiv, video yönetim sistemleri, VooDoo RPA, dijital kimlik ve doğrulama platformları, yapay zekâ görüntü işleme ve altyapı çözümleri.',
  alternates: { canonical: '/urunler', languages: { tr: '/urunler', en: '/en/products' } },
}

export default function ProductsPage() {
  return <ProductsView locale="tr" />
}

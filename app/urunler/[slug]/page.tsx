import type { Metadata } from 'next'
import { ProductDetailView } from '@/components/views/product-detail-view'
import { products } from '@/lib/content'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} — ${product.category}`,
    description: product.tagline,
    alternates: {
      canonical: `/urunler/${product.slug}`,
      languages: {
        tr: `/urunler/${product.slug}`,
        en: `/en/products/${product.slug}`,
      },
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProductDetailView locale="tr" slug={slug} />
}

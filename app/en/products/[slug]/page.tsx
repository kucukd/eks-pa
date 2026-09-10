import type { Metadata } from 'next'
import { ProductDetailView } from '@/components/views/product-detail-view'
import { getProducts } from '@/lib/content-store'

export function generateStaticParams() {
  return getProducts('en').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProducts('en').find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.summary,
    alternates: {
      canonical: `/en/products/${product.slug}`,
      languages: {
        tr: `/urunler/${product.slug}`,
        en: `/en/products/${product.slug}`,
      },
    },
  }
}

export default async function EnProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProductDetailView locale="en" slug={slug} />
}

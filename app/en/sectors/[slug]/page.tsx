import type { Metadata } from 'next'
import { SectorDetailView } from '@/components/views/sector-detail-view'
import { getSectors } from '@/lib/content-store'

export function generateStaticParams() {
  return getSectors('en').map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const sector = getSectors('en').find((s) => s.slug === slug)
  if (!sector) return {}
  return {
    title: sector.name,
    description: sector.summary,
    alternates: {
      canonical: `/en/sectors/${sector.slug}`,
      languages: {
        tr: `/sektorler/${sector.slug}`,
        en: `/en/sectors/${sector.slug}`,
      },
    },
  }
}

export default async function EnSectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <SectorDetailView locale="en" slug={slug} />
}

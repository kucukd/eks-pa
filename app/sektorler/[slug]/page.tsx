import type { Metadata } from 'next'
import { SectorDetailView } from '@/components/views/sector-detail-view'
import { sectors } from '@/lib/content'

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const sector = sectors.find((s) => s.slug === slug)
  if (!sector) return {}
  return {
    title: `${sector.name} Sektörü`,
    description: `${sector.criticalProblem} — ${sector.solutionCombo}. EKSPA'nın ${sector.name.toLowerCase()} sektörüne yönelik çözüm kombinasyonu.`,
    alternates: {
      canonical: `/sektorler/${sector.slug}`,
      languages: {
        tr: `/sektorler/${sector.slug}`,
        en: `/en/sectors/${sector.slug}`,
      },
    },
  }
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <SectorDetailView locale="tr" slug={slug} />
}

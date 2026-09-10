import type { Metadata } from 'next'
import { SolutionDetailView } from '@/components/views/solution-detail-view'
import { solutions } from '@/lib/content'

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions.find((s) => s.slug === slug)
  if (!solution) return {}
  return {
    title: solution.name,
    description: solution.summary,
    alternates: {
      canonical: `/cozumler/${solution.slug}`,
      languages: {
        tr: `/cozumler/${solution.slug}`,
        en: `/en/solutions/${solution.slug}`,
      },
    },
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <SolutionDetailView locale="tr" slug={slug} />
}

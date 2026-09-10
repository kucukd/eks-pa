import type { Metadata } from 'next'
import { SolutionDetailView } from '@/components/views/solution-detail-view'
import { getSolutions } from '@/lib/content-store'

export function generateStaticParams() {
  return getSolutions('en').map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutions('en').find((s) => s.slug === slug)
  if (!solution) return {}
  return {
    title: solution.name,
    description: solution.summary,
    alternates: {
      canonical: `/en/solutions/${solution.slug}`,
      languages: {
        tr: `/cozumler/${solution.slug}`,
        en: `/en/solutions/${solution.slug}`,
      },
    },
  }
}

export default async function EnSolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <SolutionDetailView locale="en" slug={slug} />
}

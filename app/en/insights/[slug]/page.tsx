import type { Metadata } from 'next'
import { ArticleView } from '@/components/views/article-view'
import { getInsights } from '@/lib/content-store'

export function generateStaticParams() {
  return getInsights('en').map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getInsights('en').find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/en/insights/${article.slug}`,
      languages: {
        tr: `/icgoruler/${article.slug}`,
        en: `/en/insights/${article.slug}`,
      },
    },
    openGraph: { type: 'article', title: article.title, description: article.excerpt },
  }
}

export default async function EnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticleView locale="en" slug={slug} />
}

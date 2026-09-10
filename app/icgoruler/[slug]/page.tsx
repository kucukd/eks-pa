import type { Metadata } from 'next'
import { ArticleView } from '@/components/views/article-view'
import { insights } from '@/lib/content'

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = insights.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/icgoruler/${article.slug}`,
      languages: {
        tr: `/icgoruler/${article.slug}`,
        en: `/en/insights/${article.slug}`,
      },
    },
    openGraph: { type: 'article', title: article.title, description: article.excerpt },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticleView locale="tr" slug={slug} />
}

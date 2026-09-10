import type { MetadataRoute } from 'next'
import { company } from '@/lib/company-config'
import { getSolutions, getProducts, getSectors, getInsights } from '@/lib/content-store'
import { route, type RouteKey } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.baseUrl
  const now = new Date()

  /** Build a TR + EN pair with hreflang alternates for a route key. */
  const pair = (
    key: RouteKey,
    opts: { slug?: string; changeFrequency: 'monthly' | 'yearly'; priority: number },
  ): MetadataRoute.Sitemap => {
    const suffix = opts.slug ? `/${opts.slug}` : ''
    const trPath = `${route('tr', key)}${suffix}`
    const enPath = `${route('en', key)}${suffix}`
    const languages = { tr: `${base}${trPath}`, en: `${base}${enPath}` }
    return (['tr', 'en'] as const).map((locale) => ({
      url: locale === 'tr' ? languages.tr : languages.en,
      lastModified: now,
      changeFrequency: opts.changeFrequency,
      priority: opts.priority,
      alternates: { languages },
    }))
  }

  // Home (special-cased: route('*', 'home') === '' or '/en')
  const home: MetadataRoute.Sitemap = (['tr', 'en'] as const).map((locale) => ({
    url: locale === 'tr' ? base : `${base}/en`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages: { tr: base, en: `${base}/en` } },
  }))

  const staticKeys: { key: RouteKey; changeFrequency: 'monthly'; priority: number }[] = [
    { key: 'solutions', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'products', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'sectors', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'stories', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'insights', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'about', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'contact', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'kvkk', changeFrequency: 'monthly', priority: 0.4 },
    { key: 'privacy', changeFrequency: 'monthly', priority: 0.4 },
    { key: 'cookies', changeFrequency: 'monthly', priority: 0.4 },
  ]

  const staticRoutes = staticKeys.flatMap((s) => pair(s.key, s))

  // Detail routes share slugs across locales.
  const solutionRoutes = getSolutions('tr').flatMap((s) =>
    pair('solutions', { slug: s.slug, changeFrequency: 'monthly', priority: 0.7 }),
  )
  const productRoutes = getProducts('tr').flatMap((p) =>
    pair('products', { slug: p.slug, changeFrequency: 'monthly', priority: 0.7 }),
  )
  const sectorRoutes = getSectors('tr').flatMap((s) =>
    pair('sectors', { slug: s.slug, changeFrequency: 'monthly', priority: 0.7 }),
  )
  const insightRoutes = getInsights('tr').flatMap((i) =>
    pair('insights', { slug: i.slug, changeFrequency: 'yearly', priority: 0.6 }),
  )

  return [...home, ...staticRoutes, ...solutionRoutes, ...productRoutes, ...sectorRoutes, ...insightRoutes]
}

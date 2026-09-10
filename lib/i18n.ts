export type Locale = 'tr' | 'en'

export const locales: Locale[] = ['tr', 'en']
export const defaultLocale: Locale = 'tr'

/** Route keys shared across locales. */
export type RouteKey =
  | 'home'
  | 'solutions'
  | 'products'
  | 'sectors'
  | 'stories'
  | 'insights'
  | 'about'
  | 'contact'
  | 'kvkk'
  | 'privacy'
  | 'cookies'

/** Locale-specific top-level route segments. Detail item slugs are stable across locales. */
export const routes: Record<Locale, Record<RouteKey, string>> = {
  tr: {
    home: '/',
    solutions: '/cozumler',
    products: '/urunler',
    sectors: '/sektorler',
    stories: '/basari-hikayeleri',
    insights: '/icgoruler',
    about: '/hakkimizda',
    contact: '/iletisim',
    kvkk: '/kvkk',
    privacy: '/gizlilik',
    cookies: '/cerez-politikasi',
  },
  en: {
    home: '/en',
    solutions: '/en/solutions',
    products: '/en/products',
    sectors: '/en/sectors',
    stories: '/en/success-stories',
    insights: '/en/insights',
    about: '/en/about',
    contact: '/en/contact',
    kvkk: '/en/data-protection',
    privacy: '/en/privacy',
    cookies: '/en/cookie-policy',
  },
}

/** Build a route href for a locale. */
export function route(locale: Locale, key: RouteKey): string {
  return routes[locale][key]
}

/** Build a detail href, e.g. detailHref('en','solutions','dasbase'). */
export function detailHref(locale: Locale, key: RouteKey, slug: string): string {
  const base = routes[locale][key]
  return `${base === '/' ? '' : base}/${slug}`
}

/** Detect the active locale from a pathname. */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr'
}

/**
 * Map the current pathname to its equivalent in the target locale.
 * Preserves detail slugs (which are identical across locales).
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const current: Locale = getLocaleFromPathname(pathname)
  if (current === target) return pathname

  // Normalize to a path without the /en prefix and its leading route segment.
  const currentRoutes = routes[current]
  const keys = Object.keys(currentRoutes) as RouteKey[]

  // Find the most specific matching route key (longest match first).
  const sorted = keys
    .filter((k) => k !== 'home')
    .sort((a, b) => currentRoutes[b].length - currentRoutes[a].length)

  for (const key of sorted) {
    const seg = currentRoutes[key]
    if (pathname === seg || pathname.startsWith(seg + '/')) {
      const rest = pathname.slice(seg.length) // '' or '/slug'
      const targetBase = routes[target][key]
      return `${targetBase === '/' ? '' : targetBase}${rest}` || '/'
    }
  }

  // Home or unknown → target home.
  return routes[target].home
}

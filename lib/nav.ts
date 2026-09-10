import type { Locale } from '@/lib/i18n'
import { route, detailHref } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionary'
import { getSolutions, getProducts, getSectors } from '@/lib/content-store'

export type MegaKey = 'solutions' | 'products' | 'sectors'

export interface NavItem {
  label: string
  href: string
  mega?: MegaKey
}

/** Primary top navigation for a locale. */
export function getPrimaryNav(locale: Locale): NavItem[] {
  const d = getDictionary(locale).nav
  return [
    { label: d.solutions, href: route(locale, 'solutions'), mega: 'solutions' },
    { label: d.products, href: route(locale, 'products'), mega: 'products' },
    { label: d.sectors, href: route(locale, 'sectors'), mega: 'sectors' },
    { label: d.stories, href: route(locale, 'stories') },
    { label: d.insights, href: route(locale, 'insights') },
    { label: d.about, href: route(locale, 'about') },
    { label: d.contact, href: route(locale, 'contact') },
  ]
}

/** Mega-menu panels for a locale. */
export function getMegaMenu(locale: Locale) {
  return {
    solutions: getSolutions(locale).map((s) => ({
      label: s.name,
      href: detailHref(locale, 'solutions', s.slug),
      icon: s.icon,
    })),
    products: getProducts(locale).map((p) => ({
      label: p.name,
      href: detailHref(locale, 'products', p.slug),
      category: p.category,
    })),
    sectors: getSectors(locale).map((s) => ({
      label: s.name,
      href: detailHref(locale, 'sectors', s.slug),
    })),
  }
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

/** Footer navigation columns for a locale. */
export function getFooterNav(locale: Locale): FooterColumn[] {
  const f = getDictionary(locale).footer
  return [
    {
      title: f.groupSolutions,
      links: getSolutions(locale)
        .slice(0, 6)
        .map((s) => ({ label: s.name, href: detailHref(locale, 'solutions', s.slug) })),
    },
    {
      title: f.groupProducts,
      links: getProducts(locale)
        .slice(0, 6)
        .map((p) => ({ label: p.name, href: detailHref(locale, 'products', p.slug) })),
    },
    {
      title: f.groupCorporate,
      links: [
        { label: getDictionary(locale).nav.about, href: route(locale, 'about') },
        { label: getDictionary(locale).nav.sectors, href: route(locale, 'sectors') },
        { label: getDictionary(locale).nav.stories, href: route(locale, 'stories') },
        { label: getDictionary(locale).nav.insights, href: route(locale, 'insights') },
        { label: getDictionary(locale).nav.contact, href: route(locale, 'contact') },
      ],
    },
    {
      title: f.groupLegal,
      links: [
        { label: locale === 'en' ? 'Data Protection Notice' : 'KVKK Aydınlatma Metni', href: route(locale, 'kvkk') },
        { label: locale === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası', href: route(locale, 'privacy') },
        { label: locale === 'en' ? 'Cookie Policy' : 'Çerez Politikası', href: route(locale, 'cookies') },
      ],
    },
  ]
}

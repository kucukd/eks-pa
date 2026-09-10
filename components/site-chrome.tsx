'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getLocaleFromPathname } from '@/lib/i18n'

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const skipToContent = locale === 'en' ? 'Skip to content' : 'İçeriğe geç'

  // Keep <html lang> in sync with the active locale for accessibility/SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {skipToContent}
      </a>
      <SiteHeader locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
    </>
  )
}

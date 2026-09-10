'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { CtaLink } from '@/components/ui/cta'
import { Icon } from '@/components/icon'
import { getPrimaryNav, getMegaMenu, type NavItem, type MegaKey } from '@/lib/nav'
import { getDictionary } from '@/lib/dictionary'
import { route, switchLocalePath, type Locale } from '@/lib/i18n'

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState<MegaKey | null>(null)
  const pathname = usePathname()

  const d = getDictionary(locale)
  const primaryNav = getPrimaryNav(locale)
  const megaMenu = getMegaMenu(locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMega(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || openMega
          ? 'border-b border-border bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-18">
        <Logo href={route(locale, 'home')} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label={d.header.mainMenu}>
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            if (item.mega) {
              return (
                <div key={item.href} onMouseEnter={() => setOpenMega(item.mega!)}>
                  <Link
                    href={item.href}
                    aria-expanded={openMega === item.mega}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                      active || openMega === item.mega
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200',
                        openMega === item.mega && 'rotate-180',
                      )}
                    />
                  </Link>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} pathname={pathname} label={d.header.language} />
          <button
            type="button"
            className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:inline-flex"
            aria-label={d.header.search}
          >
            <Search className="size-4" />
          </button>
          <CtaLink href={route(locale, 'contact')} size="md" arrow="none" className="hidden sm:inline-flex">
            {d.header.talkToExpert}
          </CtaLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label={mobileOpen ? d.header.closeMenu : d.header.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {openMega && (
        <div className="hidden border-t border-border bg-ink-950/95 backdrop-blur-xl lg:block">
          <div className="container-page py-8">
            {openMega === 'solutions' && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {megaMenu.solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary/60"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border text-primary">
                      <Icon name={s.icon} className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
            {openMega === 'products' && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 xl:grid-cols-3">
                {megaMenu.products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group flex flex-col gap-0.5 rounded-xl px-3 py-3 transition-colors hover:bg-secondary/60"
                  >
                    <span className="text-sm font-medium text-foreground">{p.label}</span>
                    <span className="mono-label text-muted-foreground">{p.category}</span>
                  </Link>
                ))}
              </div>
            )}
            {openMega === 'sectors' && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 xl:grid-cols-4">
                {megaMenu.sectors.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-ink-950 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-6" aria-label={d.header.mobileMenu}>
            {primaryNav.map((item) => (
              <MobileNavItem key={item.href} item={item} megaMenu={megaMenu} />
            ))}
            <div className="mt-4 flex items-center gap-2 px-3">
              <LanguageSwitcher locale={locale} pathname={pathname} label={d.header.language} alwaysVisible />
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
              <CtaLink href={route(locale, 'contact')} size="lg" arrow="none" className="w-full">
                {d.header.talkToExpert}
              </CtaLink>
              <CtaLink href={route(locale, 'solutions')} variant="secondary" size="lg" className="w-full">
                {d.header.exploreSolutions}
              </CtaLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function LanguageSwitcher({
  locale,
  pathname,
  label,
  alwaysVisible = false,
}: {
  locale: Locale
  pathname: string
  label: string
  alwaysVisible?: boolean
}) {
  return (
    <div
      className={cn(
        'mono-label items-center gap-1 rounded-full border border-border px-2.5 py-1 text-muted-foreground',
        alwaysVisible ? 'flex' : 'hidden md:flex',
      )}
      aria-label={label}
    >
      <Link
        href={switchLocalePath(pathname, 'tr')}
        aria-current={locale === 'tr'}
        className={cn('transition-colors hover:text-foreground', locale === 'tr' ? 'text-foreground' : 'opacity-60')}
      >
        TR
      </Link>
      <span className="opacity-40" aria-hidden>
        /
      </span>
      <Link
        href={switchLocalePath(pathname, 'en')}
        aria-current={locale === 'en'}
        className={cn('transition-colors hover:text-foreground', locale === 'en' ? 'text-foreground' : 'opacity-60')}
      >
        EN
      </Link>
    </div>
  )
}

function MobileNavItem({
  item,
  megaMenu,
}: {
  item: NavItem
  megaMenu: ReturnType<typeof getMegaMenu>
}) {
  const [open, setOpen] = useState(false)
  const sub = item.mega ? megaMenu[item.mega] : null

  if (!sub) {
    return (
      <Link
        href={item.href}
        className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-border/60">
      <div className="flex items-center justify-between">
        <Link href={item.href} className="flex-1 px-3 py-3 text-base font-medium text-foreground">
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex size-10 items-center justify-center text-muted-foreground"
        >
          <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} />
        </button>
      </div>
      {open && (
        <ul className="flex flex-col gap-0.5 pb-2 pl-3">
          {sub.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

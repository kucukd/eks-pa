import Link from 'next/link'
import { MapPin, Phone, Mail, Headphones } from 'lucide-react'
import { Logo } from '@/components/logo'
import { getFooterNav } from '@/lib/nav'
import { company, showValue, getCompanyCopy } from '@/lib/company-config'
import { getDictionary } from '@/lib/dictionary'
import { route, type Locale } from '@/lib/i18n'

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear()
  const d = getDictionary(locale)
  const copy = getCompanyCopy(locale)
  const footerNav = getFooterNav(locale)

  const address = showValue(company.address)
  const phone = showValue(company.phones[0])
  const callCenter = showValue(company.callCenter)
  const email = showValue(company.email)

  const socials: { label: string; href?: string }[] = [
    { label: 'LinkedIn', href: showValue(company.social.linkedin) },
    { label: 'Facebook', href: showValue(company.social.facebook) },
    { label: 'Twitter', href: showValue(company.social.twitter) },
  ]

  return (
    <footer className="border-t border-border bg-ink-950">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_2.4fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Logo href={route(locale, 'home')} />
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {copy.valueProposition}
            </p>
            <p className="mono-label text-muted-foreground">
              {d.footer.since(company.founded, company.parentGroup)}
            </p>
            <div className="flex flex-wrap gap-2">
              {socials
                .filter((s) => s.href)
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="mono-label text-foreground">{d.footer.contact}</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              {address && (
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="leading-relaxed">{address}</span>
                </li>
              )}
              {phone && (
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="transition-colors hover:text-foreground">
                    {phone}
                  </a>
                </li>
              )}
              {callCenter && (
                <li className="flex items-center gap-3">
                  <Headphones className="size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    {d.contact.callCenter}{' '}
                    <a
                      href={`tel:${callCenter.replace(/\s/g, '')}`}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {callCenter}
                    </a>
                  </span>
                </li>
              )}
              {email && (
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                  <a href={`mailto:${email}`} className="transition-colors hover:text-foreground">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
                <h3 className="mono-label text-foreground">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              &copy; {year} {company.legalName} {d.footer.rights}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {d.footer.mersis}: {showValue(company.registry.mersis)} &middot; {d.footer.tradeRegistry}:{' '}
              {showValue(company.registry.tradeRegistry)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href={route(locale, 'kvkk')} className="transition-colors hover:text-foreground">
              {locale === 'en' ? 'Data Protection' : 'KVKK'}
            </Link>
            <Link href={route(locale, 'privacy')} className="transition-colors hover:text-foreground">
              {locale === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
            </Link>
            <Link href={route(locale, 'cookies')} className="transition-colors hover:text-foreground">
              {locale === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

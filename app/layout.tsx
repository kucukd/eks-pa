import type { Metadata, Viewport } from 'next'
import { Manrope, Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { company } from '@/lib/company-config'
import { SiteChrome } from '@/components/site-chrome'
import { OrganizationJsonLd } from '@/components/seo/json-ld'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(company.baseUrl),
  title: {
    default: `${company.name} — Kritik İşler. Akıllı Sistemler.`,
    template: `%s — ${company.name}`,
  },
  description: company.valueProposition,
  generator: 'v0.app',
  applicationName: company.name,
  keywords: [
    'sistem entegrasyonu',
    'dijital arşiv',
    'video yönetim sistemi',
    'RPA',
    'biyometrik kimlik',
    'siber güvenlik',
    'yapay zeka görüntü işleme',
    'kurumsal dijital dönüşüm',
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: company.name,
    title: `${company.name} — Kritik İşler. Akıllı Sistemler.`,
    description: company.valueProposition,
    url: company.baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} — Kritik İşler. Akıllı Sistemler.`,
    description: company.valueProposition,
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#04101d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="min-h-screen antialiased">
        <OrganizationJsonLd />
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

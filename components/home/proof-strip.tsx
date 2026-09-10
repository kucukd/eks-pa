import { ArrowUpRight, ShieldCheck, UsersRound, Wrench, Zap } from 'lucide-react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/section'
import type { Locale } from '@/lib/i18n'

const stats = {
  tr: [
    { value: '1987', label: 'Kuruluş yılı', icon: ShieldCheck },
    { value: '7/24', label: 'Teknik destek', icon: Zap },
    { value: '81', label: 'İlde servis ağı', icon: Wrench },
    { value: '4', label: 'Kritik teknoloji alanı', icon: UsersRound },
  ],
  en: [
    { value: '1987', label: 'Founded', icon: ShieldCheck },
    { value: '24/7', label: 'Technical support', icon: Zap },
    { value: '81', label: 'Provinces covered', icon: Wrench },
    { value: '4', label: 'Critical technology domains', icon: UsersRound },
  ],
} as const

export function ProofStrip({ locale }: { locale: Locale }) {
  const en = locale === 'en'
  return (
    <Section className="border-y border-border/70 bg-card/35 py-0">
      <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-sm">
          <p className="mono-label text-primary">{en ? 'THE EKS-PA STANDARD' : 'EKS-PA STANDARDI'}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {en
              ? 'Enterprise technology delivery with the operational discipline critical systems demand.'
              : 'Kritik sistemlerin ihtiyaç duyduğu operasyon disipliniyle kurumsal teknoloji teslimi.'}
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {stats[locale].map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 border-l border-border pl-4">
              <Icon className="size-4 text-primary" aria-hidden />
              <div>
                <p className="font-display text-2xl font-bold tracking-tight text-foreground">{value}</p>
                <p className="text-xs leading-5 text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={locale === 'en' ? '/en/about' : '/hakkimizda'} className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
          {en ? 'Our story' : 'Hikâyemiz'}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </Section>
  )
}

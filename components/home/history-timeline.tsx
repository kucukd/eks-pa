import { Section, SectionHeader } from '@/components/section'
import type { Locale } from '@/lib/i18n'

const milestones = {
  tr: [
    ['1987', 'Ankara’da kuruluş', 'EKS-PA, kritik teknoloji sistemleri için yola çıktı.'],
    ['2000s', 'Kurumsal entegrasyon', 'Kamu ve özel sektörde güvenli altyapı projeleriyle ölçeklendi.'],
    ['2010s', 'Dijital dönüşüm', 'Veri, görüntü, kimlik ve süreç otomasyonunu tek uzmanlık çatısında birleştirdi.'],
    ['Bugün', 'Kritik işler için akıllı sistemler', 'Türkiye çapında sürdürülebilir, ölçülebilir ve güvenli operasyonlar kuruyor.'],
  ],
  en: [
    ['1987', 'Founded in Ankara', 'EKS-PA began its journey building systems for critical technology operations.'],
    ['2000s', 'Enterprise integration', 'Scaled through secure infrastructure projects across public and private sectors.'],
    ['2010s', 'Digital transformation', 'Unified data, imaging, identity and process automation under one expert team.'],
    ['Today', 'Intelligent systems for critical work', 'Building sustainable, measurable and secure operations across Türkiye.'],
  ],
} as const

export function HistoryTimeline({ locale }: { locale: Locale }) {
  const en = locale === 'en'
  return (
    <Section className="bg-card/30">
      <div className="container-page">
        <SectionHeader
          eyebrow={en ? 'BUILT OVER TIME' : 'ZAMANLA İNŞA EDİLDİ'}
          title={en ? 'Experience that compounds.' : 'Biriken deneyim, büyüyen güven.'}
          intro={en ? 'Four decades of learning from the systems that cannot fail.' : 'Aksayamayan sistemlerden öğrenilen kırk yıla yaklaşan deneyim.'}
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {milestones[locale].map(([year, title, copy]) => (
            <article key={year} className="bg-background p-6 transition-colors hover:bg-card">
              <p className="font-mono text-sm font-semibold text-primary">{year}</p>
              <h3 className="mt-10 font-display text-lg font-bold tracking-tight text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import { company, getCompanyCopy, showValue } from '@/lib/company-config'
import { getDictionary } from '@/lib/dictionary'
import { route } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

export function ContactView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale)
  const t = d.contact
  const copy = getCompanyCopy(locale)
  const email = showValue(company.email)
  const en = locale === 'en'

  const officesLabel = en ? 'Offices' : 'Ofisler'
  const networkLabel = en ? 'Service network' : 'Hizmet ağı'
  const supportLabel = en ? 'Support' : 'Destek'
  const storyLine = en
    ? `${company.legalName} has been turning critical public and private-sector operations into secure systems since ${company.founded}.`
    : `${company.legalName}, ${company.founded} yılından bu yana kamu ve özel sektörde kritik operasyonları güvenli sistemlere dönüştürüyor.`
  const channelsNote = en
    ? 'Our phone numbers and official channels are being updated. Please use the form for the right routing; your request will be forwarded to the relevant team.'
    : 'Telefon numaralarımız ve resmi kanallarımız güncelleme sürecindedir. Doğru yönlendirme için lütfen formu kullanın; talebiniz ilgili ekibe iletilir.'
  const formIntro = en
    ? 'Fill in the form below and our team will get back to you shortly.'
    : 'Aşağıdaki formu doldurun; ekibimiz en kısa sürede dönüş yapsın.'

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
        crumbs={[
          { name: d.common.breadcrumbHome, href: route(locale, 'home') },
          { name: d.nav.contact, href: route(locale, 'contact') },
        ]}
      />

      <Section className="border-t border-border">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: coordinates */}
          <div className="lg:pr-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">{t.infoTitle}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{storyLine}</p>

            <dl className="mt-8 grid gap-6">
              <div>
                <dt className="mono-label text-muted-foreground">{officesLabel}</dt>
                <dd className="mt-1.5 text-foreground">
                  {company.offices.map((o) => `${o.label} — ${o.city}`).join(' · ')}
                </dd>
              </div>

              <div>
                <dt className="mono-label text-muted-foreground">{networkLabel}</dt>
                <dd className="mt-1.5 text-foreground">{copy.serviceProvinces}</dd>
              </div>

              <div>
                <dt className="mono-label text-muted-foreground">{t.email}</dt>
                <dd className="mt-1.5 text-foreground">
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="text-primary underline underline-offset-2 hover:text-primary/80"
                    >
                      {email}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{t.contactMissing}</span>
                  )}
                </dd>
              </div>

              <div>
                <dt className="mono-label text-muted-foreground">{supportLabel}</dt>
                <dd className="mt-1.5 text-foreground">{copy.support}</dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{channelsNote}</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">{t.formTitle}</h2>
            <p className="mt-2 mb-7 leading-relaxed text-muted-foreground">{formIntro}</p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </Section>
    </>
  )
}

import type { Locale } from '@/lib/i18n'
import type { LegalSection } from '@/components/legal-page'
import { company } from '@/lib/company-config'

export type LegalDoc = 'kvkk' | 'privacy' | 'cookies'

interface LegalContent {
  eyebrow: string
  title: string
  intro: string
  breadcrumbLabel: string
  updated: string
  sections: LegalSection[]
}

const eyebrow = { tr: 'Yasal', en: 'Legal' } as const
const updated = { tr: 'Yayın öncesi teyit edilecek', en: 'To be confirmed before publication' } as const

const kvkk: Record<Locale, LegalContent> = {
  tr: {
    eyebrow: eyebrow.tr,
    title: 'KVKK Aydınlatma Metni',
    intro:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi nasıl işlediğimizi açıklıyoruz.',
    breadcrumbLabel: 'KVKK',
    updated: updated.tr,
    sections: [
      {
        heading: 'Veri Sorumlusu',
        paragraphs: [
          `${company.legalName}, aşağıda belirtilen kişisel verileri veri sorumlusu sıfatıyla işlemektedir. İşleme faaliyetleri hukuka ve dürüstlük kurallarına uygun, belirli ve meşru amaçlarla sınırlı olarak yürütülür.`,
        ],
      },
      {
        heading: 'İşlenen Kişisel Veriler',
        list: [
          'Kimlik ve iletişim verileri (ad soyad, e-posta, telefon, şirket)',
          'Talep içeriği ve yazışma kayıtları',
          'Web sitesi kullanımına ilişkin teknik veriler (çerezler aracılığıyla)',
        ],
      },
      {
        heading: 'İşleme Amaçları',
        list: [
          'İletişim taleplerinin yanıtlanması ve yönlendirilmesi',
          'Sözleşme öncesi ve sözleşmesel süreçlerin yürütülmesi',
          'Hizmet kalitesinin ölçülmesi ve iyileştirilmesi',
          'Yasal yükümlülüklerin yerine getirilmesi',
        ],
      },
      {
        heading: 'Hukuki Sebepler',
        paragraphs: [
          'Kişisel verileriniz; bir sözleşmenin kurulması veya ifası, hukuki yükümlülüğün yerine getirilmesi ve veri sorumlusunun meşru menfaati hukuki sebeplerine dayanarak işlenir.',
        ],
      },
      {
        heading: 'İlgili Kişinin Hakları',
        paragraphs: [
          'KVKK’nın 11. maddesi uyarınca; verilerinize erişme, düzeltilmesini veya silinmesini isteme, işlemeye itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.',
        ],
        list: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
          'İşlenmişse buna ilişkin bilgi talep etme',
          'Eksik veya yanlış işlenen verilerin düzeltilmesini isteme',
          'Kanunda öngörülen şartlarda silinmesini/yok edilmesini isteme',
        ],
      },
      {
        heading: 'Başvuru',
        paragraphs: [
          'Haklarınıza ilişkin taleplerinizi iletişim sayfamızdaki form aracılığıyla iletebilirsiniz. Başvurularınız en geç 30 gün içinde sonuçlandırılır.',
        ],
      },
    ],
  },
  en: {
    eyebrow: eyebrow.en,
    title: 'Personal Data Protection (KVKK) Notice',
    intro:
      'We explain how we process your personal data as a data controller under Türkiye’s Personal Data Protection Law No. 6698 (KVKK).',
    breadcrumbLabel: 'KVKK',
    updated: updated.en,
    sections: [
      {
        heading: 'Data Controller',
        paragraphs: [
          `${company.legalName} processes the personal data described below in its capacity as data controller. Processing activities are carried out lawfully and fairly, limited to specific and legitimate purposes.`,
        ],
      },
      {
        heading: 'Personal Data Processed',
        list: [
          'Identity and contact data (full name, email, phone, company)',
          'Request content and correspondence records',
          'Technical data related to website usage (via cookies)',
        ],
      },
      {
        heading: 'Purposes of Processing',
        list: [
          'Responding to and routing contact requests',
          'Conducting pre-contractual and contractual processes',
          'Measuring and improving service quality',
          'Fulfilling legal obligations',
        ],
      },
      {
        heading: 'Legal Grounds',
        paragraphs: [
          'Your personal data is processed on the legal grounds of the establishment or performance of a contract, the fulfillment of a legal obligation, and the legitimate interests of the data controller.',
        ],
      },
      {
        heading: 'Rights of the Data Subject',
        paragraphs: [
          'Under Article 11 of the KVKK, you have the right to access your data, request its correction or deletion, object to processing, and demand compensation for damages.',
        ],
        list: [
          'Learn whether your personal data is being processed',
          'Request information if it has been processed',
          'Request correction of incomplete or inaccurate data',
          'Request deletion/destruction under the conditions set out in the law',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'You can submit requests regarding your rights via the form on our contact page. Your applications are concluded within 30 days at the latest.',
        ],
      },
    ],
  },
}

const privacy: Record<Locale, LegalContent> = {
  tr: {
    eyebrow: eyebrow.tr,
    title: 'Gizlilik Politikası',
    intro:
      'Kişisel verilerinizin gizliliğine önem veriyoruz. Bu politika, verilerinizi hangi ilkelerle topladığımızı ve koruduğumuzu açıklar.',
    breadcrumbLabel: 'Gizlilik',
    updated: updated.tr,
    sections: [
      {
        heading: 'Topladığımız Bilgiler',
        paragraphs: [
          'Yalnızca sizinle iletişim kurmak ve taleplerinizi karşılamak için gerekli olan bilgileri toplarız. Bu bilgiler; formlar aracılığıyla ilettiğiniz veriler ve web sitesi kullanımına ilişkin teknik verilerden oluşur.',
        ],
      },
      {
        heading: 'Bilgilerin Kullanımı',
        list: [
          'Taleplerinizi yanıtlamak ve hizmet sunmak',
          'Web sitesi deneyimini iyileştirmek',
          'Yasal yükümlülükleri yerine getirmek',
        ],
      },
      {
        heading: 'Veri Güvenliği',
        paragraphs: [
          'Kişisel verilerinizi yetkisiz erişime, kayba ve kötüye kullanıma karşı korumak için idari ve teknik tedbirler uygularız. Erişim, yalnızca yetkili personel ile sınırlıdır.',
        ],
      },
      {
        heading: 'Üçüncü Taraflarla Paylaşım',
        paragraphs: [
          'Kişisel verilerinizi, yasal zorunluluklar veya açık rızanız olmadıkça üçüncü taraflarla paylaşmayız. Hizmet sağlayıcılarımızla paylaşım, yalnızca sözleşmesel gizlilik yükümlülükleri altında gerçekleşir.',
        ],
      },
      {
        heading: 'Saklama Süresi',
        paragraphs: [
          'Verileriniz, işleme amacının gerektirdiği ve ilgili mevzuatın öngördüğü süre boyunca saklanır; sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.',
        ],
      },
    ],
  },
  en: {
    eyebrow: eyebrow.en,
    title: 'Privacy Policy',
    intro:
      'We value the privacy of your personal data. This policy explains the principles by which we collect and protect your data.',
    breadcrumbLabel: 'Privacy',
    updated: updated.en,
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: [
          'We only collect the information necessary to contact you and fulfill your requests. This consists of the data you submit through forms and technical data related to website usage.',
        ],
      },
      {
        heading: 'Use of Information',
        list: [
          'Responding to your requests and delivering services',
          'Improving the website experience',
          'Fulfilling legal obligations',
        ],
      },
      {
        heading: 'Data Security',
        paragraphs: [
          'We apply administrative and technical measures to protect your personal data against unauthorized access, loss and misuse. Access is limited to authorized personnel only.',
        ],
      },
      {
        heading: 'Sharing with Third Parties',
        paragraphs: [
          'We do not share your personal data with third parties unless required by law or with your explicit consent. Sharing with our service providers occurs only under contractual confidentiality obligations.',
        ],
      },
      {
        heading: 'Retention Period',
        paragraphs: [
          'Your data is retained for the period required by the processing purpose and applicable legislation; at the end of the period it is deleted, destroyed or anonymized.',
        ],
      },
    ],
  },
}

const cookies: Record<Locale, LegalContent> = {
  tr: {
    eyebrow: eyebrow.tr,
    title: 'Çerez Politikası',
    intro:
      'Web sitemizde deneyiminizi iyileştirmek ve kullanımını analiz etmek için çerezlerden yararlanıyoruz. Bu politika, hangi çerezleri kullandığımızı açıklar.',
    breadcrumbLabel: 'Çerez Politikası',
    updated: updated.tr,
    sections: [
      {
        heading: 'Çerez Nedir?',
        paragraphs: [
          'Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını sağlar ve kullanım deneyimini iyileştirir.',
        ],
      },
      {
        heading: 'Kullandığımız Çerez Türleri',
        list: [
          'Zorunlu çerezler — sitenin temel işlevleri için gereklidir',
          'Performans çerezleri — site kullanımını ölçmemize yardımcı olur',
          'İşlevsel çerezler — tercihlerinizi hatırlar',
        ],
      },
      {
        heading: 'Çerez Tercihlerini Yönetme',
        paragraphs: [
          'Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması, sitenin bazı bölümlerinin çalışmamasına neden olabilir.',
        ],
      },
    ],
  },
  en: {
    eyebrow: eyebrow.en,
    title: 'Cookie Policy',
    intro:
      'We use cookies on our website to improve your experience and analyze usage. This policy explains which cookies we use.',
    breadcrumbLabel: 'Cookie Policy',
    updated: updated.en,
    sections: [
      {
        heading: 'What Is a Cookie?',
        paragraphs: [
          'Cookies are small text files saved to your device by the websites you visit. They enable the site to function properly and improve the usage experience.',
        ],
      },
      {
        heading: 'Types of Cookies We Use',
        list: [
          'Essential cookies — required for the core functions of the site',
          'Performance cookies — help us measure site usage',
          'Functional cookies — remember your preferences',
        ],
      },
      {
        heading: 'Managing Cookie Preferences',
        paragraphs: [
          'You can delete or block cookies through your browser settings. Disabling essential cookies may cause some parts of the site to stop working.',
        ],
      },
    ],
  },
}

const docs: Record<LegalDoc, Record<Locale, LegalContent>> = { kvkk, privacy, cookies }

export function getLegalContent(doc: LegalDoc, locale: Locale): LegalContent {
  return docs[doc][locale]
}

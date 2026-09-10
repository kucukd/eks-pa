/**
 * Centralized company / contact information.
 *
 * Values below are sourced from the official EKSPA site (eks-pa.com.tr) and are
 * marked "verified". Any field the content team must still confirm stays
 * "needs-verification" and is hidden in production UI via `showValue`.
 */

export type VerificationStatus = 'verified' | 'needs-verification'

export interface VerifiableValue {
  value: string
  status: VerificationStatus
  note?: string
}

/** Returns the value only when it has been verified, otherwise `undefined`. */
export function verified(v: VerifiableValue): string | undefined {
  return v.status === 'verified' ? v.value : undefined
}

const isProd = process.env.NODE_ENV === 'production'

/** Show verifiable values in non-production so the team can preview them. */
export function showValue(v: VerifiableValue): string | undefined {
  if (v.status === 'verified') return v.value
  return isProd ? undefined : v.value
}

export const company = {
  name: 'EKSPA',
  legalName: 'Eks-pa Bilgisayar Pazarlama ve Ticaret A.Ş.',
  parentGroup: 'E-B Group',
  founded: 1987,
  foundedCity: 'Ankara',
  baseUrl: 'https://www.eks-pa.com.tr',
  brandLine: 'Kritik İşler. Akıllı Sistemler.',
  valueProposition:
    'Veriyi, kimliği, görüntüyü ve iş süreçlerini güvenli biçimde bir araya getiriyor; kurumların kritik operasyonlarını ölçülebilir, sürdürülebilir sistemlere dönüştürüyoruz.',

  phones: [
    {
      value: '+90 312 463 88 00',
      status: 'verified',
      note: 'Resmi web sitesi footer bilgisi.',
    },
  ] satisfies VerifiableValue[],

  /** Merkezi çağrı numarası. */
  callCenter: {
    value: '444 10 42',
    status: 'verified',
    note: 'Santral — resmi web sitesi.',
  } satisfies VerifiableValue,

  email: {
    value: 'info@eks-pa.com.tr',
    status: 'verified',
    note: 'Resmi web sitesi footer bilgisi.',
  } satisfies VerifiableValue,

  groupEmail: {
    value: 'info@eb.com.tr',
    status: 'verified',
    note: 'E-B Group kurumsal e-postası.',
  } satisfies VerifiableValue,

  address: {
    value:
      'Kızılırmak Mahallesi, Dumlupınar Bulvarı, YDA Center A1 Blok, Kat 11, No 462-463, Çankaya, Ankara',
    status: 'verified',
    note: 'Resmi web sitesi footer bilgisi.',
  } satisfies VerifiableValue,

  registry: {
    mersis: { value: '0330001910100019', status: 'verified' } satisfies VerifiableValue,
    tradeRegistry: { value: '64818', status: 'verified' } satisfies VerifiableValue,
  },

  offices: [
    {
      label: 'Genel Müdürlük',
      city: 'Ankara',
      status: 'verified' as VerificationStatus,
    },
    {
      label: 'Bölge Müdürlüğü',
      city: 'İstanbul',
      status: 'verified' as VerificationStatus,
    },
  ],

  serviceProvinces: {
    value: 'Türkiye çapında yaygın saha ve teknik servis ağı',
    status: 'verified',
    note: 'Kesin il sayısı doğrulanana kadar sayı vermeden ifade edilir.',
  } satisfies VerifiableValue,

  support: '7/24 teknik destek',

  social: {
    linkedin: {
      value: 'https://www.linkedin.com/company/eks-pa',
      status: 'verified',
    } satisfies VerifiableValue,
    facebook: {
      value: 'https://www.facebook.com/ekspa',
      status: 'verified',
    } satisfies VerifiableValue,
    twitter: {
      value: 'https://twitter.com/ekspa',
      status: 'verified',
    } satisfies VerifiableValue,
  },

  /** Trust-row items rendered under the hero. */
  trustRow: [
    '1987’den beri',
    'Kamu ve özel sektör deneyimi',
    '7/24 teknik destek',
    'Türkiye çapında hizmet',
  ],

  /** Value pillars, mirrored from the corporate site with generated imagery. */
  valuePillars: [
    {
      title: 'Deneyimli Teknik Ekip',
      description: 'Uzman mühendis kadrosu ile kurgudan devreye almaya uçtan uca yetkinlik.',
      image: '/images/deneyimli-teknik-ekip.png',
    },
    {
      title: 'Güvenilir Çözümler',
      description: 'Kanıtlanmış mimariler ve kurumsal sınıf teknolojilerle kesintisiz operasyon.',
      image: '/images/guvenilir-cozumler.png',
    },
    {
      title: 'Hızlı Destek',
      description: '7/24 teknik destek ve yaygın servis ağıyla kritik sistemlerde süreklilik.',
      image: '/images/hizli-destek.png',
    },
    {
      title: 'Profesyonel Yönetim',
      description: 'Ölçülebilir SLA’lar ve şeffaf yönetişimle güvenilir proje teslimi.',
      image: '/images/profesyonel-yonetim.png',
    },
  ],

  /** Technology & solution partners (from the corporate site). */
  partners: [
    'HAVELSAN',
    'ROKETSAN',
    'ASELSAN',
    'Palo Alto',
    'Nutanix',
    'Microsoft',
    'Veeam',
    'Dell EMC',
    'VMware',
  ],
} as const

export type Company = typeof company

/** Locale-specific company marketing copy (images stay shared). */
export const companyCopy = {
  tr: {
    brandLine: 'Kritik İşler. Akıllı Sistemler.',
    valueProposition:
      'Veriyi, kimliği, görüntüyü ve iş süreçlerini güvenli biçimde bir araya getiriyor; kurumların kritik operasyonlarını ölçülebilir, sürdürülebilir sistemlere dönüştürüyoruz.',
    trustRow: [
      '1987’den beri',
      'Kamu ve özel sektör deneyimi',
      '7/24 teknik destek',
      'Türkiye çapında hizmet',
    ],
    valuePillars: [
      { title: 'Deneyimli Teknik Ekip', description: 'Uzman mühendis kadrosu ile kurgudan devreye almaya uçtan uca yetkinlik.' },
      { title: 'Güvenilir Çözümler', description: 'Kanıtlanmış mimariler ve kurumsal sınıf teknolojilerle kesintisiz operasyon.' },
      { title: 'Hızlı Destek', description: '7/24 teknik destek ve yaygın servis ağıyla kritik sistemlerde süreklilik.' },
      { title: 'Profesyonel Yönetim', description: 'Ölçülebilir SLA’lar ve şeffaf yönetişimle güvenilir proje teslimi.' },
    ],
    support: '7/24 teknik destek',
    serviceProvinces: 'Türkiye çapında yaygın saha ve teknik servis ağı',
  },
  en: {
    brandLine: 'Critical Operations. Intelligent Systems.',
    valueProposition:
      'We securely bring together data, identity, imaging and business processes — turning organizations’ critical operations into measurable, sustainable systems.',
    trustRow: [
      'Since 1987',
      'Public and private sector experience',
      '24/7 technical support',
      'Nationwide service',
    ],
    valuePillars: [
      { title: 'Experienced Technical Team', description: 'End-to-end capability from design to go-live with a team of expert engineers.' },
      { title: 'Reliable Solutions', description: 'Uninterrupted operations built on proven architectures and enterprise-grade technology.' },
      { title: 'Rapid Support', description: 'Continuity for critical systems through 24/7 technical support and a wide service network.' },
      { title: 'Professional Management', description: 'Dependable project delivery with measurable SLAs and transparent governance.' },
    ],
    support: '24/7 technical support',
    serviceProvinces: 'Nationwide field and technical service network across Türkiye',
  },
} as const

export function getCompanyCopy(locale: 'tr' | 'en') {
  const copy = companyCopy[locale]
  return {
    ...copy,
    /** Value pillars merged with their shared images (order matches). */
    valuePillars: copy.valuePillars.map((p, i) => ({
      ...p,
      image: company.valuePillars[i].image,
    })),
  }
}

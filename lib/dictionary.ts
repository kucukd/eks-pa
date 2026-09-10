import type { Locale } from '@/lib/i18n'

/**
 * All UI strings (chrome + section headings + page copy) for both locales.
 * Content data (solutions, products, etc.) lives in lib/content.ts (tr) and
 * lib/content-en.ts (en); this file holds the surrounding interface copy.
 */
export interface Dictionary {
  nav: {
    solutions: string
    products: string
    sectors: string
    stories: string
    insights: string
    about: string
    contact: string
  }
  header: {
    menu: string
    talkToExpert: string
    exploreSolutions: string
    search: string
    openMenu: string
    closeMenu: string
    mainMenu: string
    mobileMenu: string
    language: string
  }
  hero: {
    badgeSince: (year: number, group: string) => string
    titleLine1: string
    titleAccent: string
    titleLine3: string
    talkToExpert: string
    exploreArchitecture: string
  }
  home: {
    solutionsEyebrow: string
    solutionsTitle: string
    solutionsIntro: string
    allSolutions: string
    productsEyebrow: string
    productsTitle: string
    productsIntro: string
    problem: string
    role: string
    reviewProduct: string
    requestDemo: string
    productsTablist: string
    sectorsEyebrow: string
    sectorsTitle: string
    sectorsIntro: string
    deliveryEyebrow: string
    deliveryTitle: string
    deliveryIntro: string
    trustEyebrow: string
    trustTitle: string
    trustIntro: string
    certifications: string
    certificationsPending: string
    insightsEyebrow: string
    insightsTitle: string
    insightsIntro: string
    allInsights: string
    valueStripLabel: string
    partnersEyebrow: string
    partnersTitle: string
    partnersIntro: string
    partnersAria: string
  }
  detail: {
    whyNowEyebrow: string
    whyNowTitle: string
    audience: string
    howEyebrow: string
    howTitle: string
    flowEyebrow: string
    flowTitle: string
    featuresEyebrow: string
    featuresTitle: string
    integrationEyebrow: string
    integrationTitle: string
    useCasesEyebrow: string
    useCasesTitle: string
    pocTitle: string
    faqEyebrow: string
    faqTitle: string
    relatedSolutions: string
    relatedProducts: string
  }
  cta: {
    eyebrow: string
    title: string
    intro: string
    primary: string
    secondary: string
  }
  listing: {
    solutionsEyebrow: string
    solutionsTitle: string
    solutionsIntro: string
    productsEyebrow: string
    productsTitle: string
    productsIntro: string
    sectorsEyebrow: string
    sectorsTitle: string
    sectorsIntro: string
    insightsEyebrow: string
    insightsTitle: string
    insightsIntro: string
    storiesEyebrow: string
    storiesTitle: string
    storiesIntro: string
    criticalProblem: string
    solutionCombo: string
    readArticle: string
    reviewSolution: string
    reviewProduct: string
    exploreSector: string
    scope: string
  }
  detailMeta: {
    problemLabel: string
    roleLabel: string
    sectorsLabel: string
    productEyebrow: string
    solutionEyebrow: string
    sectorEyebrow: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    formTitle: string
    infoTitle: string
    address: string
    phone: string
    callCenter: string
    email: string
    contactMissing: string
  }
  form: {
    successTitle: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    company: string
    companyPlaceholder: string
    phone: string
    phonePlaceholder: string
    topic: string
    topicPlaceholder: string
    message: string
    messagePlaceholder: string
    kvkkBefore: string
    kvkkLink: string
    kvkkAfter: string
    submit: string
    submitting: string
    website: string
    topics: string[]
  }
  video: {
    solutionEyebrow: string
    solutionTitle: string
    solutionDescription: string
    productEyebrow: string
    productTitle: string
    productDescription: string
    comingSoon: string
    previewAlt: (title: string) => string
  }
  legal: {
    lastUpdated: string
    disclaimer: string
  }
  footer: {
    contact: string
    groupSolutions: string
    groupProducts: string
    groupCorporate: string
    groupLegal: string
    since: (year: number, group: string) => string
    rights: string
    mersis: string
    tradeRegistry: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    storyEyebrow: string
    storyTitle: string
    storyParagraphs: string[]
    modelEyebrow: string
    modelTitle: string
    trustEyebrow: string
    trustTitle: string
  }
  notFound: {
    code: string
    title: string
    intro: string
    home: string
    contact: string
  }
  common: {
    breadcrumbHome: string
  }
}

const tr: Dictionary = {
  nav: {
    solutions: 'Çözümler',
    products: 'Ürünler',
    sectors: 'Sektörler',
    stories: 'Başarı Hikâyeleri',
    insights: 'İçgörüler',
    about: 'Hakkımızda',
    contact: 'İletişim',
  },
  header: {
    menu: 'Menü',
    talkToExpert: 'Uzmanla Görüş',
    exploreSolutions: 'Çözüm Mimarisini Keşfet',
    search: 'Ara',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    mainMenu: 'Ana menü',
    mobileMenu: 'Mobil menü',
    language: 'Dil seçimi',
  },
  hero: {
    badgeSince: (year, group) => `${year}'den beri · ${group}`,
    titleLine1: 'Kurumsal İhtiyaçlara',
    titleAccent: 'Güçlü ve Sürdürülebilir',
    titleLine3: 'Dijital Çözümler',
    talkToExpert: 'Uzmanla Görüş',
    exploreArchitecture: 'Çözüm Mimarisini Keşfet',
  },
  home: {
    solutionsEyebrow: 'Çözüm Aileleri',
    solutionsTitle: 'Kritik operasyonları uçtan uca bir sistem mimarisine bağlıyoruz',
    solutionsIntro:
      'Her çözüm ailesi; belirli bir operasyonel problemi görmek, doğrulamak, otomatikleştirmek, korumak ve dönüştürmek için tasarlandı.',
    allSolutions: 'Tüm Çözümler',
    productsEyebrow: 'Ürün Ailesi',
    productsTitle: 'Sahada kanıtlanmış platformlar',
    productsIntro:
      'Her ürün, bir çözüm ailesinin somut, kurulabilir karşılığıdır. Kendi markamız ve teknoloji ortaklıklarımızla sunulur.',
    problem: 'Problem',
    role: 'Rolü',
    reviewProduct: 'Ürünü İncele',
    requestDemo: 'Demo Talep Et',
    productsTablist: 'Ürünler',
    sectorsEyebrow: 'Sektörler',
    sectorsTitle: 'Her sektörün kritik problemi farklıdır',
    sectorsIntro:
      'Çözüm ve ürünlerimizi sektörün gerçek operasyonel ihtiyacına göre bir araya getiriyoruz.',
    deliveryEyebrow: 'Çalışma Modeli',
    deliveryTitle: 'Keşiften operasyona, sorumluluğu tanımlı bir teslim modeli',
    deliveryIntro:
      'Her adımın kapsamı, çıktısı ve başarı kriteri baştan bellidir. PoC olmadan yaygınlaştırma yapmayız.',
    trustEyebrow: 'Güven ve Yetkinlik',
    trustTitle: 'Kritik işler, kanıtlanabilir bir güven zemininde yürür',
    trustIntro:
      'Bilgi güvenliği, iş sürekliliği ve izlenebilirliği mimarinin merkezine koyuyoruz.',
    certifications: 'Sertifikalar',
    certificationsPending:
      'Sertifikasyon ve akreditasyon bilgileri doğrulama sonrası yayınlanacaktır.',
    insightsEyebrow: 'İçgörüler',
    insightsTitle: 'Teknolojiyi iş diline çeviren bakış açıları',
    insightsIntro:
      'Doğru soruları sorarak kritik kararları netleştiren, satış değil değer odaklı yazılar.',
    allInsights: 'Tüm İçgörüler',
    valueStripLabel: 'Neden EKSPA',
    partnersEyebrow: 'İş Ortaklarımız',
    partnersTitle: 'Güçlü teknoloji ekosistemi',
    partnersIntro:
      'Kamu ve savunma sanayisinden küresel teknoloji sağlayıcılarına uzanan iş ortaklıklarıyla uçtan uca çözümler sunuyoruz.',
    partnersAria: 'İş ortakları',
  },
  detail: {
    whyNowEyebrow: 'Neden Şimdi?',
    whyNowTitle: 'Harekete geçmemenin maliyeti',
    audience: 'Kimler İçin?',
    howEyebrow: 'Nasıl Çalışır?',
    howTitle: 'Yaklaşımın özü',
    flowEyebrow: 'Akış / Mimari',
    flowTitle: 'Uçtan uca süreç',
    featuresEyebrow: 'Yetkinlikler',
    featuresTitle: 'Somut ve doğrulanabilir özellikler',
    integrationEyebrow: 'Entegrasyon ve Güvenlik',
    integrationTitle: 'Sisteme güvenle bağlanır',
    useCasesEyebrow: 'Kullanım Senaryoları',
    useCasesTitle: 'Sahadaki karşılığı',
    pocTitle: 'PoC / Proje Yaklaşımı',
    faqEyebrow: 'Sık Sorulanlar',
    faqTitle: 'Merak edilenler',
    relatedSolutions: 'İlgili Çözümler',
    relatedProducts: 'İlgili Ürünler',
  },
  cta: {
    eyebrow: 'Bir Sonraki Adım',
    title: 'Kritik bir operasyonu birlikte sisteme dönüştürelim',
    intro:
      'Hedefinizi, mevcut sistemlerinizi ve başarı kriterinizi konuşarak tanımlı bir PoC ile başlayalım.',
    primary: 'Uzmanla Görüş',
    secondary: 'Çözümleri Keşfet',
  },
  listing: {
    solutionsEyebrow: 'Çözümler',
    solutionsTitle: 'Operasyonel probleme göre tasarlanmış çözüm aileleri',
    solutionsIntro:
      'Her çözüm; görmek, doğrulamak, otomatikleştirmek, korumak ve dönüştürmek için uçtan uca kurgulanır.',
    productsEyebrow: 'Ürünler',
    productsTitle: 'Çözümlerin kurulabilir, kanıtlanmış karşılığı',
    productsIntro:
      'Kendi markamız ve teknoloji ortaklıklarımızla sunulan platformlar; her biri somut bir operasyonel probleme yanıt verir.',
    sectorsEyebrow: 'Sektörler',
    sectorsTitle: 'Sektörün kritik problemine göre bir araya getirilen çözümler',
    sectorsIntro:
      'Ürün ve çözümlerimizi sektörün gerçek operasyonel ihtiyacına göre birleştiriyoruz.',
    insightsEyebrow: 'İçgörüler',
    insightsTitle: 'Teknolojiyi iş diline çeviren yazılar',
    insightsIntro: 'Kritik kararları netleştiren, değer odaklı bakış açıları.',
    storiesEyebrow: 'Başarı Hikâyeleri',
    storiesTitle: 'Sahadan örnek senaryolar',
    storiesIntro:
      'Anonimleştirilmiş, uydurma metrik içermeyen; yaklaşım ve beklenen etkiyi açıkça belirten örnekler.',
    criticalProblem: 'Kritik problem',
    solutionCombo: 'Çözüm bileşimi',
    readArticle: 'Yazıyı oku',
    reviewSolution: 'Çözümü İncele',
    reviewProduct: 'Ürünü İncele',
    exploreSector: 'Sektörü Keşfet',
    scope: 'Kapsam',
  },
  detailMeta: {
    problemLabel: 'Problem',
    roleLabel: 'Rolü',
    sectorsLabel: 'Sektörler',
    productEyebrow: 'Ürün',
    solutionEyebrow: 'Çözüm',
    sectorEyebrow: 'Sektör',
  },
  contact: {
    eyebrow: 'İletişim',
    title: 'Kritik bir operasyonu konuşalım',
    intro:
      'Hedefinizi, mevcut sistemlerinizi ve başarı kriterinizi paylaşın; doğru uzmanla en kısa sürede dönüş yapalım.',
    formTitle: 'Bize yazın',
    infoTitle: 'İletişim bilgileri',
    address: 'Adres',
    phone: 'Telefon',
    callCenter: 'Santral',
    email: 'E-posta',
    contactMissing:
      'İletişim bilgileri yayın öncesi doğrulanmaktadır. Lütfen formu kullanın; en kısa sürede dönüş yapacağız.',
  },
  form: {
    successTitle: 'Talebiniz alındı',
    name: 'Ad Soyad',
    namePlaceholder: 'Adınız ve soyadınız',
    email: 'E-posta',
    emailPlaceholder: 'ad@sirket.com',
    company: 'Şirket',
    companyPlaceholder: 'Kurumunuz',
    phone: 'Telefon',
    phonePlaceholder: '+90 ...',
    topic: 'Konu',
    topicPlaceholder: 'Bir konu seçin',
    message: 'Mesajınız',
    messagePlaceholder: 'İhtiyacınızı ve beklentilerinizi kısaca paylaşın.',
    kvkkBefore: 'Kişisel verilerimin ',
    kvkkLink: 'KVKK Aydınlatma Metni',
    kvkkAfter: ' kapsamında işlenmesini kabul ediyorum.',
    submit: 'Talebi Gönder',
    submitting: 'Gönderiliyor...',
    website: 'Web sitesi',
    topics: [
      'Genel bilgi',
      'Çözüm danışmanlığı',
      'Ürün demosu',
      'Teknik destek',
      'İş ortaklığı',
      'Kariyer',
    ],
  },
  video: {
    solutionEyebrow: 'Tanıtım Videosu',
    solutionTitle: 'Dijital Arşiv nasıl çalışır?',
    solutionDescription:
      'Kağıt ve dağınık belgeyi güvenli, aranabilir ve denetlenebilir kurumsal bilgiye dönüştüren uçtan uca akışı izleyin.',
    productEyebrow: 'Ürün Demosu',
    productTitle: 'DASBase ile dijital arşiv',
    productDescription:
      'Belge tarama, OCR, sınıflandırma ve güvenli erişim adımlarını uçtan uca gösteren DASBase tanıtımını izleyin.',
    comingSoon: 'Video yakında eklenecek',
    previewAlt: (title) => `${title} — tanıtım videosu önizlemesi`,
  },
  legal: {
    lastUpdated: 'Son güncelleme',
    disclaimer:
      'Bu metin bilgilendirme amaçlıdır ve yasal danışmanlık yerine geçmez. Nihai yasal metinler yayın öncesi hukuk ekibi tarafından doğrulanmalıdır.',
  },
  footer: {
    contact: 'İletişim',
    groupSolutions: 'Çözümler',
    groupProducts: 'Ürünler',
    groupCorporate: 'Kurumsal',
    groupLegal: 'Yasal',
    since: (year, group) => `${year}'den beri · ${group}`,
    rights: 'Tüm hakları saklıdır.',
    mersis: 'Mersis No',
    tradeRegistry: 'Ticaret Sicil No',
  },
  about: {
    eyebrow: 'Hakkımızda',
    title: 'Kritik işleri akıllı sistemlere dönüştüren bir teknoloji ortağı',
    intro:
      'EKSPA; veriyi, kimliği, görüntüyü ve iş süreçlerini güvenle bir araya getirir ve kurumların kritik operasyonlarını ölçülebilir, sürdürülebilir sistemlere dönüştürür.',
    storyEyebrow: 'Kurumsal',
    storyTitle: '1987’den beri kritik operasyonların yanında',
    storyParagraphs: [
      'EKSPA, E-B Group çatısı altında 1987’den bu yana kamu ve özel sektörün kritik operasyonlarına teknoloji çözümleri sunar.',
      'Dijital arşivden video yönetimine, biyometrik kimlikten süreç otomasyonuna ve siber güvenliğe uzanan bir çözüm yelpazesini tek bir işletim modelinde birleştiririz.',
      'Yaklaşımımızın merkezinde ölçülebilir sonuç, kanıtlanabilir güven ve sürdürülebilir operasyon vardır.',
    ],
    modelEyebrow: 'Çalışma Modeli',
    modelTitle: 'Sorumluluğu tanımlı, ölçülebilir bir teslim disiplini',
    trustEyebrow: 'Güven ve Yetkinlik',
    trustTitle: 'Güven zeminini mimarinin merkezine koyarız',
  },
  notFound: {
    code: '404',
    title: 'Aradığınız sayfa bulunamadı',
    intro:
      'Sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilir ya da bizimle iletişime geçebilirsiniz.',
    home: 'Ana Sayfa',
    contact: 'İletişim',
  },
  common: {
    breadcrumbHome: 'Ana Sayfa',
  },
}

const en: Dictionary = {
  nav: {
    solutions: 'Solutions',
    products: 'Products',
    sectors: 'Industries',
    stories: 'Success Stories',
    insights: 'Insights',
    about: 'About',
    contact: 'Contact',
  },
  header: {
    menu: 'Menu',
    talkToExpert: 'Talk to an Expert',
    exploreSolutions: 'Explore Solution Architecture',
    search: 'Search',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainMenu: 'Main menu',
    mobileMenu: 'Mobile menu',
    language: 'Language selection',
  },
  hero: {
    badgeSince: (year, group) => `Since ${year} · ${group}`,
    titleLine1: 'Powerful and Sustainable',
    titleAccent: 'Digital Solutions',
    titleLine3: 'for Enterprise Needs',
    talkToExpert: 'Talk to an Expert',
    exploreArchitecture: 'Explore Solution Architecture',
  },
  home: {
    solutionsEyebrow: 'Solution Families',
    solutionsTitle: 'We connect critical operations into an end-to-end system architecture',
    solutionsIntro:
      'Each solution family is designed to see, verify, automate, protect and transform a specific operational problem.',
    allSolutions: 'All Solutions',
    productsEyebrow: 'Product Family',
    productsTitle: 'Field-proven platforms',
    productsIntro:
      'Each product is the concrete, deployable counterpart of a solution family — delivered under our own brand and technology partnerships.',
    problem: 'Problem',
    role: 'Role',
    reviewProduct: 'Explore Product',
    requestDemo: 'Request a Demo',
    productsTablist: 'Products',
    sectorsEyebrow: 'Industries',
    sectorsTitle: 'Every industry has a different critical problem',
    sectorsIntro:
      'We combine our solutions and products according to each industry’s real operational needs.',
    deliveryEyebrow: 'Working Model',
    deliveryTitle: 'From discovery to operation, a delivery model with defined ownership',
    deliveryIntro:
      'The scope, output and success criteria of each step are defined upfront. We never roll out without a PoC.',
    trustEyebrow: 'Trust and Capability',
    trustTitle: 'Critical work runs on a foundation of provable trust',
    trustIntro:
      'We place information security, business continuity and traceability at the center of the architecture.',
    certifications: 'Certifications',
    certificationsPending:
      'Certification and accreditation details will be published once verified.',
    insightsEyebrow: 'Insights',
    insightsTitle: 'Perspectives that translate technology into business language',
    insightsIntro:
      'Value-driven — not sales-driven — articles that clarify critical decisions by asking the right questions.',
    allInsights: 'All Insights',
    valueStripLabel: 'Why EKSPA',
    partnersEyebrow: 'Our Partners',
    partnersTitle: 'A strong technology ecosystem',
    partnersIntro:
      'We deliver end-to-end solutions through partnerships spanning public and defense industries to global technology providers.',
    partnersAria: 'Partners',
  },
  detail: {
    whyNowEyebrow: 'Why Now?',
    whyNowTitle: 'The cost of inaction',
    audience: 'Who is it for?',
    howEyebrow: 'How It Works',
    howTitle: 'The essence of the approach',
    flowEyebrow: 'Flow / Architecture',
    flowTitle: 'End-to-end process',
    featuresEyebrow: 'Capabilities',
    featuresTitle: 'Concrete and verifiable features',
    integrationEyebrow: 'Integration and Security',
    integrationTitle: 'Connects to your systems with confidence',
    useCasesEyebrow: 'Use Cases',
    useCasesTitle: 'What it looks like in the field',
    pocTitle: 'PoC / Project Approach',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked',
    relatedSolutions: 'Related Solutions',
    relatedProducts: 'Related Products',
  },
  cta: {
    eyebrow: 'Next Step',
    title: 'Let’s turn a critical operation into a system, together',
    intro:
      'Let’s start with a defined PoC by discussing your goal, your existing systems and your success criteria.',
    primary: 'Talk to an Expert',
    secondary: 'Explore Solutions',
  },
  listing: {
    solutionsEyebrow: 'Solutions',
    solutionsTitle: 'Solution families designed around the operational problem',
    solutionsIntro:
      'Each solution is built end-to-end to see, verify, automate, protect and transform.',
    productsEyebrow: 'Products',
    productsTitle: 'The deployable, proven counterpart of our solutions',
    productsIntro:
      'Platforms delivered under our own brand and technology partnerships — each answering a concrete operational problem.',
    sectorsEyebrow: 'Industries',
    sectorsTitle: 'Solutions combined around each industry’s critical problem',
    sectorsIntro:
      'We combine our products and solutions according to the industry’s real operational needs.',
    insightsEyebrow: 'Insights',
    insightsTitle: 'Articles that translate technology into business language',
    insightsIntro: 'Value-driven perspectives that clarify critical decisions.',
    storiesEyebrow: 'Success Stories',
    storiesTitle: 'Example scenarios from the field',
    storiesIntro:
      'Anonymized examples with no invented metrics — clearly stating the approach and the expected impact.',
    criticalProblem: 'Critical problem',
    solutionCombo: 'Solution mix',
    readArticle: 'Read article',
    reviewSolution: 'Explore Solution',
    reviewProduct: 'Explore Product',
    exploreSector: 'Explore Industry',
    scope: 'Scope',
  },
  detailMeta: {
    problemLabel: 'Problem',
    roleLabel: 'Role',
    sectorsLabel: 'Industries',
    productEyebrow: 'Product',
    solutionEyebrow: 'Solution',
    sectorEyebrow: 'Industry',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about a critical operation',
    intro:
      'Share your goal, your existing systems and your success criteria; we’ll get back to you with the right expert as soon as possible.',
    formTitle: 'Write to us',
    infoTitle: 'Contact details',
    address: 'Address',
    phone: 'Phone',
    callCenter: 'Call center',
    email: 'Email',
    contactMissing:
      'Contact details are being verified before publication. Please use the form and we’ll get back to you shortly.',
  },
  form: {
    successTitle: 'Your request has been received',
    name: 'Full Name',
    namePlaceholder: 'Your first and last name',
    email: 'Email',
    emailPlaceholder: 'name@company.com',
    company: 'Company',
    companyPlaceholder: 'Your organization',
    phone: 'Phone',
    phonePlaceholder: '+90 ...',
    topic: 'Topic',
    topicPlaceholder: 'Select a topic',
    message: 'Your message',
    messagePlaceholder: 'Briefly share your needs and expectations.',
    kvkkBefore: 'I consent to the processing of my personal data under the ',
    kvkkLink: 'Data Protection Notice',
    kvkkAfter: '.',
    submit: 'Send Request',
    submitting: 'Sending...',
    website: 'Website',
    topics: [
      'General information',
      'Solution consulting',
      'Product demo',
      'Technical support',
      'Partnership',
      'Careers',
    ],
  },
  video: {
    solutionEyebrow: 'Overview Video',
    solutionTitle: 'How does the Digital Archive work?',
    solutionDescription:
      'Watch the end-to-end flow that turns paper and scattered documents into secure, searchable and auditable enterprise knowledge.',
    productEyebrow: 'Product Demo',
    productTitle: 'Digital archiving with DASBase',
    productDescription:
      'Watch the DASBase overview covering document scanning, OCR, classification and secure access end to end.',
    comingSoon: 'Video coming soon',
    previewAlt: (title) => `${title} — overview video preview`,
  },
  legal: {
    lastUpdated: 'Last updated',
    disclaimer:
      'This text is for information purposes and does not constitute legal advice. Final legal texts must be verified by the legal team before publication.',
  },
  footer: {
    contact: 'Contact',
    groupSolutions: 'Solutions',
    groupProducts: 'Products',
    groupCorporate: 'Corporate',
    groupLegal: 'Legal',
    since: (year, group) => `Since ${year} · ${group}`,
    rights: 'All rights reserved.',
    mersis: 'MERSIS No',
    tradeRegistry: 'Trade Registry No',
  },
  about: {
    eyebrow: 'About',
    title: 'A technology partner that turns critical work into intelligent systems',
    intro:
      'EKSPA securely brings together data, identity, video and business processes, transforming organizations’ critical operations into measurable, sustainable systems.',
    storyEyebrow: 'Corporate',
    storyTitle: 'Alongside critical operations since 1987',
    storyParagraphs: [
      'Under the E-B Group umbrella, EKSPA has been delivering technology solutions for the critical operations of the public and private sectors since 1987.',
      'We unify a solution range spanning digital archiving, video management, biometric identity, process automation and cyber security into a single operating model.',
      'At the heart of our approach are measurable outcomes, provable trust and sustainable operation.',
    ],
    modelEyebrow: 'Working Model',
    modelTitle: 'A delivery discipline with defined ownership and measurable steps',
    trustEyebrow: 'Trust and Capability',
    trustTitle: 'We place the foundation of trust at the center of the architecture',
  },
  notFound: {
    code: '404',
    title: 'The page you’re looking for was not found',
    intro:
      'The page may have moved or been removed. You can continue from the homepage or get in touch with us.',
    home: 'Home',
    contact: 'Contact',
  },
  common: {
    breadcrumbHome: 'Home',
  },
}

const dictionaries: Record<Locale, Dictionary> = { tr, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

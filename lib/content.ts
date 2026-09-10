/**
 * Central typed content layer for the EKSPA site.
 * All product / solution / sector / insight / story pages are generated from
 * this data. No unverified metrics or customer names are included.
 */

export type IconName =
  | 'archive'
  | 'video'
  | 'workflow'
  | 'fingerprint'
  | 'scan-eye'
  | 'shield'
  | 'layers'
  | 'heart-pulse'
  | 'eye'
  | 'badge-check'
  | 'bot'
  | 'lock'
  | 'network'
  | 'server'

/* ------------------------------------------------------------------ */
/* Shared building blocks                                             */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  question: string
  answer: string
}

export interface DetailPage {
  /** One-sentence operational problem for the hero. */
  problem: string
  /** Who this is for. */
  audience: string[]
  /** "Neden şimdi?" — the cost of inaction. */
  whyNow: string
  /** How it works, short paragraphs. */
  howItWorks: string[]
  /** Ordered process/architecture flow. */
  flow: string[]
  /** 5–8 verifiable capabilities. */
  features: { title: string; description: string }[]
  /** Integration & security notes. */
  integrationSecurity: string[]
  /** Use-case scenarios. */
  useCases: string[]
  /** PoC / project approach. */
  pocApproach: string
  faq: FaqItem[]
  relatedProducts?: string[]
  relatedSolutions?: string[]
}

/* ------------------------------------------------------------------ */
/* Action model — Gör → Doğrula → Otomatikleştir → Koru → Dönüştür     */
/* ------------------------------------------------------------------ */

export const actionModel = [
  {
    key: 'gor',
    label: 'Gör',
    icon: 'eye' as IconName,
    description: 'Kamera, sensör ve veride kritik sinyali yakala.',
  },
  {
    key: 'dogrula',
    label: 'Doğrula',
    icon: 'badge-check' as IconName,
    description: 'Kimliği, belgeyi, işlemi ve kaliteyi kanıtla.',
  },
  {
    key: 'otomatiklestir',
    label: 'Otomatikleştir',
    icon: 'bot' as IconName,
    description: 'Tekrarlı işi güvenilir dijital iş gücüne devret.',
  },
  {
    key: 'koru',
    label: 'Koru',
    icon: 'lock' as IconName,
    description: 'Veriyi, erişimi ve iş sürekliliğini güvenceye al.',
  },
  {
    key: 'donustur',
    label: 'Dönüştür',
    icon: 'network' as IconName,
    description: 'Dağınık sistemleri ölçülebilir bir işletim modeline bağla.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Delivery model                                                     */
/* ------------------------------------------------------------------ */

export const deliveryModel = [
  {
    step: '01',
    title: 'Keşif',
    description: 'Hedef, mevcut sistem, veri, risk ve başarı kriterini birlikte netleştiririz.',
  },
  {
    step: '02',
    title: 'Mimari',
    description: 'Çözüm, entegrasyon, güvenlik ve sorumluluk sınırlarını tasarlarız.',
  },
  {
    step: '03',
    title: 'PoC',
    description: 'Kapsamı, verisi, süresi ve KPI’ları tanımlı bir saha doğrulaması yürütürüz.',
  },
  {
    step: '04',
    title: 'Yaygınlaştırma',
    description: 'Kurulum, veri geçişi, eğitim ve değişim yönetimini yönetiriz.',
  },
  {
    step: '05',
    title: 'Operasyon',
    description: 'SLA, destek, bakım, izleme ve sürekli iyileştirme ile sistemi çalışır tutarız.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Trust & capability blocks                                          */
/* ------------------------------------------------------------------ */

export const trustBlocks = [
  {
    title: 'Bilgi güvenliği ve rol bazlı erişim',
    description: 'Yetkiyi işe, işi denetim izine bağlayan RBAC yaklaşımı.',
  },
  {
    title: 'On-premise ve kapalı ağ',
    description: 'Gerektiğinde tamamen kurum içinde veya kapalı ağda çalışan mimariler.',
  },
  {
    title: 'İş sürekliliği ve felaket kurtarma',
    description: 'Yedekleme, replikasyon ve FKM ile kesintisiz operasyon hedefi.',
  },
  {
    title: 'Entegrasyon ve izlenebilirlik',
    description: 'Açık API, denetim izi ve uçtan uca izlenebilir süreçler.',
  },
  {
    title: 'Türkiye çapında teknik destek',
    description: 'Saha ekipleri ve 7/24 destek yaklaşımı ile yerel güç.',
  },
  {
    title: 'Kalite ve hizmet yönetimi',
    description: 'Tanımlı süreçler, SLA’lar ve ölçülebilir hizmet yönetimi disiplini.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Certifications — only `verified: true` render in production        */
/* ------------------------------------------------------------------ */

export interface Certification {
  code: string
  title: string
  verified: boolean
}

export const certifications: Certification[] = [
  { code: 'ISO/IEC 27001', title: 'Bilgi Güvenliği Yönetimi', verified: false },
  { code: 'ISO 9001', title: 'Kalite Yönetimi', verified: false },
  { code: 'ISO/IEC 20000-1', title: 'Hizmet Yönetimi', verified: false },
]

/* ------------------------------------------------------------------ */
/* Solution families                                                  */
/* ------------------------------------------------------------------ */

export interface Solution {
  slug: string
  name: string
  icon: IconName
  summary: string
  proofTags: string[]
  /** Featured in the homepage bento grid. */
  featured?: boolean
  detail: DetailPage
}

export const solutions: Solution[] = [
  {
    slug: 'dijital-arsiv-ve-kurumsal-bilgi',
    name: 'Dijital Arşiv ve Kurumsal Bilgi',
    icon: 'archive',
    summary:
      'Fiziksel ve elektronik belgeleri güvenli bir kurumsal hafızaya; yapay zekâ katmanıyla kaynaklı bilgiye dönüştürün.',
    proofTags: ['OCR', 'Metadata', 'Yaşam Döngüsü', 'RBAC', 'WORM', 'AI Katmanı'],
    featured: true,
    detail: {
      problem:
        'Kurumsal bilgi belgelerde dağınık, aranamaz ve denetlenemez halde kalıyor; bilgiye erişim yavaş ve riskli.',
      audience: ['CIO / BT yöneticileri', 'Kalite ve uyum yöneticileri', 'Arşiv ve doküman yönetimi ekipleri'],
      whyNow:
        'Belge hacmi arttıkça manuel süreçler, denetim baskısı ve bilgi kaybı riski birlikte büyür. Doğru arşiv mimarisi kurulmadan yapılan tarama, sadece dijital bir yığın üretir.',
      howItWorks: [
        'Fiziksel ve elektronik belgeler tek bir yönetilen depoya alınır; OCR ile aranabilir hale gelir.',
        'Sınıflandırma ve metadata ile belgeler bağlama oturur; RBAC ile yalnızca yetkili erişir.',
        'Yaşam döngüsü ve WORM politikaları saklama ve imha kurallarını otomatikleştirir.',
        'Yapay zekâ katmanı, kaynağı gösterilen sorgularla belgeden bilgiye erişimi hızlandırır.',
      ],
      flow: [
        'Fiziksel / elektronik belge',
        'Tarama ve OCR',
        'Sınıflandırma ve metadata',
        'Yetki ve yaşam döngüsü',
        'Yapay zekâ ile kaynaklı sorgu',
        'İş süreci / RPA aksiyonu',
      ],
      features: [
        { title: 'OCR ve tam metin arama', description: 'Taranan belgeler aranabilir metne dönüşür.' },
        { title: 'Metadata ve sınıflandırma', description: 'Belgeler kurumsal taksonomiye göre etiketlenir.' },
        { title: 'Rol bazlı erişim (RBAC)', description: 'Erişim işe ve yetkiye göre kısıtlanır.' },
        { title: 'Yaşam döngüsü ve WORM', description: 'Saklama, sürüm ve imha kuralları otomatikleşir.' },
        { title: 'Denetim izi', description: 'Her erişim ve değişiklik izlenebilir kayda alınır.' },
        { title: 'AI bilgi katmanı', description: 'Kaynağı gösterilen kurumsal soru-cevap.' },
      ],
      integrationSecurity: [
        'On-premise veya kapalı ağ dağıtımı',
        'Kurumsal kimlik sağlayıcı (LDAP / AD) entegrasyonu',
        'Açık API ile iş uygulamalarına bağlanma',
        'Uçtan uca denetim izi ve şifreleme',
      ],
      useCases: [
        'Büyük ölçekli kurumsal belge yönetimi',
        'Dağıtık lokasyonlarda merkezi belge işleme',
        'Denetime tabi süreçlerde kanıt ve saklama',
      ],
      pocApproach:
        'Seçili bir belge tipi ve süreç için sınırları, veri kümesi ve başarı kriteri tanımlı bir PoC ile başlarız.',
      faq: [
        {
          question: 'Mevcut belgelerimiz göç ettirilebilir mi?',
          answer: 'Evet. Kapsamı ve doğrulama kriterleri tanımlı bir veri geçişi planı ile mevcut arşiv taşınır.',
        },
        {
          question: 'Kapalı ağda çalışır mı?',
          answer: 'Evet. Tamamen on-premise ve kapalı ağ senaryoları desteklenir.',
        },
      ],
      relatedProducts: ['dasbase', 'voodoo-rpa'],
      relatedSolutions: ['akilli-surec-otomasyonu', 'bt-altyapisi-ve-siber-guvenlik'],
    },
  },
  {
    slug: 'akilli-surec-otomasyonu',
    name: 'Akıllı Süreç Otomasyonu',
    icon: 'workflow',
    summary:
      'Tekrarlı, kurallı ve denetlenebilir işleri katılımlı veya katılımsız dijital işçilere devredin.',
    proofTags: ['Sıfır Kod', 'Stüdyo', 'Robot', 'Bütünleşik Konsol', 'REST API'],
    detail: {
      problem:
        'Uzmanlar zamanının önemli kısmını kopyala-yapıştır, veri girişi ve mutabakat gibi tekrarlı işlere harcıyor.',
      audience: ['COO / operasyon yöneticileri', 'Finans ve mutabakat ekipleri', 'Süreç mükemmelliği ofisleri'],
      whyNow:
        'Tekrarlı iş, hata oranını ve tükenmişliği artırır; ölçeklendikçe maliyet doğrusal büyür. Doğru aday seçilerek otomasyon hızlı geri dönüş sağlar.',
      howItWorks: [
        'Aday süreçler kural, hacim ve denetlenebilirlik açısından değerlendirilir.',
        'Stüdyo üzerinde düşük/sıfır kod ile robotlar tasarlanır.',
        'Katılımlı veya katılımsız robotlar bütünleşik konsoldan yönetilir ve izlenir.',
      ],
      flow: ['Aday süreç analizi', 'Robot tasarımı (Stüdyo)', 'Test ve doğrulama', 'Yaygınlaştırma', 'İzleme ve konsol'],
      features: [
        { title: 'Sıfır / düşük kod stüdyo', description: 'İş kullanıcıları için görsel akış tasarımı.' },
        { title: 'Katılımlı & katılımsız robot', description: 'Hem masaüstü hem sunucu tarafı otomasyon.' },
        { title: 'Bütünleşik konsol', description: 'Robotların merkezi zamanlama ve izlenmesi.' },
        { title: 'REST API', description: 'Diğer sistemlerle programatik entegrasyon.' },
        { title: 'Denetim ve loglama', description: 'Her adım izlenebilir ve raporlanabilir.' },
      ],
      integrationSecurity: [
        'Kurumsal uygulama ve web arayüzleriyle entegrasyon',
        'Kimlik ve yetki yönetimi ile güvenli çalışma',
        'Denetim izi ve merkezi log',
      ],
      useCases: [
        'Yoğun operasyonlarda robotik süreç otomasyonu',
        'Finansal mutabakat ve raporlama',
        'Sistemler arası veri aktarımı',
      ],
      pocApproach: 'İlk RPA adayını birlikte seçip ölçülebilir bir pilotla hızlı değer gösteririz.',
      faq: [
        {
          question: 'Hangi süreç otomasyona uygundur?',
          answer: 'Kurallı, tekrarlı, yüksek hacimli ve dijital girdi/çıktısı olan süreçler en uygun adaylardır.',
        },
      ],
      relatedProducts: ['voodoo-rpa'],
      relatedSolutions: ['dijital-arsiv-ve-kurumsal-bilgi'],
    },
  },
  {
    slug: 'video-yonetimi-ve-guvenlik-operasyonlari',
    name: 'Video Yönetimi ve Güvenlik Operasyonları',
    icon: 'video',
    summary:
      'Dağınık kamera ve lokasyonları federatif mimari, harita tabanlı alarm ve sistem sağlığı görünürlüğüyle yönetin.',
    proofTags: ['Federasyon', 'Harita', 'Alarm Yaşam Döngüsü', 'Açık API', 'Yüksek Erişilebilirlik'],
    featured: true,
    detail: {
      problem:
        'Kamera sayısı arttıkça operasyonel görünürlük azalıyor; alarmlar bağlamsız, lokasyonlar birbirinden kopuk.',
      audience: ['Güvenlik operasyon yöneticileri', 'Kritik tesis ve kampüs yöneticileri', 'BT ve altyapı ekipleri'],
      whyNow:
        'Daha fazla kamera tek başına daha fazla güvenlik getirmez; bağlamsız görüntü operatörü yorar ve olay müdahalesini yavaşlatır.',
      howItWorks: [
        'Farklı lokasyon ve kamera altyapıları federatif mimaride birleşir.',
        'Alarm, harita üzerinde konumuyla ve ilgili görüntüyle operatöre gelir.',
        'Olay yaşam döngüsü ve rol dağıtımı ile müdahale yönetilir.',
      ],
      flow: ['Kamera / lokasyon federasyonu', 'Harita tabanlı alarm', 'Operatöre ilgili görüntü', 'Olay yaşam döngüsü', 'Arşiv ve dışa aktarma'],
      features: [
        { title: 'Federatif mimari', description: 'Merkezi kontrol ile yerel özerkliğin dengesi.' },
        { title: 'Harita tabanlı alarm', description: 'Alarmın konumu haritada gösterilir.' },
        { title: 'Olay yaşam döngüsü', description: 'Olay açılış, atama ve kapanışı izlenir.' },
        { title: 'Sistem sağlığı takibi', description: 'Kamera ve altyapı durumları izlenir.' },
        { title: 'Gelişmiş arşiv ve dışa aktarma', description: 'Kayıt yönetimi ve delil aktarımı.' },
        { title: 'Açık API', description: 'Üçüncü taraf sistemlerle entegrasyon.' },
      ],
      integrationSecurity: [
        'Yüksek erişilebilirlik mimarisi',
        'Rol bazlı erişim ve denetim izi',
        'Açık API ile SOC / PSIM entegrasyonu',
      ],
      useCases: [
        'Kritik tesislerde birleşik video yönetimi',
        'Çoklu lokasyon güvenliği ve erişim',
        'Enerji ve kritik altyapı görünürlüğü',
      ],
      pocApproach: 'Seçili lokasyonlarda federasyon ve alarm akışını doğrulayan bir pilot ile başlarız.',
      faq: [
        {
          question: 'Mevcut kameralarımızı kullanabilir miyiz?',
          answer: 'Federatif mimari, farklı kamera altyapılarını tek operasyon katmanında birleştirmeyi hedefler.',
        },
      ],
      relatedProducts: ['vultureeye'],
      relatedSolutions: ['bt-altyapisi-ve-siber-guvenlik', 'yapay-zeka-ve-goruntu-isleme'],
    },
  },
  {
    slug: 'dijital-kimlik-biyometri-ve-erisim',
    name: 'Dijital Kimlik, Biyometri ve Erişim',
    icon: 'fingerprint',
    summary:
      'Kimliği görmekle yetinmeyin; kart, sertifika ve biyometriyle doğrulayın, doküman onayını denetim iziyle bağlayın.',
    proofTags: ['eBioKEC', 'eBioSign', 'KimO', 'EKDS', 'NFC', 'PDKS'],
    featured: true,
    detail: {
      problem:
        'Kimliği görmek yeterli değil; kart, sertifika ve biyometri ile doğrulanmayan işlemler denetim ve uyum riski taşır.',
      audience: ['Telekom ve finans operasyonları', 'İK ve erişim yönetimi', 'Uyum ve denetim ekipleri'],
      whyNow:
        'Sahtecilik ve yetkisiz erişim riskleri artıyor; kimliği doğrulamak ve onayı denetim izine bağlamak zorunlu hale geliyor.',
      howItWorks: [
        'Kimlik; kart (NFC/EKDS), sertifika ve biyometri ile doğrulanır.',
        'Doküman onayı elektronik imza ve denetim izi ile bağlanır.',
        'Erişim ve mesai (PDKS) süreçleri biyometriyle güvenceye alınır.',
      ],
      flow: ['Kimlik yakalama', 'Kart / NFC / EKDS doğrulama', 'Biyometrik doğrulama', 'Elektronik imza / onay', 'Denetim izi'],
      features: [
        { title: 'eBioKEC', description: 'Biyometrik kimlik doğrulama.' },
        { title: 'eBioSign', description: 'Biyometrik / elektronik doküman imzalama.' },
        { title: 'KimO', description: 'Kimlik doğrulama ve okuma çözümü.' },
        { title: 'EKDS & NFC', description: 'Elektronik kimlik kartı okuma.' },
        { title: 'PDKS entegrasyonu', description: 'Personel devam kontrol sistemleri.' },
        { title: 'Denetim izi', description: 'Her doğrulama ve onay izlenebilir.' },
      ],
      integrationSecurity: [
        'Kişisel veri koruma odaklı tasarım',
        'Kurumsal kimlik ve erişim sistemleriyle entegrasyon',
        'Uçtan uca denetim izi',
      ],
      useCases: [
        'Telekomda kimlik doğrulama ve elektronik sözleşme',
        'Sağlıkta dijital onam',
        'Kurumsal erişim ve mesai yönetimi',
      ],
      pocApproach: 'Bir kanal veya lokasyonda doğrulama ve imza akışını uçtan uca doğrulayan pilotla başlarız.',
      faq: [
        {
          question: 'Kimliği görmek ile doğrulamak arasındaki fark nedir?',
          answer:
            'Görmek yalnızca belgeyi gözlemlemektir; doğrulamak, kart/sertifika/biyometri ile kimliğin gerçekliğini kanıtlar ve denetim izine bağlar.',
        },
      ],
      relatedProducts: ['ebiokec'],
      relatedSolutions: ['saglikta-dijital-donusum'],
    },
  },
  {
    slug: 'yapay-zeka-ve-goruntu-isleme',
    name: 'Yapay Zekâ ve Görüntü İşleme',
    icon: 'scan-eye',
    summary:
      'Kamera görüntülerini sayım, kalite, anomali ve güvenlik kararları üreten akıllı sensörlere dönüştürün.',
    proofTags: ['Vision QA', 'RPQ', 'Edge AI', 'Nesne Tespiti', 'Kalite Doğrulama'],
    featured: true,
    detail: {
      problem:
        'Kamera görüntüsü izleniyor ama karar üretmiyor; sayım, kalite ve anomali tespiti hâlâ manuel ve hataya açık.',
      audience: ['Üretim ve kalite yöneticileri', 'Lojistik ve sayım operasyonları', 'Güvenlik ve tesis yönetimi'],
      whyNow:
        'Manuel sayım ve kalite kontrol, ölçeklendikçe hata ve maliyet üretir; görüntü tabanlı yapay zekâ tutarlı karar sağlar.',
      howItWorks: [
        'Kamera akışları edge veya merkezi olarak işlenir.',
        'Nesne tespiti ve sınıflandırma ile sayım/kalite kararları üretilir.',
        'Anomali ve güvenlik olayları operasyona iletilir.',
      ],
      flow: ['Görüntü yakalama', 'Edge / merkezi işleme', 'Nesne tespiti', 'Karar (sayım / kalite / anomali)', 'Operasyona bildirim'],
      features: [
        { title: 'Vision QA', description: 'Görüntü tabanlı kalite doğrulama.' },
        { title: 'RPQ', description: 'Sayım ve kontrol otomasyonu.' },
        { title: 'Edge AI', description: 'Düşük gecikmeli yerinde işleme.' },
        { title: 'Nesne tespiti', description: 'Kritik nesnelerin gerçek zamanlı tespiti.' },
        { title: 'Anomali tespiti', description: 'Beklenmeyen durumların işaretlenmesi.' },
      ],
      integrationSecurity: [
        'Mevcut kamera altyapısıyla çalışma',
        'VMS ve iş sistemleriyle entegrasyon',
        'Veri gizliliği odaklı işleme',
      ],
      useCases: [
        'Üretimde görüntü tabanlı kalite kontrol',
        'Lojistikte sayım ve sevkiyat doğrulama',
        'Tesiste güvenlik anomali tespiti',
      ],
      pocApproach:
        'Ölçülebilir bir hedef (ör. sayım doğruluğu) belirleyip sınırları tanımlı bir görüntü PoC’si yürütürüz.',
      faq: [
        {
          question: 'Görüntü tabanlı sayım PoC’sinde başarı nasıl ölçülür?',
          answer: 'Referans veri kümesine karşı doğruluk, yanlış pozitif/negatif oranı ve operasyonel etki birlikte ölçülür.',
        },
      ],
      relatedProducts: ['vision-qa'],
      relatedSolutions: ['video-yonetimi-ve-guvenlik-operasyonlari'],
    },
  },
  {
    slug: 'bt-altyapisi-ve-siber-guvenlik',
    name: 'BT Altyapısı ve Siber Güvenlik',
    icon: 'shield',
    summary:
      'Sunucu, depolama, ağ, bulut, yedekleme ve siber güvenliği tek iş sürekliliği mimarisinde birleştirin.',
    proofTags: ['Veri Merkezi', 'FKM', 'EDR/XDR', 'SIEM', 'WAF', 'Yedekleme'],
    featured: true,
    detail: {
      problem:
        'Altyapı ve güvenlik parça parça yönetiliyor; iş sürekliliği, görünürlük ve müdahale kabiliyeti eksik kalıyor.',
      audience: ['CISO / güvenlik yöneticileri', 'BT altyapı ekipleri', 'İş sürekliliği sorumluları'],
      whyNow:
        'Tehdit yüzeyi genişledikçe dağınık savunma yetersiz kalır; bütünleşik bir iş sürekliliği mimarisi gerekir.',
      howItWorks: [
        'Sunucu, depolama, ağ ve bulut tek mimaride tasarlanır.',
        'Yedekleme ve felaket kurtarma ile süreklilik güvenceye alınır.',
        'EDR/XDR, SIEM ve WAF ile tespit ve müdahale bütünleşir.',
      ],
      flow: ['Değerlendirme', 'Mimari tasarım', 'Kurulum', 'İzleme (SIEM/XDR)', 'Yedekleme & FKM'],
      features: [
        { title: 'Veri merkezi çözümleri', description: 'Sunucu, depolama ve ağ tasarımı.' },
        { title: 'FKM', description: 'Felaket kurtarma merkezi ve iş sürekliliği.' },
        { title: 'EDR / XDR', description: 'Uç nokta ve genişletilmiş tespit-müdahale.' },
        { title: 'SIEM', description: 'Merkezi güvenlik olay yönetimi.' },
        { title: 'WAF', description: 'Web uygulama güvenlik duvarı.' },
        { title: 'Yedekleme', description: 'Kurumsal yedekleme ve replikasyon.' },
      ],
      integrationSecurity: [
        'On-premise, bulut ve hibrit dağıtım',
        'Kurumsal kimlik ve log entegrasyonu',
        'Denetim ve uyum raporlaması',
      ],
      useCases: [
        'İş sürekliliği ve felaket kurtarma',
        'Dağıtık tesislerde güvenlik görünürlüğü',
        'Merkezi güvenlik operasyon merkezi',
      ],
      pocApproach: 'Kritik bir servis için süreklilik ve tespit senaryosunu doğrulayan pilotla başlarız.',
      faq: [
        {
          question: 'Mevcut güvenlik ürünlerimizle entegre olur mu?',
          answer: 'Evet. SIEM ve entegrasyon katmanı, mevcut ürünleri tek görünürlükte birleştirmeyi hedefler.',
        },
      ],
      relatedSolutions: ['video-yonetimi-ve-guvenlik-operasyonlari'],
    },
  },
  {
    slug: 'kurumsal-uygulamalar-ve-entegrasyon',
    name: 'Kurumsal Uygulamalar ve Entegrasyon',
    icon: 'layers',
    summary:
      'Dağınık kurumsal uygulamaları açık API ve entegrasyon katmanıyla tek bir işletim modeline bağlayın.',
    proofTags: ['Açık API', 'Entegrasyon', 'İş Akışı', 'Kimlik', 'Denetim İzi'],
    detail: {
      problem:
        'Kurumsal uygulamalar birbirinden kopuk çalışıyor; veri tekrarlanıyor ve süreçler sistemler arasında kırılıyor.',
      audience: ['Kurumsal mimarlar', 'BT yöneticileri', 'Dijital dönüşüm ofisleri'],
      whyNow:
        'Sistemler arası kopukluk, hem operasyonel maliyeti hem de veri tutarsızlığını büyütür.',
      howItWorks: [
        'Uygulamalar açık API ve entegrasyon katmanıyla birbirine bağlanır.',
        'İş akışları sistemler arasında uçtan uca izlenir.',
        'Kimlik ve yetki tek noktadan yönetilir.',
      ],
      flow: ['Envanter ve analiz', 'Entegrasyon mimarisi', 'API katmanı', 'İş akışı orkestrasyonu', 'İzleme'],
      features: [
        { title: 'Açık API', description: 'Standart arayüzlerle entegrasyon.' },
        { title: 'İş akışı orkestrasyonu', description: 'Sistemler arası süreç yönetimi.' },
        { title: 'Kimlik entegrasyonu', description: 'Tek noktadan kimlik ve yetki.' },
        { title: 'Denetim izi', description: 'Uçtan uca izlenebilirlik.' },
      ],
      integrationSecurity: [
        'Kurumsal kimlik sağlayıcı entegrasyonu',
        'Güvenli API yönetimi',
        'Denetim ve loglama',
      ],
      useCases: ['Sistemler arası veri bütünlüğü', 'Uçtan uca süreç orkestrasyonu', 'Eski sistem modernizasyonu'],
      pocApproach: 'Kritik iki sistem arasındaki entegrasyonu doğrulayan bir pilotla başlarız.',
      faq: [
        {
          question: 'Eski sistemlerle çalışır mı?',
          answer: 'Entegrasyon katmanı, modern ve eski sistemleri açık API üzerinden birleştirmeyi hedefler.',
        },
      ],
      relatedSolutions: ['akilli-surec-otomasyonu'],
    },
  },
  {
    slug: 'saglikta-dijital-donusum',
    name: 'Sağlıkta Dijital Dönüşüm',
    icon: 'heart-pulse',
    summary:
      'Dijital onam, hasta dosyası ve kâğıtsız süreçleri kimlik doğrulama, arşiv ve otomasyonla bir araya getirin.',
    proofTags: ['Dijital Onam', 'Hasta Dosyası', 'Kâğıtsız Süreç', 'e-Kimlik', 'Arşiv'],
    detail: {
      problem:
        'Sağlık süreçleri hâlâ kâğıda ve manuel onaya bağlı; hasta dosyası dağınık, onam ve arşiv denetlenebilir değil.',
      audience: ['Hastane yöneticileri', 'Sağlık BT ekipleri', 'Uyum ve hasta hakları birimleri'],
      whyNow:
        'Kâğıtsız hastane sadece tarama değildir; onamın doğrulanması, dosyanın erişilebilirliği ve sürecin izlenebilirliği gerekir.',
      howItWorks: [
        'Hasta kimliği ve onam elektronik olarak doğrulanır.',
        'Hasta dosyası dijital arşivde güvenle yönetilir.',
        'Tekrarlı süreçler RPA ve entegrasyonla otomatikleşir.',
      ],
      flow: ['Kimlik doğrulama', 'Dijital onam', 'Hasta dosyası arşivi', 'Süreç otomasyonu', 'Denetim izi'],
      features: [
        { title: 'Dijital onam', description: 'Elektronik imza ve biyometri ile onam.' },
        { title: 'Hasta dosyası arşivi', description: 'Güvenli ve aranabilir dosya yönetimi.' },
        { title: 'Kâğıtsız süreç', description: 'Manuel adımların dijitalleştirilmesi.' },
        { title: 'Entegrasyon', description: 'HBYS ve kurumsal sistemlerle bağlantı.' },
        { title: 'Denetim izi', description: 'Onam ve erişim izlenebilirliği.' },
      ],
      integrationSecurity: [
        'Kişisel sağlık verisi koruma odaklı tasarım',
        'HBYS ve kimlik sistemleriyle entegrasyon',
        'Uçtan uca denetim izi',
      ],
      useCases: ['Dijital onam süreçleri', 'Kâğıtsız hasta dosyası', 'Hastanede süreç otomasyonu'],
      pocApproach: 'Bir klinik süreçte dijital onam ve arşiv akışını uçtan uca doğrulayan pilotla başlarız.',
      faq: [
        {
          question: 'Kâğıtsız hastane gerçekten ne demektir?',
          answer:
            'Sadece belgeyi taramak değil; onamı doğrulamak, dosyayı güvenle yönetmek ve süreci denetlenebilir kılmak demektir.',
        },
      ],
      relatedProducts: ['ebiokec', 'dasbase'],
      relatedSolutions: ['dijital-kimlik-biyometri-ve-erisim', 'dijital-arsiv-ve-kurumsal-bilgi'],
    },
  },
]

/* ------------------------------------------------------------------ */
/* Products                                                           */
/* ------------------------------------------------------------------ */

export interface Product {
  slug: string
  name: string
  category: string
  icon: IconName
  tagline: string
  /** Featured in homepage product showcase tabs. */
  showcase?: boolean
  problem: string
  role: string
  proofs: string[]
  sectors: string[]
  imageAlt: string
  detail: DetailPage
}

export const products: Product[] = [
  {
    slug: 'dasbase',
    name: 'DASBase',
    category: 'Dijital Arşiv',
    icon: 'archive',
    tagline: 'Kurumsal belgeyi güvenli, aranabilir bilgiye dönüştüren dijital arşiv platformu.',
    showcase: true,
    problem: 'Belgeler dağınık, aranamaz ve denetlenemez halde; bilgiye erişim yavaş.',
    role: 'Fiziksel ve elektronik belgeleri tek bir yönetilen kurumsal hafızaya taşır.',
    proofs: ['OCR ve tam metin arama', 'RBAC ve yaşam döngüsü', 'AI destekli kaynaklı sorgu'],
    sectors: ['Kamu', 'Finans', 'Sağlık'],
    imageAlt: 'DASBase dijital arşiv arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Kurumsal belge hafızası dağınık; erişim yavaş, denetim zor ve bilgi kaybı riski yüksek.',
      audience: ['BT ve arşiv ekipleri', 'Kalite ve uyum yöneticileri', 'Doküman yoğun operasyonlar'],
      whyNow: 'Belge hacmi ve denetim baskısı arttıkça manuel arşiv sürdürülemez hale gelir.',
      howItWorks: [
        'Belgeler taranır, OCR ile aranabilir hale gelir ve metadata ile sınıflandırılır.',
        'RBAC ve yaşam döngüsü politikaları erişimi ve saklamayı yönetir.',
        'AI katmanı, kaynağı gösterilen kurumsal sorgular sunar.',
      ],
      flow: ['Belge girişi', 'Tarama & OCR', 'Sınıflandırma & metadata', 'Yetki & yaşam döngüsü', 'AI sorgu'],
      features: [
        { title: 'OCR & tam metin arama', description: 'Belgeler aranabilir metne dönüşür.' },
        { title: 'Metadata & taksonomi', description: 'Kurumsal sınıflandırma.' },
        { title: 'RBAC', description: 'Rol bazlı erişim kontrolü.' },
        { title: 'Yaşam döngüsü & WORM', description: 'Saklama ve imha kuralları.' },
        { title: 'Denetim izi', description: 'İzlenebilir erişim ve değişiklik.' },
        { title: 'AI bilgi katmanı', description: 'Kaynaklı kurumsal soru-cevap.' },
      ],
      integrationSecurity: ['On-premise / kapalı ağ', 'LDAP / AD entegrasyonu', 'Açık API', 'Şifreleme ve denetim izi'],
      useCases: ['Büyük ölçekli belge yönetimi', 'Dağıtık lokasyonlarda merkezi işleme', 'Denetime tabi arşiv'],
      pocApproach: 'Seçili belge tipi için sınırları tanımlı bir arşiv PoC’si.',
      faq: [
        { question: 'Veri göçü yapılabilir mi?', answer: 'Evet, doğrulama kriterleri tanımlı bir geçiş planıyla.' },
        { question: 'Kapalı ağda çalışır mı?', answer: 'Evet, tamamen on-premise senaryolar desteklenir.' },
      ],
      relatedProducts: ['voodoo-rpa'],
      relatedSolutions: ['dijital-arsiv-ve-kurumsal-bilgi'],
    },
  },
  {
    slug: 'vultureeye',
    name: 'VultureEYE',
    category: 'Video Yönetim Sistemi',
    icon: 'video',
    tagline: 'Federatif mimari ve harita tabanlı operasyonla merkezi video yönetimi.',
    showcase: true,
    problem: 'Dağınık kameralar bağlamsız görüntü üretiyor; operasyonel görünürlük düşük.',
    role: 'Lokasyonları ve kamera altyapılarını federatif bir operasyon katmanında birleştirir.',
    proofs: ['Federatif mimari', 'Harita tabanlı alarm', 'Açık API ve yüksek erişilebilirlik'],
    sectors: ['Enerji', 'Kamu', 'Şehir ve Kampüs'],
    imageAlt: 'VultureEYE VMS harita tabanlı operasyon arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Kamera sayısı arttıkça görünürlük azalıyor; alarmlar bağlamsız ve lokasyonlar kopuk.',
      audience: ['Güvenlik operasyon merkezleri', 'Kritik tesis yöneticileri', 'BT/altyapı ekipleri'],
      whyNow: 'Daha fazla kamera değil, daha fazla operasyonel görünürlük gerekir.',
      howItWorks: [
        'Farklı lokasyonlar federatif mimaride birleşir.',
        'Alarm harita üzerinde konumu ve görüntüsüyle gelir.',
        'Olay yaşam döngüsü ve roller ile müdahale yönetilir.',
      ],
      flow: ['Federasyon', 'Harita tabanlı alarm', 'İlgili görüntü', 'Olay yaşam döngüsü', 'Arşiv & dışa aktarma'],
      features: [
        { title: 'Federatif mimari', description: 'Merkezi kontrol + yerel özerklik.' },
        { title: 'Harita tabanlı alarm', description: 'Alarmın konumu haritada.' },
        { title: 'Olay yaşam döngüsü', description: 'Açılış, atama, kapanış.' },
        { title: 'Sistem sağlığı', description: 'Kamera ve altyapı durumu.' },
        { title: 'Arşiv & dışa aktarma', description: 'Kayıt ve delil yönetimi.' },
        { title: 'Açık API', description: 'Üçüncü taraf entegrasyonu.' },
      ],
      integrationSecurity: ['Yüksek erişilebilirlik', 'RBAC ve denetim izi', 'Açık API ile PSIM/SOC entegrasyonu'],
      useCases: ['Kritik tesiste birleşik VMS', 'Çoklu lokasyon güvenliği', 'Enerji altyapısı görünürlüğü'],
      pocApproach: 'Seçili lokasyonlarda federasyon ve alarm akışı pilotu.',
      faq: [{ question: 'Mevcut kameralar kullanılır mı?', answer: 'Federatif mimari farklı altyapıları birleştirmeyi hedefler.' }],
      relatedProducts: ['vision-qa'],
      relatedSolutions: ['video-yonetimi-ve-guvenlik-operasyonlari'],
    },
  },
  {
    slug: 'voodoo-rpa',
    name: 'VooDoo RPA',
    category: 'Robotik Süreç Otomasyonu',
    icon: 'workflow',
    tagline: 'Sıfır kod stüdyo ve bütünleşik konsolla tekrarlı işleri dijital iş gücüne devredin.',
    showcase: true,
    problem: 'Uzmanlar tekrarlı, kurallı işlere zaman harcıyor; hata ve maliyet artıyor.',
    role: 'Kurallı süreçleri katılımlı/katılımsız robotlarla otomatikleştirir.',
    proofs: ['Sıfır kod stüdyo', 'Katılımlı & katılımsız robot', 'Bütünleşik konsol ve REST API'],
    sectors: ['Finans', 'Kamu', 'Üretim ve Lojistik'],
    imageAlt: 'VooDoo RPA stüdyo ve robot konsolu — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Tekrarlı iş, hata oranını ve maliyeti doğrusal büyütür.',
      audience: ['Operasyon yöneticileri', 'Finans ekipleri', 'Süreç mükemmelliği ofisleri'],
      whyNow: 'Doğru aday süreç seçilerek otomasyon hızlı geri dönüş sağlar.',
      howItWorks: [
        'Aday süreç kural ve hacim açısından değerlendirilir.',
        'Stüdyoda düşük/sıfır kod robot tasarlanır.',
        'Robotlar bütünleşik konsoldan yönetilir ve izlenir.',
      ],
      flow: ['Aday analizi', 'Robot tasarımı', 'Test', 'Yaygınlaştırma', 'Konsol izleme'],
      features: [
        { title: 'Sıfır kod stüdyo', description: 'Görsel akış tasarımı.' },
        { title: 'Katılımlı & katılımsız', description: 'Masaüstü ve sunucu robotları.' },
        { title: 'Bütünleşik konsol', description: 'Merkezi zamanlama ve izleme.' },
        { title: 'REST API', description: 'Programatik entegrasyon.' },
        { title: 'Denetim & log', description: 'İzlenebilir adımlar.' },
      ],
      integrationSecurity: ['Uygulama/web entegrasyonu', 'Kimlik ve yetki yönetimi', 'Denetim izi'],
      useCases: ['Finansal mutabakat', 'Sistemler arası veri aktarımı', 'Yoğun operasyon otomasyonu'],
      pocApproach: 'İlk RPA adayını seçip ölçülebilir pilotla değer gösterme.',
      faq: [{ question: 'Hangi süreç uygundur?', answer: 'Kurallı, tekrarlı, yüksek hacimli, dijital girdi/çıktılı süreçler.' }],
      relatedProducts: ['dasbase'],
      relatedSolutions: ['akilli-surec-otomasyonu'],
    },
  },
  {
    slug: 'ebiokec',
    name: 'eBioKEC',
    category: 'Biyometrik Kimlik',
    icon: 'fingerprint',
    tagline: 'Kart, sertifika ve biyometriyle kimliği doğrulayan güvenli erişim çözümü.',
    showcase: true,
    problem: 'Kimliği görmek yeterli değil; doğrulanmayan işlemler uyum riski taşır.',
    role: 'Kimliği biyometri ve kartla doğrular, onayı denetim izine bağlar.',
    proofs: ['Biyometrik doğrulama', 'EKDS / NFC kart okuma', 'Denetim izi'],
    sectors: ['Telekom', 'Finans', 'Sağlık'],
    imageAlt: 'eBioKEC biyometrik kimlik doğrulama arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Sahtecilik ve yetkisiz erişim riskleri, kimliğin doğrulanmasını zorunlu kılıyor.',
      audience: ['Telekom/finans operasyonları', 'Erişim yönetimi', 'Uyum ekipleri'],
      whyNow: 'Kimliği doğrulamak ve onayı denetim izine bağlamak uyum için gereklidir.',
      howItWorks: [
        'Kimlik kart (NFC/EKDS) ve biyometri ile doğrulanır.',
        'Onay elektronik imza ve denetim izine bağlanır.',
        'Erişim ve mesai süreçleri güvenceye alınır.',
      ],
      flow: ['Kimlik yakalama', 'Kart/NFC doğrulama', 'Biyometrik doğrulama', 'Onay', 'Denetim izi'],
      features: [
        { title: 'Biyometrik doğrulama', description: 'Parmak/yüz gibi biyometri.' },
        { title: 'EKDS & NFC', description: 'Elektronik kimlik kartı okuma.' },
        { title: 'Elektronik imza bağlama', description: 'eBioSign ile onay.' },
        { title: 'PDKS entegrasyonu', description: 'Personel devam kontrol.' },
        { title: 'Denetim izi', description: 'İzlenebilir doğrulama.' },
      ],
      integrationSecurity: ['Kişisel veri koruma', 'Kimlik/erişim sistemleri entegrasyonu', 'Denetim izi'],
      useCases: ['Telekomda kimlik doğrulama', 'Sağlıkta dijital onam', 'Kurumsal erişim'],
      pocApproach: 'Bir kanalda doğrulama akışını uçtan uca doğrulayan pilot.',
      faq: [{ question: 'Hangi kartlar desteklenir?', answer: 'EKDS ve NFC tabanlı kimlik kartları hedeflenir; kapsam projede netleşir.' }],
      relatedSolutions: ['dijital-kimlik-biyometri-ve-erisim', 'saglikta-dijital-donusum'],
    },
  },
  {
    slug: 'vision-qa',
    name: 'Vision QA',
    category: 'Görüntü İşleme / Kalite',
    icon: 'scan-eye',
    tagline: 'Kamera görüntüsünü sayım, kalite ve anomali kararına dönüştüren görüntü zekâsı.',
    showcase: true,
    problem: 'Sayım ve kalite kontrol manuel ve hataya açık; ölçeklendikçe maliyet artar.',
    role: 'Görüntüyü karar üreten akıllı bir sensöre dönüştürür.',
    proofs: ['Nesne tespiti', 'Kalite doğrulama', 'Edge AI'],
    sectors: ['Üretim ve Lojistik', 'Savunma ve Havacılık'],
    imageAlt: 'Vision QA görüntü tabanlı kalite kontrol arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Manuel sayım/kalite kontrol tutarsız ve maliyetlidir.',
      audience: ['Üretim/kalite yöneticileri', 'Lojistik operasyonları', 'Tesis güvenliği'],
      whyNow: 'Görüntü tabanlı yapay zekâ tutarlı ve ölçülebilir karar sağlar.',
      howItWorks: [
        'Kamera akışları edge veya merkezi işlenir.',
        'Nesne tespiti ile sayım ve kalite kararı üretilir.',
        'Anomaliler operasyona iletilir.',
      ],
      flow: ['Görüntü yakalama', 'İşleme', 'Nesne tespiti', 'Karar', 'Bildirim'],
      features: [
        { title: 'Nesne tespiti', description: 'Gerçek zamanlı tespit.' },
        { title: 'Kalite doğrulama', description: 'Görüntü tabanlı QA.' },
        { title: 'Sayım (RPQ)', description: 'Otomatik sayım.' },
        { title: 'Edge AI', description: 'Düşük gecikmeli işleme.' },
        { title: 'Anomali tespiti', description: 'Beklenmeyen durumlar.' },
      ],
      integrationSecurity: ['Mevcut kamera altyapısı', 'VMS/iş sistemleri entegrasyonu', 'Veri gizliliği'],
      useCases: ['Üretimde kalite kontrol', 'Lojistikte sayım', 'Tesiste anomali tespiti'],
      pocApproach: 'Ölçülebilir doğruluk hedefiyle sınırları tanımlı görüntü PoC’si.',
      faq: [{ question: 'PoC başarısı nasıl ölçülür?', answer: 'Referans veriye karşı doğruluk ve yanlış pozitif/negatif oranıyla.' }],
      relatedProducts: ['vultureeye'],
      relatedSolutions: ['yapay-zeka-ve-goruntu-isleme'],
    },
  },
  {
    slug: 'ebiosign',
    name: 'eBioSign',
    category: 'Elektronik İmza',
    icon: 'badge-check',
    tagline: 'Doküman onayını biyometrik ve elektronik imzayla denetim izine bağlar.',
    problem: 'Doküman onayı izlenebilir ve doğrulanabilir değil.',
    role: 'Onayı elektronik/biyometrik imza ve denetim iziyle güvenceye alır.',
    proofs: ['Biyometrik imza', 'Denetim izi', 'Doküman bütünlüğü'],
    sectors: ['Telekom', 'Finans', 'Sağlık'],
    imageAlt: 'eBioSign elektronik imza arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Manuel onay izlenemez ve hukuki dayanağı zayıftır.',
      audience: ['Operasyon ve hukuk', 'Uyum ekipleri', 'Müşteri işlemleri'],
      whyNow: 'Elektronik onay hız ve izlenebilirlik sağlar.',
      howItWorks: ['Doküman hazırlanır.', 'Biyometrik/elektronik imza alınır.', 'Bütünlük ve denetim izi bağlanır.'],
      flow: ['Doküman', 'İmza', 'Bütünlük', 'Denetim izi'],
      features: [
        { title: 'Biyometrik imza', description: 'Biyometriyle onay.' },
        { title: 'Doküman bütünlüğü', description: 'Değişmezlik güvencesi.' },
        { title: 'Denetim izi', description: 'İzlenebilir onay.' },
      ],
      integrationSecurity: ['Kişisel veri koruma', 'Doküman sistemleri entegrasyonu', 'Denetim izi'],
      useCases: ['Elektronik sözleşme', 'Dijital onam', 'Kurumsal onay akışları'],
      pocApproach: 'Bir onay akışını uçtan uca doğrulayan pilot.',
      faq: [{ question: 'Hukuki geçerlilik nasıl sağlanır?', answer: 'İmza türü ve mevzuat uyumu proje kapsamında yetkililerce doğrulanır.' }],
      relatedProducts: ['ebiokec'],
      relatedSolutions: ['dijital-kimlik-biyometri-ve-erisim'],
    },
  },
  {
    slug: 'kimo',
    name: 'KimO',
    category: 'Kimlik Doğrulama',
    icon: 'fingerprint',
    tagline: 'Kimlik okuma ve doğrulamayı kurumsal süreçlere bağlayan çözüm.',
    problem: 'Kimlik okuma manuel ve süreçlerden kopuk.',
    role: 'Kimliği okur, doğrular ve iş sürecine bağlar.',
    proofs: ['Kimlik okuma', 'Doğrulama', 'Süreç entegrasyonu'],
    sectors: ['Telekom', 'Kamu'],
    imageAlt: 'KimO kimlik doğrulama arayüzü — ürün ekranı yer tutucusu',
    detail: {
      problem: 'Kimlik okuma tekil ve süreçlerden kopuk kalıyor.',
      audience: ['Müşteri işlemleri', 'Şube/bayi operasyonları', 'Uyum ekipleri'],
      whyNow: 'Doğrulanmış kimlik, işlemi güvenli ve denetlenebilir kılar.',
      howItWorks: ['Kimlik okunur.', 'Doğrulanır.', 'İş sürecine bağlanır.'],
      flow: ['Okuma', 'Doğrulama', 'Süreç bağlama'],
      features: [
        { title: 'Kimlik okuma', description: 'Kart ve belge okuma.' },
        { title: 'Doğrulama', description: 'Kimlik doğrulama.' },
        { title: 'Entegrasyon', description: 'Süreçlere bağlama.' },
      ],
      integrationSecurity: ['Kişisel veri koruma', 'Süreç entegrasyonu', 'Denetim izi'],
      useCases: ['Şube kimlik doğrulama', 'Bayi işlemleri', 'Kamu hizmet noktaları'],
      pocApproach: 'Bir işlem noktasında doğrulama akışını doğrulayan pilot.',
      faq: [{ question: 'Diğer ürünlerle çalışır mı?', answer: 'eBioKEC ve eBioSign ile birlikte uçtan uca kimlik-onay akışı kurulabilir.' }],
      relatedProducts: ['ebiokec', 'ebiosign'],
      relatedSolutions: ['dijital-kimlik-biyometri-ve-erisim'],
    },
  },
]

/* Homepage product showcase order (must match showcase products). */
export const showcaseProducts = products.filter((p) => p.showcase)

/* ------------------------------------------------------------------ */
/* Sectors                                                            */
/* ------------------------------------------------------------------ */

export interface Sector {
  slug: string
  name: string
  criticalProblem: string
  solutionCombo: string
  ctaLabel: string
  detail: DetailPage
}

export const sectors: Sector[] = [
  {
    slug: 'kamu',
    name: 'Kamu',
    criticalProblem: 'Güvenli belge, kimlik ve hizmet sürekliliği',
    solutionCombo: 'DASBase + Kimlik/KEC + Altyapı',
    ctaLabel: 'Kamu çözüm görüşmesi',
    detail: {
      problem: 'Kamu hizmetlerinde belge, kimlik ve hizmet sürekliliği yüksek güvenlik ve denetim gerektirir.',
      audience: ['Kamu BT yöneticileri', 'Kurum arşiv birimleri', 'Hizmet operasyonları'],
      whyNow: 'Artan denetim ve hizmet beklentileri, güvenli ve sürekli dijital altyapıyı zorunlu kılar.',
      howItWorks: [
        'Belge ve kimlik süreçleri güvenli arşiv ve doğrulama ile yönetilir.',
        'Altyapı ve süreklilik mimarisi hizmet kesintisini azaltır.',
      ],
      flow: ['Belge/kimlik', 'Güvenli arşiv & doğrulama', 'Altyapı & süreklilik', 'Denetim izi'],
      features: [
        { title: 'Güvenli arşiv', description: 'DASBase ile denetlenebilir belge.' },
        { title: 'Kimlik doğrulama', description: 'KEC ile güvenli erişim.' },
        { title: 'İş sürekliliği', description: 'Altyapı ve FKM.' },
      ],
      integrationSecurity: ['On-premise / kapalı ağ', 'Kurumsal kimlik entegrasyonu', 'Denetim izi'],
      useCases: ['Kamu belge yönetimi', 'Hizmet noktalarında kimlik', 'Kritik altyapı sürekliliği'],
      pocApproach: 'Bir hizmet sürecinde güvenli belge ve kimlik akışı pilotu.',
      faq: [{ question: 'Kapalı ağda çalışır mı?', answer: 'Evet, kamu senaryoları için kapalı ağ desteklenir.' }],
      relatedSolutions: ['dijital-arsiv-ve-kurumsal-bilgi', 'dijital-kimlik-biyometri-ve-erisim'],
    },
  },
  {
    slug: 'savunma-ve-havacilik',
    name: 'Savunma ve Havacılık',
    criticalProblem: 'İzlenebilirlik, kalite ve tesis güvenliği',
    solutionCombo: 'Vision QA + VultureEYE + Arşiv',
    ctaLabel: 'Saha keşfi',
    detail: {
      problem: 'İzlenebilirlik, kalite doğrulama ve tesis güvenliği en yüksek disiplini gerektirir.',
      audience: ['Kalite ve üretim', 'Tesis güvenliği', 'Konfigürasyon yönetimi'],
      whyNow: 'Hata ve güvenlik açıkları kritik sonuçlar doğurabilir; izlenebilirlik zorunludur.',
      howItWorks: ['Kalite görüntüyle doğrulanır.', 'Tesis federatif VMS ile izlenir.', 'Kayıtlar güvenli arşivlenir.'],
      flow: ['Kalite doğrulama', 'Tesis izleme', 'Güvenli arşiv', 'İzlenebilirlik'],
      features: [
        { title: 'Vision QA', description: 'Kalite doğrulama.' },
        { title: 'VultureEYE', description: 'Tesis güvenliği.' },
        { title: 'Arşiv', description: 'İzlenebilir kayıt.' },
      ],
      integrationSecurity: ['Kapalı ağ', 'Sıkı erişim kontrolü', 'Denetim izi'],
      useCases: ['Üretim kalite izlenebilirliği', 'Tesis güvenliği', 'Konfigürasyon kaydı'],
      pocApproach: 'Bir hatta kalite ve izlenebilirlik pilotu.',
      faq: [{ question: 'Kapalı ağ mümkün mü?', answer: 'Evet, tamamen kapalı ağ senaryoları desteklenir.' }],
      relatedProducts: ['vision-qa', 'vultureeye'],
    },
  },
  {
    slug: 'finans',
    name: 'Finans',
    criticalProblem: 'Güvenli erişim, operasyon otomasyonu ve denetim',
    solutionCombo: 'RPA + Arşiv + Biyometri + Güvenlik',
    ctaLabel: 'Fırsat analizi',
    detail: {
      problem: 'Yoğun operasyon, denetim baskısı ve güvenli erişim aynı anda yönetilmeli.',
      audience: ['Operasyon', 'Uyum ve denetim', 'Bilgi güvenliği'],
      whyNow: 'Manuel operasyon ve dağınık erişim hem maliyet hem risk üretir.',
      howItWorks: ['Tekrarlı işler RPA ile otomatikleşir.', 'Erişim biyometriyle güvenceye alınır.', 'Belge ve denetim arşivle yönetilir.'],
      flow: ['Otomasyon', 'Güvenli erişim', 'Arşiv & denetim', 'Güvenlik izleme'],
      features: [
        { title: 'VooDoo RPA', description: 'Operasyon otomasyonu.' },
        { title: 'Biyometrik erişim', description: 'Güvenli kimlik.' },
        { title: 'Arşiv & denetim', description: 'İzlenebilir kayıt.' },
      ],
      integrationSecurity: ['Kimlik ve erişim yönetimi', 'SIEM/EDR', 'Denetim izi'],
      useCases: ['Mutabakat otomasyonu', 'Güvenli müşteri işlemleri', 'Denetim ve raporlama'],
      pocApproach: 'Bir operasyon sürecinde otomasyon ve denetim pilotu.',
      faq: [{ question: 'Mevcut sistemlerle entegre mi?', answer: 'Açık API ve entegrasyon katmanıyla mevcut sistemlere bağlanır.' }],
      relatedProducts: ['voodoo-rpa', 'ebiokec'],
    },
  },
  {
    slug: 'saglik',
    name: 'Sağlık',
    criticalProblem: 'Dijital onam, hasta dosyası ve kâğıtsız süreç',
    solutionCombo: 'e-Kimlik + Arşiv + RPA + AI',
    ctaLabel: 'Dönüşüm çalıştayı',
    detail: {
      problem: 'Onam, hasta dosyası ve süreçler hâlâ kâğıda ve manuel adımlara bağlı.',
      audience: ['Hastane yönetimi', 'Sağlık BT', 'Hasta hakları/uyum'],
      whyNow: 'Kâğıtsız hastane, onamın doğrulanmasını ve dosyanın erişilebilirliğini gerektirir.',
      howItWorks: ['Kimlik ve onam doğrulanır.', 'Dosya dijital arşivde yönetilir.', 'Süreçler otomatikleşir.'],
      flow: ['Kimlik & onam', 'Dijital dosya', 'Otomasyon', 'Denetim izi'],
      features: [
        { title: 'Dijital onam', description: 'e-Kimlik ile onam.' },
        { title: 'Hasta dosyası arşivi', description: 'Güvenli dosya.' },
        { title: 'Süreç otomasyonu', description: 'RPA ile kâğıtsız süreç.' },
      ],
      integrationSecurity: ['Sağlık verisi koruma', 'HBYS entegrasyonu', 'Denetim izi'],
      useCases: ['Dijital onam', 'Kâğıtsız dosya', 'Süreç otomasyonu'],
      pocApproach: 'Bir klinik süreçte onam ve arşiv pilotu.',
      faq: [{ question: 'Kâğıtsız hastane ne demek?', answer: 'Taramaktan öte; onamı doğrulamak, dosyayı yönetmek ve süreci denetlenebilir kılmaktır.' }],
      relatedProducts: ['ebiokec', 'dasbase'],
      relatedSolutions: ['saglikta-dijital-donusum'],
    },
  },
  {
    slug: 'enerji-ve-kritik-altyapi',
    name: 'Enerji ve Kritik Altyapı',
    criticalProblem: 'Dağıtık tesis görünürlüğü ve iş sürekliliği',
    solutionCombo: 'VultureEYE + Altyapı + Siber Güvenlik',
    ctaLabel: 'Mimari değerlendirme',
    detail: {
      problem: 'Dağıtık tesislerde görünürlük ve süreklilik eksik; olaya müdahale yavaş.',
      audience: ['Operasyon merkezleri', 'BT/OT ekipleri', 'Güvenlik yönetimi'],
      whyNow: 'Kritik altyapıda kesinti ve güvenlik açığı yüksek maliyetlidir.',
      howItWorks: ['Tesisler federatif VMS ile izlenir.', 'Altyapı süreklilik için tasarlanır.', 'Siber güvenlik bütünleşir.'],
      flow: ['Tesis izleme', 'Süreklilik mimarisi', 'Siber güvenlik', 'Merkezi görünürlük'],
      features: [
        { title: 'VultureEYE', description: 'Dağıtık görünürlük.' },
        { title: 'Altyapı & FKM', description: 'İş sürekliliği.' },
        { title: 'Siber güvenlik', description: 'EDR/XDR/SIEM.' },
      ],
      integrationSecurity: ['OT/IT entegrasyonu', 'Yüksek erişilebilirlik', 'Denetim izi'],
      useCases: ['Dağıtık tesis izleme', 'İş sürekliliği', 'Merkezi güvenlik operasyonu'],
      pocApproach: 'Seçili tesislerde görünürlük ve süreklilik pilotu.',
      faq: [{ question: 'OT sistemleriyle çalışır mı?', answer: 'Entegrasyon katmanı OT/IT birleşimini hedefler; kapsam projede netleşir.' }],
      relatedProducts: ['vultureeye'],
      relatedSolutions: ['bt-altyapisi-ve-siber-guvenlik'],
    },
  },
  {
    slug: 'telekom',
    name: 'Telekom',
    criticalProblem: 'Kimlik doğrulama ve elektronik sözleşme',
    solutionCombo: 'eBioKEC + eBioSign + KimO',
    ctaLabel: 'Teknik uygunluk görüşmesi',
    detail: {
      problem: 'Abone kazanımında kimlik doğrulama ve elektronik sözleşme hız ve uyum gerektirir.',
      audience: ['Kanal operasyonları', 'Uyum', 'Müşteri deneyimi'],
      whyNow: 'Manuel süreç, sahtecilik riski ve yavaş onay maliyet üretir.',
      howItWorks: ['Kimlik doğrulanır.', 'Sözleşme elektronik imzalanır.', 'Süreç denetim izine bağlanır.'],
      flow: ['Kimlik', 'Doğrulama', 'e-Sözleşme', 'Denetim izi'],
      features: [
        { title: 'eBioKEC', description: 'Kimlik doğrulama.' },
        { title: 'eBioSign', description: 'Elektronik sözleşme.' },
        { title: 'KimO', description: 'Kimlik okuma.' },
      ],
      integrationSecurity: ['Kişisel veri koruma', 'Kanal sistemleri entegrasyonu', 'Denetim izi'],
      useCases: ['Abone kazanımı', 'Elektronik sözleşme', 'Kanal doğrulama'],
      pocApproach: 'Bir kanalda kimlik-imza akışı pilotu.',
      faq: [{ question: 'Bayilerde çalışır mı?', answer: 'Kanal ve bayi noktalarında çalışacak şekilde tasarlanır.' }],
      relatedProducts: ['ebiokec', 'ebiosign', 'kimo'],
    },
  },
  {
    slug: 'uretim-ve-lojistik',
    name: 'Üretim ve Lojistik',
    criticalProblem: 'Sayım, kalite, sevkiyat ve tekrar eden iş',
    solutionCombo: 'RPQ + Vision QA + RPA',
    ctaLabel: 'PoC görüşmesi',
    detail: {
      problem: 'Sayım, kalite ve sevkiyat manuel; hata ve tekrar iş maliyet üretir.',
      audience: ['Üretim/kalite', 'Lojistik', 'Operasyon'],
      whyNow: 'Görüntü zekâsı ve otomasyon tutarlılık ve hız sağlar.',
      howItWorks: ['Sayım/kalite görüntüyle üretilir.', 'Tekrarlı işler RPA ile otomatikleşir.'],
      flow: ['Görüntü sayım/kalite', 'Otomasyon', 'Sevkiyat doğrulama', 'Raporlama'],
      features: [
        { title: 'RPQ', description: 'Görüntü tabanlı sayım.' },
        { title: 'Vision QA', description: 'Kalite doğrulama.' },
        { title: 'VooDoo RPA', description: 'Süreç otomasyonu.' },
      ],
      integrationSecurity: ['ERP/WMS entegrasyonu', 'Kamera altyapısı', 'Denetim izi'],
      useCases: ['Sayım otomasyonu', 'Kalite kontrol', 'Sevkiyat doğrulama'],
      pocApproach: 'Bir hatta sayım/kalite doğruluk pilotu.',
      faq: [{ question: 'Mevcut ERP ile entegre mi?', answer: 'Açık API ile ERP/WMS entegrasyonu hedeflenir.' }],
      relatedProducts: ['vision-qa', 'voodoo-rpa'],
    },
  },
  {
    slug: 'akilli-sehir-ve-kampus',
    name: 'Akıllı Şehir ve Kampüs',
    criticalProblem: 'Çoklu lokasyon güvenliği ve erişim',
    solutionCombo: 'VultureEYE + PDKS + Biyometri',
    ctaLabel: 'Çözüm keşfi',
    detail: {
      problem: 'Çoklu lokasyonda güvenlik ve erişim yönetimi dağınık ve zor izlenebilir.',
      audience: ['Kampüs/şehir yönetimi', 'Güvenlik operasyonları', 'BT ekipleri'],
      whyNow: 'Büyüyen lokasyon sayısı, merkezi görünürlük ve erişim kontrolü gerektirir.',
      howItWorks: ['Lokasyonlar federatif VMS ile izlenir.', 'Erişim biyometri ve PDKS ile yönetilir.'],
      flow: ['Lokasyon izleme', 'Erişim yönetimi', 'Merkezi görünürlük', 'Denetim izi'],
      features: [
        { title: 'VultureEYE', description: 'Çoklu lokasyon güvenliği.' },
        { title: 'PDKS', description: 'Erişim ve mesai.' },
        { title: 'Biyometri', description: 'Güvenli kimlik.' },
      ],
      integrationSecurity: ['Merkezi kimlik', 'Yüksek erişilebilirlik', 'Denetim izi'],
      useCases: ['Kampüs güvenliği', 'Şehir lokasyonları', 'Erişim kontrolü'],
      pocApproach: 'Seçili lokasyonlarda güvenlik ve erişim pilotu.',
      faq: [{ question: 'Kaç lokasyona ölçeklenir?', answer: 'Federatif mimari çok sayıda lokasyonu merkezî yönetmeyi hedefler.' }],
      relatedProducts: ['vultureeye'],
    },
  },
]

/* ------------------------------------------------------------------ */
/* Insights                                                           */
/* ------------------------------------------------------------------ */

export interface Insight {
  slug: string
  title: string
  excerpt: string
  category: string
  readingTime: string
  body: string[]
}

export const insights: Insight[] = [
  {
    slug: 'daha-cok-kamera-neden-daha-cok-gorunurluk-degildir',
    title: 'Daha çok kamera neden daha çok görünürlük değildir?',
    excerpt:
      'Kamera sayısı operasyonel görünürlüğün tek başına ölçüsü değildir. Bağlam, alarm yönetimi ve federasyon farkı belirler.',
    category: 'Güvenlik Operasyonları',
    readingTime: '5 dk',
    body: [
      'Kamera eklemek görüntü hacmini artırır; ancak operatör bir olayı ne kadar hızlı görüp doğru müdahale ettiğini belirleyen şey bağlamdır.',
      'Bağlamsız görüntü operatörü yorar. Alarmın konumunu haritada göstermek, ilgili görüntüyü otomatik getirmek ve olay yaşam döngüsünü yönetmek gerçek görünürlüğü sağlar.',
      'Federatif mimari, farklı lokasyon ve altyapıları merkezi kontrol ile yerel özerkliği dengeleyerek tek operasyon katmanında birleştirir.',
    ],
  },
  {
    slug: 'tarama-yapmak-neden-dijital-donusum-degildir',
    title: 'Tarama yapmak neden dijital dönüşüm değildir?',
    excerpt: 'Belge taramak ilk adımdır; bilgi yönetilmeden, anlaşılmadan ve sürece taşınmadan dönüşüm tamamlanmaz.',
    category: 'Kurumsal Bilgi',
    readingTime: '6 dk',
    body: [
      'Tarama, belgeyi dijital bir görüntüye çevirir; ancak aranabilir, sınıflandırılmış ve yetkilendirilmiş olmadan bu yalnızca bir yığındır.',
      'Metadata, OCR, yaşam döngüsü ve RBAC ile belge kurumsal hafızaya oturur.',
      'Yapay zekâ katmanı, kaynağı gösterilen sorgularla bilgiyi aksiyona bağlar.',
    ],
  },
  {
    slug: 'ilk-rpa-adayinizi-secmek-icin-10-soru',
    title: 'İlk RPA adayınızı seçmek için 10 soru',
    excerpt: 'Doğru ilk süreç, otomasyonun geri dönüşünü belirler. Aday değerlendirmede sorulması gereken sorular.',
    category: 'Otomasyon',
    readingTime: '7 dk',
    body: [
      'İyi bir ilk aday; kurallı, tekrarlı, yüksek hacimli ve dijital girdi/çıktısı olan bir süreçtir.',
      'Sürecin istisna oranı, sistem bağımlılıkları ve denetlenebilirliği değerlendirilmelidir.',
      'Ölçülebilir bir başarı kriteri belirlenmeden başlanan otomasyon, değerini kanıtlayamaz.',
    ],
  },
  {
    slug: 'kimligi-gormek-ile-kimligi-dogrulamak-arasindaki-fark',
    title: 'Kimliği görmek ile kimliği doğrulamak arasındaki fark',
    excerpt: 'Belgeyi görmek yeterli değildir. Kart, sertifika ve biyometriyle doğrulama uyum ve güven getirir.',
    category: 'Dijital Kimlik',
    readingTime: '5 dk',
    body: [
      'Kimliği görmek, yalnızca sunulan belgeyi gözlemlemektir; sahtecilik veya yetkisiz erişimi engellemez.',
      'Doğrulama; kart (NFC/EKDS), sertifika ve biyometri ile kimliğin gerçekliğini kanıtlar.',
      'Onayı denetim izine bağlamak, işlemi hem güvenli hem izlenebilir kılar.',
    ],
  },
  {
    slug: 'goruntu-tabanli-sayim-pocsinde-basari-nasil-olculur',
    title: 'Görüntü tabanlı sayım PoC’sinde başarı nasıl ölçülür?',
    excerpt: 'Görüntü zekâsı PoC’lerinde başarıyı doğruluk, hata oranı ve operasyonel etki birlikte tanımlar.',
    category: 'Yapay Zekâ',
    readingTime: '6 dk',
    body: [
      'Başarı, referans bir veri kümesine karşı doğrulukla başlar.',
      'Yanlış pozitif ve yanlış negatif oranları, operasyonel etkiyi belirler.',
      'PoC baştan kapsam, veri, süre ve KPI ile tanımlanmalıdır.',
    ],
  },
  {
    slug: 'kagitsiz-hastane-gercekten-ne-demektir',
    title: 'Kâğıtsız hastane gerçekten ne demektir?',
    excerpt: 'Kâğıtsız hastane; taramanın ötesinde onamın doğrulanması, dosyanın erişilebilirliği ve sürecin izlenebilirliğidir.',
    category: 'Sağlık',
    readingTime: '6 dk',
    body: [
      'Kâğıtsızlaşma, yalnızca belgeyi taramak değildir.',
      'Onamın doğrulanması, hasta dosyasının güvenle yönetilmesi ve sürecin denetlenebilir olması gerekir.',
      'Kimlik doğrulama, arşiv ve otomasyon birlikte çalıştığında gerçek kâğıtsız süreç kurulur.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Success stories — anonymized, no invented metrics                  */
/* ------------------------------------------------------------------ */

export interface SuccessStory {
  slug: string
  title: string
  sector: string
  problem: string
  approach: string
  scope: string[]
  /** Explicitly labeled as expectation, not a measured result. */
  outcome: string
  outcomeLabel: 'PoC hedefi' | 'Beklenen iş etkisi' | 'Ölçülen sonuç'
}

export const successStories: SuccessStory[] = [
  {
    slug: 'buyuk-olcekli-kurumsal-belge-yonetimi',
    title: 'Büyük ölçekli kurumsal belge yönetimi',
    sector: 'Kamu / Finans',
    problem: 'Milyonlarca sayfalık arşiv aranamaz ve denetlenemez durumdaydı.',
    approach: 'Merkezi dijital arşiv, OCR, metadata ve RBAC ile kurumsal hafıza kuruldu.',
    scope: ['DASBase', 'OCR & metadata', 'RBAC & yaşam döngüsü'],
    outcome: 'Belgeye erişimde hız ve denetlenebilirlik artışı hedeflenmektedir.',
    outcomeLabel: 'Beklenen iş etkisi',
  },
  {
    slug: 'dagitik-lokasyonlarda-merkezi-belge-isleme',
    title: 'Dağıtık lokasyonlarda merkezi belge işleme',
    sector: 'Kamu',
    problem: 'Farklı lokasyonlarda belge süreçleri birbirinden kopuk yürüyordu.',
    approach: 'Belge akışı merkezi bir arşiv ve iş akışı katmanında birleştirildi.',
    scope: ['DASBase', 'İş akışı', 'Entegrasyon'],
    outcome: 'Lokasyonlar arası tutarlılık ve merkezi denetim sağlanması hedeflenmektedir.',
    outcomeLabel: 'PoC hedefi',
  },
  {
    slug: 'yogun-operasyonlarda-robotik-surec-otomasyonu',
    title: 'Yoğun operasyonlarda robotik süreç otomasyonu',
    sector: 'Finans',
    problem: 'Yüksek hacimli tekrarlı işlemler manuel yürütülüyordu.',
    approach: 'Aday süreçler seçildi ve VooDoo RPA ile robotlara devredildi.',
    scope: ['VooDoo RPA', 'Konsol izleme', 'REST API'],
    outcome: 'Tekrarlı iş yükünde azalma ve hata oranında iyileşme beklenmektedir.',
    outcomeLabel: 'Beklenen iş etkisi',
  },
  {
    slug: 'kritik-tesislerde-birlesik-video-yonetimi',
    title: 'Kritik tesislerde birleşik video yönetimi',
    sector: 'Enerji',
    problem: 'Dağıtık tesislerdeki kamera altyapıları merkezi olarak izlenemiyordu.',
    approach: 'Lokasyonlar VultureEYE federatif mimarisinde birleştirildi.',
    scope: ['VultureEYE', 'Federasyon', 'Harita tabanlı alarm'],
    outcome: 'Olay müdahale süresinde iyileşme ve merkezi görünürlük hedeflenmektedir.',
    outcomeLabel: 'PoC hedefi',
  },
]

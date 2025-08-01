// Type for supported languages
export type Language = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'ru' | 'ja' | 'ko' | 'zh' | 'ar' | 'hi' | 'bn' | 'ur' | 'id' | 'ms' | 'th' | 'vi' | 'tr' | 'pl' | 'cs' | 'sk' | 'hu' | 'ro' | 'bg' | 'hr' | 'sr' | 'sl' | 'et' | 'lv' | 'lt' | 'fi' | 'sv' | 'no' | 'da' | 'is' | 'el' | 'he' | 'fa' | 'ta' | 'te' | 'ml' | 'kn' | 'gu' | 'pa' | 'or' | 'as' | 'mr' | 'ne' | 'si' | 'my' | 'km' | 'lo' | 'ka' | 'am' | 'sw' | 'zu' | 'af' | 'xh' | 'st' | 'tn' | 'ss' | 've' | 'ts' | 'nr';

// Interface for translations
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Translations for UI elements
export const translations: Translations = {
  // Header and navigation
  navigation: {
    en: 'Home',
    nl: 'Home',
    de: 'Startseite',
    fr: 'Accueil',
    es: 'Inicio',
    it: 'Home',
    pt: 'Início',
    ru: 'Главная',
    ja: 'ホーム',
    ko: '홈',
    zh: '首页',
    ar: 'الرئيسية',
    hi: 'होम',
    bn: 'হোম',
    ur: 'ہوم',
    id: 'Beranda',
    ms: 'Laman Utama',
    th: 'หน้าแรก',
    vi: 'Trang chủ',
    tr: 'Ana Sayfa',
    pl: 'Strona główna',
    cs: 'Domů',
    sk: 'Domov',
    hu: 'Főoldal',
    ro: 'Acasă',
    bg: 'Начало',
    hr: 'Početna',
    sr: 'Почетна',
    sl: 'Domov',
    et: 'Kodu',
    lv: 'Sākums',
    lt: 'Pradžia',
    fi: 'Koti',
    sv: 'Hem',
    no: 'Hjem',
    da: 'Hjem',
    is: 'Heim',
    el: 'Αρχική',
    he: 'בית',
    fa: 'خانه',
    ta: 'முகப்பு',
    te: 'హోమ్',
    ml: 'ഹോം',
    kn: 'ಮನೆ',
    gu: 'હોમ',
    pa: 'ਘਰ',
    or: 'ଘର',
    as: 'ঘৰ',
    mr: 'मुख्यपृष्ठ',
    ne: 'गृह',
    si: 'මුල් පිටුව',
    my: 'မူလစာမျက်နှာ',
    km: 'ទំព័រដើម',
    lo: 'ໜ້າຫຼັກ',
    ka: 'მთავარი',
    am: 'ዋና ገጽ',
    sw: 'Nyumbani',
    zu: 'Ikhaya',
    af: 'Tuis',
    xh: 'Ikhaya',
    st: 'Hae',
    tn: 'Legae',
    ss: 'Likhaya',
    ve: 'Hayani',
    ts: 'Kaya',
    nr: 'Ikhaya'
  },
  features: {
    en: 'Features',
    nl: 'Functies'
  },
  app: {
    en: 'App',
    nl: 'App'
  },
  pricing: {
    en: 'Pricing',
    nl: 'Prijzen'
  },
  team: {
    en: 'Team',
    nl: 'Team'
  },
  status: {
    en: 'Status',
    nl: 'Status'
  },
  blog: {
    en: 'Blog',
    nl: 'Blog'
  },
  docs: {
    en: 'Docs',
    nl: 'Docs'
  },
  joinBeta: {
    en: 'Join Beta',
    nl: 'Beta Testen'
  },
  register: {
    en: 'Register',
    nl: 'Registreren'
  },
  dashboard: {
    en: 'App',
    nl: 'App'
  },
  preview: {
    en: 'App',
    nl: 'App'
  },
  language: {
    en: 'Language:',
    nl: 'Taal:'
  },
  english: {
    en: 'English',
    nl: 'Engels'
  },
  dutch: {
    en: 'Dutch',
    nl: 'Nederlands'
  },
  darkMode: {
    en: 'Dark Mode',
    nl: 'Donkere Modus'
  },
  lightMode: {
    en: 'Light Mode',
    nl: 'Lichte Modus'
  },
  joinBetaProgram: {
    en: 'Join Beta Program',
    nl: 'Doe Mee met Beta'
  },
  goToDashboard: {
    en: 'Go to Dashboard',
    nl: 'Ga naar Dashboard'
  },
  
  // Features component
  featuresTitle: {
    en: 'Everything you need to keep tabs on your digital world',
    nl: 'Alles wat je nodig hebt om je digitale wereld in de gaten te houden'
  },
  featuresSubtitle: {
    en: 'We\'ve built PulseGuard to be simple yet powerful. Our features are designed for real people with real monitoring needs - from solo developers to large teams.',
    nl: 'We hebben PulseGuard ontwikkeld om eenvoudig maar krachtig te zijn. Onze functies zijn ontworpen voor echte mensen met echte monitoringbehoeften - van individuele ontwikkelaars tot grote teams.'
  },
  whatWeOffer: {
    en: 'What we offer',
    nl: 'Wat we bieden'
  },
  
  // Website Monitoring
  webMonitoringTitle: {
    en: 'Website Monitoring',
    nl: 'Website Monitoring'
  },
  webMonitoringDesc: {
    en: 'We regularly check your websites and notify you immediately if they go offline. No more angry customer emails.',
    nl: 'We controleren je websites regelmatig en laten je meteen weten als ze offline zijn. Geen boze klant-emails meer.'
  },
  httpMonitoring: {
    en: 'HTTP/HTTPS status monitoring',
    nl: 'HTTP/HTTPS status monitoring'
  },
  responseTime: {
    en: 'Response time tracking',
    nl: 'Responstijd bijhouden'
  },
  checkIntervals: {
    en: 'Custom check intervals',
    nl: 'Aangepaste controle-intervallen'
  },
  
  // SSL Monitoring
  sslMonitoringTitle: {
    en: 'SSL Certificate Monitoring',
    nl: 'SSL Certificaat Monitoring'
  },
  sslMonitoringDesc: {
    en: 'Never miss an SSL certificate expiration again. We\'ll remind you with plenty of time to renew before your visitors see those scary browser warnings.',
    nl: 'Mis nooit meer een verlopen SSL-certificaat. We herinneren je ruim op tijd zodat je bezoekers geen enge browserwaarschuwingen zien.'
  },
  certExpiration: {
    en: 'Certificate expiration alerts',
    nl: 'Certificaat verloopmeldingen'
  },
  dayWarnings: {
    en: '30, 14, and 7-day warnings',
    nl: '30, 14, en 7-daagse waarschuwingen'
  },
  certDetails: {
    en: 'Certificate details overview',
    nl: 'Certificaatdetails overzicht'
  },
  
  // Hero component
  heroBeta: {
    en: "WE'RE IN BETA",
    nl: 'WE ZIJN IN BETA'
  },
  heroTitle: {
    en: 'Your digital peacemaker',
    nl: 'Your digital peacemaker'
  },
  heroSubtitle: {
    en: 'Professional uptime monitoring, health tracking, and security checks of both services and domains.',
    nl: 'Professionele uptime monitoring, status tracking en security checks van zowel services als domeinen.'
  },
  heroCtaPrimary: {
    en: 'See what it can do',
    nl: 'Bekijk de mogelijkheden'
  },
  heroCtaSecondary: {
    en: 'Try it free',
    nl: 'Probeer gratis'
  },
  heroAlerts: {
    en: 'Get alerts your way:',
    nl: 'Ontvang meldingen op jouw manier:'
  },
  heroTrustedBy: {
    en: 'Trusted by:',
    nl: 'Vertrouwd door:'
  },
  
  // Demo section
  liveDemo: {
    en: 'Live Demo',
    nl: 'Live Demo'
  },
  tryOurLiveDemo: {
    en: 'Try Our',
    nl: 'Probeer Onze'
  },
  liveDemoDescription: {
    en: 'Experience PulseGuard firsthand with our interactive demo. See how easy it is to monitor your websites and servers in real-time.',
    nl: 'Ervaar PulseGuard uit eerste hand met onze interactieve demo. Zie hoe gemakkelijk het is om je websites en servers in real-time te monitoren.'
  },
  
  // Features page
  featuresSectionTitle: {
    en: 'Complete Monitoring Solution',
    nl: 'Volledige Monitoring Oplossing'
  },
  featuresSectionSubtitle: {
    en: 'Professional tools for website, server, and infrastructure monitoring, designed for businesses of any size. Monitor your digital assets with comprehensive alerting and reporting capabilities.',
    nl: 'Professionele tools voor website-, server- en infrastructuurmonitoring, ontworpen voor bedrijven van elke omvang. Bewaak uw digitale middelen met uitgebreide waarschuwings- en rapportagemogelijkheden.'
  },
  serverMonitoringTitle: {
    en: 'Server Monitoring',
    nl: 'Server Monitoring'
  },
  serverMonitoringDesc: {
    en: 'Keep track of your server resources. Our lightweight agent provides insights without slowing down your system.',
    nl: 'Houd uw serverbronnen in de gaten. Onze lichtgewicht agent geeft u inzichten zonder uw systeem te vertragen.'
  },
  serverCpu: {
    en: 'CPU, memory, and disk usage',
    nl: 'CPU-, geheugen- en schijfgebruik'
  },
  serverNetwork: {
    en: 'Network traffic monitoring',
    nl: 'Netwerkverkeer monitoring'
  },
  serverProcess: {
    en: 'Process monitoring',
    nl: 'Procesmonitoring'
  },
  cronjobMonitoringTitle: {
    en: 'Cronjob Monitoring',
    nl: 'Cronjob Monitoring'
  },
  cronjobMonitoringDesc: {
    en: "Those background tasks that silently fail? We'll make sure they don't go unnoticed. Set expected run times and get alerted when things don't go as planned.",
    nl: 'Die achtergrondtaken die stilzwijgend mislukken? Wij zorgen ervoor dat ze niet onopgemerkt blijven. Stel verwachte draaitijden in en word gewaarschuwd als het misgaat.'
  },
  cronjobHeartbeat: {
    en: 'Heartbeat monitoring',
    nl: 'Hartslagmonitoring'
  },
  cronjobSchedule: {
    en: 'Expected run schedule',
    nl: 'Verwacht draaischema'
  },
  cronjobMissed: {
    en: 'Missed execution alerts',
    nl: 'Gemiste uitvoeringswaarschuwingen'
  },
  smartNotificationsTitle: {
    en: 'Smart Notifications',
    nl: 'Slimme Notificaties'
  },
  smartNotificationsDesc: {
    en: 'Get alerts where you actually check them.',
    nl: 'Krijg meldingen waar je ze daadwerkelijk controleert.'
  },
  alertChannels: {
    en: 'Multiple notification channels',
    nl: 'Meerdere notificatiekanalen'
  },
  alertThresholds: {
    en: 'Customizable alert thresholds',
    nl: 'Aanpasbare waarschuwingsdrempels'
  },
  alertScheduling: {
    en: 'Notification scheduling',
    nl: 'Notificatieplanning'
  },
  statusPageTitle: {
    en: 'Status Page',
    nl: 'Statuspagina'
  },
  statusPageDesc: {
    en: "Share your uptime with your team or customers. Our clean status pages give transparency and build trust with your users.",
    nl: 'Deel uw uptime met uw team of klanten. Onze overzichtelijke statuspaginas bieden transparantie en bouwen vertrouwen op bij uw gebruikers.'
  },
  statusPagePublic: {
    en: 'Public or private status pages',
    nl: 'Openbare of privé-statuspaginas'
  },
  statusPageBranding: {
    en: 'Customizable branding',
    nl: 'Aanpasbare branding'
  },
  statusPageReports: {
    en: 'Historical uptime reports',
    nl: 'Historische uptime-rapporten'
  },
  showMoreFeatures: {
    en: 'Discover more features',
    nl: 'Ontdek meer functies'
  },

  // Footer
  footerRateUs: {
    en: 'Rate us on Product Hunt',
    nl: 'Beoordeel ons op Product Hunt'
  },
  footerJoinBeta: {
    en: 'Join Our Beta',
    nl: 'Doe mee met onze Bèta'
  },
  footerGetStarted: {
    en: 'Get Started',
    nl: 'Begin nu'
  },
  footerDescription: {
    en: 'Your digital peacemaker.',
    nl: 'Jouw digitale peacemaker.'
  },
  footerLinks: {
    en: 'Links',
    nl: 'Links'
  },
  footerHome: {
    en: 'Home',
    nl: 'Home'
  },
  footerAppPreview: {
    en: 'App Preview',
    nl: 'App Voorbeeld'
  },
  footerOurTeam: {
    en: 'Our Team',
    nl: 'Ons Team'
  },
  footerPlatform: {
    en: 'Platform',
    nl: 'Platform'
  },
  footerDomains: {
    en: 'Domains',
    nl: 'Domeinen'
  },
  footerDevices: {
    en: 'Devices',
    nl: 'Apparaten'
  },
  footerSubscriptions: {
    en: 'Subscriptions',
    nl: 'Abonnementen'
  },
  footerSupport: {
    en: 'Support',
    nl: 'Ondersteuning'
  },
  footerHelpCenter: {
    en: 'Help Center',
    nl: 'Helpcentrum'
  },
  footerPrivacyPolicy: {
    en: 'Privacy Policy',
    nl: 'Privacybeleid'
  },
  footerTerms: {
    en: 'Terms & Conditions',
    nl: 'Algemene Voorwaarden'
  },
  footerCopyright: {
    en: 'All rights reserved.',
    nl: 'Alle rechten voorbehouden.'
  },

  // Pricing component
  pricingTitle: {
    en: 'Transparent pricing',
    nl: 'Transparante prijzen'
  },
  pricingSubtitle: {
    en: 'Choose the package that suits your monitoring needs.',
    nl: 'Kies het pakket dat bij jouw monitoringbehoeften past.'
  },
  cardView: {
    en: 'Card View',
    nl: 'Kaartweergave'
  },
  comparisonTable: {
    en: 'Comparison Table',
    nl: 'Vergelijkingstabel'
  },
  freePlan: {
    en: 'Free',
    nl: 'Gratis'
  },
  standardPlan: {
    en: 'Standard',
    nl: 'Standaard'
  },
  proPlan: {
    en: 'Pro',
    nl: 'Pro'
  },
  enterprisePlan: {
    en: 'Enterprise',
    nl: 'Zakelijk'
  },
  perMonth: {
    en: '/month',
    nl: '/maand'
  },
  forPersonalUse: {
    en: 'For personal use',
    nl: 'Voor persoonlijk gebruik'
  },
  forSmallWebsites: {
    en: 'For small websites',
    nl: 'Voor kleine websites'
  },
  forProfessionals: {
    en: 'For professionals',
    nl: 'Voor professionals'
  },
  forLargeOrg: {
    en: 'For large organizations',
    nl: 'Voor grote organisaties'
  },
  startFree: {
    en: 'Start free',
    nl: 'Begin gratis'
  },
  startNow: {
    en: 'Start now',
    nl: 'Begin nu'
  },
  contactSales: {
    en: 'Contact Sales',
    nl: 'Contact opnemen'
  },
  getStarted: {
    en: 'Get Started',
    nl: 'Begin nu'
  },
  freeStart: {
    en: 'Start for Free',
    nl: 'Begin gratis'
  },
  chooseStandard: {
    en: 'Choose Standard',
    nl: 'Kies Standard'
  },
  choosePro: {
    en: 'Choose Pro',
    nl: 'Kies Pro'
  },
  mostPopular: {
    en: 'Most Popular',
    nl: 'Meest Populair'
  },
  save: {
    en: 'Save',
    nl: 'Bespaar'
  },
  trial: {
    en: 'days trial',
    nl: 'dagen proefperiode'
  },
  contactUs: {
    en: 'Contact Us',
    nl: 'Neem contact op'
  },

  // Pricing Page
  pricingPageTitle: {
    en: 'Choose Your Monitoring Plan',
    nl: 'Kies Je Monitoringplan'
  },
  pricingPageSubtitle: {
    en: 'Start free and upgrade as you grow. All plans include our core monitoring features.',
    nl: 'Begin gratis en upgrade naarmate je groeit. Alle plannen bevatten onze kernfuncties voor monitoring.'
  },
  compareAll: {
    en: 'Compare All',
    nl: 'Vergelijk Alles'
  },
  // Free Plan
  freePlanTitle: {
    en: 'Free',
    nl: 'Gratis'
  },
  freePlanDesc: {
    en: 'For personal use',
    nl: 'Voor persoonlijk gebruik'
  },
  freeDomains: {
    en: '2 domains (without page resources)',
    nl: '2 domeinen (zonder paginabronnen)'
  },
  freeDevice: {
    en: '1 device (monitoring only)',
    nl: '1 apparaat (alleen monitoring)'
  },
  freeService: {
    en: '1 Service (full)',
    nl: '1 Service (volledig)'
  },
  pulseAI: {
    en: 'PulseAI',
    nl: 'PulseAI'
  },
  toolbox: {
    en: 'Toolbox',
    nl: 'Toolbox'
  },
  freeReports: {
    en: 'Reports (without email notifications)',
    nl: 'Rapportages (zonder e-mailnotificaties)'
  },
  statusPage: {
    en: 'Status Page',
    nl: 'Statuspagina'
  },
  integrations: {
    en: 'Integrations',
    nl: 'Integraties'
  },
  apiAccess: {
    en: 'API Access',
    nl: 'API Toegang'
  },
  accessibility: {
    en: 'Accessibility (WCAG & SEO)',
    nl: 'Toegankelijkheid (WCAG & SEO)'
  },
  // Standard Plan
  standardPlanTitle: {
    en: 'Standard',
    nl: 'Standaard'
  },
  standardPlanDesc: {
    en: 'For small businesses',
    nl: 'Voor kleine bedrijven'
  },
  standardPriceSub: {
    en: 'for the first 6 months, then €7,50/month',
    nl: 'voor de eerste 6 maanden, daarna €7,50/maand'
  },
  standardDomains: {
    en: '5 domains (full)',
    nl: '5 domeinen (volledig)'
  },
  standardDevices: {
    en: '2 devices (full)',
    nl: '2 apparaten (volledig)'
  },
  standardServices: {
    en: '3 Services (full)',
    nl: '3 Services (volledig)'
  },
  standardReports: {
    en: 'Reports (with email notifications)',
    nl: 'Rapportages (met e-mailnotificaties)'
  },
  oneStatusPage: {
    en: '1 Status Page',
    nl: '1 Statuspagina'
  },
  toolboxDns: {
    en: 'Toolbox (DNS only)',
    nl: 'Toolbox (alleen DNS)'
  },
  emailNotifications: {
    en: 'Email Notifications',
    nl: 'E-mail Notificaties'
  },
  telegram: {
    en: 'Telegram',
    nl: 'Telegram'
  },
  // Pro Plan
  proPlanTitle: {
    en: 'Pro',
    nl: 'Pro'
  },
  proPlanDesc: {
    en: 'For professionals',
    nl: 'Voor professionals'
  },
  proPriceSub: {
    en: 'for the first 6 months, then €15/month',
    nl: 'voor de eerste 6 maanden, daarna €15/maand'
  },
  proDomains: {
    en: '10 domains (full)',
    nl: '10 domeinen (volledig)'
  },
  proDevices: {
    en: '7 devices (full)',
    nl: '7 apparaten (volledig)'
  },
  proServices: {
    en: '5 Services (full)',
    nl: '5 Services (volledig)'
  },
  reports: {
    en: 'Reports',
    nl: 'Rapportages'
  },
  mfa: {
    en: 'MFA',
    nl: 'MFA'
  },
  proToolbox: {
    en: 'Toolbox (DNS, IP, Speedtest)',
    nl: 'Toolbox (DNS, IP, Speedtest)'
  },
  proToolboxDesc: {
    en: 'Toolbox (DNS, IP, Speedtest)',
    nl: 'Toolbox (DNS, IP, Speedtest)'
  },
  // Enterprise Plan
  enterprisePlanTitle: {
    en: 'Enterprise',
    nl: 'Zakelijk'
  },
  enterprisePrice: {
    en: 'Custom',
    nl: 'Aangepast'
  },
  enterpriseDesc: {
    en: 'Customize your plan',
    nl: 'Stel uw plan op maat samen'
  },
  enterpriseDomainsLabel: {
    en: 'Domains',
    nl: 'Domeinen'
  },
  enterpriseDevicesLabel: {
    en: 'Devices',
    nl: 'Apparaten'
  },
  enterpriseServicesLabel: {
    en: 'Services',
    nl: 'Diensten'
  },
  enterpriseDomains: {
    en: '{count}+ Domains',
    nl: '{count}+ Domeinen'
  },
  enterpriseDevices: {
    en: '{count}+ devices',
    nl: '{count}+ apparaten'
  },
  enterpriseServices: {
    en: '{count}+ Services',
    nl: '{count}+ Diensten'
  },
  organizationRoles: {
    en: 'Organization & Team Roles',
    nl: 'Organisatie & Teamrollen'
  },
  fullToolbox: {
    en: 'Full Toolbox',
    nl: 'Volledige Toolbox'
  },
  telegramEmailNotif: {
    en: 'Telegram & Email Notifications',
    nl: 'Telegram & E-mail Notificaties'
  },
  // Table
  feature: {
    en: 'Feature',
    nl: 'Functie'
  },
  popular: {
    en: 'Popular',
    nl: 'Populair'
  },
  save16: {
    en: 'Save 16.7%',
    nl: 'Bespaar 16,7%'
  },
  save20: {
    en: 'Save 20%',
    nl: 'Bespaar 20%'
  },
  daysTrial: {
    en: '7-day trial',
    nl: '7 dagen proef'
  },
  trialAndPromo: {
    en: '7-day trial & 6 months discount',
    nl: '7 dagen proef & 6 maanden korting'
  },
  reportsWithoutEmail: {
    en: 'Reports (without email notifications)',
    nl: 'Rapportages (zonder e-mailnotificaties)'
  },

  // Team page
  teamSeoTitle: {
    en: 'Meet Our Team - PulseGuard Monitoring Experts | About Us',
    nl: 'Ontmoet Ons Team - PulseGuard Monitoring Experts | Over Ons'
  },
  teamSeoDescription: {
    en: 'Meet the talented PulseGuard team. Experienced developers and designers building the best website and server monitoring solution. Learn about our mission and expertise.',
    nl: 'Maak kennis met het getalenteerde PulseGuard team. Ervaren ontwikkelaars en ontwerpers die de beste website- en servermonitoringoplossing bouwen. Leer meer over onze missie en expertise.'
  },
  teamSeoKeywords: {
    en: 'PulseGuard team, monitoring experts, development team, about us, company team, monitoring developers, infrastructure experts',
    nl: 'PulseGuard team, monitoring experts, ontwikkelingsteam, over ons, bedrijfsteam, monitoring ontwikkelaars, infrastructuur experts'
  },
  ourTeam: {
    en: 'Our Team',
    nl: 'Ons Team'
  },
  meetTheTeam: {
    en: 'Meet The Team Behind PulseGuard',
    nl: 'Ontmoet Het Team Achter PulseGuard'
  },
  teamDescription: {
    en: 'The individuals behind PulseGuard, dedicated to providing you with the best monitoring solutions.',
    nl: 'De individuen achter PulseGuard, gemotiveerd om jou de beste monitoringoplossingen te bieden.'
  },
  joinUs: {
    en: 'Join Us',
    nl: 'Doe Mee'
  },
  growingTeam: {
    en: "We're Growing Our Team",
    nl: 'We Breiden Ons Team Uit'
  },
  joinUsDescription: {
    en: "We're always looking for talented individuals who are passionate about creating great software. If you think you'd be a good fit for our team, we'd love to hear from you!",
    nl: 'We zijn altijd op zoek naar getalenteerde mensen die gepassioneerd zijn over het maken van geweldige software. Als je denkt dat je goed bij ons team zou passen, horen we graag van je!'
  },
  getInTouch: {
    en: 'Get in touch',
    nl: 'Neem contact op'
  },

  // FAQ Section
  faqTitle: {
    en: 'Frequently Asked Questions',
    nl: 'Veelgestelde Vragen'
  },
  faqSubtitle: {
    en: 'Find answers to common questions about our monitoring service',
    nl: 'Vind antwoorden op veelgestelde vragen over onze monitoringservice'
  },
  faqContactText: {
    en: "Couldn't find what you're looking for?",
    nl: 'Kon je niet vinden wat je zocht?'
  },
  faqContactLink: {
    en: 'Contact our team',
    nl: 'Neem contact op met ons team'
  },

  // FAQ Questions and Answers
  faqWhatIs: {
    en: 'What is PulseGuard?',
    nl: 'Wat is PulseGuard?'
  },
  faqWhatIsAnswer: {
    en: 'PulseGuard is a user-friendly platform that monitors your websites, servers and SSL certificates, with real-time notifications via email, Telegram or Slack.',
    nl: 'PulseGuard is een gebruiksvriendelijk platform dat uw websites, servers en SSL-certificaten monitort, met realtime meldingen via e-mail, Telegram of Slack.'
  },
  faqWhyChoose: {
    en: 'Why should you choose PulseGuard?',
    nl: 'Waarom zou u voor PulseGuard kiezen?'
  },
  faqWhyChooseAnswer: {
    en: 'With PulseGuard you continuously monitor your websites and servers, quickly detect problems and receive instant notifications.',
    nl: 'Met PulseGuard houdt u uw websites en servers continu in de gaten, signaleert u problemen snel en ontvangt u direct meldingen.'
  },
  faqPricing: {
    en: 'What are the prices?',
    nl: 'Wat zijn de prijzen?'
  },
  faqPricingAnswer: {
    en: 'You can find the prices on our website. One of our options is the Pro plan, which includes many additional features and costs €12.50 per month for the first 6 months.',
    nl: 'De prijzen kunt u vinden op onze website. Een van onze opties is het Pro-plan, dat veel extra functionaliteiten omvat en de eerste 6 maanden €12,50 per maand kost.'
  },
  faqHowToUse: {
    en: 'How do you use PulseGuard?',
    nl: 'Hoe gebruikt u PulseGuard?'
  },
  faqHowToUseAnswer: {
    en: 'You create an account on pulseguard.nl, log in, add a monitor and get immediate insight into your domains.',
    nl: 'U maakt een account aan op pulseguard.nl, logt in, voegt een monitor toe en krijgt direct inzicht in uw domeinen.'
  },
  faqOrigin: {
    en: 'How did PulseGuard come about?',
    nl: 'Hoe is PulseGuard onstaan?'
  },
  faqOriginAnswer: {
    en: 'PulseGuard was created because the existing offerings did not meet our needs. That\'s why we developed PulseGuard to make reliable monitoring accessible to everyone.',
    nl: 'PulseGuard is ontstaan omdat het bestaande aanbod niet voldeed aan onze wensen. Daarom hebben wij PulseGuard ontwikkeld om betrouwbare monitoring voor iedereen toegankelijk te maken.'
  },
  // PulseFiles page translations
  pulseFilesTitle: {
    en: 'PulseFiles',
    nl: 'PulseFiles'
  },
  pulseFilesSubtitle: {
    en: 'Part of PulseGuard',
    nl: 'Onderdeel van PulseGuard'
  },
  pulseFilesHeroTitle: {
    en: 'PulseFiles',
    nl: 'PulseFiles'
  },
  pulseFilesHeroDescription: {
    en: 'Share files securely and temporarily with end-to-end encryption. Dutch datacenter, automatically deleted after 7 days.',
    nl: 'Deel bestanden veilig en tijdelijk met end-to-end encryptie. Nederlands datacenter, automatisch verwijderd na 7 dagen.'
  },
  pulseFilesHeroButtonPrimary: {
    en: 'Start now for free',
    nl: 'Begin nu gratis'
  },
  pulseFilesHeroButtonSecondary: {
    en: 'More information',
    nl: 'Meer informatie'
  },
  pulseFilesNewFeature: {
    en: 'New: End-to-end encrypted file sharing',
    nl: 'Nieuw: End-to-end geëncrypte bestandsdeling'
  },
  pulseFilesSecureText: {
    en: 'secure',
    nl: 'veilig'
  },
  pulseFilesTemporaryText: {
    en: 'temporary',
    nl: 'tijdelijk'
  },
  // Features section
  pulseFilesFeaturesTitle: {
    en: 'Why choose PulseFiles?',
    nl: 'Waarom kiezen voor PulseFiles?'
  },
  pulseFilesFeaturesSubtitle: {
    en: 'The most secure and user-friendly way to share files',
    nl: 'De meest veilige en gebruiksvriendelijke manier om bestanden te delen'
  },
  pulseFilesFeatureEncryptedTitle: {
    en: 'Fully Encrypted',
    nl: 'Volledig Geëncrypt'
  },
  pulseFilesFeatureEncryptedDesc: {
    en: 'All files are encrypted with AES-256-CBC encryption. Even we cannot view your files.',
    nl: 'Alle bestanden worden geëncrypt met AES-256-CBC encryptie. Zelfs wij kunnen uw bestanden niet bekijken.'
  },
  pulseFilesFeatureEncryptedBadge: {
    en: 'End-to-end security',
    nl: 'End-to-end beveiliging'
  },
  pulseFilesFeatureDatacenterTitle: {
    en: 'Dutch Datacenter',
    nl: 'Nederlandse Datacenter'
  },
  pulseFilesFeatureDatacenterDesc: {
    en: 'Your data is stored in secure datacenters in the Netherlands, GDPR compliant.',
    nl: 'Uw data wordt opgeslagen in beveiligde datacenters in Nederland, conform GDPR-wetgeving.'
  },
  pulseFilesFeatureDatacenterBadge: {
    en: '100% GDPR compliant',
    nl: '100% GDPR compliant'
  },
  pulseFilesFeatureAutoDeleteTitle: {
    en: 'Automatically Deleted',
    nl: 'Automatisch Verwijderd'
  },
  pulseFilesFeatureAutoDeleteDesc: {
    en: 'Files are automatically deleted after 7 days (or earlier if set by you).',
    nl: 'Bestanden worden automatisch verwijderd na 7 dagen (of eerder indien door u ingesteld).'
  },
  pulseFilesFeatureAutoDeleteBadge: {
    en: 'No permanent storage',
    nl: 'Geen permanente opslag'
  },
  pulseFilesFeatureZeroKnowledgeTitle: {
    en: 'Zero Knowledge',
    nl: 'Zero Knowledge'
  },
  pulseFilesFeatureZeroKnowledgeDesc: {
    en: 'We do not store files permanently. Everything is temporarily stored for secure transfer.',
    nl: 'We bewaren geen bestanden permanent. Alles wordt tijdelijk opgeslagen voor veilige overdracht.'
  },
  pulseFilesFeatureZeroKnowledgeBadge: {
    en: 'Maximum privacy',
    nl: 'Maximale privacy'
  },
  pulseFilesFeatureOpenSourceTitle: {
    en: 'Open Source',
    nl: 'Open Source'
  },
  pulseFilesFeatureOpenSourceDesc: {
    en: 'Full transparency - all code is open source and publicly available for review.',
    nl: 'Volledige transparantie - alle code is open source en publiek beschikbaar voor controle.'
  },
  pulseFilesFeatureOpenSourceBadge: {
    en: '100% transparent',
    nl: '100% transparant'
  },
  pulseFilesFeatureNoTrackingTitle: {
    en: 'No Tracking',
    nl: 'Geen Tracking'
  },
  pulseFilesFeatureNoTrackingDesc: {
    en: 'We do not track you and do not sell data. Your privacy is central to everything we do.',
    nl: 'We volgen u niet en verkopen geen data. Uw privacy staat centraal in alles wat we doen.'
  },
  pulseFilesFeatureNoTrackingBadge: {
    en: 'Privacy first',
    nl: 'Privacy first'
  },
  // Mockup form translations
  pulseFilesSelectFileLabel: {
    en: 'Select File or Folder',
    nl: 'Selecteer Bestand of Map'
  },
  pulseFilesSelectFileLabelShort: {
    en: 'Select File/Folder',
    nl: 'Selecteer Bestand/Map'
  },
  pulseFilesNoFileSelected: {
    en: 'No file selected',
    nl: 'Geen bestand gekozen'
  },
  pulseFilesChooseFile: {
    en: 'Choose File',
    nl: 'Kies Bestand'
  },
  pulseFilesChooseFolder: {
    en: 'Choose Folder',
    nl: 'Kies Map'
  },
  pulseFilesShareMethod: {
    en: 'Share Method',
    nl: 'Deelmethode'
  },
  pulseFilesSendViaEmail: {
    en: 'Send via Email',
    nl: 'Verstuur via E-mail'
  },
  pulseFilesEmail: {
    en: 'Email',
    nl: 'E-mail'
  },
  pulseFilesGenerateLinkOnly: {
    en: 'Generate Link Only',
    nl: 'Genereer Alleen Link'
  },
  pulseFilesLinkOnly: {
    en: 'Link Only',
    nl: 'Alleen Link'
  },
  pulseFilesRecipients: {
    en: 'Recipients (max 3)',
    nl: 'Ontvangers (max 3)'
  },
  pulseFilesRecipientsShort: {
    en: 'Recipients',
    nl: 'Ontvangers'
  },
  pulseFilesAddRecipient: {
    en: 'Add Recipient',
    nl: 'Ontvanger Toevoegen'
  },
  pulseFilesAdvancedSettings: {
    en: 'Advanced Settings',
    nl: 'Geavanceerde Instellingen'
  },
  pulseFilesAdvanced: {
    en: 'Advanced',
    nl: 'Geavanceerd'
  },
  pulseFilesUploadAndEmail: {
    en: 'Upload & Email',
    nl: 'Upload & E-mail'
  },
  pulseFilesUpload: {
    en: 'Upload',
    nl: 'Upload'
  },
  // CTA section
  pulseFilesCtaTitle: {
    en: 'Ready to share files securely?',
    nl: 'Klaar om veilig bestanden te delen?'
  },
  pulseFilesCtaSecure: {
    en: 'secure',
    nl: 'veilig'
  },
  pulseFilesCtaDescription: {
    en: 'Start uploading your files immediately with end-to-end encryption and automatic deletion',
    nl: 'Begin direct met het uploaden van uw bestanden met end-to-end encryptie en automatische verwijdering'
  },
  pulseFilesCtaButtonPrimary: {
    en: 'Start now for free',
    nl: 'Begin nu gratis'
  },
  pulseFilesCtaFree: {
    en: '100% Free',
    nl: '100% Gratis'
  },
  pulseFilesCtaFullyEncrypted: {
    en: 'Fully encrypted',
    nl: 'Volledig geëncrypt'
  },
  pulseFilesCtaDutchServers: {
    en: 'Dutch servers',
    nl: 'Nederlandse servers'
  },
  pulseFilesCtaAutoDelete: {
    en: 'Auto-delete after 7 days',
    nl: 'Auto-delete na 7 dagen'
  },
  pulseFilesCtaFooter: {
    en: 'No registration required • No tracking • Open source',
    nl: 'Geen registratie vereist • Geen tracking • Open source'
  }
};

// Translation function
export const translate = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
}; 
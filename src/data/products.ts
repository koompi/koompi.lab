// Lab package pricing
export const LAB_PACKAGE_PRICES: Record<'10' | '15' | '20', number> = {
  '10': 8000,
  '15': 11500,
  '20': 15000,
}

// Add-on prices
export const CONTENT_SERVER_ADDON_PRICE = 2500
export const MOBILE_CLASSROOM_PRICE = 1800
export const MINISTATION_PRICE = 5000

// Installation pricing
export const FUND_INSTALL_PHNOM_PENH = 500
export const FUND_INSTALL_PROVINCE = 800

// Impact statistics (Source: MOEYS Cambodia 2024)
// Total government schools: 13,818 (4,651 kindergartens + 7,348 primary + 1,819 secondary)
export const IMPACT_STATS = {
  labsInstalled: 65,
  schoolsWithoutLabs: 13753, // 13,818 - 65
  provincesReached: 25,
  studentsImpacted: 15000,
  teachersTrained: 320,
}

// Lab features for Onelab page
export interface LabFeature {
  icon: string
  title: string
  description: string
  image?: string
  large?: boolean
  link?: string
  linkLabel?: string
}

export const LAB_FEATURES: LabFeature[] = [
  {
    icon: '💻',
    title: 'KOOMPI Computers',
    description: '20 durable, energy-efficient computers designed for classrooms',
  },
  {
    icon: '📚',
    title: 'ICT Curriculum',
    description: 'Complete digital literacy curriculum aligned with Ministry standards',
  },
  {
    icon: '👨‍🏫',
    title: 'Teacher Training',
    description: 'Comprehensive training for teachers on digital tools and methods',
  },
  {
    icon: '🔧',
    title: '3-Year Support',
    description: 'Maintenance, technical support, and replacement parts included',
  },
  {
    icon: '🌐',
    title: 'Offline Content',
    description: 'Works without internet - pre-loaded with educational resources',
  },
  {
    icon: '⚡',
    title: 'Low Power Usage',
    description: 'Designed for areas with unreliable electricity',
  },
]

// How it works steps
export interface HowItWorksStep {
  step: string
  title: string
  description: string
  icon?: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Select a School',
    description: 'Browse schools waiting for support and choose one to fund',
  },
  {
    step: '02',
    title: 'Choose Package',
    description: 'Select lab size (10, 15, or 20 computers) and add-ons',
  },
  {
    step: '03',
    title: 'Make Donation',
    description: 'Contribute the full amount or partial - we match donors',
  },
  {
    step: '04',
    title: 'Installation',
    description: 'We handle delivery, setup, and teacher training',
  },
  {
    step: '05',
    title: 'Updates & Impact',
    description: 'Receive photos, stories, and impact reports from the school',
  },
]

// Onelab FAQ
export const ONELAB_FAQ = [
  {
    question: 'What does a KOOMPI Onelab include?',
    answer: 'Each Onelab includes KOOMPI computers, tables, chairs, networking equipment, ICT curriculum, teacher training, and 3 years of maintenance support.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Installation typically takes 1-2 weeks after funding is complete, including setup and teacher training.',
  },
  {
    question: 'Can I visit the school I helped fund?',
    answer: 'Yes! We coordinate visits with schools. Many donors meet students and teachers to see the impact firsthand.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Every lab comes with 3 years of support. Our team handles repairs and provides replacement parts when needed.',
  },
  {
    question: 'Do schools pay anything?',
    answer: 'Schools provide a secure room and basic furniture. We cover everything else through donor support.',
  },
]

// Content Server FAQ
export const CONTENT_SERVER_FAQ = [
  {
    question: 'What is the KOOMPI Content Server?',
    answer: 'It\'s a local server that stores educational content, making it accessible without internet. It includes Khan Academy videos, Wikipedia, CK-12 textbooks, and Khmer-language content.',
  },
  {
    question: 'How much content is included?',
    answer: 'Over 1TB of educational content including 10,000+ videos, 50,000+ articles, interactive exercises, and full offline Wikipedia.',
  },
  {
    question: 'Does it work with existing computers?',
    answer: 'Yes! The Content Server works with any computer or tablet with a web browser. No special software needed.',
  },
  {
    question: 'How is content updated?',
    answer: 'We provide periodic updates via USB drive or during support visits. New content is added regularly.',
  },
  {
    question: 'Is Khmer language content included?',
    answer: 'Yes! We include Wiki Khmer, Khmer-language educational videos, and translated curriculum materials.',
  },
]

// OS Features
// OS features for OS page
export const OS_FEATURES: LabFeature[] = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Optimized for older hardware, KOOMPI OS runs smoothly on computers with just 2GB RAM',
  },
  {
    icon: '🇰🇭',
    title: 'Khmer Language',
    description: 'Full Khmer language support with fonts, input methods, and localized applications',
  },
  {
    icon: '📦',
    title: 'Pre-installed Apps',
    description: 'Comes with LibreOffice, Firefox, educational software, and content server client',
  },
  {
    icon: '🔒',
    title: 'Secure & Stable',
    description: 'Linux-based architecture with automatic updates and virus protection built-in',
  },
  {
    icon: '🎓',
    title: 'Education Ready',
    description: 'Designed for schools with classroom management tools and student-friendly interface',
  },
  {
    icon: '💾',
    title: 'Low Storage',
    description: 'Requires only 16GB of storage, leaving room for documents and media',
  },
]

// OS FAQ
export const OS_FAQ = [
  {
    question: 'Is KOOMPI OS really free?',
    answer: 'Yes! KOOMPI OS is 100% free and open source. Download, install, and use it on as many computers as you want.',
  },
  {
    question: 'Can I install Windows software?',
    answer: 'KOOMPI OS uses Linux, so Windows software won\'t run directly. But we have alternatives for most common applications like LibreOffice instead of Microsoft Office.',
  },
  {
    question: 'Will it work on my old computer?',
    answer: 'KOOMPI OS is designed for older computers. Minimum requirements: 2GB RAM, 16GB storage, dual-core processor.',
  },
  {
    question: 'How do I get support?',
    answer: 'Free community support is available online. Paid support packages are available for schools and organizations.',
  },
  {
    question: 'Can I dual-boot with Windows?',
    answer: 'Yes! You can install KOOMPI OS alongside Windows and choose which one to use when you start your computer.',
  },
]

// Content Server package pricing
export const CONTENT_SERVER_PACKAGE_PRICE = 3500

// Popular lab configurations
export const POPULAR_CONFIGS = [
  {
    name: 'Starter Lab',
    computers: 10,
    contentServer: false,
    price: 8000,
    description: 'Perfect for small schools starting their digital journey',
  },
  {
    name: 'Standard Lab',
    computers: 15,
    contentServer: true,
    price: 16500,
    description: 'Our most popular package with offline content access',
    popular: true,
  },
  {
    name: 'Premium Lab',
    computers: 20,
    contentServer: true,
    price: 21000,
    description: 'Maximum impact for larger schools',
  },
]

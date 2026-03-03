export interface App {
  id: string
  name: string
  developer: string
  description: string
  oneLiner: string
  category: 'education' | 'sports' | 'utility' | 'games' | 'tools'
  rating?: number
  reviewCount: number
  tags: string[]
  offlineReady: boolean
  khmerLanguage: boolean
  madeInCambodia?: boolean
  new?: boolean
  downloads: {
    windows?: { url: string; size: string }
    linux?: { url: string; size: string }
    macos?: { url: string; size: string }
    android?: { url: string; size: string }
    iso?: { url: string; size: string }
  }
}

export interface AppCategory {
  id: string
  name: string
  icon: string
}

export const APP_CATEGORIES: AppCategory[] = [
  { id: 'all', name: 'All', icon: '📱' },
  { id: 'offline', name: 'Offline Ready', icon: '📴' },
  { id: 'khmer', name: 'ខ្មែរ', icon: '🇰🇭' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'utility', name: 'Utility', icon: '🔧' },
  { id: 'games', name: 'Games', icon: '🎮' },
  { id: 'tools', name: 'Tools', icon: '🛠️' },
]

export const APPS: App[] = [
  {
    id: 'koompi-wiki',
    name: 'Wiki Khmer',
    developer: 'KOOMPI',
    description: 'Complete Khmer-language encyclopedia with offline support. Access thousands of articles on science, history, culture, and more without internet connection.',
    oneLiner: 'Khmer encyclopedia that works offline',
    category: 'education',
    rating: 4.8,
    reviewCount: 234,
    tags: ['encyclopedia', 'khmer', 'education', 'offline'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    new: true,
    downloads: {
      linux: { url: '#', size: '250 MB' },
      windows: { url: '#', size: '280 MB' },
      android: { url: '#', size: '150 MB' },
    },
  },
  {
    id: 'koompi-math',
    name: 'Math Practice',
    developer: 'KOOMPI',
    description: 'Interactive math learning app with exercises for grades 1-12. Includes algebra, geometry, and calculus with step-by-step solutions.',
    oneLiner: 'Learn math with interactive exercises',
    category: 'education',
    rating: 4.6,
    reviewCount: 189,
    tags: ['math', 'education', 'practice', 'exercises'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    downloads: {
      linux: { url: '#', size: '120 MB' },
      windows: { url: '#', size: '140 MB' },
      android: { url: '#', size: '80 MB' },
    },
  },
  {
    id: 'koompi-science',
    name: 'Science Lab',
    developer: 'KOOMPI',
    description: 'Virtual science laboratory with physics, chemistry, and biology experiments. Safe, interactive, and aligned with curriculum.',
    oneLiner: 'Virtual laboratory for science experiments',
    category: 'education',
    rating: 4.7,
    reviewCount: 156,
    tags: ['science', 'physics', 'chemistry', 'biology', 'lab'],
    offlineReady: true,
    khmerLanguage: true,
    downloads: {
      linux: { url: '#', size: '200 MB' },
      windows: { url: '#', size: '220 MB' },
    },
  },
  {
    id: 'koompi-english',
    name: 'English Learning',
    developer: 'KOOMPI',
    description: 'Learn English from Khmer with interactive lessons, vocabulary builders, and pronunciation guides. Perfect for beginners to advanced learners.',
    oneLiner: 'Learn English with Khmer instructions',
    category: 'education',
    rating: 4.5,
    reviewCount: 312,
    tags: ['english', 'language', 'learning', 'khmer'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    downloads: {
      linux: { url: '#', size: '180 MB' },
      windows: { url: '#', size: '200 MB' },
      android: { url: '#', size: '100 MB' },
    },
  },
  {
    id: 'football-khmer',
    name: 'Football Khmer',
    developer: 'KOOMPI',
    description: 'Football (soccer) tracking app with Cambodian league standings, player stats, and match schedules. Includes training drills and rules.',
    oneLiner: 'Cambodian football at your fingertips',
    category: 'sports',
    rating: 4.4,
    reviewCount: 98,
    tags: ['football', 'soccer', 'sports', 'cambodia'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    new: true,
    downloads: {
      android: { url: '#', size: '50 MB' },
    },
  },
  {
    id: 'volleyball-tracker',
    name: 'Volleyball Tracker',
    developer: 'KOOMPI',
    description: 'Track volleyball scores, player statistics, and match history. Perfect for school tournaments and PE classes.',
    oneLiner: 'Score tracking for volleyball matches',
    category: 'sports',
    rating: 4.3,
    reviewCount: 67,
    tags: ['volleyball', 'sports', 'tracking', 'scores'],
    offlineReady: true,
    khmerLanguage: false,
    downloads: {
      android: { url: '#', size: '35 MB' },
    },
  },
  {
    id: 'koompi-file-manager',
    name: 'File Manager',
    developer: 'KOOMPI',
    description: 'Simple file manager for organizing documents, photos, and downloads. Built-in file preview and easy sharing options.',
    oneLiner: 'Organize your files easily',
    category: 'utility',
    rating: 4.2,
    reviewCount: 145,
    tags: ['files', 'manager', 'organization'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    downloads: {
      linux: { url: '#', size: '15 MB' },
    },
  },
  {
    id: 'koompi-calculator',
    name: 'Calculator',
    developer: 'KOOMPI',
    description: 'Scientific calculator with basic and advanced functions. History tape, unit conversion, and Khmer number display option.',
    oneLiner: 'Scientific calculator with Khmer support',
    category: 'utility',
    rating: 4.6,
    reviewCount: 234,
    tags: ['calculator', 'math', 'utility', 'khmer'],
    offlineReady: true,
    khmerLanguage: true,
    downloads: {
      linux: { url: '#', size: '5 MB' },
      windows: { url: '#', size: '8 MB' },
      android: { url: '#', size: '4 MB' },
    },
  },
  {
    id: 'memory-game',
    name: 'Memory Game',
    developer: 'KOOMPI',
    description: 'Classic memory card matching game with Cambodian themes. Great for building concentration and memory skills.',
    oneLiner: 'Match cards and train your memory',
    category: 'games',
    rating: 4.4,
    reviewCount: 178,
    tags: ['memory', 'puzzle', 'kids', 'brain'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    new: true,
    downloads: {
      linux: { url: '#', size: '25 MB' },
      android: { url: '#', size: '20 MB' },
    },
  },
  {
    id: 'typing-tutor',
    name: 'Typing Tutor',
    developer: 'KOOMPI',
    description: 'Learn to type in English and Khmer with interactive lessons and games. Track your progress and improve speed.',
    oneLiner: 'Learn typing in Khmer and English',
    category: 'tools',
    rating: 4.5,
    reviewCount: 201,
    tags: ['typing', 'keyboard', 'khmer', 'english'],
    offlineReady: true,
    khmerLanguage: true,
    madeInCambodia: true,
    downloads: {
      linux: { url: '#', size: '30 MB' },
      windows: { url: '#', size: '35 MB' },
    },
  },
]

export const FEATURED_APPS = APPS.filter(app => app.new || app.rating >= 4.6)

export const PLATFORM_ICONS = {
  linux: '🐧',
  windows: '⊞',
  macos: '⌘',
  android: '🤖',
  iso: '💿',
}

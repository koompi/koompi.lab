import { useState, useEffect } from 'react'
import Footer from '../components/Shared/Footer'
import { APPS, APP_CATEGORIES, FEATURED_APPS, PLATFORM_ICONS } from '../data/apps'
import type { App } from '../data/apps'

const AppsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [activeSection, setActiveSection] = useState<string>('featured')
  const [downloadingApps, setDownloadingApps] = useState<Record<string, number>>({})
  const [installedApps, setInstalledApps] = useState<Set<string>>(new Set())

  // Group apps by category
  const appsByCategory = APP_CATEGORIES.reduce((acc, cat) => {
    if (cat.id === 'all' || cat.id === 'offline' || cat.id === 'khmer') return acc
    acc[cat.id] = APPS.filter(app => app.category === cat.id)
    return acc
  }, {} as Record<string, App[]>)

  // Filter for search
  const filteredApps = APPS.filter((app) => {
    if (searchQuery === '') return true
    return (
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  // Scroll to section when category is clicked
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  // Download handler
  const handleDownload = (appId: string, platform: string) => {
    if (installedApps.has(appId)) {
      // Open app
      window.open('#', '_blank')
      return
    }

    if (downloadingApps[appId]) return

    // Simulate download progress
    setDownloadingApps(prev => ({ ...prev, [appId]: 0 }))

    const interval = setInterval(() => {
      setDownloadingApps(prev => {
        const progress = prev[appId] + Math.random() * 15
        if (progress >= 100) {
          clearInterval(interval)
          setInstalledApps(prev => new Set([...prev, appId]))
          setTimeout(() => {
            setDownloadingApps(prev => {
              const newState = { ...prev }
              delete newState[appId]
              return newState
            })
          }, 500)
          return { ...prev, [appId]: 100 }
        }
        return { ...prev, [appId]: progress }
      })
    }, 300)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - App Store Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-koompi-primary via-blue-900 to-koompi-secondary">
        {/* Abstract shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-koompi-accent-persimmon/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-koompi-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80 mb-6">
                {APPS.length}+ Apps Available
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Apps for
                <span className="block text-koompi-accent-persimmon">Cambodia</span>
              </h1>

              <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Education, sports, and utility apps built for Cambodian schools.
                All apps work offline and are 100% free.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search apps..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-koompi-accent-persimmon/50 shadow-xl"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>{APPS.filter(a => a.offlineReady).length} Offline Ready</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>100% Free</span>
                </div>
              </div>
            </div>

            {/* Right - Featured App Spotlight (Apple Style) */}
            {FEATURED_APPS.length > 0 && (
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-koompi-accent-persimmon/30 to-koompi-secondary/30 rounded-3xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-koompi-accent-persimmon text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                    <span className="text-white/60 text-sm">App of the Day</span>
                  </div>

                  <div className="flex gap-6">
                    {/* App Icon */}
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-koompi-secondary/40 to-koompi-accent-persimmon/20 flex items-center justify-center text-4xl flex-shrink-0 shadow-xl">
                      {FEATURED_APPS[0].category === 'education' ? '📚' : '⚽'}
                    </div>

                    {/* App Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {FEATURED_APPS[0].name}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">{FEATURED_APPS[0].developer}</p>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-koompi-accent-yellow">★★★★★</span>
                          <span className="text-white/80 text-sm">{FEATURED_APPS[0].rating}</span>
                        </div>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60 text-sm">Education</span>
                      </div>

                      <p className="text-white/80 text-sm line-clamp-2 mb-4">
                        {FEATURED_APPS[0].oneLiner}
                      </p>

                                                      <button
                        onClick={() => setSelectedApp(FEATURED_APPS[0])}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-koompi-primary font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => scrollToSection('featured')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === 'featured'
                    ? 'bg-white text-koompi-primary shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Featured
              </button>
              {APP_CATEGORIES.filter(cat => cat.id !== 'all' && cat.id !== 'offline' && cat.id !== 'khmer').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === cat.id
                      ? 'bg-white text-koompi-primary shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Search Results for "{searchQuery}"
          </h2>
          {filteredApps.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No apps found</h3>
              <p className="text-gray-500">Try different keywords</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredApps.map((app) => (
                <AppStoreCard
                  key={app.id}
                  app={app}
                  onSelect={setSelectedApp}
                  onDownload={handleDownload}
                  isDownloading={downloadingApps[app.id]}
                  isInstalled={installedApps.has(app.id)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Main Content - Show when not searching */}
      {!searchQuery && (
        <>
          {/* Trending / Featured Section */}
          {FEATURED_APPS.length > 0 && (
            <section id="section-featured" className="py-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Trending Apps</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {FEATURED_APPS.slice(0, 4).map((app) => (
                    <AppStoreCard
                      key={app.id}
                      app={app}
                      onSelect={setSelectedApp}
                      onDownload={handleDownload}
                      isDownloading={downloadingApps[app.id]}
                      isInstalled={installedApps.has(app.id)}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Category Sections */}
          {APP_CATEGORIES.filter(cat => cat.id !== 'all' && cat.id !== 'offline' && cat.id !== 'khmer').map((cat) => {
            const categoryApps = appsByCategory[cat.id]
            if (!categoryApps || categoryApps.length === 0) return null

            return (
              <section
                key={cat.id}
                id={`section-${cat.id}`}
                className="py-8 scroll-mt-28"
              >
                <div className="max-w-7xl mx-auto px-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                    <span className="text-sm text-gray-500">{categoryApps.length} apps</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categoryApps.map((app) => (
                      <AppStoreCard
                        key={app.id}
                        app={app}
                        onSelect={setSelectedApp}
                        onDownload={handleDownload}
                        isDownloading={downloadingApps[app.id]}
                        isInstalled={installedApps.has(app.id)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )
          })}

          {/* Recently Added Section */}
          <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  NEW
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {APPS.filter(a => a.new).map((app) => (
                  <AppStoreCard
                    key={app.id}
                    app={app}
                    onSelect={setSelectedApp}
                    onDownload={handleDownload}
                    isDownloading={downloadingApps[app.id]}
                    isInstalled={installedApps.has(app.id)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Offline Ready Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Offline Ready</h2>
                <span className="text-sm text-gray-500">Works without internet</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {APPS.filter(a => a.offlineReady).slice(0, 4).map((app) => (
                  <AppStoreCard
                    key={app.id}
                    app={app}
                    onSelect={setSelectedApp}
                    onDownload={handleDownload}
                    isDownloading={downloadingApps[app.id]}
                    isInstalled={installedApps.has(app.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* For Developers Section */}
      <section className="bg-koompi-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Publish Your App on KOOMPI
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Got an app that benefits Cambodian users? Join our platform and reach thousands of users across education, sports, and more.
          </p>
          <a
            href="mailto:info@koompi.com?subject=Publish%20My%20App%20on%20KOOMPI"
            className="inline-flex items-center gap-2 px-6 py-3 bg-koompi-accent-persimmon text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />

      {/* App Detail Modal */}
      {selectedApp && (
        <AppDetailModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
          onDownload={handleDownload}
          isDownloading={downloadingApps[selectedApp.id]}
          isInstalled={installedApps.has(selectedApp.id)}
        />
      )}
    </div>
  )
}

// App Store Card Component (Microsoft/Apple Style)
interface AppStoreCardProps {
  app: App
  onSelect: (app: App) => void
  onDownload: (appId: string) => void
  isDownloading?: number
  isInstalled?: boolean
}

const AppStoreCard = ({ app, onSelect, onDownload, isDownloading, isInstalled }: AppStoreCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group">
      <div className="p-4">
        <div className="flex gap-4">
          {/* App Icon */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-koompi-secondary/20 to-koompi-accent-persimmon/10 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
            {app.category === 'education' ? '📚' : app.category === 'sports' ? '⚽' : '🔧'}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <button onClick={() => onSelect(app)} className="flex-1 text-left">
                <h3 className="font-bold text-gray-900 truncate group-hover:text-koompi-secondary transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">{app.developer}</p>
              </button>

              {/* Download Button */}
              <DownloadButton
                isDownloading={isDownloading}
                isInstalled={isInstalled}
                onDownload={() => onDownload(app.id)}
                size="small"
              />
            </div>

            {/* Rating & Category */}
            <div className="flex items-center gap-2 mt-2">
              {app.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-koompi-accent-yellow text-xs">★</span>
                  <span className="text-xs font-medium text-gray-700">{app.rating}</span>
                </div>
              )}
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500 capitalize">{app.category}</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {app.new && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  New
                </span>
              )}
              {app.offlineReady && (
                <span className="px-2 py-0.5 bg-koompi-accent-yellow/10 text-yellow-700 text-xs font-medium rounded-full">
                  Offline
                </span>
              )}
              {app.khmerLanguage && (
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                  ខ្មែរ
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Download Button Component (Apple Store Style)
interface DownloadButtonProps {
  isDownloading?: number
  isInstalled?: boolean
  onDownload: () => void
  size?: 'small' | 'large'
}

const DownloadButton = ({ isDownloading, isInstalled, onDownload, size = 'small' }: DownloadButtonProps) => {
  const sizeClasses = size === 'large'
    ? 'py-3 px-8 text-base'
    : 'py-1.5 px-4 text-xs font-medium'

  if (isInstalled) {
    return (
      <button
        onClick={onDownload}
        className={`${sizeClasses} bg-green-600 hover:bg-green-700 text-white rounded-full transition-all flex items-center gap-1.5 flex-shrink-0`}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        Open
      </button>
    )
  }

  if (isDownloading !== undefined) {
    return (
      <button
        disabled
        className={`${sizeClasses} bg-blue-600 text-white rounded-full flex items-center gap-2 flex-shrink-0`}
      >
        <svg className={`animate-spin ${size === 'large' ? 'w-4 h-4' : 'w-3 h-3'}`} fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>{Math.round(isDownloading)}%</span>
      </button>
    )
  }

  return (
    <button
      onClick={onDownload}
      className={`${sizeClasses} bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all flex-shrink-0`}
    >
      GET
    </button>
  )
}

// App Detail Modal Component
interface AppDetailModalProps {
  app: App
  onClose: () => void
  onDownload: (appId: string) => void
  isDownloading?: number
  isInstalled?: boolean
}

const AppDetailModal = ({ app, onClose, onDownload, isDownloading, isInstalled }: AppDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<'about' | 'whatsnew' | 'reviews'>('about')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const tabs = [
    { id: 'about' as const, label: 'About' },
    { id: 'whatsnew' as const, label: "What's New" },
    { id: 'reviews' as const, label: 'Reviews' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Right Side Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-5xl bg-white shadow-2xl animate-slide-in-right overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex gap-6 items-start">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-koompi-secondary/20 to-koompi-accent-persimmon/10 flex items-center justify-center text-4xl shadow-lg">
                {app.category === 'education' ? '📚' : app.category === 'sports' ? '⚽' : '🔧'}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{app.name}</h2>
              <p className="text-gray-500 mb-3">{app.developer}</p>

              {/* Rating */}
              {app.rating && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-koompi-accent-yellow">★★★★★</span>
                    <span className="font-semibold text-gray-900">{app.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{app.reviewCount} reviews</span>
                </div>
              )}

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {app.offlineReady && (
                  <span className="px-2 py-0.5 bg-koompi-accent-yellow/10 text-yellow-700 text-xs font-medium rounded-full">
                    ✓ Offline Ready
                  </span>
                )}
                {app.khmerLanguage && (
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    ខ្មែរ
                  </span>
                )}
                {app.madeInCambodia && (
                  <span className="px-2 py-0.5 bg-koompi-secondary/10 text-koompi-secondary text-xs font-medium rounded-full">
                    🇰🇭
                  </span>
                )}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="bg-gray-50 p-4 flex-shrink-0">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 aspect-video bg-gradient-to-br from-koompi-primary/10 to-koompi-secondary/10 rounded-lg flex items-center justify-center border border-gray-200"
              >
                <span className="text-4xl">
                  {app.category === 'education' ? '📚' : app.category === 'sports' ? '⚽' : '🔧'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-100 flex-shrink-0">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-koompi-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-koompi-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About this app</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'whatsnew' && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-medium text-blue-900 mb-2">
                  Version 1.0 • Initial Release
                </p>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• First release of {app.name}</li>
                  <li>• Full offline support</li>
                  <li>• Khmer language support</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{app.rating || '4.5'}</div>
                <div className="text-koompi-accent-yellow text-base mb-1">★★★★★</div>
                <p className="text-gray-500">{app.reviewCount} reviews</p>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'Sophea T.', rating: 5, text: 'Great app for my students! Very useful.' },
                  { user: 'Chan D.', rating: 5, text: 'Works perfectly offline. Thank you KOOMPI!' },
                ].map((review, i) => (
                  <div key={i} className="border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{review.user}</span>
                      <span className="text-koompi-accent-yellow text-sm">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Download Section - Fixed at Bottom */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex-shrink-0">
          <h3 className="font-semibold text-gray-900 mb-4">Download</h3>
          <div className="grid grid-cols-5 gap-3">
            {(['windows', 'linux', 'macos', 'android', 'iso'] as const).map((platform) => {
              const download = app.downloads[platform]
              if (!download) return null
              return (
                <a
                  key={platform}
                  href={download.url}
                  onClick={(e) => {
                    e.stopPropagation()
                    onDownload(app.id)
                  }}
                  className="flex flex-col items-center p-3 rounded-xl border-2 border-gray-200 hover:border-koompi-primary hover:bg-koompi-primary/5 transition-all group"
                >
                  <span
                    className="mb-1.5 text-gray-500 group-hover:text-koompi-primary transition-colors"
                    dangerouslySetInnerHTML={{ __html: PLATFORM_ICONS[platform] }}
                  />
                  <span className="text-xs font-medium text-gray-700">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">{download.size}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppsPage

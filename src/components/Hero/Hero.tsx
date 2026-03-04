import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useImpactStats } from '../../hooks/useImpactStats'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [showStatsModal, setShowStatsModal] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { stats } = useImpactStats()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const handleFundClick = () => {
    // Already on homepage, navigating to /onelab#pricing will work via router
    // The App.tsx useEffect handles the scrolling
  }

  // Use API stats or fallback
  const labsInstalled = stats?.schoolsEquipped || 65
  const totalSchools = stats?.totalSchoolsInCambodia || 13818
  const schoolsNeedLabs = (stats?.totalSchoolsInCambodia || 13818) - (stats?.schoolsEquipped || 65)
  const provincesReached = 25 // Cambodia has 25 provinces

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay with blur */}
      <div
        className="absolute inset-0 bg-koompi-primary/80 backdrop-blur-[8px]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-koompi-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-koompi-accent-pink/10 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: 'linear-gradient(to right, rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(rgb(255, 255, 255) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-white/90">
            {labsInstalled} of {totalSchools.toLocaleString()}+ Schools Equipped — Join the Mission
          </span>
        </div>

        {/* Logo + Title */}
        <div className="mb-6 text-center animate-fade-in">
          <img
            src="/logo/koompi-logo-text-white.png"
            alt="KOOMPI"
            className="h-14 md:h-20 lg:h-24 mx-auto mb-4"
          />
          <span className="block text-koompi-accent-pink text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide" style={{ letterSpacing: 'normal' }}>
            Digital Education
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl text-center mb-10 animate-slide-up">
          Over {totalSchools.toLocaleString()}+ public schools in Cambodia. We've equipped {labsInstalled} schools with computer labs — partner with us or start your own.
        </p>

        {/* Stats Row - Glassmorphic */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {[
            { value: String(labsInstalled), label: 'Labs Installed', clickable: false },
            { value: String(schoolsNeedLabs.toLocaleString()), label: 'Schools Need Labs', clickable: true },
            { value: String(provincesReached), label: 'Provinces', clickable: false },
          ].map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-center ${stat.clickable ? 'cursor-pointer hover:bg-white/15 hover:border-white/40 transition-all duration-300 group' : ''}`}
              onClick={() => stat.clickable && setShowStatsModal(true)}
            >
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className={`text-xs md:text-sm text-white/60 ${stat.clickable ? 'group-hover:text-white/80' : ''}`}>
                {stat.label} {stat.clickable && <span className="ml-1 opacity-50">↗</span>}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/fund#pricing"
            onClick={handleFundClick}
            className="px-8 py-4 bg-koompi-accent-pink text-white rounded-full font-semibold text-lg hover:bg-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-accent-500"
          >
            Fund a School
          </Link>
          <Link
            to="/onelab"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Explore Onelab
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          aria-label="Scroll down"
        >
          <div className="w-12 h-12 rounded-full border-2 border-koompi-accent-pink/50 flex items-center justify-center animate-bounce group-hover:animate-pulse group-hover:border-koompi-accent-pink group-hover:bg-koompi-accent-pink/10 transition-all duration-300">
            <svg
              className="w-5 h-5 text-koompi-accent-pink transition-all duration-300 group-hover:scale-110 drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(241,97,121,0.6)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>

        {/* Stats Modal */}
        {showStatsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowStatsModal(false)}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
              className="relative bg-gradient-to-br from-koompi-primary to-[#1a2a4a] rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowStatsModal(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">Schools That Need Labs</h3>
              <p className="text-white/60 text-sm mb-6">Data from MOEYS Cambodia 2024</p>

              {/* Stats Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Total Public Schools in Cambodia</span>
                  <span className="text-2xl font-bold text-white">{totalSchools.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 py-3 border-b border-white/10">
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">4,651</p>
                    <p className="text-xs text-white/50">Kindergarten</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">7,348</p>
                    <p className="text-xs text-white/50">Primary</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">1,819</p>
                    <p className="text-xs text-white/50">Secondary</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Schools Equipped with Labs</span>
                  <span className="text-2xl font-bold text-koompi-accent-pink">{labsInstalled}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-koompi-accent-pink/20 rounded-xl px-4">
                  <span className="text-white font-semibold">Schools Still Need Labs</span>
                  <span className="text-2xl font-bold text-koompi-accent-pink">{schoolsNeedLabs.toLocaleString()}</span>
                </div>
              </div>

              {/* Data Source */}
              <div className="flex flex-col gap-2 mb-4 text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Sources:</span>
                </div>
                <div className="flex flex-col gap-1 pl-5">
                  <a
                    href="https://www.worldbank.org/en/country/cambodia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 underline underline-offset-2 transition-colors"
                  >
                    1. World Bank: Cambodia Economic Update 2024
                  </a>
                  <a
                    href="https://www.moeys.gov.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/60 underline underline-offset-2 transition-colors"
                  >
                    2. MOEYS Cambodia (Ministry of Education, Youth & Sport)
                  </a>
                  <span className="text-white/30">3. 柬埔寨教育部统计报告 2024</span>
                </div>
                <div className="pl-5 text-white/20 italic">
                  Data: 4,651 kindergartens • 7,348 primary • 1,819 secondary schools
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Progress</span>
                  <span>{((labsInstalled / totalSchools) * 100).toFixed(2)}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-koompi-accent-pink to-pink-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(labsInstalled / totalSchools) * 100}%` }}
                  />
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/schools"
                onClick={() => setShowStatsModal(false)}
                className="block w-full px-6 py-3 bg-koompi-accent-pink text-white rounded-xl font-semibold text-center hover:bg-pink-600 transition-colors"
              >
                View All Schools →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero

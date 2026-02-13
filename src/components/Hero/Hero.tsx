import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const handleFundClick = (e: React.MouseEvent) => {
    // Already on homepage, navigating to /onelab#pricing will work via router
    // The App.tsx useEffect handles the scrolling
  }

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
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-koompi-accent-persimmon/10 rounded-full blur-3xl" />

      {/* Dot pattern grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-white/90">
            65 of 13,000+ Schools Equipped — Join the Mission
          </span>
        </div>

        {/* Logo + Title */}
        <div className="mb-6 text-center animate-fade-in">
          <img
            src="/logo/koompi-logo-text-white.png"
            alt="KOOMPI"
            className="h-14 md:h-20 lg:h-24 mx-auto mb-4"
          />
          <span className="block text-koompi-accent-persimmon text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide" style={{ letterSpacing: 'normal' }}>
            Digital Education
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl text-center mb-10 animate-slide-up">
          Over 13,000 public schools in Cambodia. Fewer than 200 have a computer lab. We've equipped 65 — partner with us or start your own.
        </p>

        {/* Stats Row - Glassmorphic */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {[
            { value: '65', label: 'Labs Installed' },
            { value: '13,000+', label: 'Without Labs' },
            { value: '24', label: 'Provinces' },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs md:text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/fund#pricing"
            onClick={handleFundClick}
            className="px-8 py-4 bg-koompi-accent-persimmon text-white rounded-full font-semibold text-lg hover:bg-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-accent-500"
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

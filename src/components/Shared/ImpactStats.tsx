import { useState, useEffect, useRef } from 'react'

// Direct stats - using MOEYS 2024 data
const LIVE_STATS = {
  schoolsEquipped: 65,
  studentsReached: 12000,
  totalSchools: 13818,
  provinces: 25,
  lastUpdated: 'March 2024',
  source: 'MOEYS Cambodia',
}

// Optimized animated number - smooth without lag
const AnimatedNumber = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 1200 // Faster animation (was 2000ms)
    const frameDuration = 16 // ~60fps
    const totalFrames = Math.floor(duration / frameDuration)
    const incrementPerFrame = value / totalFrames
    let current = 0
    let frame = 0

    const animate = () => {
      current += incrementPerFrame
      frame++

      if (frame >= totalFrames) {
        setDisplay(value)
      } else {
        setDisplay(Math.floor(current))
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <span className="font-mono text-5xl md:text-6xl font-bold text-white">
      {display >= 1000 ? display.toLocaleString() : display}
    </span>
  )
}

const StatCard = ({ value, label, description, delay = 0, isVisible }: {
  value: string | number
  label: string
  description: string
  delay?: number
  isVisible: boolean
}) => {
  const numValue = typeof value === 'number' ? value : parseInt(value.replace(/,/g, ''))

  return (
    <div
      className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {typeof value === 'number' ? (
        <AnimatedNumber value={numValue} isVisible={isVisible} />
      ) : (
        <span className="font-mono text-5xl md:text-6xl font-bold text-white">{value}</span>
      )}
      <p className="text-koompi-secondary font-semibold mt-3 text-base md:text-lg">{label}</p>
      <p className="text-white/40 text-sm mt-1">{description}</p>
    </div>
  )
}

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Calculate schools needing labs
  const schoolsNeedingLabs = LIVE_STATS.totalSchools - LIVE_STATS.schoolsEquipped

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-koompi-primary overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-koompi-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-koompi-accent-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Impact in Cambodia
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-4">
            Bringing digital education to schools across the country.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-white/30">
            <span>Source: {LIVE_STATS.source}</span>
            <span>•</span>
            <span>Updated: {LIVE_STATS.lastUpdated}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            value={LIVE_STATS.schoolsEquipped}
            label="Schools Equipped"
            description="With KOOMPI labs"
            delay={0}
            isVisible={isVisible}
          />
          <StatCard
            value={LIVE_STATS.studentsReached + '+'}
            label="Students Learning"
            description="With digital tools"
            delay={0.1}
            isVisible={isVisible}
          />
          <StatCard
            value={schoolsNeedingLabs}
            label="Schools Need Labs"
            description="Awaiting support"
            delay={0.2}
            isVisible={isVisible}
          />
          <StatCard
            value={LIVE_STATS.provinces}
            label="Provinces"
            description="Across Cambodia"
            delay={0.3}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

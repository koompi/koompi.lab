import { useState, useEffect, useRef } from 'react'
import { useImpactStats } from '../../hooks/useImpactStats'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const AnimatedNumber = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const display = value >= 1000 ? count.toLocaleString() : count

  return (
    <span className="font-mono text-5xl md:text-6xl font-bold text-white">
      {display}{suffix}
    </span>
  )
}

// Loading skeleton
const StatCardSkeleton = () => (
  <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
    <div className="h-16 w-32 mx-auto bg-white/10 rounded-lg animate-pulse mb-4" />
    <div className="h-6 w-24 mx-auto bg-white/10 rounded animate-pulse mb-2" />
    <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
  </div>
)

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { stats, loading } = useImpactStats()

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

  // Map API data to display cards
  const getStatCards = (): StatItem[] | null => {
    if (!stats) return null
    return [
      { value: stats.schoolsEquipped, suffix: '', label: 'Schools Equipped', description: 'With KOOMPI labs' },
      { value: stats.studentsReached, suffix: '', label: 'Students Learning', description: 'With digital tools' },
      { value: stats.totalSchoolsInCambodia - stats.schoolsEquipped, suffix: '', label: 'Schools Need Labs', description: 'Awaiting support' },
      { value: 25, suffix: '', label: 'Provinces', description: 'Across Cambodia' },
    ]
  }

  const statCards = getStatCards()

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-koompi-primary overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-koompi-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-koompi-accent-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Impact in Numbers
            </h2>
            {/* Live indicator */}
            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live
            </span>
          </div>
          <p className="text-white/50 max-w-lg mx-auto">
            Live data from KOOMPI database.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
          ) : statCards ? (
            statCards.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 0.1}s`,
                  transition: 'all 0.6s ease-out',
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                <p className="text-koompi-secondary font-semibold mt-3 text-base md:text-lg">{stat.label}</p>
                <p className="text-white/40 text-sm mt-1">{stat.description}</p>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

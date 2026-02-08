import { useState, useEffect, useRef } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const targetStats: StatItem[] = [
  { value: 65, suffix: '', label: 'Schools Equipped', description: 'Across 24 provinces so far' },
  { value: 13000, suffix: '', label: 'Schools Without Labs', description: 'Fewer than 200 have a computer lab' },
  { value: 12000, suffix: '', label: 'Students Reached', description: 'Learning with digital tools today' },
]

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Real results from real schools across Cambodia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetStats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.15}s`,
                transition: 'all 0.6s ease-out',
              }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              <p className="text-koompi-secondary font-semibold mt-3 text-lg">{stat.label}</p>
              <p className="text-white/40 text-sm mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

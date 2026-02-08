import { useState, useEffect, useRef } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 65, suffix: '', label: 'Schools Equipped' },
  { value: 13000, suffix: '', label: 'Schools Without Labs' },
  { value: 12000, suffix: '', label: 'Students Learning' },
]

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

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

  return (
    <span ref={ref} className="font-mono text-3xl md:text-4xl font-bold text-koompi-accent-pink">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const ImpactTicker = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <p className="text-sm md:text-base text-gray-300 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ImpactTicker

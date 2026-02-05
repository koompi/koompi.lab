import { useState, useEffect } from 'react'

interface Stats {
  donors: number
  schools: number
  students: number
}

const ImpactStats = () => {
  const [stats, setStats] = useState<Stats>({ donors: 0, schools: 0, students: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('impact-stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targetStats = { donors: 142, schools: 65, students: 12000 }
    const duration = 2000
    const steps = 60

    Object.keys(targetStats).forEach((key) => {
      const target = targetStats[key as keyof typeof targetStats]
      const stepValue = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= target) {
          setStats((prev) => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    })
  }, [isVisible])

  return (
    <section
      id="impact-stats"
      className="py-16 bg-koompi-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold font-mono text-koompi-accent-orange">
              {stats.donors}+
            </p>
            <p className="text-gray-300 mt-2">Donors</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold font-mono text-koompi-accent-orange">
              {stats.schools}
            </p>
            <p className="text-gray-300 mt-2">Schools Equipped</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold font-mono text-koompi-accent-orange">
              {stats.students.toLocaleString()}+
            </p>
            <p className="text-gray-300 mt-2">Students Learning Daily</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

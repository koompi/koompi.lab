import { useEffect, useState, useRef } from 'react'

interface ValuePropCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const ValuePropCard = ({ icon, title, description, delay }: ValuePropCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.6s ease-out',
      }}
    >
      <div className="text-koompi-accent-orange mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-koompi-primary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ValuePropCard

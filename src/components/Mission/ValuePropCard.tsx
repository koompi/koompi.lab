import { useEffect, useState, useRef } from 'react'

interface ValuePropCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  iconColor?: string
}

const ValuePropCard = ({
  icon,
  title,
  description,
  delay,
}: ValuePropCardProps) => {
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
      className="bg-cream rounded-3xl p-10 md:p-14 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border-0 shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.6s ease-out',
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-koompi-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-koompi-secondary to-transparent rounded-full" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-koompi-secondary to-transparent rounded-full" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-koompi-primary mb-4 text-center group-hover:text-koompi-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ValuePropCard

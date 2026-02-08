import { useEffect, useState, useRef } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  image?: string
  large?: boolean
  delay?: number
  variant?: 'default' | 'gradient'
}

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  large,
  delay = 0,
  variant = 'default',
}: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const baseClasses = large ? 'bento-large' : ''
  const bgClasses =
    variant === 'gradient'
      ? 'bg-gradient-to-br from-koompi-primary to-secondary-600 text-white'
      : 'bg-white border border-gray-100'

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${bgClasses} rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden relative`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.6s ease-out',
      }}
    >
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div>
          <h3
            className={`text-lg font-bold mb-1 ${
              variant === 'gradient' ? 'text-white' : 'text-koompi-primary'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard

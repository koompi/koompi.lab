import { useEffect, useState, useRef } from 'react'

interface ValuePropCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  iconColor?: string
  gradientFrom?: string
  gradientTo?: string
  accentColor?: string
  shape?: 'diamond' | 'circle' | 'triangle' | 'rect'
}

const ValuePropCard = ({
  icon,
  title,
  description,
  delay,
  gradientFrom = 'from-rose-50',
  gradientTo = 'to-pink-50',
  accentColor = '#F43F5E',
  shape = 'diamond',
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

  const renderShape = () => {
    const baseProps = "absolute -top-8 -right-8 w-32 h-32 opacity-5"
    switch (shape) {
      case 'circle':
        return (
          <svg className={baseProps} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill={accentColor}></circle>
          </svg>
        )
      case 'triangle':
        return (
          <svg className={baseProps} viewBox="0 0 100 100">
            <polygon points="50,0 100,80 0,80" fill={accentColor}></polygon>
          </svg>
        )
      case 'rect':
        return (
          <svg className={baseProps} viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" rx="10" fill={accentColor}></rect>
          </svg>
        )
      default: // diamond
        return (
          <svg className={baseProps} viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill={accentColor}></path>
          </svg>
        )
    }
  }

  return (
    <div
      ref={cardRef}
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.6s ease-out',
      }}
    >
      <div className="relative h-full">
        {/* Gradient background layer */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-[1.5rem]`}></div>

        {/* White card layer */}
        <div className="relative h-full bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          {/* Decorative shape */}
          {renderShape()}

          {/* Content */}
          <div className="relative z-10 text-center">
            {icon && <div className="mb-4 flex justify-center">{icon}</div>}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:tracking-wide transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-0.5 rounded-full"
            style={{ backgroundColor: accentColor, width: '60%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ValuePropCard

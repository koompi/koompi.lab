import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getIcon } from '../Shared/Icons'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  image?: string
  hero?: boolean
  large?: boolean
  delay?: number
  variant?: 'default' | 'gradient'
  size?: string
  items?: string
  link?: string
  linkLabel?: string
}

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  hero,
  large,
  delay = 0,
  variant = 'default',
  size,
  items,
  link,
  linkLabel,
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

  const baseClasses = hero ? 'bento-hero' : large ? 'bento-large' : ''
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
      {hero && image ? (
        // Hero layout: horizontal with larger image on left
        <div className="flex gap-8 items-center">
          <div className="flex-1 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1">
            <h3
              className={`text-2xl font-bold mb-3 ${
                variant === 'gradient' ? 'text-white' : 'text-koompi-primary'
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-base ${
                variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
            {link && linkLabel && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-koompi-accent-pink text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
              >
                {linkLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ) : (
        // Standard layout: stacked
        <>
          {image && !size && !items && (
            <div className="mb-4 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="flex items-start gap-3">
            {icon && (
              <span className="text-koompi-accent-pink flex-shrink-0 bg-gradient-to-br from-koompi-accent-pink/10 to-koompi-accent-pink/5 w-12 h-12 rounded-xl flex items-center justify-center">
                {getIcon(icon)}
              </span>
            )}
            <div className="flex-1">
              <h3
                className={`text-lg font-bold mb-1 ${
                  variant === 'gradient' ? 'text-white' : 'text-koompi-primary'
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm mb-3 ${
                  variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {description}
              </p>
              {(size || items) && (
                <div className="flex flex-wrap gap-2">
                  {size && (
                    <span className="inline-flex items-center px-2 py-1 bg-koompi-accent-blue/10 text-koompi-accent-blue text-xs font-medium rounded-full">
                      <span className="mr-1">{getIcon('📦')}</span>
                      {size}
                    </span>
                  )}
                  {items && (
                    <span className="inline-flex items-center px-2 py-1 bg-koompi-accent-pink/10 text-koompi-accent-pink text-xs font-medium rounded-full">
                      <span className="mr-1">{getIcon('📊')}</span>
                      {items}
                    </span>
                  )}
                </div>
              )}
              {link && linkLabel && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-koompi-accent-pink text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
                >
                  {linkLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default FeatureCard

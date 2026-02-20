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
      : 'bg-cream border border-gray-100'

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${bgClasses} rounded-3xl p-8 md:p-12 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative border-0 shadow-lg`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.6s ease-out',
      }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-koompi-secondary/10 to-transparent rounded-br-full" />

      {hero && image ? (
        // Hero layout: horizontal with larger image on left
        <div className="flex gap-8 items-center">
          <div className="flex-1 rounded-2xl overflow-hidden">
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
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-koompi-accent-pink text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40"
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
            <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}
          <div>
            <h3
              className={`text-xl font-bold mb-3 ${
                variant === 'gradient' ? 'text-white' : 'text-koompi-primary'
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm mb-4 leading-relaxed ${
                variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
            {(size || items) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {size && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-koompi-secondary/20 to-koompi-secondary/10 text-koompi-secondary text-sm font-semibold rounded-full border border-koompi-secondary/20">
                    {size}
                  </span>
                )}
                {items && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-koompi-accent-pink/20 to-pink-500/10 text-koompi-accent-pink text-sm font-semibold rounded-full border border-koompi-accent-pink/20">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-koompi-accent-pink to-pink-500 text-white rounded-full text-sm font-semibold hover:from-pink-600 hover:to-pink-600 transition-all shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-x-1"
              >
                {linkLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default FeatureCard

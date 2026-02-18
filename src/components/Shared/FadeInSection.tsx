import { useState, useEffect, useRef } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const FadeInSection = ({ children, className = '', delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}s`,
        transition: 'all 0.7s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default FadeInSection

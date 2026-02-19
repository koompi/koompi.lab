import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const valueProps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h8M8 14h5" />
        </svg>
      ),
      title: 'Offline-first',
      description: 'Content works without internet. Students access educational materials anytime, anywhere.',
      color: 'text-koompi-secondary',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Solar-powered',
      description: 'Labs run anywhere. Solar panels enable digital education in remote areas without grid power.',
      color: 'text-koompi-accent-yellow',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9l3 3-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12H9" />
        </svg>
      ),
      title: 'MoEYS Approved',
      description: 'Official partnership with Ministry of Education, Youth and Sport. Curriculum-aligned content.',
      color: 'text-emerald-600',
    },
  ]

  return (
    <section ref={sectionRef} id="mission" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-koompi-primary mb-6">
            Built to empower.
            <span className="block text-koompi-accent-pink">Born to connect.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our KOOMPI Lab and Content Server solutions are designed specifically
            for Cambodian schools, bridging the digital divide with technology that
            works everywhere.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.15}s`,
                transition: 'all 0.6s ease-out',
              }}
            >
              <div className={`mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all ${prop.color} flex justify-center`}>
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-koompi-primary mb-3">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Cost Summary */}
        <div className="bg-cream rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-koompi-primary mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 mb-6">
                Every donation goes directly to hardware, installation, and training.
                We maintain full transparency so donors know their impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-koompi-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Content Server: ~$3,500</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-koompi-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Full Lab Bundle: ~$12,000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-koompi-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Solar upgrade available</span>
                </li>
              </ul>
              <Link
                to="/fund#pricing"
                className="inline-flex items-center gap-2 mt-6 text-koompi-secondary font-medium hover:gap-3 transition-all"
              >
                See full pricing details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-koompi-primary mb-4">What's Included:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  KOOMPI Mini/Ministations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  2TB SSD with educational content
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  Deco Mesh WiFi (150 connections)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  KOOMPI Apps & Salacamp platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  Professional installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full" />
                  Teacher training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

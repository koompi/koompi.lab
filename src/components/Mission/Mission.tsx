import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ValuePropCard from './ValuePropCard'

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
      title: 'Offline-first',
      description: 'Content works without internet. Students access educational materials anytime, anywhere.',
    },
    {
      title: 'Solar-powered',
      description: 'Labs run anywhere. Solar panels enable digital education in remote areas without grid power.',
    },
    {
      title: 'MoEYS Approved',
      description: 'Official partnership with Ministry of Education, Youth and Sport. Curriculum-aligned content.',
    },
  ]

  return (
    <section ref={sectionRef} id="mission" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-koompi-accent-pink/20 to-pink-500/10 text-koompi-accent-pink rounded-full text-sm font-semibold mb-6 border border-koompi-accent-pink/20">
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

        {/* Value Props - Now using ValuePropCard component */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, i) => (
            <ValuePropCard
              key={i}
              icon={null}
              title={prop.title}
              description={prop.description}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Cost Summary */}
        <div className="bg-gradient-to-br from-cream to-white rounded-3xl shadow-xl p-8 md:p-14 border border-gray-100/50 relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-koompi-secondary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-koompi-accent-pink/5 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-koompi-primary mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every donation goes directly to hardware, installation, and training.
                We maintain full transparency so donors know their impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-koompi-secondary to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium text-lg">Content Server: ~$3,500</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-koompi-secondary to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium text-lg">Full Lab Bundle: ~$12,000</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-koompi-accent-yellow to-amber-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium text-lg">Solar upgrade available</span>
                </li>
              </ul>
              <Link
                to="/fund#pricing"
                className="inline-flex items-center gap-2 mt-6 text-koompi-secondary font-semibold hover:gap-3 transition-all group text-lg hover:underline decoration-2 underline-offset-4"
              >
                See full pricing details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h4 className="font-bold text-koompi-primary mb-6 text-lg">What's Included:</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    KOOMPI Mini/Ministations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    2TB SSD with educational content
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    Deco Mesh WiFi (150 connections)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    KOOMPI Apps & Salacamp platform
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    Professional installation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-koompi-secondary rounded-full" />
                    Teacher training
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

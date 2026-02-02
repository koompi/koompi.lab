import { useState, useEffect, useRef } from 'react'
import ValuePropCard from './ValuePropCard'

const Mission = () => {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const valueProps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Offline-first',
      description: 'Content works without internet. Students access educational materials anytime, anywhere.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Solar-powered',
      description: 'Labs run anywhere. Solar panels enable digital education in remote areas without grid power.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'MoEYS Approved',
      description: 'Official partnership with Ministry of Education, Youth and Sport. Curriculum-aligned content.',
    },
  ]

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Parallax background element */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream to-gray-50 parallax-section"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-cambodian-blue mb-6">
            Built to empower.
            <span className="block text-solar-amber">Born to connect.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our KOOMPI Lab and Content Server solutions are designed specifically
            for Cambodian schools, bridging the digital divide with technology that
            works everywhere.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropCard
              key={index}
              {...prop}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Cost Summary */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cambodian-blue mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 mb-6">
                Every donation goes directly to hardware, installation, and training.
                We maintain full transparency so donors know their impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-growth-green">✓</span>
                  <span>Content Server: ~$3,500</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-growth-green">✓</span>
                  <span>Full Lab Bundle: ~$12,000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-growth-green">✓</span>
                  <span>Solar upgrade available</span>
                </li>
              </ul>
            </div>
            <div className="bg-cream rounded-xl p-6">
              <h4 className="font-semibold text-cambodian-blue mb-4">What's Included:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• KOOMPI Mini/Ministations</li>
                <li>• 2TB SSD with educational content</li>
                <li>• Deco Mesh WiFi (150 connections)</li>
                <li>• KOOMPI Apps & Salacamp platform</li>
                <li>• Professional installation</li>
                <li>• Teacher training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductHero, FeatureCard, FAQ, ProductCTA } from '../components/Products'
import { LAB_FEATURES, HOW_IT_WORKS_STEPS, ONELAB_FAQ, IMPACT_STATS } from '../data/products'

// Fallback data in case import fails
const STATS = IMPACT_STATS || {
  labsInstalled: 45,
  schoolsWithoutLabs: 13000,
  provincesReached: 12,
  studentsImpacted: 15000,
  teachersTrained: 320,
}

const OnelabPage = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* 1. Hero - Content Server Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        background: 'linear-gradient(180deg, #1a2a4a 0%, #263c5c 50%, #2d4a6c 100%)'
      }}>
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} className="absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="text-[48px] md:text-[72px] font-black text-white mb-6 leading-tight">
            KOOMPI <span style={{ color: '#F16179' }}>ONELAB</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            A complete computer lab for any school. Turn-key solution with hardware, software, content, and training — everything a school needs for digital education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/fund#pricing"
              className="px-8 py-4 bg-koompi-accent-pink text-white rounded-full font-semibold text-lg hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Fund a School
            </Link>
            <Link
              to="#pricing"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              { value: String(STATS.labsInstalled), label: 'Labs Installed' },
              { value: `${STATS.schoolsWithoutLabs.toLocaleString()}+`, label: 'Without Labs' },
              { value: String(STATS.provincesReached), label: 'Provinces' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem → Solution */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-5xl md:text-6xl font-black text-koompi-primary leading-tight mb-6">
                13,000+ public schools. Fewer than 200 have a computer lab.
              </p>
              <p className="text-xl text-gray-500">
                Students as young as grade 4 could be learning digital skills — but most graduate without ever touching a computer.
              </p>
            </div>
            <div className="bg-gradient-to-br from-koompi-accent-pink/5 to-koompi-accent-blue/5 rounded-2xl p-8 border border-koompi-accent-pink/10">
              <h3 className="text-2xl font-bold text-koompi-primary mb-4">
                KOOMPI Onelab changes that.
              </h3>
              <p className="text-gray-600 mb-6">
                Everything a school needs for digital education — hardware, software, content, and training — in one complete package.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-koompi-accent-pink">100%</p>
                  <p className="text-xs text-gray-500">Offline capable</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-koompi-accent-pink">15W</p>
                  <p className="text-xs text-gray-500">Per station</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-koompi-accent-pink">2TB</p>
                  <p className="text-xs text-gray-500">Content library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's In The Box - Bento Grid */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              Complete Package
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              What's In The Box
            </h2>
          </div>
          <div className="bento-grid">
            {LAB_FEATURES.map((feature, i) => (
              <FeatureCard
                key={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
                large={feature.large}
                delay={i * 0.1}
                link={feature.link}
                linkLabel={feature.linkLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-yellow/15 text-yellow-700 rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              How It Works
            </h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

              <div className="grid grid-cols-4 gap-8">
                {HOW_IT_WORKS_STEPS.map((step) => (
                  <div key={step.step} className="relative text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-koompi-accent-pink to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10 shadow-lg shadow-pink-500/20">
                      {step.step}
                    </div>
                    <div className="mt-6">
                      <span className="text-3xl block mb-3 text-koompi-accent-pink">{step.icon}</span>
                      <h3 className="text-lg font-bold text-koompi-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-8">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-koompi-accent-pink to-pink-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                    {step.step}
                  </div>
                  {step.step < 4 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-2xl text-koompi-accent-pink">{step.icon}</span>
                  <h3 className="text-lg font-bold text-koompi-primary mt-1 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section id="pricing" className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              Modular Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Build Your Lab
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Products are independent and combinable. Choose what your school needs.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/fund#pricing"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Build Your Custom Lab</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Configure lab size, add-ons, and installation location
          </p>
        </div>
      </section>

      {/* 6. Solar Add-on */}
      <section className="py-20 px-4 bg-gradient-to-r from-koompi-primary to-koompi-primary relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-koompi-accent-yellow/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-koompi-accent-yellow/20 rounded-2xl flex items-center justify-center mb-6 text-koompi-accent-yellow">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Energy Independent
              </h2>
              <p className="text-gray-300 text-lg">
                Solar-powered labs for schools beyond the grid. Because every student deserves digital education.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Off-Grid Ready', desc: 'Complete solar system designed for each school\'s specific energy needs' },
                { title: 'Sustainable', desc: 'Clean energy with 25+ year panel lifespan and minimal maintenance' },
                { title: 'Low Maintenance', desc: 'Sealed batteries and robust inverters built for tropical climates' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-5">
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
              <Link
                to="/contact"
                className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us for Solar Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof */}
      <section className="relative py-20 px-4 bg-koompi-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/products/students.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-koompi-primary/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: String(STATS.labsInstalled), label: 'Schools Equipped' },
              { value: STATS.studentsImpacted.toLocaleString(), label: 'Students Learning' },
              { value: String(STATS.provincesReached), label: 'Provinces Reached' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl md:text-6xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: 'Our students had never used a computer before KOOMPI Onelab. Now they are learning typing, coding, and digital skills every day.',
                name: 'Teacher Sokha',
                school: 'Prek Toal Primary School, Battambang',
              },
              {
                quote: 'The Content Server gives us access to thousands of educational videos without internet. It has transformed how we teach science and math.',
                name: 'Teacher Channary',
                school: 'Koh Rong Community School, Sihanoukville',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
              >
                <p className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.school}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
              Official Partner: Ministry of Education, Youth and Sport
            </span>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FAQ items={ONELAB_FAQ} columns={2} />
        </div>
      </section>

      {/* 9. CTA */}
      <ProductCTA
        headline="Ready to bring digital education to your school?"
        subtitle="Over 13,000 public schools still have no computer lab. We've equipped 65 so far — partner with us or start your own."
        primaryCTA={{ label: 'Fund a School', to: '/fund#pricing' }}
        secondaryCTA={{ label: 'Contact Us', to: '/contact' }}
      />

      {/* Partnership Section */}
      <section className="relative overflow-hidden bg-koompi-primary py-16">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-koompi-accent-pink/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-koompi-accent-blue/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* MoEYS Logo */}
            <img
              src="/images/products/moeys-logo.png"
              alt="MoEYS - Ministry of Education, Youth and Sport"
              className="h-[200px] md:h-[250px]"
            />

            {/* In Collaboration With */}
            <div className="w-full max-w-5xl mx-auto flex justify-center">
              <span className="text-white text-[17px] font-semibold tracking-[1em] uppercase mt-6 mb-4">
                In Collaboration With
              </span>
            </div>

            {/* Partner Logos */}
            <div className="flex items-center justify-center gap-[18px] flex-wrap">
              <img src="/images/products/saladigital.png" alt="Sala Digital" className="h-[45px]" />
              <img src="/images/products/plp.png" alt="PLP" className="h-[45px]" />
              <img src="/images/products/moeys-edtech.png" alt="EdTech" className="h-[45px]" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OnelabPage

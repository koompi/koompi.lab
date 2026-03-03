import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Mission from '../components/Mission/Mission'
import SchoolMap from '../components/Map/SchoolMap'
import ImpactStats from '../components/Shared/ImpactStats'
import FadeInSection from '../components/Shared/FadeInSection'
import { useState } from 'react'

const HomePage = () => {
  const [provinceFilter, setProvinceFilter] = useState('all')

  return (
    <div className="min-h-screen">
      {/* 1. Dark Hero - Video + Glitch */}
      <Hero />

      {/* 2. White - Mission & Value Props */}
      <Mission />

      {/* 3. Dark - Impact Stats */}
      <ImpactStats />

      {/* 4. Cream - Product Showcase */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-koompi-primary mb-4">
              Complete Solutions for Schools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything a school needs for digital education — from hardware to software to content.
            </p>
          </FadeInSection>

          {/* Flagship Product — Dark Hero Card */}
          <FadeInSection className="mb-8">
            <Link
              to="/onelab"
              className="group block bg-koompi-primary rounded-3xl overflow-hidden relative"
            >
              {/* Gradient orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-koompi-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-koompi-accent-pink/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                  <span className="inline-block px-3 py-1 bg-koompi-secondary/20 text-koompi-secondary text-xs rounded-full font-medium mb-4">
                    Flagship Product
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-koompi-secondary transition-colors">
                    KOOMPI Onelab
                  </h3>
                  <p className="text-white/70 mb-6 text-lg leading-relaxed">
                    Complete computer lab with Ministations, Content Server, WiFi, and teacher training — everything a school needs in one package.
                  </p>
                  <span className="inline-flex items-center gap-2 text-koompi-secondary font-semibold group-hover:gap-3 transition-all">
                    Explore Onelab
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
                  <img
                    src="/images/products/ONELAB-1.png"
                    alt="KOOMPI Onelab"
                    className="max-h-72 w-auto object-contain animate-float drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          </FadeInSection>

          {/* Secondary Products — 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Content Server',
                desc: '2TB offline educational content hub. Khan Academy, Wiki Khmer, and more — no internet needed.',
                image: '/images/products/content-server.png',
                to: '/content-server',
                accent: 'border-t-koompi-secondary',
              },
              {
                name: 'KOOMPI OS',
                desc: 'Lightweight Linux OS built for education. Runs on minimal hardware, easy for teachers.',
                image: '/images/os/bg.png',
                to: '/os',
                accent: 'border-t-koompi-accent-pink',
              },
            ].map((product, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.1}>
                <Link
                  to={product.to}
                  className={`group block h-full bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 border-t-4 ${product.accent}`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-cream overflow-hidden flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-44 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-koompi-primary mb-2 group-hover:text-koompi-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-koompi-secondary group-hover:gap-2.5 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dark - How It Works - Journey Map */}
      <section className="py-32 px-4 bg-koompi-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-koompi-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-koompi-accent-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-koompi-secondary/5 rounded-full blur-3xl" />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInSection className="text-center mb-20">
            <span className="inline-block px-5 py-2 bg-koompi-secondary/20 text-koompi-secondary rounded-full text-sm font-semibold tracking-wide mb-6 border border-koompi-secondary/30">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your Impact,
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-koompi-secondary via-koompi-accent-pink to-koompi-secondary">
                Step by Step
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              From choosing a school to seeing students learn — your donation creates real change in 4 simple steps
            </p>
          </FadeInSection>

          {/* Journey Map */}
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
              {[
                {
                  step: '1',
                  title: 'Choose School',
                  desc: 'Select a school that needs support from our verified list of partner schools across Cambodia.',
                  detail: 'Browse schools by province, see current status, and read their story.',
                  gradient: 'from-koompi-secondary to-cyan-400',
                  glow: 'shadow-koompi-secondary/50'
                },
                {
                  step: '2',
                  title: 'Fund Equipment',
                  desc: 'Choose a lab package, content server, or complete setup to fund.',
                  detail: 'Transparent pricing — 100% goes to equipment, installation & training.',
                  gradient: 'from-koompi-accent-pink to-rose-400',
                  glow: 'shadow-koompi-accent-pink/50'
                },
                {
                  step: '3',
                  title: 'We Install',
                  desc: 'Our team handles delivery, setup, and teacher training.',
                  detail: 'Usually within 2-4 weeks. Includes full technical support.',
                  gradient: 'from-amber-400 to-orange-500',
                  glow: 'shadow-amber-400/50'
                },
                {
                  step: '4',
                  title: 'Students Learn',
                  desc: 'Students access digital education immediately.',
                  detail: 'Receive updates, photos, and impact reports from the school.',
                  gradient: 'from-emerald-400 to-green-500',
                  glow: 'shadow-emerald-400/50'
                },
              ].map((item, i) => (
                <FadeInSection key={i} delay={i * 0.15} className="relative group">
                  {/* Step Card */}
                  <div className="relative h-full">
                    {/* Floating card */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 h-full min-h-[280px] flex flex-col">
                      {/* Step number badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white text-xl font-bold mb-5 shadow-lg ${item.glow} relative z-10`}>
                        {item.step}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-auto relative z-10">
                        {item.desc}
                      </p>

                      {/* Expandable detail on hover */}
                      <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-out">
                        <p className="text-white/40 text-xs pt-2 border-t border-white/10">
                          {item.detail}
                        </p>
                      </div>

                      {/* Connector dot for mobile */}
                      <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full last:hidden" />
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Animated progress line - between cards and CTA */}
          <div className="relative mt-16 mb-8">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-koompi-secondary via-koompi-accent-pink to-koompi-secondary animate-progress-line"
                style={{
                  animation: 'progressLine 3s ease-in-out infinite, shimmer 2s linear infinite',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
            {/* Progress dot that moves along the line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-koompi-secondary/50 animate-traverse-line"
              style={{ animation: 'traverseLine 8s ease-in-out infinite' }}
            />
          </div>

          {/* CTA */}
          <FadeInSection className="text-center mt-16">
            <Link
              to="/schools"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-koompi-secondary to-koompi-accent-pink text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-koompi-accent-pink/30 hover:scale-105 transition-all duration-300 group"
            >
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </FadeInSection>
        </div>

        {/* Add custom animations via style tag */}
        <style>{`
          @keyframes progressLine {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          @keyframes traverseLine {
            0% { left: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-progress-line {
            animation: progressLine 3s ease-in-out infinite;
          }
          .animate-traverse-line {
            animation: traverseLine 8s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* 6. Cream - Map Section */}
      <section className="bg-cream">
        <SchoolMap onProvinceSelect={setProvinceFilter} />
      </section>

      {/* 7. White - Social Proof / Installation Photos */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-yellow/15 text-yellow-700 rounded-full text-sm font-medium mb-4">
              Real Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              See It in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KOOMPI Onelabs are transforming classrooms across Cambodia. Here's what digital education looks like on the ground.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: '/images/products/Students.JPG', caption: 'Students using KOOMPI Ministations at a rural school' },
              { image: '/images/products/computer-lab.png', caption: 'A fully installed KOOMPI Onelab computer room' },
              { image: '/images/products/teacher.jpg', caption: 'Teacher-led ICT class with KOOMPI equipment' },
            ].map((photo, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-cream">
                    <p className="text-sm text-gray-600">{photo.caption}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dark - CTA Section */}
      <section className="relative py-24 bg-koompi-primary text-white overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-koompi-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-koompi-accent-pink/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to make a difference?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Fund a school with a complete KOOMPI Onelab setup. Every dollar goes directly to hardware, installation, and teacher training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fund#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-koompi-accent-pink text-white rounded-full font-semibold text-lg hover:bg-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-accent-500"
              >
                Fund a School
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/schools"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View All Schools
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MoEYS Partnership
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Transparent Pricing
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-koompi-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                100% Direct Impact
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

    </div>
  )
}

export default HomePage

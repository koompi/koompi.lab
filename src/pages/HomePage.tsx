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
                  className={`group block h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 ${product.accent}`}
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

      {/* 5. White - How It Works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              From Funding to Learning in 4 Steps
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-koompi-secondary via-koompi-accent-pink to-koompi-secondary" />

            {[
              {
                step: '01',
                title: 'Choose School',
                desc: 'Select a school that needs support from our verified list.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                step: '02',
                title: 'Fund Equipment',
                desc: 'Choose a lab, content server, or complete package to fund.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                step: '03',
                title: 'We Install',
                desc: 'Our team handles delivery, setup, and teacher training.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                step: '04',
                title: 'Students Learn',
                desc: 'Students access digital education immediately.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.15} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-koompi-primary to-koompi-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-koompi-secondary tracking-widest">{item.step}</span>
                <h3 className="text-lg font-bold text-koompi-primary mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
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
                <div className="rounded-2xl overflow-hidden shadow-lg group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
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

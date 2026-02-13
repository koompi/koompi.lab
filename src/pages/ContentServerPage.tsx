import { Link } from 'react-router-dom'
import { FeatureCard, SpecTable, FAQ, ProductCTA } from '../components/Products'
import Footer from '../components/Shared/Footer'
import {
  CONTENT_CATEGORIES,
  CONTENT_SERVER_SPECS,
  CONTENT_SERVER_FAQ,
  CONTENT_SERVER_PACKAGE_PRICE,
} from '../data/products'

const ContentServerPage = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Video Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-koompi-primary/90 via-koompi-primary/80 to-secondary-600/90 backdrop-blur-[4px]" />

        {/* Dot pattern grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        {/* Content */}
        <div className="relative z-10 w-[calc(100%-2rem)] max-w-5xl mx-auto px-4 pt-32 pb-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            Offline Learning Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            2TB of Education.<br />Zero Internet Required.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The KOOMPI Content Server brings a world-class educational library to any school, with or without internet connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/fund#pricing"
              className="px-8 py-4 bg-gradient-to-r from-koompi-accent-persimmon to-pink-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-accent-500"
            >
              Get Content Server
            </a>
            <Link
              to="#content"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore Content
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]">
              <p className="text-2xl md:text-3xl font-bold text-white">40</p>
              <p className="text-sm text-gray-300">Schools Connected</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]">
              <p className="text-2xl md:text-3xl font-bold text-white">24,000</p>
              <p className="text-sm text-gray-300">Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]">
              <p className="text-2xl md:text-3xl font-bold text-white">5</p>
              <p className="text-sm text-gray-300">Content Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Server Specs */}
      <section className="py-20 px-4 bg-white">
        <div className="w-[calc(100%-2rem)] max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              Content Server Specs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* KOOMPI Mini PC */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <img src="/images/products/mini4.png" alt="KOOMPI Mini" className="w-16 h-16 object-contain" />
                <span className="font-semibold text-gray-800 text-lg group-hover:translate-x-1 transition-transform duration-300">
                  KOOMPI Mini PC
                </span>
              </div>

              {/* SSD 2TB Storage */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <img src="/images/products/ssd.png" alt="SSD" className="w-16 h-16 object-contain" />
                <span className="font-semibold text-gray-800 text-lg group-hover:translate-x-1 transition-transform duration-300">
                  SSD 2TB Storage
                </span>
              </div>

              {/* Deco Mesh WiFi */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <img src="/images/products/deco.png" alt="Deco Mesh" className="w-16 h-16 object-contain" />
                <span className="font-semibold text-gray-800 text-lg group-hover:translate-x-1 transition-transform duration-300">
                  Deco Mesh WiFi (150 connections)
                </span>
              </div>

              {/* Software */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <img src="/images/products/app-salacamp.png" alt="Salacamp" className="w-16 h-16 object-contain" />
                <span className="font-semibold text-gray-800 text-lg group-hover:translate-x-1 transition-transform duration-300">
                  Software (KOOMPI Apps, Salacamp)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works - Visual Diagram */}
      <section className="py-20 px-4 bg-cream">
        <div className="w-[calc(100%-2rem)] max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
            Simple Setup
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-12">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Content Server */}
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center min-w-[140px]">
              <img
                src="/images/products/mini4.png"
                alt="Content Server"
                className="w-20 h-20 object-contain mx-auto mb-3"
              />
              <p className="font-semibold text-koompi-primary text-sm">Content Server</p>
              <p className="text-xs text-gray-500">2TB Library</p>
            </div>

            {/* WiFi icon */}
            <div className="shrink-0 text-koompi-accent-blue">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>

            {/* Devices */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[
                { icon: '📱', label: 'Phones' },
                { icon: '📋', label: 'Tablets' },
                { icon: '💻', label: 'Laptops' },
                { icon: '🖥️', label: 'Ministations' },
              ].map((device, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow border border-gray-100 text-center"
                >
                  <span className="text-2xl block mb-1">{device.icon}</span>
                  <p className="text-xs text-gray-600">{device.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-gray-600 text-lg">
            Any device connects. <span className="font-semibold text-koompi-primary">No internet needed.</span>
          </p>
        </div>
      </section>

      {/* 4. Social Proof */}
      <section className="relative py-20 px-4 bg-koompi-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/products/students.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-koompi-primary/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-5xl font-black text-white mb-4">40 Schools Connected</p>
          <p className="text-gray-400 mb-8">
            Thousands of students across Cambodia accessing educational content — no internet needed.
          </p>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-gray-300 italic mb-4">
              "The Content Server is like having a library, a video classroom, and a computer lab all in one small box."
            </p>
            <p className="font-semibold text-white">Teacher Dara</p>
            <p className="text-sm text-gray-400">Kampong Speu Province</p>
          </div>
        </div>
      </section>

      {/* 7. FAQ + CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FAQ items={CONTENT_SERVER_FAQ} columns={2} />
        </div>
      </section>

      <ProductCTA
        headline="Bring Offline Learning to Your School"
        subtitle="2TB of educational content. No internet required. Transform your school today."
        primaryCTA={{ label: 'Get Content Server', to: '/fund#pricing' }}
        secondaryCTA={{ label: 'Contact Us', to: '/contact' }}
      />

      <Footer />
    </div>
  )
}

export default ContentServerPage

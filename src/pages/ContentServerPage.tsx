import { Link } from 'react-router-dom'
import { FeatureCard, SpecTable, FAQ, ProductCTA } from '../components/Products'
import { getIcon } from '../components/Shared/Icons'
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
            <Link
              to="/fund#pricing"
              className="px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-accent-500"
            >
              Get Content Server
            </Link>
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

      {/* 3. How It Works - Living Network Visualization */}
      <section className="py-32 px-4 bg-koompi-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-koompi-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-koompi-accent-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />

        <div className="relative z-10 max-w-5xl mx-auto w-[calc(100%-2rem)]">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 bg-koompi-secondary/20 text-koompi-secondary rounded-full text-sm font-semibold tracking-wide mb-6 border border-koompi-secondary/30">
              SIMPLE SETUP
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-koompi-secondary via-koompi-accent-pink to-koompi-secondary">Works</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              One box. Zero internet. Unlimited learning. See how the Content Server transforms any classroom.
            </p>
          </div>

          {/* Network Visualization - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
            {/* Content Server - LEFT */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-koompi-secondary to-koompi-accent-pink rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow" />
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 group-hover:border-koompi-secondary/50 transition-all duration-500">
                  <img
                    src="/images/products/mini4.png"
                    alt="Content Server"
                    className="w-24 h-24 object-contain mx-auto mb-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  <p className="font-bold text-white text-lg text-center">Content Server</p>
                  <p className="text-koompi-secondary text-sm text-center font-medium">2TB Library</p>
                  {/* Status indicator */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Broadcasting</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white/60 text-sm">Step 1: Plug in & power on</p>
            </div>

            {/* WiFi Waves - CENTER */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                {/* Animated WiFi waves */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-koompi-secondary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-2 border-koompi-secondary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-koompi-accent-pink/20 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2s' }} />
                </div>
                {/* Center icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-koompi-secondary to-koompi-accent-pink rounded-full flex items-center justify-center shadow-lg shadow-koompi-secondary/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
              </div>
              <p className="mt-8 text-white/60 text-sm font-medium">WiFi Network</p>
            </div>

            {/* Connected Devices - RIGHT */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Phones', desc: 'Connect instantly' },
                { label: 'Tablets', desc: 'Full content access' },
                { label: 'Laptops', desc: 'Browse & learn' },
                { label: 'Ministations', desc: 'Classroom ready' },
              ].map((device, i) => (
                <div
                  key={i}
                  className="relative group h-32"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-koompi-secondary/20 to-koompi-accent-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Card */}
                  <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-center">
                    <p className="font-semibold text-white text-base mb-1">{device.label}</p>
                    <p className="text-xs text-white/40 mb-3">{device.desc}</p>
                    {/* Connection status */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-koompi-secondary rounded-full animate-pulse" />
                      <span className="text-[10px] text-koompi-secondary/70">Connected</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-lg">
              Any device connects. <span className="font-bold text-white">No internet needed.</span>
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Auto-discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>150+ connections</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Offline forever</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
          }
          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
        `}</style>
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

    </div>
  )
}

export default ContentServerPage

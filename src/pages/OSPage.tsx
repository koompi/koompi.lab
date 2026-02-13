import { useState } from 'react'
import { ProductHero, FeatureCard, FAQ, ProductCTA } from '../components/Products'
import Footer from '../components/Shared/Footer'
import { OS_FEATURES, OS_FAQ } from '../data/products'

const osScreenshots = [
  { src: '/images/os/bg.png', label: 'Desktop' },
  { src: '/images/os/appstore.png', label: 'App Store' },
  { src: '/images/os/interface-dark.png', label: 'Interface' },
  { src: '/images/os/smartupdate-dark.png', label: 'Smart Updates' },
  { src: '/images/os/subsystems.png', label: 'Subsystems' },
]

const OSPage = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* 1. Immersive Hero */}
      <ProductHero
        variant="video"
        videoSrc="/videos/Video-bg-hero-sec.mp4"
        badge="KOOMPI OS3"
        title="KOOMPI OS"
        glitchWord="KOOMPI OS"
        subtitle="Built for Cambodia. Open for Everyone."
        ctas={[
          { label: 'Download', to: '#download', variant: 'primary' },
          { label: 'Learn More', to: '#features', variant: 'ghost' },
        ]}
      >
        {/* Dock at bottom */}
        <div className="mt-12 flex justify-center">
          <img
            src="/images/os/dock.png"
            alt="KOOMPI OS Dock"
            className="max-w-md w-full object-contain drop-shadow-2xl"
          />
        </div>
      </ProductHero>

      {/* 2. Features - Bento Grid */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Designed for Everyone
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A lightweight, secure, and easy-to-use operating system optimized for education and productivity.
            </p>
          </div>
          <div className="bento-grid">
            {OS_FEATURES.map((feature, i) => (
              <FeatureCard
                key={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
                large={feature.large}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Screenshots Tour */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              See It in Action
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scroll-snap-x scrollbar-hide">
            {osScreenshots.map((screenshot, i) => (
              <button
                key={i}
                onClick={() => setSelectedScreenshot(screenshot.src)}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-koompi-primary text-sm">
                    {screenshot.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot modal */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedScreenshot}
              alt="Screenshot"
              className="w-full rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedScreenshot(null)}
              className="mt-4 px-6 py-2 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors mx-auto block"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 4. Two Editions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              Two Editions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* School Edition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-koompi-accent-blue/30 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-koompi-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-koompi-primary mb-2">
                School Edition
              </h3>
              <p className="text-koompi-accent-blue font-medium text-sm mb-4">
                Pre-installed on KOOMPI devices
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-koompi-secondary">&#9679;</span>
                  Managed and pre-configured
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-secondary">&#9679;</span>
                  Restricted for classroom use
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-secondary">&#9679;</span>
                  Auto-updates enabled
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-secondary">&#9679;</span>
                  Educational apps pre-installed
                </li>
              </ul>
            </div>

            {/* Personal Edition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-koompi-accent-persimmon/30 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-koompi-accent-persimmon/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">⬇️</span>
              </div>
              <h3 className="text-2xl font-bold text-koompi-primary mb-2">
                Personal Edition
              </h3>
              <p className="text-koompi-accent-persimmon font-medium text-sm mb-4">
                Free download
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-koompi-accent-persimmon">&#9679;</span>
                  Full-featured OS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-accent-persimmon">&#9679;</span>
                  Fully customizable
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-accent-persimmon">&#9679;</span>
                  Multi-distro support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-koompi-accent-persimmon">&#9679;</span>
                  Developer friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Download */}
      <section id="download" className="py-20 px-4 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-4">
            Download KOOMPI OS
          </h2>
          <p className="text-gray-600 mb-8">
            Get the Personal Edition — free, forever.
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-koompi-primary to-secondary-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download ISO
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Minimum requirements: 2GB RAM, 20GB storage, 64-bit processor
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FAQ items={OS_FAQ} columns={2} />
        </div>
      </section>

      {/* CTA */}
      <ProductCTA
        headline="Every KOOMPI device runs KOOMPI OS"
        subtitle="Purpose-built for education. Optimized for Cambodian schools."
        primaryCTA={{ label: 'See KOOMPI Onelab', to: '/onelab' }}
        secondaryCTA={{ label: 'Download OS', to: '#download' }}
      />

      <Footer />
    </div>
  )
}

export default OSPage

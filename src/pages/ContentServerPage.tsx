import { Link } from 'react-router-dom'
import { ProductHero, FeatureCard, SpecTable, FAQ, ProductCTA } from '../components/Products'
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
      {/* 1. Split Hero */}
      <ProductHero
        variant="split"
        badge="Offline Learning Hub"
        title="2TB of Education. Zero Internet Required."
        subtitle="The KOOMPI Content Server brings a world-class educational library to any school, with or without internet connectivity."
        imageSrc="/images/products/content-server.png"
        imageAlt="KOOMPI Content Server"
        stats={[
          { value: '40', label: 'Schools Connected' },
          { value: '24,000', label: 'Students' },
          { value: '5', label: 'Content Categories' },
        ]}
        ctas={[
          { label: 'Get Content Server', to: '/fund', variant: 'primary' },
          { label: 'Learn More', to: '#content', variant: 'ghost' },
        ]}
      />

      {/* 2. Content Library - Bento Grid */}
      <section id="content" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-yellow/15 text-yellow-700 rounded-full text-sm font-medium mb-4">
              Content Library
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Everything Students Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated educational content from world-class sources, available entirely offline.
            </p>
          </div>
          <div className="bento-grid">
            {CONTENT_CATEGORIES.map((cat, i) => (
              <FeatureCard
                key={i}
                title={cat.name}
                description={`${cat.description} (${cat.size}, ${cat.items})`}
                icon={cat.icon}
                large={cat.large}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works - Visual Diagram */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
            Simple Setup
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-12">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Content Server */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center min-w-[160px]">
              <img
                src="/images/products/content-server.png"
                alt="Content Server"
                className="w-20 h-20 object-contain mx-auto mb-3"
              />
              <p className="font-semibold text-koompi-primary text-sm">Content Server</p>
              <p className="text-xs text-gray-500">2TB Library</p>
            </div>

            {/* Arrow / WiFi waves */}
            <div className="text-4xl text-koompi-accent-blue rotate-90 md:rotate-0">
              📶
            </div>

            {/* Devices */}
            <div className="grid grid-cols-2 gap-3">
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

      {/* 4. Hardware Specs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
              Technical Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              Hardware Specs
            </h2>
          </div>
          <SpecTable
            specs={CONTENT_SERVER_SPECS}
            productImage="/images/products/content-server.png"
            productImageAlt="KOOMPI Content Server"
          />
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary">
              Simple Pricing
            </h2>
          </div>

          {/* Main pricing card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center max-w-lg mx-auto mb-8">
            <p className="text-sm text-gray-500 mb-2">Complete Package</p>
            <p className="text-5xl font-black text-koompi-primary mb-6">
              ${CONTENT_SERVER_PACKAGE_PRICE.toLocaleString()}
            </p>
            <ul className="space-y-3 text-left mb-8">
              {[
                'Server hardware (J4125, 8GB, 2TB)',
                '2TB educational content library',
                'TP-Link Deco Mesh WiFi',
                'Professional installation',
                'Weteka/Salacamp platform',
                'Teacher training',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/fund"
              className="block w-full py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              Get Content Server
            </Link>
          </div>

          {/* Upsell banner */}
          <div className="bg-gradient-to-r from-koompi-primary to-secondary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">
              Want the full lab experience?
            </h3>
            <p className="text-gray-300 mb-4">
              Combine Content Server with KOOMPI Lab for a complete digital classroom.
            </p>
            <Link
              to="/onelab"
              className="inline-block px-8 py-3 bg-white text-koompi-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              See KOOMPI Onelab
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Social Proof */}
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
        primaryCTA={{ label: 'Get Content Server', to: '/fund' }}
        secondaryCTA={{ label: 'Contact Us', to: '/contact' }}
      />

      <Footer />
    </div>
  )
}

export default ContentServerPage

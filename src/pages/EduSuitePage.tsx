import { ProductHero, ProductCTA } from '../components/Products'
import Footer from '../components/Shared/Footer'
import { EDU_SUITE_APPS, ICT_CURRICULUM } from '../data/products'

const categoryColors: Record<string, string> = {
  Math: 'bg-koompi-secondary/10 text-secondary-700',
  Science: 'bg-koompi-accent-yellow/15 text-yellow-700',
  Language: 'bg-koompi-accent-pink/10 text-accent-700',
  Coding: 'bg-koompi-accent-pink/10 text-accent-700',
  'Social Studies': 'bg-koompi-secondary/10 text-secondary-700',
  Arts: 'bg-koompi-accent-yellow/15 text-yellow-700',
}

const EduSuitePage = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Split Hero */}
      <ProductHero
        variant="split"
        badge="Standalone Product"
        title="KOOMPI Edu Suite"
        subtitle="Educational software built for Cambodian classrooms. Curriculum-aligned, offline-ready, and teacher-friendly."
        imageSrc="/images/products/weteka-laptop.png"
        imageAlt="KOOMPI Edu Suite"
        ctas={[
          { label: 'Get Edu Suite', to: '/fund', variant: 'primary' },
          { label: 'See Apps', to: '#apps', variant: 'ghost' },
        ]}
      />

      {/* 2. Product Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-4">
              What is Edu Suite?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A curated educational software ecosystem designed for K-12 students in Cambodian schools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Curriculum-Aligned',
                description: 'Content mapped to Cambodia\'s national education framework and MoEYS standards.',
                color: 'from-koompi-secondary to-cyan-600',
              },
              {
                icon: '📡',
                title: 'Offline-Ready',
                description: 'Every app works without internet. Perfect for schools in remote areas.',
                color: 'from-koompi-accent-yellow to-yellow-600',
              },
              {
                icon: '👩‍🏫',
                title: 'Teacher-Friendly',
                description: 'Simple interfaces designed for teachers with any level of tech experience.',
                color: 'from-koompi-accent-pink to-pink-400',
              },
            ].map((prop, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                  <span className="text-3xl">{prop.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-koompi-primary mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. App Showcase */}
      <section id="apps" className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              App Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Educational Apps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDU_SUITE_APPS.map((app, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-koompi-primary/10 to-secondary-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{app.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-koompi-primary mb-1">
                      {app.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[app.category] || 'bg-gray-100 text-gray-600'}`}>
                        {app.category}
                      </span>
                      <span className="text-xs text-gray-400">{app.ageRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ICT Curriculum */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-koompi-accent-yellow/15 text-yellow-700 rounded-full text-sm font-bold mb-4">
              FREE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              ICT Curriculum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Free digital literacy course for all students. Available on the Weteka platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ICT_CURRICULUM.map((lesson, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-koompi-accent-yellow/10 to-white rounded-2xl p-6 border border-yellow-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{lesson.icon}</span>
                  <h3 className="font-bold text-koompi-primary">{lesson.title}</h3>
                  <span className="ml-auto px-2 py-0.5 bg-koompi-accent-yellow/15 text-yellow-700 rounded text-xs font-bold">
                    FREE
                  </span>
                </div>
                <p className="text-sm text-gray-600">{lesson.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Powered by</p>
              <p className="text-xl font-bold text-koompi-primary">Weteka Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. For Schools */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              For Schools
            </h2>
            <p className="text-gray-600">
              Easy deployment and management for school administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📦',
                title: 'Easy Deployment',
                description: 'Pre-loaded on all KOOMPI devices. One-click setup for existing hardware.',
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Monitor student engagement and learning progress across all apps.',
              },
              {
                icon: '🔧',
                title: 'Bulk Management',
                description: 'Manage all devices from a single dashboard. Push updates school-wide.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="font-bold text-koompi-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <ProductCTA
        headline="Get Edu Suite for Your School"
        subtitle="Included with every KOOMPI Onelab. Also available as a standalone product."
        primaryCTA={{ label: 'Get Edu Suite', to: '/fund' }}
        secondaryCTA={{ label: 'See KOOMPI Onelab', to: '/onelab' }}
      />

      <Footer />
    </div>
  )
}

export default EduSuitePage

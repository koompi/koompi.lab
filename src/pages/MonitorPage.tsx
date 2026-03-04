import { Link } from 'react-router-dom'
import HeroBackground from '../components/Shared/HeroBackground'

const MonitorPage = () => {
  const features = [
    {
      title: '21.5" IPS Panel',
      desc: 'Crystal clear colors from every angle',
      gradientFrom: 'from-amber-50',
      gradientTo: 'to-orange-50',
      accentColor: '#F59E0B',
      shape: 'circle' as const,
    },
    {
      title: 'IPS 1080p Resolution',
      desc: 'Full HD display for stunning detail',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-indigo-50',
      accentColor: '#3B82F6',
      shape: 'diamond' as const,
    },
    {
      title: '75Hz Refresh Rate',
      desc: 'Ultra-smooth motion for work and play',
      gradientFrom: 'from-emerald-50',
      gradientTo: 'to-green-50',
      accentColor: '#10B981',
      shape: 'triangle' as const,
    },
    {
      title: 'Clarity & Vibrancy',
      desc: 'Brilliant IPS full HD display experience',
      gradientFrom: 'from-rose-50',
      gradientTo: 'to-pink-50',
      accentColor: '#F43F5E',
      shape: 'rect' as const,
    },
  ]

  const connectivity = [
    {
      title: 'HDMI x1',
      desc: 'Digital video input',
    },
    {
      title: 'VGA x1',
      desc: 'Legacy video input',
    },
    {
      title: 'VESA Mount Ready',
      desc: '75x75mm standard pattern',
    },
    {
      title: 'Tilt Stand',
      desc: 'Find your perfect viewing angle',
    },
  ]

  const useCases = [
    {
      title: 'Company',
      desc: 'Ideal for offices and workstations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <rect x="4" y="8" width="40" height="32" rx={3} strokeWidth={2.5} />
          <path strokeWidth={2.5} strokeLinecap="round" d="M16 20h6M16 28h6M26 20v12" />
          <circle cx="36" cy="14" r={2} strokeWidth={2} />
        </svg>
      ),
    },
    {
      title: 'Computer Labs',
      desc: 'Perfect for educational setups',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <rect x="6" y="12" width="16" height="22" rx={2} strokeWidth={2.5} />
          <path strokeWidth={2.5} d="M10 18h8M10 22h8M10 26h6" />
          <rect x="26" y="12" width="16" height="22" rx={2} strokeWidth={2.5} />
          <path strokeWidth={2.5} d="M30 18h8M30 22h8M30 26h6" />
          <circle cx="14" cy="40" r={1.5} fill="currentColor" />
          <circle cx="34" cy="40" r={1.5} fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Study Setup',
      desc: 'Great for students and learning',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M24 4L12 14v24l12-10M24 4l12 10v24l-12-10" />
          <path strokeWidth={2.5} strokeLinecap="round" d="M8 22h6M8 26h10" />
          <rect x="30" y="18" width="12" height="14" rx={2} strokeWidth={2.5} />
          <path strokeWidth={2.5} d="M34 24h4M34 28h6" />
          <circle cx="14" cy="8" r={2} strokeWidth={2} />
        </svg>
      ),
    },
    {
      title: 'Home Office',
      desc: 'Perfect for productivity and work',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
          <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M8 38V14a2 2 0 012-2-2h4a2 2 0 012 2 2v24M40 38V14a2 2 0 012-2-2h4a2 2 0 012 2 2v24" />
          <rect x="18" y="22" width="12" height="10" rx={1.5} strokeWidth={2.5} />
          <path strokeWidth={2.5} d="M22 26h4M22 28h6" />
          <circle cx="24" cy="18" r={2} strokeWidth={2} />
          <path strokeWidth={2.5} strokeLinecap="round" d="M12 34h2M38 34h2" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with HeroBackground */}
      <HeroBackground>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center justify-center h-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
                MONITOR 21"
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                More For
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Less</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed max-w-lg">
                You can never have "too many" tabs with KOOMPI Monitor. Simultaneously display more documents, media, and projects to get more done in less time.
              </p>
              {/* Price Display */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-6">
                <span className="text-white/60 text-sm font-medium">Starting at</span>
                <span className="text-4xl md:text-5xl font-bold text-amber-400">$199</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Order Now
                </Link>
                <Link
                  to="#specs"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Specs
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow effect behind monitor */}
                <div className="absolute inset-0 bg-gradient-to-br from-koompi-accent-pink/20 to-koompi-secondary/20 rounded-full blur-3xl" />
                <img
                  src="/images/products/monitor6.png"
                  alt="KOOMPI Monitor"
                  className="w-full max-w-xl drop-shadow-2xl relative z-10 animate-float-slow scale-150"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </HeroBackground>

      {/* Display Features Grid */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-koompi-secondary/10 text-koompi-secondary rounded-full text-sm font-semibold mb-4">
              DISPLAY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-koompi-primary mb-4">
              Clarity. Vibrancy. Efficiency.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy an immersive experience every time you turn on Monitor with brilliant IPS full HD display. The rich detail lightens up your workload, allowing for increased productivity and focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="relative h-full">
                  {/* Gradient background layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-[1.5rem]`}></div>

                  {/* White card layer */}
                  <div className="relative h-full bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    {/* Decorative shape */}
                    <svg className={`absolute -top-8 -right-8 w-32 h-32 opacity-5`} viewBox="0 0 100 100">
                      {feature.shape === 'circle' && <circle cx="50" cy="50" r="50" fill={feature.accentColor}></circle>}
                      {feature.shape === 'diamond' && <path d="M50 0 L100 50 L50 100 L0 50 Z" fill={feature.accentColor}></path>}
                      {feature.shape === 'triangle' && <polygon points="50,0 100,80 0,80" fill={feature.accentColor}></polygon>}
                      {feature.shape === 'rect' && <rect x="10" y="10" width="80" height="80" rx="10" fill={feature.accentColor}></rect>}
                    </svg>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:tracking-wide transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 h-0.5 rounded-full"
                      style={{ backgroundColor: feature.accentColor, width: '60%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity & Specs */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-koompi-primary/10 text-koompi-primary rounded-full text-sm font-semibold mb-4">
              PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-4">
              Display Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Every day is a new journey with KOOMPI Monitor. Allow yourself to be swept away in quality, professional experiences with each click.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {connectivity.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <h3 className="text-lg font-bold text-koompi-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Use Cases */}
      <section className="py-24 px-4 bg-gradient-to-br from-koompi-primary to-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-koompi-accent-pink/20 text-koompi-accent-pink rounded-full text-sm font-semibold mb-4">
              USE CASES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Personalised to You
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The KOOMPI Monitor is ideal solution for companies, startups, or SMEs looking for affordability inclusive of high performance and versatility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4 text-koompi-accent-pink">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-[#000000] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-koompi-accent-pink/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-koompi-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            GET READY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Order KOOMPI Monitor
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MonitorPage

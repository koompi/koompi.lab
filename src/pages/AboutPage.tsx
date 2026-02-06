import Footer from '../components/Shared/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const team = [
  {
    name: 'Rithy THUL',
    role: 'Promoter',
    image: 'https://koompi.com/images/team/rithy-thul.webp',
    bio: 'Founded KOOMPI in 2018 with a vision to make technology accessible to every Cambodian student.',
  },
  {
    name: 'Brilliant PHAL',
    role: 'OS Lead',
    image: 'https://koompi.com/images/team/brilliant.jpg',
    bio: 'Leading the development of KOOMPI OS, a Linux-based operating system optimized for education.',
  },
  {
    name: 'Vuthy SAN',
    role: 'Web Apps Dev Lead',
    image: 'https://koompi.com/images/team/vuthy.jpg',
    bio: 'Building web applications that power KOOMPI\'s digital platform and services.',
  },
  {
    name: 'Raksme VEN',
    role: 'Finance & Vendor Relation',
    image: 'https://koompi.com/images/team/raksme.jpg',
    bio: 'Managing financial operations and vendor partnerships across Cambodia.',
  },
  {
    name: 'Sela THUL',
    role: 'Media & Communication Manager',
    image: 'https://koompi.com/images/team/sela.jpg',
    bio: 'Sharing KOOMPI\'s story and mission with communities across Cambodia.',
  },
  {
    name: 'Theara THENG',
    role: 'Social Marketing & Sale',
    image: 'https://koompi.com/images/team/theara.jpg',
    bio: 'Connecting schools and organizations with KOOMPI\'s education solutions.',
  },
  {
    name: 'Thith THIN',
    role: 'Full Stack Developer',
    image: 'https://koompi.com/images/team/thith.jpg',
    bio: 'Developing end-to-end solutions for KOOMPI\'s digital platforms.',
  },
  {
    name: 'Hangsea HONG',
    role: 'OS Developer',
    image: 'https://koompi.com/images/team/hangsea.jpg',
    bio: 'Contributing to KOOMPI OS development and system architecture.',
  },
  {
    name: 'Sokunsamnang SAM AN',
    role: 'Network Developer',
    image: 'https://koompi.com/images/team/samnang.jpg',
    bio: 'Building network infrastructure for offline learning solutions.',
  },
]

const partners = [
  { name: 'Ministry of Education, Youth and Sport', type: 'Government Partner', logo: '🏛️' },
  { name: 'Baray', type: 'Payment Partner', logo: '💳' },
]

const projects = [
  {
    name: 'ONELAB',
    description: 'Advanced learning, teaching, work and study environments, centered around a local independent server at each school.',
    icon: '🏫',
    link: '/onelab',
  },
  {
    name: 'Content Server',
    description: 'Offline-first digital library and learning management systems for schools and institutions. Designed to help displaced students continue their education anytime, anywhere.',
    icon: '📚',
    link: '/content-server',
  },
  {
    name: 'KOOMPI OS',
    description: 'A multi-purpose OS for both desktop and enterprise servers. Our R&D team continues to advance features in Blockchain, P2P, and AI.',
    icon: '💻',
    link: '/os',
  },
  {
    name: 'Weteka',
    description: 'A virtual platform for students, teachers, and professionals to share their knowledge with other students.',
    icon: '🎓',
    link: 'https://weteka.org',
  },
]

const AboutPage = () => {
  // Add smooth scroll and animation classes on mount
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      observer.observe(section)
    })

    return () => {
      document.documentElement.style.scrollBehavior = ''
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-cream scroll-smooth">
      {/* Hero - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-600 text-white min-h-[600px] pt-32">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-koompi-accent-orange/30 rotate-45 rounded-sm animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-koompi-accent-blue/40 rotate-45 rounded-sm animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-white/10 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-koompi-accent-orange/20 text-koompi-accent-orange rounded-full text-sm font-medium mb-6">
                  About KOOMPI
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Empowering Cambodia<br />
                  <span className="text-koompi-accent-orange">Through Digital Education</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-xl">
                  Cambodia's first locally designed laptop brand, founded in 2018 with a mission to bring
                  digital education to every school in the country.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/schools"
                  className="px-6 py-3 bg-koompi-accent-orange text-white rounded-full font-semibold hover:bg-amber-600 transition shadow-lg shadow-orange-500/30"
                >
                  Fund a School
                </Link>
                <Link
                  to="/impact"
                  className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition border border-white/20"
                >
                  Our Impact
                </Link>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">65</p>
                <p className="text-xs text-gray-300">Schools</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">12K+</p>
                <p className="text-xs text-gray-300">Students</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-gray-300">Provinces</p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              {/* Large KOOMPI Onelab icon with stats */}
              <div className="relative w-full max-w-[400px] mx-auto">
                {/* Floating elements */}
                <div className="absolute -top-4 right-0 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <span className="text-lg">📚</span>
                </div>

                {/* Main Onelab Icon - Animated */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto relative">
                    {/* Animated ring */}
                    <div className="absolute inset-0 border-4 border-dashed border-koompi-accent-orange/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-4 border-2 border-dotted border-koompi-accent-blue/30 rounded-full animate-spin-reverse" style={{ animationDuration: '15s' }} />

                    {/* Monitor/Ministation SVG */}
                    <div className="absolute inset-8 flex items-center justify-center animate-float" style={{ animationDuration: '3s' }}>
                      <svg className="w-full h-full text-white drop-shadow-2xl" viewBox="0 0 100 100" fill="none">
                        {/* Monitor stand */}
                        <rect x="42" y="70" width="16" height="8" fill="currentColor" opacity="0.6"/>
                        <rect x="35" y="76" width="30" height="4" rx="2" fill="currentColor" opacity="0.4"/>

                        {/* Monitor frame */}
                        <rect x="10" y="20" width="80" height="50" rx="4" fill="currentColor" opacity="0.2"/>
                        <rect x="12" y="22" width="76" height="46" rx="2" fill="url(#screenGradient)"/>

                        {/* Screen content - KOOMPI logo representation */}
                        <rect x="30" y="35" width="40" height="20" rx="2" fill="white" opacity="0.9"/>
                        <circle cx="38" cy="45" r="4" fill="#F1811B"/>
                        <rect x="46" y="42" width="18" height="6" rx="1" fill="#021C40"/>

                        {/* Screen glow effect */}
                        <rect x="12" y="22" width="76" height="46" rx="2" fill="url(#glowGradient)" opacity="0.3"/>

                        {/* Gradient definitions */}
                        <defs>
                          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#021C40"/>
                            <stop offset="100%" stopColor="#035F5F"/>
                          </linearGradient>
                          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38ACD9" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="transparent"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Onelab Label */}
                  <p className="text-koompi-accent-orange font-semibold mt-4 text-lg">Onelab</p>
                  <p className="text-gray-400 text-sm">Ministation + Content Server</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">65</p>
                      <p className="text-xs text-gray-300">Schools</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">12K+</p>
                      <p className="text-xs text-gray-300">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">24</p>
                      <p className="text-xs text-gray-300">Provinces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add custom animations to tailwind config or inline styles */}
            <style>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes spin-reverse {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              @keyframes fade-in-up {
                from {
                  opacity: 0;
                  transform: translateY(2rem);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-spin-slow { animation: spin-slow 20s linear infinite; }
              .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
              .animate-float { animation: float 3s ease-in-out infinite; }
              .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
            `}</style>
          </div>
        </div>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF9F0"/>
          </svg>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-blue-500/30">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-koompi-primary mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Building technology solutions tailored for Cambodian schools and communities.
              </p>
            </div>

            {/* Accessibility */}
            <div className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-green-500/30">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-koompi-primary mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Making digital education available to every student, regardless of location.
              </p>
            </div>

            {/* Sustainability */}
            <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-yellow-500/30">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-lg font-bold text-koompi-primary mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Solar-powered solutions that work off-grid and built to last.
              </p>
            </div>

            {/* Community */}
            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-orange-500/30">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-koompi-primary mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Working closely with local communities, teachers, and the Ministry of Education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-koompi-accent-blue/20 to-transparent h-px" />

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-koompi-primary to-secondary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👁️</span>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Our vision is to create a tech-driven education and innovation space that empowers individuals to unleash their full potential and drive positive progress.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-koompi-accent-orange/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h2 className="text-2xl font-bold text-koompi-primary">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to build tools and empower individuals with accessible computing solutions that drive progress, foster learning, and inspire innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-koompi-accent-orange via-amber-500 to-koompi-accent-orange text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="absolute w-24 h-24 text-white/20 animate-spin-slow" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
                <p className="text-4xl md:text-5xl font-bold relative z-10">65+</p>
              </div>
              <p className="text-white/90 mt-3 font-medium">Schools Equipped</p>
            </div>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="absolute w-24 h-24 text-white/20 animate-spin-slow" viewBox="0 0 100 100" style={{ animationDelay: '0.5s' }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
                <p className="text-4xl md:text-5xl font-bold relative z-10">12K+</p>
              </div>
              <p className="text-white/90 mt-3 font-medium">Students Impacted</p>
            </div>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="absolute w-24 h-24 text-white/20 animate-spin-slow" viewBox="0 0 100 100" style={{ animationDelay: '1s' }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
                <p className="text-4xl md:text-5xl font-bold relative z-10">24</p>
              </div>
              <p className="text-white/90 mt-3 font-medium">Provinces Reached</p>
            </div>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="absolute w-24 h-24 text-white/20 animate-spin-slow" viewBox="0 0 100 100" style={{ animationDelay: '1.5s' }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
                <p className="text-4xl md:text-5xl font-bold relative z-10">2018</p>
              </div>
              <p className="text-white/90 mt-3 font-medium">Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-koompi-accent-orange font-semibold">Our Story</span>
              <h2 className="text-3xl font-bold text-koompi-primary mt-2 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KOOMPI was founded with a simple question: Why should geography determine
                  access to education? In a country where many schools lack electricity and
                  internet connectivity, traditional digital learning solutions simply don't work.
                </p>
                <p>
                  We built our solution from the ground up: low-power computers designed for
                  Cambodian conditions, an offline content server filled with educational
                  materials, and solar power systems for remote areas.
                </p>
                <p>
                  Today, we've equipped 65 schools and counting. Our partnership with the
                  Ministry of Education validates our approach, but our work is far from over.
                  We won't stop until every school in Cambodia has a computer lab.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Layered shadow cards for depth */}
              <div className="absolute top-4 left-4 right-8 bottom-8 bg-koompi-accent-orange/20 rounded-2xl -z-10" />
              <div className="absolute top-8 left-8 right-4 bottom-4 bg-koompi-accent-blue/20 rounded-2xl -z-10" />

              {/* Main image container - polaroid style */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-[1.02]">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/media/images/vision-to-reality.JPG"
                    alt="From Vision to Reality"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-60" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-semibold text-sm">Our Journey</p>
                    <p className="text-white/80 text-xs">Building Cambodia's future</p>
                  </div>
                </div>
              </div>

              {/* Floating stats badges */}
              <div className="absolute -top-2 -left-2 bg-white rounded-lg shadow-lg px-3 py-1.5 transform -rotate-6 border-2 border-koompi-accent-orange">
                <p className="text-koompi-primary font-bold text-xs">65+ Schools</p>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-koompi-accent-orange rounded-lg shadow-lg px-3 py-1.5 transform rotate-6">
                <p className="text-white font-bold text-xs">Since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-orange/10 text-koompi-accent-orange rounded-full text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital education solutions designed for Cambodian schools
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-32 h-24 mx-auto mb-5 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img
                  src="https://koompi.com/images/ministationv2-2.png"
                  alt="KOOMPI Ministation"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-koompi-primary mb-3 group-hover:text-blue-600 transition-colors">KOOMPI Lab</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete computer lab setup with 10 KOOMPI Ministations, designed for low
                power consumption and durability in Cambodian conditions.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-purple-500/30">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-koompi-primary mb-3 group-hover:text-purple-600 transition-colors">Content Server</h3>
              <p className="text-gray-600 leading-relaxed">
                2TB of offline educational content including Khan Academy, Wikipedia,
                interactive apps, and Cambodian curriculum materials.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-green-200 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-green-500/30">
                <span className="text-4xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-koompi-primary mb-3 group-hover:text-green-600 transition-colors">Solar Power</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete solar power systems for schools without grid electricity, enabling
                digital learning in the most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-koompi-accent-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-koompi-accent-blue/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
              Innovation Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative solutions transforming education across Cambodia
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-gradient-to-br from-cream to-white rounded-2xl p-6 border border-koompi-accent-blue/10 hover:shadow-2xl hover:border-koompi-accent-orange/40 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-koompi-accent-orange/5 to-koompi-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-koompi-accent-orange to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-orange-500/30">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-koompi-primary mb-2 group-hover:text-koompi-accent-orange transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-koompi-accent-orange group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-koompi-accent-orange/20 to-transparent h-px" />

      {/* Team */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-koompi-accent-orange/5 to-koompi-accent-blue/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-orange/10 text-koompi-accent-orange rounded-full text-sm font-medium mb-4">
              The People Behind KOOMPI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Our Talents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At KOOMPI, we believe in the power of talents to drive innovation and create exceptional experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-koompi-accent-orange/30 hover:-translate-y-2"
              >
                <div className="relative mb-5">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-koompi-accent-orange/20 to-koompi-accent-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-koompi-accent-orange/50 transition-all duration-300 group-hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-koompi-primary mb-1 group-hover:text-koompi-accent-orange transition-colors">
                  {member.name}
                </h3>
                <p className="text-koompi-accent-orange text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-blue/10 text-koompi-accent-blue rounded-full text-sm font-medium mb-4">
              Collaboration
            </span>
            <h2 className="text-3xl font-bold text-koompi-primary mb-3">
              Our Partners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Working together to transform education across Cambodia
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 flex items-center gap-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-koompi-accent-orange/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-koompi-primary/10 to-secondary-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{partner.logo}</span>
                </div>
                <div>
                  <p className="font-semibold text-koompi-primary text-lg">{partner.name}</p>
                  <p className="text-sm text-koompi-accent-orange font-medium">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating accent circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-koompi-accent-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-koompi-accent-blue/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            Make a Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Help us bring digital education to every school in Cambodia. Your support can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schools"
              className="px-10 py-4 bg-gradient-to-r from-koompi-accent-orange to-amber-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Fund a School
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Impact indicator */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">100% Tax Deductible</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Transparent Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Direct Impact</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage

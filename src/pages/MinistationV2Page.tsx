import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../components/Shared/Footer'

const MinistationV2Page = () => {
  const [selectedUseCase, setSelectedUseCase] = useState('Study Setup')

  const useCases = [
    { name: 'Study Setup', image: '/images/products/ministation-study.jpg' },
    { name: 'Computer Labs', image: '/images/products/ministation-lab.jpg' },
    { name: 'Home Office', image: '/images/products/ministation-office.jpg' },
    { name: 'Company', image: '/images/products/ministation-company.jpg' },
  ]

  const currentImage = useCases.find((uc) => uc.name === selectedUseCase)?.image || '/images/products/ministation-lab.jpg'

  const specs = [
    {
      title: '2x DisplayPort',
      desc: 'Dual 4K@60Hz Support',
      iconColor: 'bg-[#90CDF4]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          <circle cx="8" cy="6" r="2" fill="currentColor" />
          <circle cx="16" cy="12" r="2" fill="currentColor" />
          <circle cx="8" cy="18" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: '4x USB 3.2',
      desc: 'High-Speed USB Ports',
      iconColor: 'bg-[#9AE6B4]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14M16 5v14M5 8h3M5 12h3M5 16h3M16 8h3M16 12h3M16 16h3" />
          <rect x="3" y="4" width="6" height="4" rx="1" />
          <rect x="15" y="4" width="6" height="4" rx="1" />
          <rect x="3" y="16" width="6" height="4" rx="1" />
          <rect x="15" y="16" width="6" height="4" rx="1" />
        </svg>
      ),
    },
    {
      title: 'WiFi 6E',
      desc: 'Next-Gen Wireless',
      iconColor: 'bg-[#B794F4]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a2 2 0 100 4 2 2 0 000-4 2 2 0 000-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-2.2 0-4.2.9-5.7 2.3 1.5-2.3 5.7-2.3c0-2.2.9-4.2 5.7-2.3 5.7.2.3 0 5.7-2.3 5.7-5.7-.9-2.3-5.7-2.3-5.7-.9 2.3-5.7 5.7 2.3 0 5.7-2.3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10c-3.3 0-6.3 1.3-8.5 3.5-1.3 8.5-3.5 8.5 1.3 8.5 3.5 8.5-8.5-1.3-3.5-8.5-3.5-1.3-3.5-8.5-3.5 3.5-1.3 3.5 8.5 8.5-8.5-1.3z" />
        </svg>
      ),
    },
    {
      title: 'LAN Port',
      desc: 'Gigabit Ethernet',
      iconColor: 'bg-[#FBD38D]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 15v-3" />
          <circle cx="12" cy="9" r="3" fill="currentColor" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-koompi-primary">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-koompi-primary/90 to-koompi-primary/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-koompi-accent-pink/20 border border-koompi-accent-pink/30 rounded-full text-koompi-accent-pink text-sm font-semibold mb-6">
                NEXT-GEN WORKSTATION
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Ministation
                <span className="text-koompi-accent-pink"> Gen2</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The Ultimate Desk Setup. All-in-one solution engineered to elevate your productivity. Perfect for offices, classrooms, and creative studios.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
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
              <img
                src="/images/products/ministation-v2.png"
                alt="KOOMPI Ministation Gen2"
                className="w-full max-w-lg drop-shadow-2xl animate-float-slow"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Price Banner */}
      <section className="py-8 px-4 bg-koompi-accent-pink">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-4xl md:text-5xl font-black text-white">
            Starting at <span className="text-white">$349</span>
          </span>
        </div>
      </section>

      {/* The Complete Package */}
      <section id="specs" className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-koompi-secondary/10 text-koompi-secondary rounded-full text-sm font-semibold mb-4">
              CONNECTIVITY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-koompi-primary mb-4">
              The Complete Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the ports you need for dual displays, high-speed peripherals, and network connectivity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {specs.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-koompi-secondary/10 rounded-full flex items-center justify-center">
                  <div className="text-koompi-secondary">{spec.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-koompi-primary mb-1">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uncompromised Speed */}
      <section className="min-h-screen py-24 px-4 bg-[#1a1a2e] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-koompi-accent-yellow/15 text-yellow-300 rounded-full text-sm font-semibold mb-4">
                PERFORMANCE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Uncompromised Speed
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-koompi-secondary/20 rounded-xl flex items-center justify-center text-koompi-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2h6V3H9v4a2 2 0 00-2 2h2a2 2 0 002 2v2a2 2 0 00-2-2H9a2 2 0 00-2-2v-4H7a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">AMD Ryzen 7</h3>
                    <p className="text-gray-300">16GB RAM • 512GB SSD</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-koompi-secondary/20 rounded-xl flex items-center justify-center text-koompi-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Small Footprint, Huge Impact</h3>
                    <p className="text-gray-300">Desktop-grade performance in compact design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/products/ministation-parts.png"
                alt="KOOMPI Ministation Components"
                className="w-full max-w-3xl rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Versatility */}
      <section className="min-h-screen py-24 px-4 bg-cream overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            {/* Left Column - Tab Cards */}
            <div className="md:col-span-4 grid grid-cols-1 gap-2 md:gap-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase.name}
                  onClick={() => setSelectedUseCase(useCase.name)}
                  className={`${
                    selectedUseCase === useCase.name
                      ? 'bg-koompi-accent-pink text-white border-koompi-accent-pink'
                      : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-slate-200'
                  } px-4 md:px-6 py-3 text-sm md:text-base font-bold rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  {useCase.name}
                </div>
              ))}
            </div>

            {/* Right Column - Image Card */}
            <div className="md:col-span-8">
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 -z-10" />
                <img
                  key={currentImage}
                  className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700"
                  src={currentImage || '/images/products/ministation-lab.jpg'}
                  alt="KOOMPI Ministation for any use case"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-koompi-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-koompi-accent-pink/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-koompi-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the KOOMPI Ministation Gen2 for your office, classroom, or studio. Contact us for pricing and bulk orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/onelab"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn About Onelab
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MinistationV2Page

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../components/Shared/Footer'

const KoompiMiniV2Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedUseCase, setSelectedUseCase] = useState('Study Setup')

  const sliderImages = [
    '/images/products/miniv2-port3.png',
    '/images/products/miniv2-port1.png',
  ]

  const useCases = [
    { name: 'Study Setup', image: '/images/products/miniv2-study.jpg' },
    { name: 'Computer Labs', image: '/images/products/miniv2-lab.jpg' },
    { name: 'Home Office', image: '/images/products/home-office.png' },
    { name: 'Company', image: '/images/products/ONELAB-1.png' },
  ]

  const currentImage = useCases.find((uc) => uc.name === selectedUseCase)?.image || '/images/products/miniv2-lab.jpg'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  const specs = [
    {
      title: '2x HDMI',
      desc: 'Dual Display Support',
      iconColor: 'bg-[#90CDF4]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
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
      title: 'WiFi 6',
      desc: 'Next-Gen Wireless',
      iconColor: 'bg-[#B794F4]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a2 2 0 100 4 2 2 0 000-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-2.2 0-4.2.9-5.7 2.3 1.5-1.4 3.5-2.3 5.7-2.3s4.2.9 5.7 2.3c-1.5-1.4-3.5-2.3-5.7-2.3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10c-3.3 0-6.3 1.3-8.5 3.5 2.2-2.2 5.2-3.5 8.5-3.5s6.3 1.3 8.5 3.5c-2.2-2.2-5.2-3.5-8.5-3.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6c-4.4 0-8.4 1.8-11.3 4.7 2.9-2.9 6.9-4.7 11.3-4.7s8.4 1.8 11.3 4.7C20.4 7.8 16.4 6 12 6z" />
        </svg>
      ),
    },
    {
      title: 'Audio Jack',
      desc: '3.5mm Headphone/Mic',
      iconColor: 'bg-[#FBD38D]',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9z" />
          <circle cx="15" cy="12" r="2" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9v6" />
        </svg>
      ),
    },
  ]

  const features = [
    {
      title: 'Compact Design',
      desc: 'Small form factor that fits anywhere - perfect for home offices, classrooms, or digital signage.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Energy Efficient',
      desc: 'Low power consumption saves electricity and reduces environmental impact.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Silent Operation',
      desc: 'Fanless design ensures quiet operation for noise-sensitive environments.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
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
                NEW RELEASE
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                KOOMPI Mini
                <span className="text-koompi-accent-pink"> V2</span>
              </h1>
              <div className="text-4xl md:text-5xl font-black text-koompi-accent-pink mb-4">
                $279
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Small size. Big possibilities. The most compact mini PC for education, office, and home entertainment.
              </p>
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
              <img
                src="/images/products/mini4.png"
                alt="KOOMPI Mini V2"
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

      {/* Connect Without Limits Section */}
      <section id="specs" className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-koompi-secondary/10 text-koompi-secondary rounded-full text-sm font-semibold mb-4">
              CONNECTIVITY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-koompi-primary mb-4">
              Connect Without Limits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the ports you need for peripherals, displays, and networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: 2x2 Grid Cards */}
            <div className="grid grid-cols-2 gap-6">
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

            {/* Right: Slider Images */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                {sliderImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`KOOMPI Mini V2 ${index + 1}`}
                    className={`w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  />
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-koompi-accent-pink w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen py-24 px-4 bg-[#1a1a2e] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/products/miniv2-parts.png"
                alt="KOOMPI Mini V2 Components"
                className="w-full max-w-5xl rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-2 bg-koompi-accent-yellow/15 text-yellow-300 rounded-full text-sm font-semibold mb-4">
                WHY KOOMPI MINI
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Built for Modern Needs
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-koompi-secondary/20 rounded-xl flex items-center justify-center text-koompi-secondary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="min-h-screen py-16 md:py-32 bg-cream overflow-hidden flex items-center">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-10 md:mb-16 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">
              Built for Versatility
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              From classrooms to home offices, KOOMPI Mini V2 adapts to any environment and requirement.
            </p>
          </div>

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
                <div className="opacity-0 animate-fade-in">
                  <img
                    key={currentImage}
                    className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700"
                    src={currentImage}
                    alt="KOOMPI Mini for any use case"
                  />
                </div>
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
            Ready to Go Mini?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the KOOMPI Mini V2 for your school, office, or home. Contact us for pricing and bulk orders.
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

export default KoompiMiniV2Page

import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LAB_PACKAGE_PRICES,
  CONTENT_SERVER_ADDON_PRICE,
  MOBILE_CLASSROOM_PRICE,
  FUND_INSTALL_PHNOM_PENH,
  FUND_INSTALL_PROVINCE,
  IMPACT_STATS,
} from '../data/products'

// Fallback data in case import fails
const STATS = IMPACT_STATS || {
  labsInstalled: 45,
  schoolsWithoutLabs: 13000,
  provincesReached: 12,
  studentsImpacted: 15000,
  teachersTrained: 320,
}

const FundSchoolPage = () => {
  const [labSize, setLabSize] = useState<'10' | '15' | '20'>('20')
  const [contentServer, setContentServer] = useState(false)
  const [solarPower, setSolarPower] = useState(false)
  const [mobileClassroom, setMobileClassroom] = useState(false)
  const [location, setLocation] = useState<'phnom-penh' | 'province'>('province')

  const installationPrices = { 'phnom-penh': FUND_INSTALL_PHNOM_PENH, 'province': FUND_INSTALL_PROVINCE }

  const calculateTotal = () => {
    let total = LAB_PACKAGE_PRICES[labSize]
    if (contentServer) total += CONTENT_SERVER_ADDON_PRICE
    if (mobileClassroom) total += MOBILE_CLASSROOM_PRICE
    total += installationPrices[location]
    return total.toLocaleString()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[15vh] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-koompi-primary/90 via-koompi-primary/85 to-secondary-600/90 backdrop-blur-[4px]" />

        {/* Dot pattern grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-koompi-accent-pink/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-koompi-accent-blue/20 to-transparent rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-[calc(100%-2rem)] max-w-5xl mx-auto px-4 pt-32 pb-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            Fund a School
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Build a Lab.<br />Change Lives.
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Bring digital education to schools across Cambodia. Choose the lab size, add-ons, and location.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
            {[
              { value: String(STATS.labsInstalled), label: 'Labs Installed' },
              { value: `${STATS.schoolsWithoutLabs.toLocaleString()}+`, label: 'Schools Without Labs' },
              { value: String(STATS.provincesReached), label: 'Provinces' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section id="pricing" className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
              Modular Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Build Your Lab
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Products are independent and combinable. Choose what your school needs.
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div id="pricing-form" className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Step 1: Lab Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    1. Select Lab Size
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(Object.entries(LAB_PACKAGE_PRICES) as ['10' | '15' | '20', number][]).map(([sets, price]) => (
                      <button
                        key={sets}
                        onClick={() => setLabSize(sets)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                          labSize === sets
                            ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img src="/images/products/onelab.png" alt="KOOMPI Lab" className="w-16 h-16 block mb-2 object-contain mx-auto" />
                        <span className="font-semibold text-sm text-koompi-primary block">KOOMPI Lab</span>
                        <span className="text-xs text-gray-500">{sets} Sets</span>
                        <span className="text-sm font-bold text-koompi-primary mt-2 block">
                          ${price.toLocaleString()}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Add-ons */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    2. Add-ons
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setContentServer(!contentServer)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        contentServer
                          ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src="/images/products/content-server.png" alt="Content Server" className="w-16 h-16 block mb-2 object-contain mx-auto" />
                      <span className="font-semibold text-sm text-koompi-primary block">Content Server</span>
                      <span className="text-xs text-gray-500">2TB educational content</span>
                      <span className="text-sm font-bold text-koompi-primary mt-2 block">
                        ${CONTENT_SERVER_ADDON_PRICE.toLocaleString()}
                      </span>
                    </button>
                    <button
                      onClick={() => setMobileClassroom(!mobileClassroom)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        mobileClassroom
                          ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src="/images/products/moble-house.png" alt="Mobile Classroom" className="w-16 h-16 block mb-2 object-contain mx-auto" />
                      <span className="font-semibold text-sm text-koompi-primary block">Mobile Classroom</span>
                      <span className="text-xs text-gray-500">Size 4x6m</span>
                      <span className="text-sm font-bold text-koompi-primary mt-2 block">
                        ${MOBILE_CLASSROOM_PRICE.toLocaleString()}
                      </span>
                    </button>
                    <button
                      onClick={() => setSolarPower(!solarPower)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        solarPower
                          ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src="/images/products/solar.png" alt="Solar Power" className="w-16 h-16 block mb-2 object-contain mx-auto" />
                      <span className="font-semibold text-sm text-koompi-primary block">Solar Power</span>
                      <span className="text-xs text-gray-500">Energy-independent</span>
                      <span className="text-sm font-bold text-yellow-600 mt-2 block">Custom Quote</span>
                    </button>
                  </div>
                </div>

                {/* Step 3: Installation location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    3. Installation location
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setLocation('phnom-penh')}
                      className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                        location === 'phnom-penh'
                          ? 'border-koompi-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-sm block">Phnom Penh</span>
                      <span className="text-xs text-gray-500">${FUND_INSTALL_PHNOM_PENH}</span>
                    </button>
                    <button
                      onClick={() => setLocation('province')}
                      className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                        location === 'province'
                          ? 'border-koompi-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-sm block">Province</span>
                      <span className="text-xs text-gray-500">${FUND_INSTALL_PROVINCE}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="h-full">
                <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 sticky top-32 flex flex-col mt-8" style={{ minHeight: 'calc(100% - 2rem)' }}>
                  <h4 className="font-bold text-koompi-primary text-lg mb-4">Estimated Quote</h4>
                  <div className="space-y-4 flex-1">
                    <div className="flex justify-between text-base">
                      <span className="text-gray-600">{labSize}x Ministation</span>
                      <span className="font-medium">${LAB_PACKAGE_PRICES[labSize].toLocaleString()}</span>
                    </div>
                    {contentServer && (
                      <div className="flex justify-between text-base">
                        <span className="text-gray-600">Content Server Package</span>
                        <span className="font-medium">${CONTENT_SERVER_ADDON_PRICE.toLocaleString()}</span>
                      </div>
                    )}
                    {mobileClassroom && (
                      <div className="flex justify-between text-base">
                        <span className="text-gray-600">Mobile Classroom (4x6m)</span>
                        <span className="font-medium">${MOBILE_CLASSROOM_PRICE.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base">
                      <span className="text-gray-600">Installation ({location === 'phnom-penh' ? 'Phnom Penh' : 'Province'})</span>
                      <span className="font-medium">${installationPrices[location].toLocaleString()}</span>
                    </div>
                    {solarPower && (
                      <div className="flex justify-between text-base">
                        <span className="text-gray-600">Solar Power System</span>
                        <span className="font-medium text-yellow-600">Custom Quote</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-koompi-primary">Total</span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-koompi-primary">${calculateTotal()}</span>
                          {solarPower && (
                            <span className="text-sm text-yellow-600 block">+ solar (quote required)</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <Link
                      to="/contact"
                      className="block w-full py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white text-center rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full py-3 bg-white text-koompi-primary text-center rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Contact Us Directly
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-20 px-4 bg-koompi-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Donation Makes an Impact
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Your contribution brings digital education to students who have never had access to a computer before.
          </p>
          <Link
            to="/story"
            className="inline-block px-8 py-4 bg-white text-koompi-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            See Our Impact
          </Link>
        </div>
      </section>

    </div>
  )
}

export default FundSchoolPage

import { Link } from 'react-router-dom'

const PricingCalculator = () => {
  return (
    <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Step 1: Lab Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              1. Select Lab Size
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button className="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300">
                <span className="text-2xl block mb-2">🖥️</span>
                <span className="font-semibold text-sm text-koompi-primary block">KOOMPI Lab</span>
                <span className="text-xs text-gray-500">10 Sets</span>
                <span className="text-sm font-bold text-koompi-primary mt-2 block">$3,500</span>
              </button>
              <button className="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300">
                <span className="text-2xl block mb-2">🖥️</span>
                <span className="font-semibold text-sm text-koompi-primary block">KOOMPI Lab</span>
                <span className="text-xs text-gray-500">15 Sets</span>
                <span className="text-sm font-bold text-koompi-primary mt-2 block">$5,250</span>
              </button>
              <button className="p-4 rounded-xl border-2 text-left transition-all duration-200 border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected">
                <span className="text-2xl block mb-2">🖥️</span>
                <span className="font-semibold text-sm text-koompi-primary block">KOOMPI Lab</span>
                <span className="text-xs text-gray-500">20 Sets</span>
                <span className="text-sm font-bold text-koompi-primary mt-2 block">$7,000</span>
              </button>
            </div>
          </div>

          {/* Step 2: Add-ons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              2. Add-ons
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 rounded-xl border-2 text-left transition-all duration-200 border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected">
                <span className="text-2xl block mb-2">📡</span>
                <span className="font-semibold text-sm text-koompi-primary block">Content Server</span>
                <span className="text-xs text-gray-500">2TB educational content</span>
                <span className="text-sm font-bold text-koompi-primary mt-2 block">$1,800</span>
              </button>
              <button className="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300">
                <span className="text-2xl block mb-2">☀️</span>
                <span className="font-semibold text-sm text-koompi-primary block">Solar Power</span>
                <span className="text-xs text-gray-500">Energy-independent</span>
                <span className="text-sm font-bold text-yellow-600 mt-2 block">Contact Us</span>
              </button>
            </div>
          </div>

          {/* Step 3: Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              3. Installation location
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 rounded-xl border-2 text-center transition-all duration-200 border-gray-200 hover:border-gray-300">
                <span className="font-medium text-sm block">Phnom Penh</span>
                <span className="text-xs text-gray-500">$300</span>
              </button>
              <button className="p-3 rounded-xl border-2 text-center transition-all duration-200 border-koompi-primary bg-blue-50">
                <span className="font-medium text-sm block">Province</span>
                <span className="text-xs text-gray-500">$500</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="h-full">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-32 flex flex-col mt-8" style={{ minHeight: 'calc(100% - 2rem)' }}>
            <h4 className="font-bold text-koompi-primary text-lg mb-4">Estimated Quote</h4>
            <div className="space-y-6 flex-1">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">20x Ministation</span>
                <span className="font-medium">$7,000</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Content Server Package</span>
                <span className="font-medium">$1,800</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Installation (Province)</span>
                <span className="font-medium">$500</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex justify-between">
                  <span className="font-bold text-koompi-primary">Total</span>
                  <span className="text-2xl font-bold text-koompi-primary">$9,300</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="block w-full py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white text-center rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Complete Your Donation
              </Link>
              <Link
                to="/contact"
                className="block w-full py-3 bg-white text-koompi-primary text-center rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator

import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LabSize {
  sets: number
  price: number
}

interface Addon {
  id: string
  name: string
  description: string
  price: number | null
  image: string
}

const LAB_SIZES: LabSize[] = [
  { sets: 10, price: 8000 },
  { sets: 15, price: 11000 },
  { sets: 20, price: 14000 },
]

const ADDONS: Addon[] = [
  {
    id: 'content-server',
    name: 'Content Server',
    description: '2TB educational content',
    price: 2500,
    image: '/images/products/content-server.png',
  },
  {
    id: 'mobile-classroom',
    name: 'Mobile Classroom',
    description: 'Size 4x6m',
    price: 5000,
    image: '/images/products/moble-house.png',
  },
  {
    id: 'solar',
    name: 'Solar Power',
    description: 'Energy-independent',
    price: null,
    image: '/images/products/solar.png',
  },
]

const INSTALLATION_LOCATIONS = [
  { name: 'Phnom Penh', price: 500 },
  { name: 'Province', price: 800 },
]

const PricingCalculator = () => {
  const [selectedLabSize, setSelectedLabSize] = useState(2) // Index 2 = 20 sets
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['content-server'])
  const [selectedLocation, setSelectedLocation] = useState(1) // Index 1 = Province

  const labSize = LAB_SIZES[selectedLabSize]
  const location = INSTALLATION_LOCATIONS[selectedLocation]

  const addonTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId)
    return sum + (addon?.price || 0)
  }, 0)

  const total = labSize.price + location.price + addonTotal

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    )
  }

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
              {LAB_SIZES.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLabSize(index)}
                  className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedLabSize === index
                      ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src="/images/products/onelab.png"
                    alt="KOOMPI Lab"
                    className="w-16 h-16 block mb-2 object-contain mx-auto"
                  />
                  <span className="font-semibold text-sm text-koompi-primary block">
                    KOOMPI Lab
                  </span>
                  <span className="text-xs text-gray-500">{size.sets} Sets</span>
                  <span className="text-sm font-bold text-koompi-primary mt-2 block">
                    ${size.price.toLocaleString()}
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
              {ADDONS.map((addon) => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedAddons.includes(addon.id)
                      ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={addon.image}
                    alt={addon.name}
                    className="w-16 h-16 block mb-2 object-contain mx-auto"
                  />
                  <span className="font-semibold text-sm text-koompi-primary block">
                    {addon.name}
                  </span>
                  <span className="text-xs text-gray-500">{addon.description}</span>
                  <span
                    className={`text-sm font-bold mt-2 block ${
                      addon.price
                        ? 'text-koompi-primary'
                        : 'text-yellow-600'
                    }`}
                  >
                    {addon.price ? `$${addon.price.toLocaleString()}` : 'Custom Quote'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              3. Installation location
            </label>
            <div className="grid grid-cols-2 gap-3">
              {INSTALLATION_LOCATIONS.map((loc, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLocation(index)}
                  className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedLocation === index
                      ? index === 0
                        ? 'border-gray-300 bg-gray-50'
                        : 'border-koompi-primary bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium text-sm block">{loc.name}</span>
                  <span className="text-xs text-gray-500">${loc.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="h-full">
          <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 sticky top-32 flex flex-col mt-8" style={{ minHeight: 'calc(100% - 2rem)' }}>
            <h4 className="font-bold text-koompi-primary text-lg mb-4">Estimated Quote</h4>
            <div className="space-y-4 flex-1">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">{labSize.sets}x Ministation</span>
                <span className="font-medium">${labSize.price.toLocaleString()}</span>
              </div>
              {selectedAddons.map((addonId) => {
                const addon = ADDONS.find((a) => a.id === addonId)
                if (!addon?.price) return null
                return (
                  <div key={addonId} className="flex justify-between text-base">
                    <span className="text-gray-600">{addon.name}</span>
                    <span className="font-medium">${addon.price.toLocaleString()}</span>
                  </div>
                )
              })}
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Installation ({location.name})</span>
                <span className="font-medium">${location.price.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-koompi-primary">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-koompi-primary">
                      ${total.toLocaleString()}
                    </span>
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
  )
}

export default PricingCalculator

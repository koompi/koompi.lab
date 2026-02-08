import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MINISTATION_PRICE,
  CONTENT_SERVER_PACKAGE_PRICE,
  INSTALLATION_PHNOM_PENH,
  INSTALLATION_PROVINCE,
} from '../../data/products'

const PricingCalculator = () => {
  const [includeLab, setIncludeLab] = useState(true)
  const [includeContentServer, setIncludeContentServer] = useState(true)
  const [includeSolar, setIncludeSolar] = useState(false)
  const [labSize, setLabSize] = useState(20)
  const [customSize, setCustomSize] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [location, setLocation] = useState<'phnom-penh' | 'province'>('province')
  const [numStudents, setNumStudents] = useState(200)

  const effectiveLabSize = isCustom ? (parseInt(customSize) || 0) : labSize

  const labCost = includeLab ? effectiveLabSize * MINISTATION_PRICE : 0
  const contentServerCost = includeContentServer ? CONTENT_SERVER_PACKAGE_PRICE : 0
  const installationCost = location === 'phnom-penh' ? INSTALLATION_PHNOM_PENH : INSTALLATION_PROVINCE
  const total = labCost + contentServerCost + installationCost
  const perStudent = numStudents > 0 ? Math.round(total / numStudents) : 0

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-koompi-primary to-secondary-600 p-6">
        <h3 className="text-2xl font-bold text-white">Build Your Configuration</h3>
        <p className="text-gray-300 text-sm mt-1">
          Customize your package and see live pricing
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Configuration */}
          <div className="space-y-6">
            {/* Step 1: What do you need? */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                1. What do you need?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIncludeLab(!includeLab)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    includeLab
                      ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl block mb-2">🖥️</span>
                  <span className="font-semibold text-sm text-koompi-primary block">
                    KOOMPI Lab
                  </span>
                  <span className="text-xs text-gray-500">
                    ${MINISTATION_PRICE}/station
                  </span>
                </button>
                <button
                  onClick={() => setIncludeContentServer(!includeContentServer)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    includeContentServer
                      ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl block mb-2">📡</span>
                  <span className="font-semibold text-sm text-koompi-primary block">
                    Content Server
                  </span>
                  <span className="text-xs text-gray-500">
                    ${CONTENT_SERVER_PACKAGE_PRICE.toLocaleString()}
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Lab size */}
            {includeLab && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  2. Lab size
                </label>
                <div className="flex flex-wrap gap-2">
                  {[10, 20, 30].map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setLabSize(size)
                        setIsCustom(false)
                      }}
                      className={`px-5 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        !isCustom && labSize === size
                          ? 'bg-koompi-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size} PCs
                    </button>
                  ))}
                  <button
                    onClick={() => setIsCustom(true)}
                    className={`px-5 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      isCustom
                        ? 'bg-koompi-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Custom
                  </button>
                </div>
                {isCustom && (
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={customSize}
                    onChange={(e) => setCustomSize(e.target.value)}
                    placeholder="Enter number of PCs"
                    className="mt-3 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50 focus:border-koompi-accent-pink"
                  />
                )}
              </div>
            )}

            {/* Step 3: Solar */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {includeLab ? '3' : '2'}. Add-ons
              </label>
              <button
                onClick={() => setIncludeSolar(!includeSolar)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  includeSolar
                    ? 'border-yellow-400 bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <span className="font-semibold text-sm text-koompi-primary block">
                      Solar Power System
                    </span>
                    <span className="text-xs text-gray-500">
                      Contact us for pricing
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        includeSolar ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'
                      }`}
                    >
                      {includeSolar && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {includeLab ? '4' : '3'}. Installation location
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
                  <span className="text-xs text-gray-500">
                    ${INSTALLATION_PHNOM_PENH}
                  </span>
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
                  <span className="text-xs text-gray-500">
                    ${INSTALLATION_PROVINCE}
                  </span>
                </button>
              </div>
            </div>

            {/* Student count */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {includeLab ? '5' : '4'}. Number of students (for per-student cost)
              </label>
              <input
                type="number"
                min="1"
                value={numStudents}
                onChange={(e) => setNumStudents(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50 focus:border-koompi-accent-pink"
              />
            </div>
          </div>

          {/* Right: Summary */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-32">
              <h4 className="font-bold text-koompi-primary text-lg mb-4">
                Estimated Quote
              </h4>

              <div className="space-y-3 mb-6">
                {includeLab && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {effectiveLabSize}x Ministation
                    </span>
                    <span className="font-medium">
                      ${labCost.toLocaleString()}
                    </span>
                  </div>
                )}
                {includeContentServer && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Content Server Package</span>
                    <span className="font-medium">
                      ${contentServerCost.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Installation ({location === 'phnom-penh' ? 'Phnom Penh' : 'Province'})
                  </span>
                  <span className="font-medium">
                    ${installationCost}
                  </span>
                </div>
                {includeSolar && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Solar Power System</span>
                    <span className="font-medium text-koompi-accent-pink">
                      Contact Us
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-koompi-primary">Total</span>
                    <span className="text-2xl font-bold text-koompi-primary">
                      {includeSolar ? '~' : ''}${total.toLocaleString()}
                      {includeSolar && '+'}
                    </span>
                  </div>
                  {numStudents > 0 && (
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-500">Per student</span>
                      <span className="text-koompi-accent-pink font-semibold">
                        ${perStudent}/student
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {(!includeLab && !includeContentServer) ? (
                <p className="text-center text-gray-400 text-sm py-4">
                  Select at least one product above
                </p>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/fund"
                    className="block w-full py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white text-center rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Fund This Configuration
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full py-3 bg-white text-koompi-primary text-center rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Request Custom Quote
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator

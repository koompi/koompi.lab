import { Link } from 'react-router-dom'
import {
  MINISTATION_PRICE,
  CONTENT_SERVER_PACKAGE_PRICE,
  POPULAR_CONFIGS,
} from '../../data/products'

const PricingSection = () => {
  return (
    <div className="space-y-8">
      {/* Two Product Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Lab Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-koompi-secondary to-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🖥️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-koompi-primary">
                KOOMPI Lab
              </h3>
              <p className="text-sm text-gray-500">Computer lab with Ministations</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Starting from</p>
            <p className="text-3xl font-bold text-koompi-primary">
              ${MINISTATION_PRICE}
              <span className="text-base font-normal text-gray-500">
                /station
              </span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Available sizes:
            </p>
            <div className="flex gap-2">
              {[10, 20, 30].map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {size} PCs
                </span>
              ))}
              <span className="px-4 py-2 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 border border-gray-200">
                Custom
              </span>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ministations + 21" Monitors
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              KOOMPI OS pre-installed
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              WiFi + Professional Installation
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ICT Teacher Training
            </li>
          </ul>

          <Link
            to="/onelab#pricing"
            className="block w-full py-3 bg-koompi-primary text-white text-center rounded-xl font-semibold hover:bg-primary-600 transition-colors"
          >
            Build Your Lab
          </Link>
        </div>

        {/* Content Server Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-koompi-accent-pink to-pink-400 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📡</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-koompi-primary">
                KOOMPI Content Server
              </h3>
              <p className="text-sm text-gray-500">Offline learning hub</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Complete package</p>
            <p className="text-3xl font-bold text-koompi-primary">
              ${CONTENT_SERVER_PACKAGE_PRICE.toLocaleString()}
            </p>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Server hardware (J4125, 8GB, 2TB)
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              2TB educational content library
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mesh WiFi (150 connections)
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-koompi-accent-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Installation + Weteka/Salacamp
            </li>
          </ul>

          <a
            href="/onelab#pricing"
            className="block w-full py-3 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white text-center rounded-xl font-semibold hover:from-pink-600 hover:to-pink-500 transition-colors"
          >
            Get Content Server
          </a>
        </div>
      </div>

      {/* Solar Add-on Banner */}
      <div className="bg-gradient-to-r from-koompi-primary to-koompi-primary rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-koompi-accent-yellow/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">☀️</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Add-on: Solar Power System
            </h3>
            <p className="text-gray-300">
              Make any configuration energy-independent. Perfect for remote
              schools without grid electricity.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-koompi-accent-pink text-white rounded-full font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap border-2 border-accent-500"
          >
            Contact Us for Solar Quote
          </Link>
        </div>
      </div>

      {/* Popular Configurations */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-koompi-primary mb-6 flex items-center gap-2">
          <span>📊</span> Popular Configurations
        </h3>
        <div className="space-y-4">
          {POPULAR_CONFIGS.map((config, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-4 rounded-xl ${
                config.popular
                  ? 'bg-koompi-accent-pink/5 border-2 border-koompi-accent-pink/30'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-koompi-primary">
                  {config.name}
                </span>
                {config.popular && (
                  <span className="px-2 py-0.5 bg-koompi-accent-pink text-white text-xs rounded-full font-medium">
                    Most Popular
                  </span>
                )}
              </div>
              <span className="font-bold text-koompi-primary">
                {config.estimate
                  ? `~$${config.estimate.toLocaleString()}`
                  : 'Contact Us'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection

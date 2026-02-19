import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Shared/Footer'

// Product prices
const PRODUCTS = [
  {
    id: 'mini',
    name: 'KOOMPI Mini V2',
    price: 279,
    description: 'Compact mini PC for education and office',
    image: '/images/products/mini4.png',
  },
  {
    id: 'monitor',
    name: 'KOOMPI Monitor 21"',
    price: 199,
    description: '21.5" IPS Full HD display',
    image: '/images/products/monitor6.png',
  },
  {
    id: 'ministation',
    name: 'Ministation Gen2',
    price: 349,
    description: 'Next-gen workstation for professionals',
    image: '/images/products/ministation.png',
  },
]

const GetQuotePage = () => {
  // Product quantities
  const [quantities, setQuantities] = useState({
    mini: 0,
    monitor: 0,
    ministation: 0,
  })

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, prev[productId as keyof typeof prev] + delta),
    }))
  }

  const calculateTotal = () => {
    return PRODUCTS.reduce((total, product) => {
      return total + (product.price * quantities[product.id as keyof typeof quantities])
    }, 0)
  }

  const getItemCount = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (getItemCount() === 0) return

    setSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setQuantities({ mini: 0, monitor: 0, ministation: 0 })
      setFormData({ name: '', email: '', phone: '', organization: '', message: '' })
    }, 3000)
  }

  const total = calculateTotal()
  const itemCount = getItemCount()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
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
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-koompi-secondary/20 to-transparent rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-[calc(100%-2rem)] max-w-5xl mx-auto px-4 pt-32 pb-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            Get a Quote
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Build Your Order
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Select the products you need and get an instant quote. We'll follow up with delivery details.
          </p>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-medium mb-4">
                  Step 1: Select Products
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-koompi-primary">
                  Choose Your Products
                </h2>
                <p className="text-gray-600 mt-2">
                  Select the quantity for each product you need. Fixed pricing with no hidden fees.
                </p>
              </div>

              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all ${
                    quantities[product.id as keyof typeof quantities] > 0
                      ? 'ring-2 ring-koompi-accent-pink'
                      : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-koompi-primary">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <p className="text-2xl font-bold text-koompi-accent-pink">
                        ${product.price}
                        <span className="text-sm font-normal text-gray-500">/unit</span>
                      </p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-koompi-primary font-bold text-xl transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-12 text-center text-xl font-bold text-koompi-primary">
                        {quantities[product.id as keyof typeof quantities]}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-10 h-10 rounded-full bg-koompi-accent-pink hover:bg-pink-500 flex items-center justify-center text-white font-bold text-xl transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Line total */}
                  {quantities[product.id as keyof typeof quantities] > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-bold text-koompi-primary">
                        ${(
                          product.price * quantities[product.id as keyof typeof quantities]
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quote Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <h3 className="text-xl font-bold text-koompi-primary mb-6">
                  Quote Summary
                </h3>

                {itemCount === 0 ? (
                  <div className="text-center py-8">
                    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-500">No products selected</p>
                    <p className="text-sm text-gray-400 mt-2">Add products to get your quote</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {PRODUCTS.filter(
                        (p) => quantities[p.id as keyof typeof quantities] > 0
                      ).map((product) => (
                        <div
                          key={product.id}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                        >
                          <div>
                            <p className="font-medium text-koompi-primary text-sm">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {quantities[product.id as keyof typeof quantities]} × ${product.price}
                            </p>
                          </div>
                          <span className="font-bold text-koompi-primary">
                            ${(
                              product.price * quantities[product.id as keyof typeof quantities]
                            ).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t-2 border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Total Items</span>
                        <span className="font-medium">{itemCount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-koompi-primary text-lg">Total</span>
                        <span className="text-2xl font-bold text-koompi-accent-pink">
                          ${total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-koompi-primary">Note:</span> Shipping and installation costs will be calculated based on your location. Complete the form below for a final quote.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-secondary/10 text-koompi-secondary rounded-full text-sm font-medium mb-4">
              Step 2: Your Details
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-koompi-primary mb-4">
              Complete Your Quote Request
            </h2>
            <p className="text-gray-600">
              Fill in your details and we'll send you a complete quote with shipping options.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-koompi-primary mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for your interest. We'll send you a detailed quote within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-koompi-primary focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-koompi-primary focus:border-transparent transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-koompi-primary focus:border-transparent transition"
                      placeholder="+855 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization / School
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-koompi-primary focus:border-transparent transition"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-koompi-primary focus:border-transparent resize-none transition"
                    placeholder="Tell us about your requirements, delivery location, or any questions..."
                  />
                </div>

                {/* Order Summary in Form */}
                {itemCount > 0 && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Your Order:</p>
                    <p className="text-sm text-gray-600">
                      {PRODUCTS.filter(
                        (p) => quantities[p.id as keyof typeof quantities] > 0
                      )
                        .map((p) => `${quantities[p.id as keyof typeof quantities]}× ${p.name}`)
                        .join(', ')}
                    </p>
                    <p className="text-lg font-bold text-koompi-accent-pink mt-2">
                      Estimated Total: ${total.toLocaleString()}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={submitting || itemCount === 0}
                    className="flex-1 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Submit Quote Request
                      </>
                    )}
                  </button>
                  <Link
                    to="/contact"
                    className="px-6 py-4 border-2 border-gray-200 text-koompi-primary rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
                  >
                    Contact Us Directly
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-koompi-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-6">
            Looking for complete computer labs, content servers, or bulk orders? Check out our funding options for schools.
          </p>
          <Link
            to="/fund#pricing"
            className="inline-block px-8 py-3 bg-white text-koompi-primary rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Fund a School Lab
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GetQuotePage

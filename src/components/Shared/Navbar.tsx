import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Products', path: '#', isDropdown: true },
  { name: 'Schools', path: '/schools' },
  { name: 'Impact', path: '/impact' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const productLinks = [
  { name: 'KOOMPI Onelab', path: '/onelab', desc: 'Complete computer lab for schools' },
  { name: 'Content Server', path: '/content-server', desc: 'Offline educational content hub' },
  { name: 'KOOMPI OS', path: '/os', desc: 'Education operating system' },
  { name: 'Edu Suite', path: '/edu-suite', desc: 'Educational software tools' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const location = useLocation()
  const productsRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const isActive = useCallback(
    (path: string) => {
      if (path === '/') return location.pathname === '/'
      return location.pathname.startsWith(path)
    },
    [location.pathname],
  )

  const isProductPage = productLinks.some((p) => isActive(p.path))

  const closeAll = useCallback(() => {
    setIsMobileMenuOpen(false)
    setIsProductsOpen(false)
    setIsMobileProductsOpen(false)
  }, [])

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close all menus on route change
  useEffect(() => {
    closeAll()
  }, [location.pathname, closeAll])

  // Close products dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false)
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false)
        setIsMobileProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Escape key closes all menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeAll])

  // When transparent (not scrolled, menu closed): white text on dark hero
  // When solid (scrolled or menu open): dark text on white pill
  const isSolid = isScrolled || isMobileMenuOpen

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      {/* Pill */}
      <div
        ref={mobileMenuRef}
        className={`rounded-full transition-all duration-300 ${
          isSolid
            ? 'bg-white/95 backdrop-blur-xl shadow-xl'
            : 'bg-transparent shadow-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={isSolid ? '/logo/koompi-logo-text-dark.png' : '/logo/koompi-logo-text-white.png'}
              alt="KOOMPI"
              className="h-[18px] transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.name} ref={productsRef} className="relative">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    aria-expanded={isProductsOpen}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors flex items-center gap-1 ${
                      isSolid
                        ? isProductPage || isProductsOpen
                          ? 'text-koompi-primary'
                          : 'text-gray-600 hover:text-koompi-primary'
                        : isProductPage || isProductsOpen
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Products
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isProductPage && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-koompi-accent-pink rounded-full" />
                    )}
                  </button>

                  {/* Products Dropdown */}
                  {isProductsOpen && (
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-72 overflow-hidden">
                      {productLinks.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className={`flex flex-col px-4 py-3 hover:bg-gray-50 transition-colors ${
                            isActive(product.path) ? 'bg-blue-50' : ''
                          }`}
                        >
                          <span className="font-medium text-sm text-koompi-primary">
                            {product.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {product.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isSolid
                      ? isActive(link.path)
                        ? 'text-koompi-primary'
                        : 'text-gray-600 hover:text-koompi-primary'
                      : isActive(link.path)
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-koompi-accent-pink rounded-full" />
                  )}
                </Link>
              ),
            )}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/fund"
              className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors border-2 ${
                isSolid
                  ? 'bg-koompi-accent-pink text-koompi-primary border-accent-500 hover:bg-pink-500'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              }`}
            >
              Fund a School
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${
                isSolid
                  ? 'text-gray-700 hover:text-koompi-primary'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 overflow-hidden">
          <div className="py-2">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    aria-expanded={isMobileProductsOpen}
                    className={`w-full flex items-center justify-between px-5 py-3 transition-colors ${
                      isProductPage
                        ? 'text-koompi-primary bg-blue-50'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">Products</span>
                    <div className="flex items-center gap-2">
                      {isProductPage && (
                        <span className="w-2 h-2 bg-koompi-accent-pink rounded-full" />
                      )}
                      <svg
                        className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {isMobileProductsOpen && (
                    <div className="bg-gray-50 py-1">
                      {productLinks.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className={`flex flex-col px-8 py-2.5 hover:bg-gray-100 transition-colors ${
                            isActive(product.path) ? 'bg-blue-50' : ''
                          }`}
                        >
                          <span className="text-sm font-medium text-koompi-primary">
                            {product.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {product.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-5 py-3 transition-colors ${
                    isActive(link.path)
                      ? 'text-koompi-primary bg-blue-50'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">{link.name}</span>
                  {isActive(link.path) && (
                    <span className="w-2 h-2 bg-koompi-accent-pink rounded-full" />
                  )}
                </Link>
              ),
            )}
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-gray-100 p-4">
            <Link
              to="/fund"
              className="block w-full py-3 bg-koompi-accent-pink text-koompi-primary text-center rounded-xl font-semibold hover:bg-pink-500 transition-colors border-2 border-accent-500"
            >
              Fund a School
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

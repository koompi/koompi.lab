import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeroBackground from './HeroBackground'
import ProductOverlayMenu from './ProductOverlayMenu'

const navLinks = [
  { name: 'Apps', path: '/apps' },
  { name: 'Schools', path: '/schools' },
  { name: 'Story', path: '/story' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOverlayOpen, setIsProductsOverlayOpen] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const isActive = useCallback(
    (path: string) => {
      if (path === '/') return location.pathname === '/'
      return location.pathname.startsWith(path)
    },
    [location.pathname],
  )

  const closeAll = useCallback(() => {
    setIsMobileMenuOpen(false)
    setIsProductsOverlayOpen(false)
  }, [])

  const handleFundClick = useCallback((e: React.MouseEvent) => {
    const targetPath = '/fund'
    if (location.pathname === targetPath) {
      e.preventDefault()
      const element = document.getElementById('pricing')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        closeAll()
      }
    }
  }, [location.pathname, closeAll])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Skip scroll reset when navigating to a hash anchor
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    closeAll()
  }, [location.pathname, closeAll])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeAll])

  useEffect(() => {
    if (isMobileMenuOpen || isProductsOverlayOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, isProductsOverlayOpen])

  const isSolid = isScrolled || isMobileMenuOpen

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div
          ref={mobileMenuRef}
          className={`rounded-full transition-all duration-300 ${
            isSolid
              ? 'bg-white/95 backdrop-blur-xl shadow-xl'
              : 'bg-transparent shadow-none'
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={isSolid ? '/logo/koompi-logo-text-dark.png' : '/logo/koompi-logo-text-white.png'}
                alt="KOOMPI"
                className="h-[18px] transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link) => (
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
              ))}

              {/* Products Button */}
              <button
                onClick={() => setIsProductsOverlayOpen(true)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  isSolid
                    ? 'text-gray-600 hover:text-koompi-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Products
              </button>
            </div>

            {/* Right side: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/fund#pricing"
                onClick={handleFundClick}
                className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors border-2 ${
                  isSolid
                    ? 'bg-koompi-accent-pink text-white border-accent-500 hover:bg-pink-500'
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 overflow-hidden">
              <div className="py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeAll}
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
                ))}

                {/* Products Button in Mobile Menu */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsProductsOverlayOpen(true)
                  }}
                  className="w-full flex items-center justify-between px-5 py-3 transition-colors text-gray-800 hover:bg-gray-50"
                >
                  <span className="font-medium">Products</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-gray-100 p-4">
                <Link
                  to="/onelab#pricing"
                  onClick={handleFundClick}
                  className="block w-full py-3 bg-koompi-accent-pink text-koompi-primary text-center rounded-xl font-semibold hover:bg-pink-500 transition-colors border-2 border-accent-500"
                >
                  Fund a School
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Products Overlay Menu */}
      <ProductOverlayMenu isOpen={isProductsOverlayOpen} onClose={() => setIsProductsOverlayOpen(false)} />
    </>
  )
}

export default Navbar

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Schools', path: '/schools' },
  { name: 'Impact', path: '/impact' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Floating Navbar Container - Centered, Fixed Width */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'
          }`}
      >
        <div
          className={`bg-white rounded-full shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-md'
            }`}
        >
          <div className="flex items-center justify-between px-8 py-2 min-w-[400px] max-w-4xl">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img src="/logo/koompi-logo-text.png" alt="KOOMPI" className="h-[18px] self-center" />
            </Link>

            {/* Fund Button + Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/schools"
                className="px-4 py-2 border border-koompi-primary text-koompi-primary text-sm rounded-full font-medium hover:bg-koompi-primary hover:text-white transition-colors"
              >
                Fund a School
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:opacity-60 transition-opacity"
                aria-label="Toggle menu"
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
        </div>

        {/* Dropdown Menu - Expands Below */}
        {isMobileMenuOpen && (
          <div className="bg-white rounded-2xl shadow-xl mt-2 min-w-[400px] max-w-4xl overflow-hidden">
            <div className="py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-5 py-3 transition-colors ${location.pathname === link.path
                      ? 'text-koompi-primary bg-blue-50'
                      : 'text-black hover:bg-gray-50'
                    }`}
                >
                  <span className="font-medium">{link.name}</span>
                  {location.pathname === link.path && (
                    <span className="w-2 h-2 bg-koompi-accent-orange rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 p-4">
              <p className="text-xs text-gray-500 mb-3">Ready to help?</p>
              <Link
                to="/schools"
                className="block w-full py-3 bg-koompi-primary text-white text-center rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              >
                Fund a School
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

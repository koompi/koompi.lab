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
          <div className="flex items-center justify-between px-5 py-2 min-w-[320px] max-w-md">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <span className="text-lg font-bold text-black">koompi</span>
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black hover:opacity-60 transition-opacity"
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

        {/* Dropdown Menu - Expands Below */}
        {isMobileMenuOpen && (
          <div className="bg-white rounded-2xl shadow-xl mt-2 min-w-[320px] max-w-md overflow-hidden">
            <div className="py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-5 py-3 transition-colors ${location.pathname === link.path
                      ? 'text-cambodian-blue bg-blue-50'
                      : 'text-black hover:bg-gray-50'
                    }`}
                >
                  <span className="font-medium">{link.name}</span>
                  {location.pathname === link.path && (
                    <span className="w-2 h-2 bg-solar-amber rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 p-4">
              <p className="text-xs text-gray-500 mb-3">Ready to help?</p>
              <Link
                to="/schools"
                className="block w-full py-3 bg-cambodian-blue text-white text-center rounded-xl font-semibold hover:bg-blue-900 transition-colors"
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

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import HeroBackground from './HeroBackground'

// Product data organized by sections
const productsBySection = {
  hardware: {
    title: 'Hardware',
    description: 'Powerful devices designed for education and durability',
    products: [
      {
        name: 'KOOMPI Mini V2',
        path: '/koompi-mini-v2',
        image: '/images/products/miniv2-port1.png',
        tagline: 'Compact. Powerful. Rugged.',
        description: 'Small form factor, big impact. Built for classrooms.'
      },
      {
        name: 'KOOMPI Monitor',
        path: '/monitor',
        image: '/images/products/monitor11.png',
        tagline: 'Crystal clear learning.',
        description: '18.5" HD display optimized for education.'
      },
      {
        name: 'KOOMPI Mini Station',
        path: '/ministation-v2',
        image: '/images/products/ministation3.png',
        tagline: 'All-in-one lab solution.',
        description: 'Portable charging station for 20+ devices.'
      }
    ]
  },
  software: {
    title: 'Software',
    description: 'Open-source tools built for learning',
    products: [
      {
        name: 'KOOMPI OS',
        path: '/os',
        image: '/images/products/weteka-laptop.png',
        tagline: 'Linux built for education.',
        description: 'Lightweight, fast, and student-friendly.'
      },
      {
        name: 'KOOMPI Onelab',
        path: '/onelab',
        image: '/images/products/onelab.png',
        tagline: 'Complete ICT curriculum.',
        description: 'Digital learning platform with STEM content.'
      }
    ]
  },
  solutions: {
    title: 'Solutions',
    description: 'End-to-end programs for schools and communities',
    products: [
      {
        name: 'Content Server',
        path: '/content-server',
        image: '/images/products/content-server.png',
        tagline: 'Internet in a box.',
        description: 'Offline educational library for remote schools.'
      }
    ]
  }
}

// Animation variants
const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }
}

const titleVariants = {
  closed: { y: -20, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const sectionVariants = {
  closed: { y: 30, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const productVariants = {
  closed: { y: 20, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
}

const closeButtonVariants = {
  closed: { scale: 0.8, opacity: 0 },
  open: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
}

interface ProductOverlayMenuProps {
  isOpen: boolean
  onClose: () => void
}

const ProductOverlayMenu = ({ isOpen, onClose }: ProductOverlayMenuProps) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const sections = Object.entries(productsBySection) as const
  const totalProducts = sections.reduce((acc, [, data]) => acc + data.products.length, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="exit"
          onClick={onClose}
        >
          <HeroBackground overlayOpacity="99" disablePointerEvents={false}>
            {/* Close Button */}
            <motion.button
              variants={closeButtonVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={onClose}
              className="fixed top-6 right-6 z-20 flex items-center gap-3 group"
            >
              <span className="text-white/70 text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                CLOSE
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 border border-white/20 group-hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </motion.button>

            {/* Content */}
            <div
              className="relative z-10 h-screen overflow-y-auto overflow-x-hidden px-6 sm:px-12 lg:px-24 py-24 max-w-7xl mx-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                variants={titleVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mb-8"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  Products
                </h1>
              </motion.div>

              {/* Sections */}
              <div className="space-y-16 sm:space-y-20">
                {sections.map(([key, section], sectionIndex) => (
                  <motion.div
                    key={key}
                    variants={sectionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: sectionIndex * 0.1 }}
                  >
                    {/* Section Header */}
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                        {section.title}
                      </h2>
                      <p className="text-white/50 text-sm sm:text-base max-w-md">
                        {section.description}
                      </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.products.map((product, productIndex) => {
                        const globalIndex = sections
                          .slice(0, sectionIndex)
                          .reduce((acc, [, s]) => acc + s.products.length, 0) + productIndex

                        const isCurrentPage = location.pathname === product.path

                        return (
                          <motion.div
                            key={product.path}
                            variants={productVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ delay: 0.15 + globalIndex * 0.08 }}
                          >
                            <Link
                              to={product.path}
                              onClick={onClose}
                              className={`group relative block h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                                isCurrentPage ? 'pointer-events-none' : ''
                              }`}
                            >
                              {/* Background Card */}
                              <div
                                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                                  isCurrentPage
                                    ? 'bg-white/20 ring-2 ring-white/40'
                                    : 'bg-white/5 hover:bg-white/10 hover:ring-1 hover:ring-white/20'
                                }`}
                              >
                                {/* Product Image */}
                                <div className="relative aspect-[4/3] p-6 sm:p-8 flex items-center justify-center">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                  />

                                  {/* Active Page Badge */}
                                  {isCurrentPage && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full">
                                      <span className="text-white text-xs font-medium">Current Page</span>
                                    </div>
                                  )}

                                </div>

                                {/* Product Info */}
                                <div className="p-6 pt-0 space-y-2">
                                  <p className="text-white/40 text-xs uppercase tracking-wider">
                                    {product.tagline}
                                  </p>
                                  <h3
                                    className={`text-lg font-semibold transition-colors ${
                                      isCurrentPage ? 'text-white' : 'text-white/90 group-hover:text-white'
                                    }`}
                                  >
                                    {product.name}
                                  </h3>
                                  <p className="text-white/50 text-sm">{product.description}</p>

                                  {/* Arrow Indicator */}
                                  {!isCurrentPage && (
                                    <div className="flex items-center gap-2 mt-4 text-white/40 group-hover:text-white/70 transition-colors">
                                      <span className="text-xs font-medium">Learn more</span>
                                      <svg
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4H3" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </HeroBackground>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductOverlayMenu

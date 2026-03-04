import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Large decorative background text */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[20vw] font-black text-gray-50 leading-none tracking-tighter select-none">
          MISSION
        </span>
      </motion.div>

      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-koompi-accent-pink/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-koompi-secondary/10 to-transparent blur-3xl"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, rgb(38, 60, 92) 1px, transparent 1px), linear-gradient(to bottom, rgb(38, 60, 92) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-koompi-accent-pink/5 rounded-full border border-koompi-accent-pink/20 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-koompi-accent-pink animate-ping"></span>
            <span className="text-sm font-semibold text-koompi-accent-pink">Our Mission</span>
          </motion.span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-koompi-primary leading-none tracking-tighter mb-6">
            Built to
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-koompi-accent-pink to-pink-600">
              empower.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Bridging Cambodia's digital divide with technology that works everywhere.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#onelab"
            className="inline-flex items-center gap-3 px-8 py-4 bg-koompi-primary text-white rounded-full font-semibold text-lg hover:bg-koompi-accent-pink transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-koompi-accent-pink/30 hover:-translate-y-1"
          >
            Learn more about our work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Mission

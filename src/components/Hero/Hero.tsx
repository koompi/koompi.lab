import { useState, useEffect, useRef } from 'react'
import CTAButton from './CTAButton'
import ImpactTicker from './ImpactTicker'

interface HeroProps {
  onDonate: () => void
}

const Hero = ({ onDonate }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err)
      })
    }
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  const scrollToSchools = () => {
    document.getElementById('schools')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Video Background */}
      <div className="video-background bg-gradient-to-br from-koompi-primary via-koompi-primary/90 to-koompi-accent-orange/20">
        {/* Placeholder for video - replace with actual video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/media/videos/Dey-doh.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div
        className="video-overlay bg-gradient-to-b from-black/30 via-black/10 to-cream"
        style={parallaxStyle}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-center animate-fade-in">
          One lab.
          <span className="block text-koompi-accent-orange">Every school.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl text-center mb-8 animate-slide-up">
          65 schools equipped. 435 to go. Join the mission to bring digital
          education to every student in Cambodia.
        </p>

        {/* Impact Ticker */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <ImpactTicker />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CTAButton
            variant="primary"
            onClick={scrollToSchools}
          >
            Fund a School
          </CTAButton>
          <CTAButton
            variant="secondary"
            onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </CTAButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

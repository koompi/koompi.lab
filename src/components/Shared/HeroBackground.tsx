import { useEffect, useRef } from 'react'

interface HeroBackgroundProps {
  children: React.ReactNode
  overlayOpacity?: string
  disablePointerEvents?: boolean
}

const HeroBackground = ({ children, overlayOpacity = '80', disablePointerEvents = false }: HeroBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className={`relative h-screen overflow-hidden ${disablePointerEvents ? 'pointer-events-none' : ''}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
      </video>

      {/* Navy blue layer - 15% transparent */}
      <div className="absolute inset-0 bg-koompi-primary/85" />

      {/* Blur layer for subtle effect */}
      <div className="absolute inset-0 backdrop-blur-[8px]" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-koompi-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-koompi-accent-persimmon/10 rounded-full blur-3xl" />

      {/* Dot pattern grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      {children}
    </section>
  )
}

export default HeroBackground

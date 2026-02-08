import { Link } from 'react-router-dom'

interface StatItem {
  value: string
  label: string
}

interface CTAButton {
  label: string
  to: string
  variant: 'primary' | 'ghost'
}

interface ProductHeroProps {
  badge?: string
  title: string
  glitchWord?: string
  subtitle: string
  stats?: StatItem[]
  ctas?: CTAButton[]
  variant: 'video' | 'split' | 'immersive'
  videoSrc?: string
  imageSrc?: string
  imageAlt?: string
  backgroundImage?: string
  children?: React.ReactNode
}

const ProductHero = ({
  badge,
  title,
  glitchWord,
  subtitle,
  stats,
  ctas,
  variant,
  videoSrc,
  imageSrc,
  imageAlt,
  backgroundImage,
  children,
}: ProductHeroProps) => {
  const renderTitle = () => {
    if (glitchWord) {
      const parts = title.split(glitchWord)
      return (
        <>
          {parts[0]}
          <span className="glitch" data-glitch={glitchWord}>
            {glitchWord}
          </span>
          {parts[1] || ''}
        </>
      )
    }
    return title
  }

  const renderCTAs = () =>
    ctas?.map((cta, i) => (
      <Link
        key={i}
        to={cta.to}
        className={
          cta.variant === 'primary'
            ? 'px-8 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-accent-500'
            : 'px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20'
        }
      >
        {cta.label}
      </Link>
    ))

  const renderStats = () =>
    stats && (
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center min-w-[140px]"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    )

  if (variant === 'video') {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {videoSrc && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-background"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="video-overlay bg-koompi-primary/80 backdrop-blur-[8px]" />

        {/* Dot pattern */}
        <div className="absolute inset-0 z-[2] opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-koompi-accent-pink/20 rounded-full blur-3xl z-[2]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-koompi-accent-blue/20 rounded-full blur-3xl z-[2]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 w-full">
          <div className="text-center lg:text-left max-w-3xl">
            {badge && (
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
                {badge}
              </span>
            )}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              {renderTitle()}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {renderCTAs()}
            </div>
            {renderStats()}
          </div>
          {children}
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-600">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-koompi-accent-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-koompi-accent-blue/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {badge && (
                <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
                  {badge}
                </span>
              )}
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                {renderTitle()}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {renderCTAs()}
              </div>
              {renderStats()}
            </div>
            {imageSrc && (
              <div className="flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt || ''}
                  className="max-w-full max-h-[500px] object-contain animate-float drop-shadow-2xl"
                />
              </div>
            )}
          </div>
          {children}
        </div>
      </section>
    )
  }

  // immersive variant
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-koompi-primary/70 backdrop-blur-sm" />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 w-full text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            {badge}
          </span>
        )}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          {renderTitle()}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {renderCTAs()}
        </div>
        {renderStats()}
        {children}
      </div>
    </section>
  )
}

export default ProductHero

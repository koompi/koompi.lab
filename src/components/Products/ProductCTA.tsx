import { Link } from 'react-router-dom'

interface ProductCTAProps {
  headline: string
  subtitle?: string
  primaryCTA: { label: string; to: string }
  secondaryCTA?: { label: string; to: string }
  trustItems?: string[]
}

const ProductCTA = ({
  headline,
  subtitle,
  primaryCTA,
  secondaryCTA,
  trustItems = ['MoEYS Partnership', 'Transparent Pricing', 'Direct Impact'],
}: ProductCTAProps) => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-koompi-accent-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-koompi-accent-blue/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
        {subtitle && (
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryCTA.to}
            className="px-10 py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-accent-500"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              to={secondaryCTA.to}
              className="px-10 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>

        {trustItems.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductCTA

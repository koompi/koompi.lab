import type { ProductSpec } from '../../types'

interface SpecTableProps {
  specs: ProductSpec[]
  productImage?: string
  productImageAlt?: string
}

const SpecTable = ({ specs, productImage, productImageAlt }: SpecTableProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-cream rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
              <span className="text-gray-500 text-sm">{spec.label}</span>
              <span className="font-medium text-koompi-primary text-sm text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {productImage && (
        <div className="flex items-center justify-center">
          <img
            src={productImage}
            alt={productImageAlt || 'Product'}
            className="max-w-full max-h-[400px] object-contain animate-float drop-shadow-xl"
          />
        </div>
      )}
    </div>
  )
}

export default SpecTable

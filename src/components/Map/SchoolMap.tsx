import { useState } from 'react'

interface SchoolMapProps {
  onProvinceSelect: (province: string) => void
}

const PROVINCES = [
  { id: 'phnom-penh', name: 'Phnom Penh', x: 45, y: 55, schools: 45, funded: 42 },
  { id: 'siem-reap', name: 'Siem Reap', x: 35, y: 25, schools: 38, funded: 28 },
  { id: 'battambang', name: 'Battambang', x: 20, y: 35, schools: 42, funded: 35 },
  { id: 'preah-sihanouk', name: 'Preah Sihanouk', x: 25, y: 65, schools: 18, funded: 15 },
  { id: 'pursat', name: 'Pursat', x: 28, y: 45, schools: 25, funded: 20 },
  { id: 'kampong-cham', name: 'Kampong Cham', x: 60, y: 40, schools: 52, funded: 40 },
  { id: 'kampong-thom', name: 'Kampong Thom', x: 50, y: 30, schools: 35, funded: 25 },
  { id: 'kampong-speu', name: 'Kampong Speu', x: 35, y: 55, schools: 28, funded: 22 },
  { id: 'takeo', name: 'Takeo', x: 55, y: 65, schools: 32, funded: 28 },
  { id: 'kampot', name: 'Kampot', x: 40, y: 75, schools: 22, funded: 18 },
  { id: 'kampong-chhnang', name: 'Kampong Chhnang', x: 42, y: 48, schools: 24, funded: 20 },
  { id: 'kep', name: 'Kep', x: 52, y: 78, schools: 8, funded: 7 },
  { id: 'kratie', name: 'Kratie', x: 70, y: 28, schools: 18, funded: 12 },
  { id: 'mondulkiri', name: 'Mondulkiri', x: 85, y: 35, schools: 12, funded: 5 },
  { id: 'ratanakiri', name: 'Ratanakiri', x: 90, y: 20, schools: 15, funded: 6 },
  { id: 'stung-treng', name: 'Stung Treng', x: 75, y: 18, schools: 10, funded: 4 },
  { id: 'preah-vihear', name: 'Preah Vihear', x: 55, y: 15, schools: 14, funded: 8 },
  { id: 'oddar-meanchey', name: 'Oddar Meanchey', x: 40, y: 12, schools: 12, funded: 5 },
  { id: 'banteay-meanchey', name: 'Banteay Meanchey', x: 25, y: 18, schools: 20, funded: 12 },
  { id: 'pailin', name: 'Pailin', x: 15, y: 42, schools: 8, funded: 6 },
  { id: 'svay-rieng', name: 'Svay Rieng', x: 75, y: 60, schools: 25, funded: 20 },
  { id: 'prey-veng', name: 'Prey Veng', x: 65, y: 52, schools: 48, funded: 35 },
  { id: 'tbong-khmum', name: 'Tbong Khmum', x: 72, y: 42, schools: 30, funded: 22 },
  { id: 'kandal', name: 'Kandal', x: 52, y: 58, schools: 40, funded: 38 },
]

const SchoolMap = ({ onProvinceSelect }: SchoolMapProps) => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null)

  const handleProvinceClick = (provinceId: string) => {
    if (selectedProvince === provinceId) {
      setSelectedProvince(null)
      onProvinceSelect('all')
    } else {
      setSelectedProvince(provinceId)
      onProvinceSelect(provinceId)
    }
  }

  const getProvinceColor = (province: typeof PROVINCES[0]) => {
    const percentage = (province.funded / province.schools) * 100
    if (percentage >= 80) return 'bg-growth-green'
    if (percentage >= 50) return 'bg-blue-500'
    if (percentage >= 25) return 'bg-yellow-500'
    return 'bg-gray-400'
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cambodian-blue mb-4">
            Impact Across Cambodia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See our progress in bringing digital education to schools nationwide.
            Click on a province to view schools in that area.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-cream rounded-3xl p-8 shadow-lg overflow-hidden">
          {/* Simplified Cambodia Map - SVG Stylized */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-auto cambodia-map"
            style={{ maxHeight: '500px' }}
          >
            {/* Cambodia Outline (Stylized) */}
            <path
              d="M 15 15 L 35 10 L 50 8 L 70 10 L 85 8 L 95 15 L 92 30 L 88 45 L 85 60 L 80 80 L 70 85 L 55 82 L 40 85 L 25 80 L 15 70 L 12 55 L 15 40 Z"
              fill="#e5e7eb"
              stroke="#d1d5db"
              strokeWidth="0.5"
            />

            {/* Province Indicators */}
            {PROVINCES.map((province) => (
              <g key={province.id}>
                {/* Connection line to label */}
                {hoveredProvince === province.id && (
                  <line
                    x1={province.x}
                    y1={province.y}
                    x2={province.x + (province.x < 50 ? -8 : 8)}
                    y2={province.y - 8}
                    stroke="#1a365d"
                    strokeWidth="0.3"
                  />
                )}

                {/* Province Dot */}
                <circle
                  cx={province.x}
                  cy={province.y}
                  r={hoveredProvince === province.id || selectedProvince === province.id ? '2.5' : '1.5'}
                  className={getProvinceColor(province)}
                  style={{
                    filter: selectedProvince === province.id ? 'drop-shadow(0 0 4px rgba(26, 54, 93, 0.5))' : '',
                  }}
                  onClick={() => handleProvinceClick(province.id)}
                  onMouseEnter={() => setHoveredProvince(province.id)}
                  onMouseLeave={() => setHoveredProvince(null)}
                  style={{ cursor: 'pointer' }}
                />

                {/* Hover Label */}
                {hoveredProvince === province.id && (
                  <text
                    x={province.x + (province.x < 50 ? -12 : 12)}
                    y={province.y - 10}
                    fontSize="2.5"
                    fill="#1a365d"
                    fontWeight="600"
                    textAnchor={province.x < 50 ? 'end' : 'start'}
                  >
                    {province.name}
                  </text>
                )}
              </g>
            ))}
          </svg>

          {/* Hovered Province Info Card */}
          {hoveredProvince && (
            <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg p-6 min-w-[200px] animate-fade-in">
              {(() => {
                const province = PROVINCES.find((p) => p.id === hoveredProvince)
                if (!province) return null
                const percentage = Math.round((province.funded / province.schools) * 100)
                return (
                  <>
                    <h4 className="font-semibold text-cambodian-blue mb-2">{province.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Schools:</span>
                        <span className="font-medium">{province.schools}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Funded:</span>
                        <span className="font-medium text-growth-green">{province.funded}</span>
                      </div>
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              percentage >= 80 ? 'bg-growth-green' : percentage >= 50 ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{percentage}% funded</p>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          )}

          {/* Map Legend */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <h5 className="font-semibold text-cambodian-blue mb-3 text-sm">Coverage</h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-growth-green" />
                <span>80%+ Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span>50-79% Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span>25-49% Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400" />
                <span>&lt;25% Funded</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Province Info */}
        {selectedProvince && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setSelectedProvince(null)
                onProvinceSelect('all')
              }}
              className="text-cambodian-blue hover:underline"
            >
              Clear filter (showing {PROVINCES.find((p) => p.id === selectedProvince)?.name} province)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SchoolMap

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

// Fix for default marker icons in React
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface SchoolMapProps {
  onProvinceSelect: (province: string) => void
}

// School locations with coordinates (approximate for demo)
const SCHOOL_LOCATIONS = [
  { id: 1, name: 'Phnom Penh', province: 'phnom-penh', lat: 11.5564, lng: 104.9282, schools: 45, funded: 42 },
  { id: 2, name: 'Siem Reap', province: 'siem-reap', lat: 13.3617, lng: 103.8604, schools: 38, funded: 28 },
  { id: 3, name: 'Battambang', province: 'battambang', lat: 13.0957, lng: 103.2016, schools: 42, funded: 35 },
  { id: 4, name: 'Kampong Cham', province: 'kampong-cham', lat: 11.9939, lng: 105.4642, schools: 52, funded: 40 },
  { id: 5, name: 'Kampong Thom', province: 'kampong-thom', lat: 12.7056, lng: 104.8969, schools: 35, funded: 25 },
  { id: 6, name: 'Kampong Speu', province: 'kampong-speu', lat: 11.4564, lng: 104.5245, schools: 28, funded: 22 },
  { id: 7, name: 'Kampong Chhnang', province: 'kampong-chhnang', lat: 12.2544, lng: 104.6633, schools: 24, funded: 20 },
  { id: 8, name: 'Pursat', province: 'pursat', lat: 12.5388, lng: 103.9202, schools: 25, funded: 20 },
  { id: 9, name: 'Banteay Meanchey', province: 'banteay-meanchey', lat: 13.5833, lng: 102.9667, schools: 20, funded: 12 },
  { id: 10, name: 'Oddar Meanchey', province: 'oddar-meanchey', lat: 14.2167, lng: 103.5167, schools: 12, funded: 5 },
  { id: 11, name: 'Preah Vihear', province: 'preah-vihear', lat: 13.7833, lng: 104.9833, schools: 14, funded: 8 },
  { id: 12, name: 'Stung Treng', province: 'stung-treng', lat: 13.5250, lng: 106.0083, schools: 10, funded: 4 },
  { id: 13, name: 'Ratanakiri', province: 'ratanakiri', lat: 13.7667, lng: 106.9833, schools: 15, funded: 6 },
  { id: 14, name: 'Mondulkiri', province: 'mondulkiri', lat: 12.6667, lng: 106.9833, schools: 12, funded: 5 },
  { id: 15, name: 'Kratie', province: 'kratie', lat: 12.4833, lng: 106.0167, schools: 18, funded: 12 },
  { id: 16, name: 'Prey Veng', province: 'prey-veng', lat: 11.4667, lng: 105.3333, schools: 48, funded: 35 },
  { id: 17, name: 'Tbong Khmum', province: 'tbong-khmum', lat: 12.1500, lng: 106.0167, schools: 30, funded: 22 },
  { id: 18, name: 'Kandal', province: 'kandal', lat: 11.3833, lng: 105.0333, schools: 40, funded: 38 },
  { id: 19, name: 'Takeo', province: 'takeo', lat: 10.9903, lng: 104.7770, schools: 32, funded: 28 },
  { id: 20, name: 'Kampot', province: 'kampot', lat: 10.6085, lng: 104.1815, schools: 22, funded: 18 },
  { id: 21, name: 'Kep', province: 'kep', lat: 10.4833, lng: 104.3000, schools: 8, funded: 7 },
  { id: 22, name: 'Preah Sihanouk', province: 'preah-sihanouk', lat: 10.6500, lng: 103.4833, schools: 18, funded: 15 },
  { id: 23, name: 'Koh Kong', province: 'koh-kong', lat: 11.4167, lng: 103.3833, schools: 15, funded: 10 },
  { id: 24, name: 'Pailin', province: 'pailin', lat: 12.8667, lng: 102.6167, schools: 8, funded: 6 },
  { id: 25, name: 'Svay Rieng', province: 'svay-rieng', lat: 11.0833, lng: 105.9833, schools: 25, funded: 20 },
]

// Custom marker icon based on funding percentage
const createCustomIcon = (funded: number, schools: number) => {
  const percentage = (funded / schools) * 100
  let color = '#d1d5db' // gray - <25%
  if (percentage >= 80) color = '#86efac' // green
  else if (percentage >= 50) color = '#93c5fd' // blue
  else if (percentage >= 25) color = '#fde047' // yellow

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid #1e40af;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 10px;
      color: #1a365d;
    ">${funded}</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  })
}

// Map bounds controller to fit all markers
function MapBoundsController({ markers }: { markers: typeof SCHOOL_LOCATIONS }) {
  const map = useMap()

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(
        markers.map(m => [m.lat, m.lng] as L.LatLngExpression)
      )
      map.fitBounds(bounds, { padding: [30, 30] })
    }
  }, [map, markers])

  return null
}

const SchoolMap = ({ onProvinceSelect }: SchoolMapProps) => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)

  const handleMarkerClick = (province: string) => {
    if (selectedProvince === province) {
      setSelectedProvince(null)
      onProvinceSelect('all')
    } else {
      setSelectedProvince(province)
      onProvinceSelect(province)
    }
  }

  const getProvinceName = (provinceId: string) => {
    const location = SCHOOL_LOCATIONS.find(l => l.province === provinceId)
    return location?.name || provinceId
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
            Impact Across Cambodia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            See our progress in bringing digital education to schools nationwide.
            Click on a marker to view details for that province.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
          <MapContainer
            center={[12.5, 105.0]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapBoundsController markers={SCHOOL_LOCATIONS} />

            {SCHOOL_LOCATIONS.map((location) => {
              const percentage = Math.round((location.funded / location.schools) * 100)
              const isSelected = selectedProvince === location.province

              return (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                  icon={createCustomIcon(location.funded, location.schools)}
                  eventHandlers={{
                    click: () => handleMarkerClick(location.province),
                  }}
                >
                  <Popup>
                    <div className="p-2 min-w-[180px]">
                      <h4 className="font-bold text-koompi-primary text-sm mb-2">{location.name}</h4>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-600">Schools:</span>
                          <span className="font-medium">{location.schools}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-600">Funded:</span>
                          <span className="font-medium text-green-600">{location.funded}</span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                percentage >= 80 ? 'bg-green-500' :
                                percentage >= 50 ? 'bg-blue-500' :
                                percentage >= 25 ? 'bg-yellow-500' : 'bg-gray-400'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1 text-right">{percentage}% funded</p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-gray-100 z-[1000]">
            <h5 className="font-semibold text-koompi-primary mb-2 text-xs">Funding Progress</h5>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-300 border-2 border-blue-800" />
                <span>80%+ Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-300 border-2 border-blue-800" />
                <span>50-79% Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-yellow-300 border-2 border-blue-800" />
                <span>25-49% Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-300 border-2 border-blue-800" />
                <span>&lt;25% Funded</span>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100 z-[1000]">
            <div className="text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-600">Total Schools:</span>
                <span className="font-bold text-koompi-primary">{SCHOOL_LOCATIONS.reduce((sum, l) => sum + l.schools, 0)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Total Funded:</span>
                <span className="font-bold text-green-600">{SCHOOL_LOCATIONS.reduce((sum, l) => sum + l.funded, 0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Province Info */}
        {selectedProvince && (
          <div className="mt-5 text-center">
            <button
              onClick={() => {
                setSelectedProvince(null)
                onProvinceSelect('all')
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-koompi-primary text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Show all provinces (currently: {getProvinceName(selectedProvince)})
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SchoolMap

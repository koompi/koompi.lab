import { useEffect, useState } from 'react'
import SchoolCard from './SchoolCard'
import SchoolSubmissionForm from './SchoolSubmissionForm'
import { CSVImporter } from '../Admin'
import { School, SchoolStatus } from '../../types'

interface SchoolGridProps {
  provinceFilter: string
  statusFilter: string
  onFundClick: (school: School) => void
}

const SchoolGrid = ({ provinceFilter, statusFilter, onFundClick }: SchoolGridProps) => {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [showCommunity, setShowCommunity] = useState(false)
  const [showCSVImporter, setShowCSVImporter] = useState(false)

  useEffect(() => {
    fetchSchools()
  }, [showCommunity])

  const handleImportComplete = (count: number) => {
    setShowCSVImporter(false)
    fetchSchools() // Refresh the school list
  }

  const fetchSchools = async () => {
    setLoading(true)
    try {
      const endpoint = showCommunity ? '/api/schools/community' : '/api/schools'
      const response = await fetch(endpoint)
      const data = await response.json()
      setSchools(data)
    } catch (error) {
      console.error('Failed to fetch schools:', error)
      // Use mock data for development
      setSchools(generateMockSchools(showCommunity))
    } finally {
      setLoading(false)
    }
  }

  const filteredSchools = schools.filter((school) => {
    if (provinceFilter !== 'all' && school.province !== provinceFilter) return false
    if (statusFilter !== 'all' && school.status !== statusFilter) return false
    return true
  })

  const stats = {
    total: schools.length,
    none: schools.filter((s) => s.status === 'none').length,
    lab: schools.filter((s) => s.status === 'lab').length,
    'lab-content': schools.filter((s) => s.status === 'lab-content').length,
    'full-solar': schools.filter((s) => s.status === 'full-solar').length,
    communityPending: schools.filter((s) => (s as any).verificationStatus === 'pending').length,
  }

  return (
    <section id="schools" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cambodian-blue mb-4">
            Choose a School to Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Browse schools across Cambodia from the Ministry of Education priority list.
            1,743 schools need labs to serve students nationwide.
          </p>

          {/* Cambodia Context */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm text-sm">
            <span className="text-gray-600">
              Cambodia has <strong>14,522</strong> total schools
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-cambodian-blue">
              <strong>1,743</strong> priority schools targeted
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-growth-green">
              <strong>65</strong> equipped so far
            </span>
          </div>
        </div>

        {/* Toggle Source */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowCommunity(false)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              !showCommunity
                ? 'bg-cambodian-blue text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            MoEYS Verified
          </button>
          <button
            onClick={() => setShowCommunity(true)}
            className={`px-6 py-2 rounded-full font-medium transition relative ${
              showCommunity
                ? 'bg-cambodian-blue text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Community Requests
            {stats.communityPending > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-solar-amber text-white text-xs rounded-full flex items-center justify-center">
                {stats.communityPending}
              </span>
            )}
          </button>
        </div>

        {showCommunity && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-center">
            <p className="text-blue-800">
              <strong>Community-submitted schools</strong> are awaiting verification against
              the MoEYS database. Help us verify by submitting schools you know need labs.
            </p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-gray-600">{stats.total} Schools</span>
          </div>
          <div className="bg-gray-100 rounded-full px-6 py-3 shadow-sm">
            <span className="text-gray-400">○ {stats.none} Need Support</span>
          </div>
          <div className="bg-blue-50 rounded-full px-6 py-3 shadow-sm">
            <span className="text-blue-600">● {stats.lab} Labs</span>
          </div>
          <div className="bg-purple-50 rounded-full px-6 py-3 shadow-sm">
            <span className="text-purple-600">●● {stats['lab-content']} Lab + Content</span>
          </div>
          <div className="bg-green-50 rounded-full px-6 py-3 shadow-sm">
            <span className="text-green-600">☀ {stats['full-solar']} Solar</span>
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            className="filter-btn px-6 py-2 rounded-full border-2 border-gray-200 text-gray-600 hover:border-cambodian-blue hover:text-cambodian-blue transition"
          >
            All
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border-2 border-gray-200 text-gray-600 hover:border-cambodian-blue hover:text-cambodian-blue transition"
          >
            Needs Lab
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border-2 border-gray-200 text-gray-600 hover:border-cambodian-blue hover:text-cambodian-blue transition"
          >
            Needs Content
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border-2 border-gray-200 text-gray-600 hover:border-cambodian-blue hover:text-cambodian-blue transition"
          >
            Needs Solar
          </button>
        </div>

        {/* Submit School Button */}
        {!showCommunity && (
          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowSubmitForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-solar-amber text-white rounded-full font-semibold hover:bg-amber-600 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a School
              </button>
              <button
                onClick={() => setShowCSVImporter(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-cambodian-blue text-cambodian-blue rounded-full font-semibold hover:bg-blue-50 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Import from CSV
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Know a school that needs a lab? <strong>Submit it individually</strong> or <strong>import from MoEYS database</strong>.
            </p>
          </div>
        )}

        {/* Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cambodian-blue"></div>
          </div>
        ) : filteredSchools.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No schools found in this category.</p>
            {!showCommunity && (
              <button
                onClick={() => setShowSubmitForm(true)}
                className="text-cambodian-blue hover:underline font-medium"
              >
                Submit a school →
              </button>
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSchools.slice(0, showCommunity ? undefined : 100).map((school) => (
              <SchoolCard
                key={school._id}
                school={school}
                onFund={onFundClick}
              />
            ))}
          </div>
        )}

        {!showCommunity && schools.length > 100 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Showing 100 of {schools.length} schools. Use the map to filter by province.
            </p>
          </div>
        )}
      </div>

      {/* Submission Form Modal */}
      {showSubmitForm && (
        <SchoolSubmissionForm
          onClose={() => setShowSubmitForm(false)}
          onSuccess={() => {
            setShowSubmitForm(false)
            setShowCommunity(true)
          }}
        />
      )}

      {/* CSV Importer Modal */}
      {showCSVImporter && (
        <CSVImporter
          onClose={() => setShowCSVImporter(false)}
          onImportComplete={handleImportComplete}
        />
      )}
    </section>
  )
}

// Generate mock schools for development
const generateMockSchools = (community = false): School[] => {
  const provinces = [
    'Phnom Penh', 'Siem Reap', 'Battambang', 'Preah Sihanouk', 'Pursat',
    'Kampong Cham', 'Kampong Thom', 'Kampong Speu', 'Takeo', 'Kampot',
    'Kampong Chhnang', 'Kep', 'Kratie', 'Mondulkiri', 'Ratanakiri',
    'Stung Treng', 'Preah Vihear', 'Oddar Meanchey', 'Banteay Meanchey', 'Pailin',
    'Svay Rieng', 'Prey Veng', 'Tbong Khmum', 'Kandal',
  ]

  const statuses: SchoolStatus[] = ['none', 'lab', 'lab-content', 'full-solar']
  const mockSchools: School[] = []

  if (community) {
    // Generate community submitted schools (pending verification)
    for (let i = 0; i < 15; i++) {
      mockSchools.push({
        _id: `community-${i + 1}`,
        name: `Community Submitted ${provinces[i % provinces.length]} School ${i + 1}`,
        province: provinces[i % provinces.length],
        district: `District ${((i % 10) + 1)}`,
        studentCount: 200 + Math.floor(Math.random() * 1000),
        status: 'none',
        fundedPercentage: 0,
        source: 'community',
        verificationStatus: 'pending',
      } as any)
    }
  } else {
    // 65 schools already equipped
    for (let i = 0; i < 65; i++) {
      const status = i < 40 ? 'lab-content' : i < 64 ? 'lab' : 'full-solar'
      mockSchools.push({
        _id: `school-${i + 1}`,
        name: `${provinces[i % provinces.length]} ${['Primary', 'Secondary', 'High'][i % 3]} School ${i + 1}`,
        province: provinces[i % provinces.length],
        district: `District ${((i % 10) + 1)}`,
        studentCount: 300 + Math.floor(Math.random() * 1500),
        status: status,
        fundedPercentage: 100,
        source: 'moeys',
        verificationStatus: 'verified',
        establishedAt: new Date(2023 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 12), 1).toISOString(),
      } as any)
    }

    // First 100 priority schools awaiting support
    for (let i = 65; i < 165; i++) {
      mockSchools.push({
        _id: `school-${i + 1}`,
        name: `${provinces[i % provinces.length]} ${['Primary', 'Secondary', 'High'][i % 3]} School ${i + 1}`,
        province: provinces[i % provinces.length],
        district: `District ${((i % 10) + 1)}`,
        studentCount: 200 + Math.floor(Math.random() * 1800),
        status: 'none',
        fundedPercentage: 0,
        source: 'moeys',
        verificationStatus: 'verified',
      } as any)
    }
  }

  return mockSchools
}

export default SchoolGrid

import { useState, useEffect } from 'react'
import SchoolTable from '../components/Schools/SchoolTable'
import Footer from '../components/Shared/Footer'
import DonationModal from '../components/Donation/DonationModal'
import { School } from '../types'
import schoolsData from '../data/schools-generated'

const SchoolsPage = () => {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [provinceFilter, setProvinceFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  useEffect(() => {
    fetchSchools()
  }, [])

  const fetchSchools = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/schools')
      const data = await response.json()
      setSchools(data)
    } catch (error) {
      console.error('Failed to fetch schools:', error)
      // Use generated school data from CSV
      setSchools(schoolsData)
    } finally {
      setLoading(false)
    }
  }

  const handleFundClick = (school: School) => {
    setSelectedSchool(school)
    setIsDonationModalOpen(true)
  }

  const filteredSchools = schools.filter((school) => {
    if (provinceFilter !== 'all' && school.province !== provinceFilter) return false
    if (statusFilter !== 'all' && school.status !== statusFilter) return false
    if (searchQuery && !school.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !school.province.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative overflow-hidden text-white py-20 pt-32">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay with blur */}
        <div className="absolute inset-0 bg-koompi-primary/80 backdrop-blur-[8px]" />

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-koompi-accent-pink/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-koompi-accent-blue/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Schools Across <span className="text-koompi-accent-pink">Cambodia</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse our complete database of schools. Explore by province, equipment status, or search for a specific school.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pointer-events-none z-10" style={{ filter: 'blur(0)' }}>
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by school name or province..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-sm text-white/60 mt-3">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Total Schools */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 min-w-[140px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-koompi-accent-pink/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-koompi-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold">{schools.length}</p>
                  <p className="text-xs text-gray-300">Total Schools</p>
                </div>
              </div>
            </div>

            {/* Equipped */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 min-w-[140px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-koompi-accent-yellow/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-koompi-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold">{schools.filter(s => s.status !== 'none').length}</p>
                  <p className="text-xs text-gray-300">Equipped</p>
                </div>
              </div>
            </div>

            {/* Need Support */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 min-w-[140px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-koompi-accent-pink/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-koompi-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold">{schools.filter(s => s.status === 'none').length}</p>
                  <p className="text-xs text-gray-300">Need Support</p>
                </div>
              </div>
            </div>

            {/* Students Reached */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 min-w-[140px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-koompi-accent-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-koompi-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold">{schools.reduce((sum, s) => sum + (s.studentCount || 0), 0).toLocaleString()}</p>
                  <p className="text-xs text-gray-300">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 -mt-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap gap-3 items-center">
            <select
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
            >
              <option value="all">All Provinces</option>
              {[...new Set(schools.map(s => s.province))].sort().map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="none">Needs Support</option>
              <option value="lab">Lab Only</option>
              <option value="lab-content">Lab + Content</option>
              <option value="full-solar">Solar Powered</option>
            </select>
            <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-koompi-primary/5 rounded-xl">
              <span className="text-sm text-gray-500">{filteredSchools.length}</span>
              <span className="text-sm text-gray-400">schools</span>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm text-gray-600 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-koompi-primary"></div>
            </div>
          ) : filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No schools found matching your filters.</p>
            </div>
          ) : (
            <SchoolTable schools={filteredSchools} onFundClick={handleFundClick} />
          )}
        </div>
      </section>

      <DonationModal
        school={isDonationModalOpen ? selectedSchool : null}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <Footer />
    </div>
  )
}

export default SchoolsPage

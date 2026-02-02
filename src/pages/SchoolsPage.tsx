import { useState } from 'react'
import SchoolGrid from '../components/Schools/SchoolGrid'
import { School } from '../types'

const SchoolsPage = () => {
  const [provinceFilter, setProvinceFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const handleFundClick = (school: School) => {
    setSelectedSchool(school)
    setIsDonationModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-cambodian-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Schools
            </h1>
            <p className="text-xl text-gray-300">
              Browse our complete database of 1,743 priority schools from the Ministry
              of Education. Filter by province or equipment status to find a school
              to support.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div>
              <p className="text-3xl font-bold text-solar-amber">1,743</p>
              <p className="text-sm text-gray-300">Priority Schools</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-growth-green">65</p>
              <p className="text-sm text-gray-300">Equipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">40</p>
              <p className="text-sm text-gray-300">Lab + Content</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">1</p>
              <p className="text-sm text-gray-300">Solar Powered</p>
            </div>
          </div>
        </div>
      </section>

      <SchoolGrid
        provinceFilter={provinceFilter}
        statusFilter={statusFilter}
        onFundClick={handleFundClick}
      />
    </div>
  )
}

export default SchoolsPage

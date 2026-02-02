import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Mission from '../components/Mission/Mission'
import SchoolMap from '../components/Map/SchoolMap'
import SchoolGrid from '../components/Schools/SchoolGrid'
import ImpactStats from '../components/Shared/ImpactStats'
import Footer from '../components/Shared/Footer'
import { School } from '../types'
import { useState } from 'react'

const HomePage = () => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [provinceFilter, setProvinceFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const handleFundClick = (school: School) => {
    setSelectedSchool(school)
    setIsDonationModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Hero onDonate={() => setIsDonationModalOpen(true)} />
      <Mission />
      <ImpactStats />
      <SchoolMap onProvinceSelect={setProvinceFilter} />
      <SchoolGrid
        provinceFilter={provinceFilter}
        statusFilter={statusFilter}
        onFundClick={handleFundClick}
      />
      <Footer />

      {/* Quick link to all schools */}
      <section className="py-16 bg-cambodian-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to make a difference?
          </h2>
          <p className="text-gray-300 mb-8">
            Browse all 1,743 schools in our priority list and find one to support.
          </p>
          <Link
            to="/schools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-solar-amber text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
          >
            View All Schools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage

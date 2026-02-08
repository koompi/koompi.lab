import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Shared'
import { DonationModal } from './components/Donation'
import HomePage from './pages/HomePage'
import SchoolsPage from './pages/SchoolsPage'
import ImpactPage from './pages/ImpactPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OnelabPage from './pages/OnelabPage'
import ContentServerPage from './pages/ContentServerPage'
import FundSchoolPage from './pages/FundSchoolPage'
import OSPage from './pages/OSPage'
import EduSuitePage from './pages/EduSuitePage'
import { useState } from 'react'
import type { School } from './types'

function App() {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/onelab" element={<OnelabPage />} />
        <Route path="/content-server" element={<ContentServerPage />} />
        <Route path="/fund" element={<FundSchoolPage />} />
        <Route path="/os" element={<OSPage />} />
        <Route path="/edu-suite" element={<EduSuitePage />} />
      </Routes>

      {/* Global donation modal - can be triggered from any page */}
      {isDonationModalOpen && (
        <DonationModal
          school={selectedSchool}
          onClose={() => {
            setIsDonationModalOpen(false)
            setSelectedSchool(null)
          }}
        />
      )}
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Shared'
import { DonationModal } from './components/Donation'
import HomePage from './pages/HomePage'
import SchoolsPage from './pages/SchoolsPage'
import ImpactPage from './pages/ImpactPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { School } from './types'
import { useState } from 'react'

function App() {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const handleFundClick = (school: School) => {
    setSelectedSchool(school)
    setIsDonationModalOpen(true)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
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

import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Shared'
import HomePage from './pages/HomePage'
import SchoolsPage from './pages/SchoolsPage'
import StoryPage from './pages/StoryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OnelabPage from './pages/OnelabPage'
import ContentServerPage from './pages/ContentServerPage'
import KoompiMiniV2Page from './pages/KoompiMiniV2Page'
import MinistationV2Page from './pages/MinistationV2Page'
import MonitorPage from './pages/MonitorPage'
import OSPage from './pages/OSPage'
import AppsPage from './pages/AppsPage'
import FundSchoolPage from './pages/FundSchoolPage'
import NotFoundPage from './pages/NotFoundPage'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.hash, location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fund" element={<FundSchoolPage />} />
        <Route path="/onelab" element={<OnelabPage />} />
        <Route path="/content-server" element={<ContentServerPage />} />
        <Route path="/koompi-mini-v2" element={<KoompiMiniV2Page />} />
        <Route path="/ministation-v2" element={<MinistationV2Page />} />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/os" element={<OSPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App

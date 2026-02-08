import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Footer from '../components/Shared/Footer'
import {
  MINISTATION_PRICE,
  CONTENT_SERVER_PACKAGE_PRICE,
  INSTALLATION_PHNOM_PENH,
  INSTALLATION_PROVINCE,
} from '../data/products'

interface SchoolOption {
  _id: string
  name: string
  province: string
  district: string
  studentCount: number
  status: string
}

interface NewSchoolForm {
  name: string
  province: string
  district: string
  contactName: string
  contactPhone: string
  contactEmail: string
}

interface FunderInfo {
  fullName: string
  email: string
  phone: string
  organization: string
  message: string
  anonymous: boolean
}

const STEPS = [
  { num: 1, label: 'Choose Package' },
  { num: 2, label: 'Choose School' },
  { num: 3, label: 'Your Info' },
  { num: 4, label: 'Review & Pay' },
]

const FundSchoolPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentStep = parseInt(searchParams.get('step') || '1')

  // Step 1 state
  const [includeLab, setIncludeLab] = useState(true)
  const [includeContentServer, setIncludeContentServer] = useState(true)
  const [includeSolar, setIncludeSolar] = useState(false)
  const [labSize, setLabSize] = useState(20)
  const [isCustom, setIsCustom] = useState(false)
  const [customSize, setCustomSize] = useState('')

  // Step 2 state
  const [schoolSource, setSchoolSource] = useState<'existing' | 'new'>('existing')
  const [selectedSchool, setSelectedSchool] = useState<SchoolOption | null>(null)
  const [schoolSearch, setSchoolSearch] = useState('')
  const [schools, setSchools] = useState<SchoolOption[]>([])
  const [newSchool, setNewSchool] = useState<NewSchoolForm>({
    name: '',
    province: '',
    district: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  })

  // Step 3 state
  const [funderInfo, setFunderInfo] = useState<FunderInfo>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    anonymous: false,
  })

  // Fetch schools
  useEffect(() => {
    fetch('/api/schools')
      .then((r) => r.json())
      .then((data) => setSchools(data.schools || data || []))
      .catch(() => setSchools([]))
  }, [])

  const effectiveLabSize = isCustom ? (parseInt(customSize) || 0) : labSize
  const labCost = includeLab ? effectiveLabSize * MINISTATION_PRICE : 0
  const contentServerCost = includeContentServer ? CONTENT_SERVER_PACKAGE_PRICE : 0
  const installationCost = selectedSchool?.province === 'Phnom Penh' ? INSTALLATION_PHNOM_PENH : INSTALLATION_PROVINCE
  const total = labCost + contentServerCost + installationCost

  const setStep = (step: number) => {
    setSearchParams({ step: String(step) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return includeLab || includeContentServer
      case 2:
        return schoolSource === 'existing'
          ? selectedSchool !== null
          : newSchool.name && newSchool.province && newSchool.contactName
      case 3:
        return funderInfo.fullName && funderInfo.email
      default:
        return true
    }
  }

  const filteredSchools = schools.filter(
    (s) =>
      s.name.toLowerCase().includes(schoolSearch.toLowerCase()) ||
      s.province.toLowerCase().includes(schoolSearch.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-koompi-primary to-secondary-600 pt-28 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Fund a School
          </h1>
          <p className="text-gray-300">
            Choose your package, select a school, and make an impact.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <button
                  onClick={() => step.num < currentStep && setStep(step.num)}
                  className={`flex items-center gap-2 ${
                    step.num < currentStep ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step.num < currentStep
                        ? 'bg-koompi-accent-pink text-white'
                        : step.num === currentStep
                        ? 'bg-koompi-accent-pink text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.num < currentStep ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.num
                    )}
                  </div>
                  <span
                    className={`hidden sm:inline text-sm font-medium ${
                      step.num === currentStep
                        ? 'text-koompi-primary'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div
                    className={`w-8 sm:w-16 md:w-24 h-0.5 mx-2 ${
                      step.num < currentStep ? 'bg-koompi-accent-pink' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Step 1: Choose Package */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-koompi-primary mb-6">
                  What would you like to fund?
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setIncludeLab(!includeLab)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                      includeLab
                        ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-3xl block mb-3">🖥️</span>
                    <span className="font-bold text-koompi-primary block text-lg">
                      KOOMPI Lab
                    </span>
                    <span className="text-sm text-gray-500 block mt-1">
                      Computer lab with Ministations
                    </span>
                    <span className="text-sm font-semibold text-koompi-accent-pink block mt-2">
                      From ${MINISTATION_PRICE}/station
                    </span>
                  </button>

                  <button
                    onClick={() => setIncludeContentServer(!includeContentServer)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                      includeContentServer
                        ? 'border-koompi-accent-pink bg-koompi-accent-pink/5 pricing-card-selected'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-3xl block mb-3">📡</span>
                    <span className="font-bold text-koompi-primary block text-lg">
                      Content Server
                    </span>
                    <span className="text-sm text-gray-500 block mt-1">
                      2TB offline learning hub
                    </span>
                    <span className="text-sm font-semibold text-koompi-accent-pink block mt-2">
                      ${CONTENT_SERVER_PACKAGE_PRICE.toLocaleString()}
                    </span>
                  </button>
                </div>

                {includeLab && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Lab Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[10, 20, 30].map((size) => (
                        <button
                          key={size}
                          onClick={() => { setLabSize(size); setIsCustom(false) }}
                          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                            !isCustom && labSize === size
                              ? 'bg-koompi-primary text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {size} PCs
                        </button>
                      ))}
                      <button
                        onClick={() => setIsCustom(true)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          isCustom
                            ? 'bg-koompi-primary text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Custom
                      </button>
                    </div>
                    {isCustom && (
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={customSize}
                        onChange={(e) => setCustomSize(e.target.value)}
                        placeholder="Number of PCs"
                        className="mt-3 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                      />
                    )}
                  </div>
                )}

                <button
                  onClick={() => setIncludeSolar(!includeSolar)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all mb-4 ${
                    includeSolar
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">☀️</span>
                    <div className="flex-1">
                      <span className="font-semibold text-koompi-primary block">
                        Solar Power System
                      </span>
                      <span className="text-xs text-gray-500">
                        Custom pricing — we'll follow up with a quote
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* Step 2: Choose School */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-koompi-primary mb-6">
                  Choose a School
                </h2>

                <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setSchoolSource('existing')}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                      schoolSource === 'existing'
                        ? 'bg-koompi-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Select from List
                  </button>
                  <button
                    onClick={() => setSchoolSource('new')}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                      schoolSource === 'new'
                        ? 'bg-koompi-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Submit New School
                  </button>
                </div>

                {schoolSource === 'existing' ? (
                  <div>
                    <input
                      type="text"
                      value={schoolSearch}
                      onChange={(e) => setSchoolSearch(e.target.value)}
                      placeholder="Search schools by name or province..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50 mb-4"
                    />
                    <div className="max-h-[400px] overflow-y-auto space-y-3">
                      {filteredSchools.length === 0 ? (
                        <p className="text-gray-400 text-center py-8">
                          {schools.length === 0
                            ? 'Loading schools...'
                            : 'No schools found matching your search.'}
                        </p>
                      ) : (
                        filteredSchools.slice(0, 20).map((school) => (
                          <button
                            key={school._id}
                            onClick={() => setSelectedSchool(school)}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                              selectedSchool?._id === school._id
                                ? 'border-koompi-accent-pink bg-koompi-accent-pink/5'
                                : 'border-gray-100 hover:border-gray-200'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-semibold text-koompi-primary">
                                  {school.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {school.province}
                                  {school.district && `, ${school.district}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">
                                  {school.studentCount} students
                                </p>
                              </div>
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        School Name *
                      </label>
                      <input
                        type="text"
                        value={newSchool.name}
                        onChange={(e) =>
                          setNewSchool({ ...newSchool, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Province *
                        </label>
                        <input
                          type="text"
                          value={newSchool.province}
                          onChange={(e) =>
                            setNewSchool({ ...newSchool, province: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          District
                        </label>
                        <input
                          type="text"
                          value={newSchool.district}
                          onChange={(e) =>
                            setNewSchool({ ...newSchool, district: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        value={newSchool.contactName}
                        onChange={(e) =>
                          setNewSchool({ ...newSchool, contactName: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={newSchool.contactPhone}
                          onChange={(e) =>
                            setNewSchool({ ...newSchool, contactPhone: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={newSchool.contactEmail}
                          onChange={(e) =>
                            setNewSchool({ ...newSchool, contactEmail: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Your Information */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-koompi-primary mb-6">
                  Your Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={funderInfo.fullName}
                      onChange={(e) =>
                        setFunderInfo({ ...funderInfo, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={funderInfo.email}
                      onChange={(e) =>
                        setFunderInfo({ ...funderInfo, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={funderInfo.phone}
                        onChange={(e) =>
                          setFunderInfo({ ...funderInfo, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization (optional)
                      </label>
                      <input
                        type="text"
                        value={funderInfo.organization}
                        onChange={(e) =>
                          setFunderInfo({ ...funderInfo, organization: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      value={funderInfo.message}
                      onChange={(e) =>
                        setFunderInfo({ ...funderInfo, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-koompi-accent-pink/50"
                    />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={funderInfo.anonymous}
                      onChange={(e) =>
                        setFunderInfo({ ...funderInfo, anonymous: e.target.checked })
                      }
                      className="w-5 h-5 rounded border-gray-300 text-koompi-accent-pink focus:ring-koompi-accent-pink"
                    />
                    <span className="text-sm text-gray-600">
                      Make my donation anonymous
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Review & Pay */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-koompi-primary mb-6">
                  Review & Pay
                </h2>

                <div className="space-y-6">
                  {/* Package summary */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-700 mb-3">Package</h3>
                    <div className="space-y-2 text-sm">
                      {includeLab && (
                        <div className="flex justify-between">
                          <span>{effectiveLabSize}x KOOMPI Ministation</span>
                          <span className="font-medium">${labCost.toLocaleString()}</span>
                        </div>
                      )}
                      {includeContentServer && (
                        <div className="flex justify-between">
                          <span>Content Server Package</span>
                          <span className="font-medium">${contentServerCost.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Installation</span>
                        <span className="font-medium">${installationCost}</span>
                      </div>
                      {includeSolar && (
                        <div className="flex justify-between text-koompi-accent-pink">
                          <span>Solar Power System</span>
                          <span className="font-medium">Quote pending</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* School */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-700 mb-2">School</h3>
                    <p className="text-sm text-koompi-primary font-medium">
                      {selectedSchool?.name || newSchool.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedSchool?.province || newSchool.province}
                    </p>
                  </div>

                  {/* Funder */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-700 mb-2">Funder</h3>
                    <p className="text-sm text-koompi-primary font-medium">
                      {funderInfo.anonymous ? 'Anonymous' : funderInfo.fullName}
                    </p>
                    <p className="text-sm text-gray-500">{funderInfo.email}</p>
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-koompi-primary">
                        Total Amount
                      </span>
                      <span className="text-3xl font-black text-koompi-primary">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                    {includeSolar && (
                      <p className="text-sm text-koompi-accent-pink mt-1">
                        + Solar system (quote will be provided separately)
                      </p>
                    )}
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95">
                    Fund Now — ${total.toLocaleString()}
                  </button>

                  <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      100% goes to equipment
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Tax deductible
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Transparent tracking
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 ? (
                <button
                  onClick={() => setStep(currentStep - 1)}
                  className="px-6 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              {currentStep < 4 && (
                <button
                  onClick={() => canProceed() && setStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    canProceed()
                      ? 'bg-koompi-primary text-white hover:bg-primary-600'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-20">
              <h3 className="font-bold text-koompi-primary mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm mb-6">
                {includeLab && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Lab ({effectiveLabSize} PCs)
                    </span>
                    <span className="font-medium">${labCost.toLocaleString()}</span>
                  </div>
                )}
                {includeContentServer && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Content Server</span>
                    <span className="font-medium">
                      ${contentServerCost.toLocaleString()}
                    </span>
                  </div>
                )}
                {(includeLab || includeContentServer) && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation</span>
                    <span className="font-medium">${installationCost}</span>
                  </div>
                )}
                {includeSolar && (
                  <div className="flex justify-between text-koompi-accent-pink">
                    <span>Solar</span>
                    <span className="font-medium">TBD</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-koompi-primary">Total</span>
                  <span className="text-xl font-bold text-koompi-primary">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              {selectedSchool && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">School</p>
                  <p className="text-sm font-medium text-koompi-primary">
                    {selectedSchool.name}
                  </p>
                  <p className="text-xs text-gray-500">{selectedSchool.province}</p>
                </div>
              )}

              <div className="mt-6">
                <Link
                  to="/onelab"
                  className="text-sm text-koompi-accent-blue hover:underline"
                >
                  View full product details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-xl font-bold text-koompi-primary">
              ${total.toLocaleString()}
            </p>
          </div>
          {currentStep < 4 ? (
            <button
              onClick={() => canProceed() && setStep(currentStep + 1)}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                canProceed()
                  ? 'bg-koompi-primary text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          ) : (
            <button className="px-8 py-3 bg-gradient-to-r from-koompi-accent-pink to-pink-400 text-white rounded-xl font-semibold">
              Fund Now
            </button>
          )}
        </div>
      </div>

      <div className="pb-24 lg:pb-0" />
      <Footer />
    </div>
  )
}

export default FundSchoolPage

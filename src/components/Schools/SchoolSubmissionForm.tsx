import { useState } from 'react'

interface SchoolSubmissionFormProps {
  onClose: () => void
  onSuccess: () => void
}

const SchoolSubmissionForm = ({ onClose, onSuccess }: SchoolSubmissionFormProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    schoolName: '',
    province: '',
    district: '',
    commune: '',
    studentCount: '',
    schoolLevel: 'primary' as 'primary' | 'secondary' | 'high',
    principalName: '',
    contactPhone: '',
    contactEmail: '',
    submitterName: '',
    submitterRole: 'teacher' as 'teacher' | 'parent' | 'student' | 'community' | 'other',
    submitterContact: '',
    hasInternet: false,
    hasElectricity: false,
    currentNeeds: [] as string[],
    message: '',
  })

  const provinces = [
    'Phnom Penh', 'Siem Reap', 'Battambang', 'Preah Sihanouk', 'Pursat',
    'Kampong Cham', 'Kampong Thom', 'Kampong Speu', 'Takeo', 'Kampot',
    'Kampong Chhnang', 'Kep', 'Kratie', 'Mondulkiri', 'Ratanakiri',
    'Stung Treng', 'Preah Vihear', 'Oddar Meanchey', 'Banteay Meanchey', 'Pailin',
    'Svay Rieng', 'Prey Veng', 'Tbong Khmum', 'Kandal',
  ]

  const needOptions = [
    'Computer Lab',
    'Content Server',
    'Internet Connection',
    'Solar Power',
    'Teacher Training',
    'Furniture',
    'Other',
  ]

  const handleNeedToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      currentNeeds: prev.currentNeeds.includes(need)
        ? prev.currentNeeds.filter((n) => n !== need)
        : [...prev.currentNeeds, need],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/schools/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStep(3)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-koompi-primary">
            {step === 1 && 'School Information'}
            {step === 2 && 'Contact Details'}
            {step === 3 && 'Thank You!'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {step === 1 && (
            <form id="schoolForm" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    placeholder="Enter school name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Province *
                    </label>
                    <select
                      required
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    >
                      <option value="">Select</option>
                      {provinces.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="District name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Level *
                    </label>
                    <select
                      required
                      value={formData.schoolLevel}
                      onChange={(e) => setFormData({ ...formData, schoolLevel: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    >
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary School</option>
                      <option value="high">High School</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student Count *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      placeholder="Number of students"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What does the school need? *
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {needOptions.map((need) => (
                      <label
                        key={need}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition ${
                          formData.currentNeeds.includes(need)
                            ? 'border-koompi-primary bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.currentNeeds.includes(need)}
                          onChange={() => handleNeedToggle(need)}
                          className="w-4 h-4 text-koompi-primary rounded"
                        />
                        <span className="text-sm">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasElectricity}
                      onChange={(e) => setFormData({ ...formData, hasElectricity: e.target.checked })}
                      className="w-4 h-4 text-koompi-primary rounded"
                    />
                    <span className="text-sm text-gray-600">Has Electricity</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasInternet}
                      onChange={(e) => setFormData({ ...formData, hasInternet: e.target.checked })}
                      className="w-4 h-4 text-koompi-primary rounded"
                    />
                    <span className="text-sm text-gray-600">Has Internet</span>
                  </label>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800">
                    <strong>School Contact (for verification)</strong>
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Please provide the school principal or administrator contact
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Principal/Administrator Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.principalName}
                    onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                    placeholder="Name of principal or contact person"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      placeholder="School phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="School email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Your Information (submitter)
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.submitterName}
                        onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        I am a... *
                      </label>
                      <select
                        required
                        value={formData.submitterRole}
                        onChange={(e) => setFormData({ ...formData, submitterRole: e.target.value as any })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                      >
                        <option value="teacher">Teacher</option>
                        <option value="parent">Parent</option>
                        <option value="student">Student</option>
                        <option value="community">Community Member</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Contact *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.submitterContact}
                      onChange={(e) => setFormData({ ...formData, submitterContact: e.target.value })}
                      placeholder="Phone or email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about the school's situation..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-growth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-koompi-primary mb-2">
                Submission Received!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for helping bring digital education to Cambodia. We'll verify the
                school information and add it to our list.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                <p className="font-medium mb-2">What happens next:</p>
                <ul className="text-left space-y-1">
                  <li>• We'll verify the school with MoEYS database</li>
                  <li>• You may receive a follow-up call/email</li>
                  <li>• Verified schools appear in "Community Requests"</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== 3 && (
          <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step === 1 ? setStep(2) : handleSubmit}
              disabled={submitting}
              className="flex-1 py-3 bg-koompi-primary text-white rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : step === 1 ? (
                'Continue'
              ) : (
                'Submit School'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SchoolSubmissionForm

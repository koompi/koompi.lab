import { useState } from 'react'
import { PROVINCES } from '../../data/provinces'
import { SCHOOL_NEEDS, SCHOOL_LEVELS, SUBMITTER_ROLES, SchoolLevel, SubmitterRole } from '../../data/school-form'
import { FormInput, FormSelect, NeedCheckbox } from './FormComponents'

interface SchoolSubmissionFormProps {
  onClose: () => void
  onSuccess: () => void
}

interface SchoolFormData {
  schoolName: string
  province: string
  district: string
  commune: string
  studentCount: string
  schoolLevel: SchoolLevel
  principalName: string
  contactPhone: string
  contactEmail: string
  submitterName: string
  submitterRole: SubmitterRole
  submitterContact: string
  hasInternet: boolean
  hasElectricity: boolean
  currentNeeds: string[]
  message: string
}

const SchoolSubmissionForm = ({ onClose, onSuccess }: SchoolSubmissionFormProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<SchoolFormData>({
    schoolName: '',
    province: '',
    district: '',
    commune: '',
    studentCount: '',
    schoolLevel: 'primary',
    principalName: '',
    contactPhone: '',
    contactEmail: '',
    submitterName: '',
    submitterRole: 'teacher',
    submitterContact: '',
    hasInternet: false,
    hasElectricity: false,
    currentNeeds: [],
    message: '',
  })

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

  const updateField = <K extends keyof SchoolFormData>(field: K, value: SchoolFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <ModalHeader onClose={onClose}>
          {step === 1 && 'School Information'}
          {step === 2 && 'Contact Details'}
          {step === 3 && 'Thank You!'}
        </ModalHeader>

        {/* Body */}
        <div className="p-6">
          {step === 1 && <SchoolInfoStep formData={formData} updateField={updateField} />}
          {step === 2 && <ContactInfoStep formData={formData} updateField={updateField} />}
          {step === 3 && <SuccessStep />}
        </div>

        {/* Footer */}
        {step !== 3 && (
          <ModalFooter
            step={step}
            onBack={() => setStep(1)}
            onNext={step === 1 ? () => setStep(2) : handleSubmit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  )
}

// Sub-components
function ModalHeader({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <h2 className="text-xl font-bold text-koompi-primary">{children}</h2>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

function ModalFooter({
  step,
  onBack,
  onNext,
  submitting,
}: {
  step: 1 | 2
  onBack: () => void
  onNext: (e: React.FormEvent) => void
  submitting: boolean
}) {
  return (
    <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
      {step === 2 && (
        <button type="button" onClick={onBack} className="px-6 py-2 text-gray-600 hover:text-gray-800">
          Back
        </button>
      )}
      <button
        onClick={onNext}
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
  )
}

function SchoolInfoStep({
  formData,
  updateField,
}: {
  formData: SchoolFormData
  updateField: <K extends keyof SchoolFormData>(field: K, value: SchoolFormData[K]) => void
}) {
  return (
    <form id="schoolForm" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <FormInput
          label="School Name"
          value={formData.schoolName}
          onChange={(v) => updateField('schoolName', v)}
          placeholder="Enter school name"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <FormSelect
            label="Province"
            value={formData.province}
            onChange={(v) => updateField('province', v)}
            options={PROVINCES.map((p) => ({ value: p, label: p }))}
            placeholder="Select"
            required
          />
          <FormInput
            label="District"
            value={formData.district}
            onChange={(v) => updateField('district', v)}
            placeholder="District name"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormSelect
            label="School Level"
            value={formData.schoolLevel}
            onChange={(v) => updateField('schoolLevel', v as SchoolLevel)}
            options={SCHOOL_LEVELS.map((s) => ({ value: s.value, label: s.label }))}
            required
          />
          <FormInput
            label="Student Count"
            type="number"
            min="1"
            value={formData.studentCount}
            onChange={(v) => updateField('studentCount', v)}
            placeholder="Number of students"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What does the school need? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {SCHOOL_NEEDS.map((need) => (
              <NeedCheckbox
                key={need}
                need={need}
                checked={formData.currentNeeds.includes(need)}
                onToggle={() => {
                  const newNeeds = formData.currentNeeds.includes(need)
                    ? formData.currentNeeds.filter((n) => n !== need)
                    : [...formData.currentNeeds, need]
                  updateField('currentNeeds', newNeeds)
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasElectricity}
              onChange={(e) => updateField('hasElectricity', e.target.checked)}
              className="w-4 h-4 text-koompi-primary rounded"
            />
            <span className="text-sm text-gray-600">Has Electricity</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasInternet}
              onChange={(e) => updateField('hasInternet', e.target.checked)}
              className="w-4 h-4 text-koompi-primary rounded"
            />
            <span className="text-sm text-gray-600">Has Internet</span>
          </label>
        </div>
      </div>
    </form>
  )
}

function ContactInfoStep({
  formData,
  updateField,
}: {
  formData: SchoolFormData
  updateField: <K extends keyof SchoolFormData>(field: K, value: SchoolFormData[K]) => void
}) {
  return (
    <form id="contactForm" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800">
            <strong>School Contact (for verification)</strong>
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Please provide the school principal or administrator contact
          </p>
        </div>

        <FormInput
          label="Principal/Administrator Name"
          value={formData.principalName}
          onChange={(v) => updateField('principalName', v)}
          placeholder="Name of principal or contact person"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Phone"
            type="tel"
            value={formData.contactPhone}
            onChange={(v) => updateField('contactPhone', v)}
            placeholder="School phone"
            required
          />
          <FormInput
            label="Email (optional)"
            type="email"
            value={formData.contactEmail}
            onChange={(v) => updateField('contactEmail', v)}
            placeholder="School email"
          />
        </div>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm font-medium text-gray-700 mb-3">
            Your Information (submitter)
          </p>

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Your Name"
              value={formData.submitterName}
              onChange={(v) => updateField('submitterName', v)}
              placeholder="Your name"
              required
            />
            <FormSelect
              label="I am a..."
              value={formData.submitterRole}
              onChange={(v) => updateField('submitterRole', v as SubmitterRole)}
              options={SUBMITTER_ROLES.map((r) => ({ value: r.value, label: r.label }))}
              required
            />
          </div>

          <div className="mt-4">
            <FormInput
              label="Your Contact"
              value={formData.submitterContact}
              onChange={(v) => updateField('submitterContact', v)}
              placeholder="Phone or email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="Tell us more about the school's situation..."
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koompi-primary focus:border-transparent resize-none"
          />
        </div>
      </div>
    </form>
  )
}

function SuccessStep() {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-koompi-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
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
  )
}

export default SchoolSubmissionForm

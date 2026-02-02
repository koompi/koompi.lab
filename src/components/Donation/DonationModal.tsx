import { useState, useEffect } from 'react'
import { School } from '../../types'

interface DonationModalProps {
  school: School | null
  onClose: () => void
}

const AMOUNTS = [2500, 5000, 12000]

const DonationModal = ({ school, onClose }: DonationModalProps) => {
  const [amount, setAmount] = useState<number | string>(12000)
  const [isCustom, setIsCustom] = useState(false)
  const [step, setStep] = useState<'amount' | 'details' | 'payment'>('amount')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: '',
    anonymous: false,
  })
  const [isProcessing, setIsProcessing] = useState(false)

  // Reset state when school changes
  useEffect(() => {
    if (school) {
      setStep('amount')
      setAmount(12000)
      setIsCustom(false)
      setDonorInfo({ name: '', email: '', message: '', anonymous: false })
    }
  }, [school])

  if (!school) return null

  const getImpactMessage = () => {
    if (typeof amount === 'string') return ''

    const studentsImpacted = Math.round((amount / 12000) * school.studentCount)
    const percentage = Math.round((amount / 12000) * 100)

    if (school.status === 'none') {
      return `Your $${amount.toLocaleString()} helps bring digital education to ${studentsImpacted} students`
    }
    if (school.status === 'lab') {
      return `Your $${amount.toLocaleString()} adds offline educational content for ${studentsImpacted} students`
    }
    if (school.status === 'lab-content') {
      return `Your $${amount.toLocaleString()} helps fund solar power for ${studentsImpacted} students`
    }
    return `Your donation of $${amount.toLocaleString()} supports ${studentsImpacted} students`
  }

  const getCostBreakdown = () => {
    const costPerStudent = 12000 / school.studentCount

    return (
      <div className="bg-cream rounded-lg p-4 mt-4">
        <h4 className="font-semibold text-cambodian-blue mb-3">Your donation provides:</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-growth-green mt-0.5">✓</span>
            <span><strong>{Math.round(amount / 1200)} KOOMPI Ministations</strong> - Low-power computers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-growth-green mt-0.5">✓</span>
            <span><strong>Content Server</strong> - 2TB offline educational content</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-growth-green mt-0.5">✓</span>
            <span><strong>WiFi Network</strong> - Connects up to 150 students</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-growth-green mt-0.5">✓</span>
            <span><strong>Installation & Training</strong> - Teacher support included</span>
          </li>
        </ul>
        {school.status === 'none' && amount < 12000 && (
          <p className="text-xs text-gray-500 mt-3">
            *Partial donations will be pooled with others to fund this school
          </p>
        )}
      </div>
    )
  }

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setIsCustom(false)
  }

  const handleContinue = () => {
    if (step === 'amount') {
      setStep('details')
    } else if (step === 'details') {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsProcessing(true)

    try {
      // Create payment intent with Baray
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount.toString(),
          currency: 'USD',
          schoolId: school._id,
          schoolName: school.name,
          donorInfo,
        }),
      })

      const data = await response.json()

      if (data.intent_id) {
        // Redirect to Baray payment page
        window.location.href = `https://pay.baray.io/${data.intent_id}`
      }
    } catch (error) {
      console.error('Payment error:', error)
      setIsProcessing(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-cambodian-blue">
              {step === 'amount' ? 'Select Amount' : 'Fund ' + school.name}
            </h2>
            <p className="text-sm text-gray-500">{school.studentCount.toLocaleString()} students</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {step === 'amount' && (
            <>
              {/* Impact Summary */}
              <div className="mb-6">
                <p className="text-lg text-gray-700 font-medium mb-2">
                  🎓 {getImpactMessage()}
                </p>
                <p className="text-sm text-gray-500">
                  {school.name} • {school.province}
                </p>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {AMOUNTS.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAmountSelect(value)}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      amount === value && !isCustom
                        ? 'bg-cambodian-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${value.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Custom Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    min="100"
                    value={isCustom ? amount : ''}
                    onChange={(e) => {
                      setIsCustom(true)
                      setAmount(e.target.value)
                    }}
                    onFocus={() => setIsCustom(true)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cambodian-blue focus:border-transparent"
                  />
                </div>
              </div>

              {getCostBreakdown()}
            </>
          )}

          {step === 'details' && (
            <>
              {/* Donation Summary */}
              <div className="bg-cream rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Donation Amount</span>
                  <span className="text-2xl font-bold text-cambodian-blue">
                    ${typeof amount === 'number' ? amount.toLocaleString() : amount}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Funding {school.name} • {school.province}
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cambodian-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cambodian-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    value={donorInfo.message}
                    onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                    placeholder="Add a message of encouragement..."
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cambodian-blue focus:border-transparent resize-none"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={donorInfo.anonymous}
                    onChange={(e) => setDonorInfo({ ...donorInfo, anonymous: e.target.checked })}
                    className="w-4 h-4 text-cambodian-blue rounded focus:ring-cambodian-blue"
                  />
                  <span className="text-sm text-gray-600">Make donation anonymous</span>
                </label>
              </div>

              {/* Payment Info */}
              <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-sm">
                <span>Pay with:</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">ABA Bank</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">ACLEDA</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Wing</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
          {step === 'details' && (
            <button
              onClick={() => setStep('amount')}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition"
            >
              Back
            </button>
          )}
          <button
            onClick={handleContinue}
            disabled={isProcessing || (step === 'details' && (!donorInfo.name || !donorInfo.email))}
            className="flex-1 py-3 bg-cambodian-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : step === 'amount' ? (
              'Continue'
            ) : (
              'Proceed to Payment'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DonationModal

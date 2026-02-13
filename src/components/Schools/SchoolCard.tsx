import { School, STATUS_CONFIG } from '../../types'

interface SchoolCardProps {
  school: School
  onFund: (school: School) => void
}

const SchoolCard = ({ school, onFund }: SchoolCardProps) => {
  const config = STATUS_CONFIG[school.status]

  const getNeedsList = () => {
    if (school.status === 'none') return ['Lab', 'Content Server']
    if (school.status === 'lab') return ['Content Server', 'Solar Power']
    if (school.status === 'lab-content') return ['Solar Power']
    return []
  }

  const needs = getNeedsList()

  return (
    <div className="school-card bg-white rounded-xl overflow-hidden shadow-md">
      {/* Status Badge */}
      <div className="px-4 pt-4">
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
          <span className={`w-2 h-2 rounded-full ${config.dot} status-dot`} />
          {config.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-koompi-primary mb-1 line-clamp-1">
          {school.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          {school.province} • {school.studentCount.toLocaleString()} students
        </p>

        {/* Progress Bar or Needs */}
        {school.status === 'none' || school.fundedPercentage < 100 ? (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Funding Progress</span>
              <span className="font-medium text-koompi-primary">{school.fundedPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="progress-bar bg-gradient-to-r from-koompi-primary to-koompi-accent-persimmon h-2 rounded-full transition-all duration-1000"
                style={{ width: `${school.fundedPercentage}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-koompi-accent-persimmon text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully Equipped</span>
            </div>
          </div>
        )}

        {/* Needs */}
        {needs.length > 0 && (
          <div className="mb-4 text-sm">
            <p className="text-gray-600 mb-1">Needs:</p>
            <div className="flex flex-wrap gap-1">
              {needs.map((need) => (
                <span
                  key={need}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {need}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Fund Button */}
        <button
          onClick={() => onFund(school)}
          className="w-full py-2 px-4 bg-koompi-primary text-white rounded-lg font-medium hover:bg-blue-900 transition flex items-center justify-center gap-2"
        >
          <span>Fund</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SchoolCard

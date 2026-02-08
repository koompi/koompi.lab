import { School } from '../../types'

interface SchoolTableProps {
  schools: School[]
  onFundClick: (school: School) => void
}

const SchoolTable = ({ schools, onFundClick }: SchoolTableProps) => {
  const getStatusBadge = (school: School) => {
    if (school.status === 'full-solar') {
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">☀ Solar</span>
    }
    if (school.status === 'lab-content') {
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">●● Lab + Content</span>
    }
    if (school.status === 'lab') {
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">● Lab Only</span>
    }
    return <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">○ Needs Support</span>
  }

  const getFundingBar = (percentage: number) => (
    <div className="flex items-center gap-2">
      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-koompi-accent-pink rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 w-10">{percentage}%</span>
    </div>
  )

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              School
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Province
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Students
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Funding
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-100">
          {schools.map((school, index) => (
            <tr
              key={school._id}
              className={`hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
            >
              {/* School Name */}
              <td className="px-4 py-3">
                <div className="font-medium text-gray-900 text-sm">{school.name}</div>
              </td>

              {/* Province */}
              <td className="px-4 py-3">
                <span className="text-sm text-gray-600">{school.province}</span>
              </td>

              {/* Students */}
              <td className="px-4 py-3">
                <span className="text-sm text-gray-600">{school.studentCount?.toLocaleString() || '-'}</span>
              </td>

              {/* Status */}
              <td className="px-4 py-3">
                {getStatusBadge(school)}
              </td>

              {/* Funding */}
              <td className="px-4 py-3">
                {getFundingBar(school.fundedPercentage || 0)}
              </td>

              {/* Action */}
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onFundClick(school)}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-koompi-primary text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Fund
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Scroll hint for mobile */}
      <div className="md:hidden text-center py-2 text-xs text-gray-400">
        ← Swipe to see more →
      </div>
    </div>
  )
}

export default SchoolTable

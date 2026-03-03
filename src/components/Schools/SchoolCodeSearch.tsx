import { useState, FormEvent } from 'react'

interface SchoolCodeSearchProps {
  onSearchResult?: (found: boolean, schoolCode?: string) => void
}

const SchoolCodeSearch = ({ onSearchResult }: SchoolCodeSearchProps) => {
  const [schoolCode, setSchoolCode] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!schoolCode.trim()) {
      setError('Please enter a school code')
      return
    }

    setIsSearching(true)
    setError('')
    setNotFound(false)

    try {
      const response = await fetch(`/api/schools/code/${schoolCode.trim()}`)

      if (response.ok) {
        const school = await response.json()
        // Navigate to school details page
        window.location.href = `/schools/${schoolCode.trim()}`
      } else if (response.status === 404) {
        setNotFound(true)
        setError('')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to search. Please try again.')
    } finally {
      setIsSearching(false)
    }
  }

  const handleBrowseAll = () => {
    window.location.href = '/schools'
  }

  const handleSubmitSchool = () => {
    window.location.href = '/fund#pricing'
  }

  return (
    <section className="py-16 px-4 bg-white relative z-20">
      {/* Search Input */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-koompi-primary mb-2">
            🔍 Find Your School
          </h2>
          <p className="text-gray-600">
            Enter your school code to see what's included and how to help
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={schoolCode}
                onChange={(e) => {
                  setSchoolCode(e.target.value.toUpperCase())
                  setError('')
                  setNotFound(false)
                }}
                placeholder="Enter school code (e.g., PH-001, BT-045)"
                className={`w-full px-5 py-3 pr-12 border-2 rounded-xl text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/50'
                    : notFound
                    ? 'border-koompi-accent-pink focus:border-koompi-accent-pink/50 focus:ring-koompi-accent-pink/50'
                    : 'border-gray-300 focus:border-koompi-secondary focus:border-koompi-secondary/50'
                }`}
                disabled={isSearching}
              />
              </div>
              <button
                type="submit"
                disabled={isSearching || !schoolCode.trim()}
                className="px-6 py-3 bg-koompi-accent-pink text-white rounded-xl font-semibold hover:bg-pink-600 disabled:bg-gray-300 disabled:opacity-50 transition-colors"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
          </div>

          {/* Search icon inside input */}
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5l-7 7m0 0h-3"
            />
          </svg>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        {/* Not Found State */}
        {notFound && !error && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 font-medium mb-4">
              No school found with code: <span className="font-mono">{schoolCode}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleBrowseAll}
                className="px-4 py-2 bg-koompi-secondary text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
              >
                Browse All Schools
              </button>
              <button
                onClick={handleSubmitSchool}
                className="px-4 py-2 bg-koompi-accent-pink text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
              >
                Submit This School
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SchoolCodeSearch

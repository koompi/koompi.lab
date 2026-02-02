import { useState, useRef, ChangeEvent } from 'react'

interface School {
  _id: string
  name: string
  province: string
  district: string
  studentCount: number
  status: 'none' | 'lab' | 'lab-content' | 'full-solar'
  fundedPercentage: number
}

interface ParseResult {
  success: boolean
  summary: {
    totalRows: number
    validSchools: number
    errors: number
    warnings: number
  }
  schools: School[]
  previewTotal: number
  errors: Array<{ row: number; message: string; school?: string }>
  warnings: Array<{ row?: number; message: string; duplicates?: string[] }>
  hasMore: boolean
}

interface CSVImporterProps {
  onClose: () => void
  onImportComplete: (count: number) => void
}

const CSVImporter = ({ onClose, onImportComplete }: CSVImporterProps) => {
  const [step, setStep] = useState<'upload' | 'preview' | 'importing' | 'complete'>('upload')
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [parseResult, setParseResult] = useState<ParseResult | null>(null)
  const [importing, setImporting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      validateAndSetFile(droppedFile)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (selectedFile: File) => {
    setError(null)

    if (!selectedFile.name.endsWith('.csv') && selectedFile.type !== 'text/csv') {
      setError('Please upload a CSV file')
      return
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB')
      return
    }

    setFile(selectedFile)
  }

  const handleUpload = async () => {
    if (!file) return

    setStep('preview')
    setError(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/admin/import/csv/parse', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to parse CSV file')
        setStep('upload')
        return
      }

      setParseResult(data)
    } catch (err) {
      setError('Failed to connect to server. Please try again.')
      setStep('upload')
    }
  }

  const handleConfirmImport = async () => {
    if (!parseResult) return

    setImporting(true)
    setStep('importing')

    try {
      const response = await fetch('/api/admin/import/csv/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schools: parseResult.schools }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Import failed')
        setStep('preview')
        setImporting(false)
        return
      }

      setStep('complete')
      onImportComplete(data.imported)
    } catch (err) {
      setError('Failed to import schools. Please try again.')
      setStep('preview')
      setImporting(false)
    }
  }

  const downloadTemplate = async () => {
    try {
      const response = await fetch('/api/admin/import/csv/template')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'moeys_schools_template.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Failed to download template:', err)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      'none': { label: 'Awaiting Support', color: 'bg-gray-100 text-gray-600' },
      'lab': { label: 'Lab Only', color: 'bg-blue-100 text-blue-600' },
      'lab-content': { label: 'Lab + Content', color: 'bg-purple-100 text-purple-600' },
      'full-solar': { label: 'Full Solar', color: 'bg-green-100 text-green-600' },
    }
    const badge = badges[status as keyof typeof badges] || badges['none']
    return <span className={`px-2 py-0.5 rounded text-xs ${badge.color}`}>{badge.label}</span>
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-cambodian-blue">
              {step === 'upload' && 'Import Schools from CSV'}
              {step === 'preview' && 'Review Import Data'}
              {step === 'importing' && 'Importing Schools...'}
              {step === 'complete' && 'Import Complete'}
            </h2>
            <p className="text-sm text-gray-500">
              {step === 'upload' && 'Import schools from the Ministry of Education database'}
              {step === 'preview' && `${parseResult?.summary.validSchools} schools ready to import`}
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={step === 'importing'}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {step === 'upload' && (
            <div>
              {/* Download Template */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-800">First time importing?</h3>
                    <p className="text-sm text-blue-600">Download our CSV template to see the required format</p>
                  </div>
                  <button
                    onClick={downloadTemplate}
                    className="px-4 py-2 bg-cambodian-blue text-white rounded-lg text-sm font-medium hover:bg-blue-900 transition"
                  >
                    Download Template
                  </button>
                </div>
              </div>

              {/* Upload Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-12 text-center transition ${
                  dragActive
                    ? 'border-cambodian-blue bg-blue-50'
                    : 'border-gray-300 hover:border-cambodian-blue'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,text/csv"
                  onChange={handleChange}
                  className="hidden"
                />
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {dragActive ? 'Drop your CSV file here' : 'Drag and drop your CSV file'}
                </p>
                <p className="text-sm text-gray-500 mb-4">or</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-2 bg-cambodian-blue text-white rounded-lg font-medium hover:bg-blue-900 transition"
                >
                  Browse Files
                </button>
                <p className="text-xs text-gray-400 mt-4">Maximum file size: 10MB</p>
              </div>

              {/* File Info */}
              {file && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-cambodian-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-700">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Column Requirements */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Required Columns:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-growth-green">✓</span> School Name
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-growth-green">✓</span> Province
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">○</span> District
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">○</span> Student Count
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Optional: Has Lab, Has Content Server, Has Solar Power, Status
                </p>
              </div>
            </div>
          )}

          {step === 'preview' && parseResult && (
            <div>
              {/* Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-growth-green">{parseResult.summary.validSchools}</p>
                  <p className="text-sm text-green-700">Valid Schools</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-cambodian-blue">{parseResult.summary.totalRows}</p>
                  <p className="text-sm text-blue-700">Total Rows</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-500">{parseResult.summary.errors}</p>
                  <p className="text-sm text-red-700">Errors</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-600">{parseResult.summary.warnings}</p>
                  <p className="text-sm text-yellow-700">Warnings</p>
                </div>
              </div>

              {/* Errors */}
              {parseResult.errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Errors Found:</h4>
                  <div className="max-h-32 overflow-y-auto text-sm text-red-600 space-y-1">
                    {parseResult.errors.map((err, i) => (
                      <p key={i}>
                        Row {err.row}: {err.message}
                        {err.school && ` (${err.school})`}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Warnings */}
              {parseResult.warnings.length > 0 && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Warnings:</h4>
                  <div className="max-h-32 overflow-y-auto text-sm text-yellow-600 space-y-1">
                    {parseResult.warnings.map((warn, i) => (
                      <p key={i}>
                        {warn.row && `Row ${warn.row}: `}{warn.message}
                        {warn.duplicates && (
                          <span className="ml-2 text-xs">(Duplicates: {warn.duplicates.join(', ')})</span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                  <h4 className="font-semibold text-gray-700">
                    Preview {parseResult.schools.length} of {parseResult.previewTotal} schools
                  </h4>
                  {parseResult.hasMore && (
                    <span className="text-sm text-gray-500">First 100 shown</span>
                  )}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">School Name</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">Province</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-600">District</th>
                        <th className="px-4 py-2 text-right font-medium text-gray-600">Students</th>
                        <th className="px-4 py-2 text-center font-medium text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {parseResult.schools.map((school) => (
                        <tr key={school._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 font-medium text-gray-800">{school.name}</td>
                          <td className="px-4 py-2 text-gray-600">{school.province}</td>
                          <td className="px-4 py-2 text-gray-600">{school.district || '-'}</td>
                          <td className="px-4 py-2 text-right text-gray-600">{school.studentCount.toLocaleString()}</td>
                          <td className="px-4 py-2 text-center">{getStatusBadge(school.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {step === 'importing' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-cambodian-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700">Importing schools...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a moment for large files</p>
            </div>
          )}

          {step === 'complete' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-growth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cambodian-blue mb-2">
                Import Complete!
              </h3>
              <p className="text-gray-600">
                {parseResult?.summary.validSchools} schools have been added to the database.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 'upload' && (
          <div className="flex gap-3 p-6 border-t bg-gray-50">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={!file}
              className="flex-1 py-3 bg-cambodian-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Parse CSV
            </button>
          </div>
        )}

        {step === 'preview' && (
          <div className="flex gap-3 p-6 border-t bg-gray-50">
            <button
              onClick={() => setStep('upload')}
              className="px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
            <button
              onClick={handleConfirmImport}
              disabled={parseResult?.summary.validSchools === 0}
              className="flex-1 py-3 bg-growth-green text-white rounded-lg font-semibold hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Import {parseResult?.summary.validSchools} Schools
            </button>
          </div>
        )}

        {step === 'complete' && (
          <div className="flex gap-3 p-6 border-t bg-gray-50">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-cambodian-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CSVImporter

export type SchoolStatus = 'none' | 'lab' | 'lab-content' | 'full-solar'

export interface School {
  _id: string
  id?: string // Alternative ID from CSV
  name: string // Primary school name (English or Khmer)
  nameKh?: string // Khmer name (use this for Khmer language display)
  nameEn?: string // English name (use this if primary name is Khmer)
  province: string
  provinceKh?: string // Khmer province name
  district: string
  districtKh?: string
  schoolType?: string
  studentCount: number
  status: SchoolStatus
  fundedPercentage: number
  images?: string[]
  establishedAt?: string
  source?: string // 'moeys' | 'community' | 'csv'
  verificationStatus?: 'pending' | 'verified' | 'rejected'
}

export interface Donation {
  _id: string
  schoolId: string
  amount: number
  donorName: string
  donorEmail: string
  donorType: 'individual' | 'organization'
  message?: string
  anonymous: boolean
  paymentId: string
  createdAt: string
}

export interface ImpactStats {
  totalDonors: number
  totalSchools: number
  totalStudents: number
  totalAmount: number
  // Extended fields from API
  totalSchoolsInCambodia?: number
  prioritySchoolsTarget?: number
  schoolsEquipped?: number
  studentsReached?: number
  remainingToEquip?: number
}

export interface BarayIntent {
  _id: string
  org_id: string
  order_id: string
  amount: string
  currency: string
  target: string
  tracking: Record<string, unknown>
  created_at: string
}

export interface Province {
  name: string
  nameKh: string
  schoolCount: number
  fundedCount: number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface LabConfig {
  numStations: number
  includeContentServer: boolean
  includeSolar: boolean
  location: 'phnom-penh' | 'province'
  numStudents?: number
}

export const STATUS_CONFIG = {
  none: {
    label: 'Awaiting Support',
    color: 'bg-gray-100 text-gray-600',
    dot: 'bg-gray-400',
    icon: '○',
  },
  lab: {
    label: 'Lab Only',
    color: 'bg-blue-100 text-blue-600',
    dot: 'bg-blue-500',
    icon: '●',
  },
  'lab-content': {
    label: 'Lab + Content Server',
    color: 'bg-purple-100 text-purple-600',
    dot: 'bg-purple-500',
    icon: '●●',
  },
  'full-solar': {
    label: 'Full Solar Powered',
    color: 'bg-green-100 text-green-600',
    dot: 'bg-green-500',
    icon: '☀',
  },
} as const

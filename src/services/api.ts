import { ImpactStats } from '../types'

export type { ImpactStats }

const API_BASE = (import.meta.env as { VITE_API_URL?: string }).VITE_API_URL || 'http://localhost:3001/api'

// Fallback data if API fails
// Source: MOEYS Cambodia 2024 report via World Bank
// - 4,651 government kindergartens
// - 7,348 government primary schools
// - 1,244 government lower secondary schools
// - 575 government high schools
// Total: 13,818 government schools (plus ~1,200 private schools = ~15,000 total)
export const FALLBACK_STATS: ImpactStats = {
  totalSchools: 636,
  totalStudents: 120000,
  totalDonors: 142,
  totalAmount: 780000,
  totalSchoolsInCambodia: 13818, // Government schools only (MOEYS 2024)
  prioritySchoolsTarget: 1743,
  schoolsEquipped: 65,
  studentsReached: 12000,
  remainingToEquip: 1678,
}

export async function fetchImpactStats(): Promise<ImpactStats> {
  try {
    const response = await fetch(`${API_BASE}/stats/impact`)
    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to fetch impact stats from API, using fallback:', error)
    return FALLBACK_STATS
  }
}

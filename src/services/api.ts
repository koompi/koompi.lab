import { ImpactStats } from '../types'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Fallback data if API fails
export const FALLBACK_STATS: ImpactStats = {
  totalSchoolsInCambodia: 14522,
  prioritySchoolsTarget: 1743,
  totalDonors: 142,
  schoolsEquipped: 65,
  studentsReached: 12000,
  totalAmount: 780000,
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

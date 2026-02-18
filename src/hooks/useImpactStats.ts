import { useState, useEffect } from 'react'
import { fetchImpactStats, FALLBACK_STATS, type ImpactStats } from '../services/api'

export function useImpactStats() {
  const [stats, setStats] = useState<ImpactStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await fetchImpactStats()
        setStats(data)
        setError(null)
      } catch (err) {
        console.error('Failed to load stats:', err)
        setStats(FALLBACK_STATS)
        setError('Using fallback data')
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  return { stats, loading, error }
}

export interface SchoolNeed {
  id: string
  label: string
  icon: string
}

export const SCHOOL_NEEDS: SchoolNeed[] = [
  { id: 'computers', label: 'Computers', icon: '💻' },
  { id: 'tables', label: 'Tables & Chairs', icon: '🪑' },
  { id: 'internet', label: 'Internet Connection', icon: '🌐' },
  { id: 'teacher-training', label: 'Teacher Training', icon: '👨‍🏫' },
  { id: 'content', label: 'Educational Content', icon: '📚' },
  { id: 'power', label: 'Electricity/Solar', icon: '⚡' },
  { id: 'maintenance', label: 'Maintenance Support', icon: '🔧' },
]

export const FORM_Districts = [
  'Select District',
  'Angkor Thom',
  'Banteay Srei',
  'Kralanh',
  'Puok',
  'Siem Reap',
  'Sotr Nikum',
  'Prasat Bakong',
]

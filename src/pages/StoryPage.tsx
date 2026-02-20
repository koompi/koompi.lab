import { useState, useEffect } from 'react'
import { IMPACT_STATS } from '../data/products'
import { Link } from 'react-router-dom'

// Render simple markdown: **bold** and • bullet lines
const renderMarkdown = (text: string) => {
  const lines = text.trim().split('\n')
  return lines.map((line, i) => {
    const trimmed = line.trim()
    if (!trimmed) return <br key={i} />

    const parts = trimmed.split(/(\*\*[^*]+\*\*)/)
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j}>{part.slice(2, -2)}</strong>
      }
      return part
    })

    if (trimmed.startsWith('•')) {
      return (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-koompi-accent-pink mt-0.5 flex-shrink-0">•</span>
          <span>{rendered.map((p, j) => typeof p === 'string' ? p.replace(/^•\s*/, '') : p)}</span>
        </div>
      )
    }

    return <p key={i}>{rendered}</p>
  })
}

const stories = [
  {
    id: 1,
    year: '2026',
    title: 'Digital Classrooms for Displaced Students',
    excerpt: 'MoEYS and KOOMPI bring digital education to 757 displaced students in Thma Puok district affected by border conflicts.',
    province: 'Thma Puok, Banteay Meanchey',
    image: '/images/products/displaced-classroom.jpg',
    date: 'January 2026',
    category: 'Digital Education',
    students: 757,
    content: `
      On January 8, 2026, the Ministry of Education, Youth and Sport (MoEYS), through its Digital Transformation Department, partnered with KOOMPI to install digital equipment for displaced students in Thma Puok district, Banteay Meanchey province. Funded by ISI Group and KMH Foundation.

      "This mission responds to the urgent need to ensure that learning for displaced students affected by the border conflict continues without disruption," the ministry stated.

      **Equipment Deployed:**

      • Offline Content Server with Local Wi-Fi Hotspot - Access to 3,000+ books and educational videos without internet

      • 11 KOOMPI computers per classroom - 1 for teachers, 10 for students

      • 15kWh solar power system - Sustainable electricity for all devices

      **Impact:**

      • 20 teachers trained on device usage and content access

      • 757 students, guardians, and nearby residents now have digital access

      • Quality education continues despite temporary circumstances

      According to MoEYS, as of January 2026, more than 800 schools have reopened in five provinces, while 113 schools in Oddar Meanchey, Banteay Meanchey, Pursat, and Preah Vihear remain closed due to damage and unexploded ordnance. About 161,472 displaced people remain in camps, including 52,674 children.
    `,
  },
  {
    id: 2,
    year: '2024',
    title: 'Local Content Server Reaches 10 Schools',
    excerpt: 'KOOMPI completes installation of Local Content Server in 10 schools across 10 provinces, bringing offline education to thousands.',
    province: '10 Provinces',
    image: '/images/products/content-server-10schools.jpg',
    date: 'February 2024',
    category: 'Content Server',
    students: 5000,
    content: `
      As of February 2, installation of the Local Content Server for the SalaDigital Offline project has been successfully completed in 10 schools across 10 provinces.

      **10 Schools Equipped:**

      1. Hun Sen Phnom Penh
      2. Hun Sen Takeo
      3. Hun Sen Battambong
      4. Hun Sen Banteay Meanchey
      5. Hun Sen Tbong Khmom
      6. Hun Sen Kampong Som
      7. Hun Sen Kampong Cham
      8. Hun Sen 28 Makara
      9. Hun Sen Prek Toe
      10. Hun Sen Prek Toe
      `,
  },
  {
    id: 3,
    year: '2024',
    title: 'Prek Leap High School Digital Deployment',
    excerpt: 'KOOMPI deploys 36 Ministation and 45 Mini PCs to empower students and teachers for seamless digital learning.',
    province: 'Prek Leap, Phnom Penh',
    image: '/images/products/prek-leap-1.jpg',
    date: '2024',
    category: 'School Deployment',
    students: 2000,
    content: `
      KOOMPI visited Prek Leap High School to deploy and install 36 sets of KOOMPI Ministation and 45 sets of KOOMPI Mini. This initiative allows both students and teachers to engage in researching, learning, and task completion more seamlessly.

      **Equipment Deployed:**

      • 36 KOOMPI Ministation sets - Complete computer lab stations
      • 45 KOOMPI Mini PCs - Compact power for classrooms

      • Support from KAPE NGO - Partnership for educational development

      **Impact:**

      • Research and learn with modern digital tools
      • Complete tasks more efficiently
      • Access educational resources seamlessly
      • This deployment represents KOOMPI's commitment to transforming education across Cambodia, one school at a time.
    `,
  },
]

const milestones = [
  {
    year: '2030',
    title: 'Goal: Every School',
    description: 'A shared vision for 13,000+ public schools equipped with digital education',
    type: 'goal' as const,
  },
  {
    year: '2025',
    title: 'First Solar Lab',
    description: 'Milestone: First fully solar-powered lab in Mondulkiri province',
    type: 'milestone' as const,
    image: '/images/products/solar-in-school.jpg',
  },
  {
    year: '2024',
    title: '65 Schools Reached',
    description: 'Expanded to 65 schools with 12,000 students learning daily across Cambodia',
    type: 'milestone' as const,
    image: '/images/products/onelab-class.jpg',
    stats: { schools: '65', students: '12,000+', provinces: '24' },
  },
  {
    year: '2023',
    title: 'Content Server Launch',
    description: 'Introduced offline digital library for schools without internet. 2TB of STEM videos, Wiki Khmer, and educational content.',
    type: 'milestone' as const,
    image: '/images/products/content-server-device.png',
    stats: { storage: '2TB', content: '3000+ Books', offline: 'No Internet Needed' },
  },
  {
    year: '2022',
    title: 'First Lab Deployed',
    description: 'Pilot program equipped 5 schools with computer labs. KOOMPI Onelab brings modern ICT education to Cambodian schools.',
    type: 'milestone' as const,
    image: '/images/products/onelab-lab.jpg',
    stats: { labs: '5', pcs: '120+', students: '1,500+' },
  },
  {
    year: '2021',
    title: 'KOOMPI Mini Launch',
    description: 'Compact power for any workspace. Mini PC with Intel Alder Lake N95, 8GB RAM, perfect for computer labs and home offices.',
    type: 'product' as const,
    product: {
      name: 'KOOMPI Mini',
      tagline: 'Compact Power',
      price: '$279',
      image: '/images/products/koompi-mini.png',
      specs: {
        screen: '13.3" IPS Full HD',
        processor: 'Intel Alder Lake N95',
        ram: '8GB DDR4',
        storage: '128GB SSD + Slot',
        size: '130x130x45.5mm',
        os: 'KOOMPI OS',
        ports: '2x HDMI, 4x USB',
      },
    },
  },
  {
    year: '2020',
    title: 'KOOMPI E11 Launch',
    description: "Compact 11.6\" notebook with 128GB eMMC, 4GB RAM, Intel Dual-Core 2.40GHz. Budget-friendly option for students.",
    type: 'product' as const,
    product: {
      name: 'KOOMPI E11',
      tagline: 'Budget-Friendly',
      price: '$299',
      image: '/images/products/koompi-e13.png',
      specs: {
        screen: '11.6" HD',
        processor: 'Intel Dual-Core 2.40GHz',
        ram: '4GB DDR4',
        storage: '128GB eMMC + SSD slot',
        battery: 'Up to 8 hours',
        weight: '1.1kg',
      },
    },
  },
  {
    year: '2018',
    title: 'KOOMPI E13 Launch',
    description: "The classic 13.3\" laptop with 8GB RAM, SSD storage, and slim design. Cambodia's first locally designed laptop brand.",
    type: 'product' as const,
    product: {
      name: 'KOOMPI E13',
      tagline: 'The Classic Choice',
      price: '$369',
      image: '/images/products/koompi-e13.png',
      specs: {
        screen: '13.3" IPS Full HD',
        processor: 'Intel Celeron N4100',
        ram: '8GB DDR4',
        storage: '128/256GB M.2 SSD',
        battery: 'Up to 10 hours',
        weight: '1.3kg',
      },
    },
  },
]

type Milestone = typeof milestones[0]

const dotStyle = (type: Milestone['type']) => {
  if (type === 'goal') return 'bg-gradient-to-br from-koompi-accent-pink to-pink-400'
  if (type === 'product') return 'bg-gradient-to-br from-koompi-secondary to-koompi-primary'
  return 'bg-koompi-primary'
}

const MilestoneCard = ({ milestone }: { milestone: Milestone }) => {
  if (milestone.type === 'goal') {
    return (
      <div className="border-2 border-dashed border-koompi-accent-pink/40 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6">
        <span className="inline-block px-2.5 py-1 bg-koompi-accent-pink/10 text-koompi-accent-pink text-xs font-semibold rounded-full mb-3">
          Future Goal
        </span>
        <h3 className="text-xl font-bold text-koompi-primary mb-2">{milestone.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
      </div>
    )
  }

  if (milestone.type === 'product') {
    const p = milestone.product!
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 pt-6 pb-4">
          <span className="inline-block px-2.5 py-1 bg-koompi-secondary/10 text-koompi-secondary text-xs font-semibold rounded-full mb-3">
            Product Launch
          </span>
          <h3 className="text-xl font-bold text-koompi-primary mb-1">{milestone.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
        </div>
        <div className="mx-6 mb-6 rounded-xl bg-cream overflow-hidden">
          <div className="flex items-center gap-5 p-5 border-b border-gray-100">
            <img
              src={p.image}
              alt={p.name}
              className="w-20 h-16 object-contain flex-shrink-0"
            />
            <div>
              <p className="font-bold text-koompi-primary text-lg">{p.name}</p>
              <p className="text-koompi-accent-pink text-sm">{p.tagline}</p>
              <p className="text-2xl font-black text-koompi-primary mt-1">{p.price}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 p-5">
            {Object.entries(p.specs).map(([key, val]) => (
              <div key={key} className="flex gap-2 items-baseline">
                <span className="text-gray-400 text-[10px] uppercase font-semibold tracking-wide w-14 flex-shrink-0">{key}</span>
                <span className="text-gray-700 text-xs font-medium">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // milestone type
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <span className="inline-block px-2.5 py-1 bg-koompi-primary/8 text-koompi-primary text-xs font-semibold rounded-full mb-3 bg-koompi-primary/10">
          Milestone
        </span>
        <h3 className="text-xl font-bold text-koompi-primary mb-2">{milestone.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
      </div>
      {milestone.image && (
        <div className="px-6">
          <img
            src={milestone.image}
            alt={milestone.title}
            className="w-full h-44 object-cover rounded-xl"
          />
        </div>
      )}
      {milestone.stats && (
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 mt-4">
          {Object.entries(milestone.stats).map(([key, value]) => (
            <div key={key} className="py-4 text-center">
              <p className="text-lg font-bold text-koompi-accent-pink">{value}</p>
              <p className="text-xs text-gray-400 capitalize mt-0.5">{key}</p>
            </div>
          ))}
        </div>
      )}
      {!milestone.stats && <div className="pb-2" />}
    </div>
  )
}

const StoryPage = () => {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null)
  const [activeYear, setActiveYear] = useState<string | null>(null)

  // Scroll to milestone when hash changes
  useEffect(() => {
    const hash = window.location.hash.slice(1) // Remove the #
    const targetYear = hash || '2018' // Default to 2018 if no hash

    setActiveYear(targetYear)
    const element = document.getElementById(targetYear)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  // Handle hash change from browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setActiveYear(hash)
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        setActiveYear(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleMilestoneClick = (year: string) => {
    window.location.hash = year
    setActiveYear(year)
  }

  const scrollToTimeline = () => {
    window.location.hash = ''
    setActiveYear(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white pt-32 pb-20 min-h-[580px] flex items-end">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-koompi-primary/80 backdrop-blur-[8px]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-5">
              Impact Stories
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              Stories of <span className="text-koompi-accent-pink">Change</span>
            </h1>
            <p className="text-lg text-white/70">
              Real stories from schools, teachers, and donors making digital education accessible across Cambodia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: String(IMPACT_STATS.labsInstalled), label: 'Schools Equipped' },
              { value: `${(IMPACT_STATS.studentsImpacted / 1000).toFixed(0)}K`, label: 'Students' },
              { value: String(IMPACT_STATS.provincesReached), label: 'Provinces' },
              { value: `${IMPACT_STATS.teachersTrained}+`, label: 'Teachers Trained' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-5">
                <p className="text-3xl font-black text-koompi-accent-pink">{s.value}</p>
                <p className="text-sm text-white/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Stories ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-koompi-secondary/10 text-koompi-secondary rounded-full text-sm font-semibold mb-4">
              From the Field
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-koompi-primary mb-4">Featured Stories</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Real stories from the schools, teachers, and donors making change happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleMilestoneClick(story.year)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-koompi-accent-pink uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-400">{story.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-koompi-primary mb-2 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{story.province}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-koompi-accent-pink">
                        {story.students.toLocaleString()} students
                      </span>
                      <span className="text-xs text-koompi-secondary font-medium">→ {story.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-semibold mb-4">
              Since 2018
            </span>
            <h2 className="text-4xl font-black text-koompi-primary mb-4">Our Journey</h2>
            <p className="text-gray-500 max-w-md mx-auto text-base leading-relaxed">
              From Cambodia's first laptop brand to transforming digital education across the country.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Desktop vertical spine */}
            <div
              className="hidden md:block absolute top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
              style={{
                left: '50%',
                background: 'linear-gradient(to bottom, #F16179 0%, #38A7C8 50%, #e5e7eb 100%)',
              }}
            />

            <div className="space-y-0">
              {milestones.map((milestone, index) => {
                const cardOnRight = index % 2 === 0
                const isActive = activeYear === milestone.year

                return (
                  <div key={milestone.year} id={milestone.year} className="scroll-mt-32">

                    {/* ── Desktop layout ── */}
                    <div className={`hidden md:grid grid-cols-[1fr_80px_1fr] items-start py-8 transition-all duration-500 ${isActive ? 'bg-koompi-accent-pink/5 -mx-8 px-8 rounded-3xl' : ''}`}>

                      {/* Left slot */}
                      <div className="pr-10 flex justify-end">
                        {!cardOnRight && <MilestoneCard milestone={milestone} />}
                      </div>

                      {/* Center: year badge */}
                      <div className="flex flex-col items-center pt-1">
                        <button
                          onClick={() => handleMilestoneClick(milestone.year)}
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-[11px] tracking-tight shadow-lg z-10 relative transition-all duration-300 hover:scale-110 cursor-pointer ${dotStyle(milestone.type)} ${isActive ? 'ring-4 ring-koompi-accent-pink/30 scale-110' : ''}`}
                        >
                          {milestone.year}
                        </button>
                        {isActive && (
                          <button
                            onClick={scrollToTimeline}
                            className="mt-3 text-xs text-koompi-accent-pink font-medium hover:underline flex items-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Top
                          </button>
                        )}
                      </div>

                      {/* Right slot */}
                      <div className="pl-10">
                        {cardOnRight && <MilestoneCard milestone={milestone} />}
                      </div>
                    </div>

                    {/* ── Mobile layout ── */}
                    <div className={`md:hidden flex gap-5 pb-10 transition-all duration-500 ${isActive ? 'bg-koompi-accent-pink/5 -mx-4 px-4 py-4 rounded-2xl' : ''}`}>
                      {/* Left: dot + connecting line */}
                      <div className="flex flex-col items-center flex-shrink-0 w-10">
                        <button
                          onClick={() => handleMilestoneClick(milestone.year)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[9px] tracking-tight shadow-md z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 ${dotStyle(milestone.type)} ${isActive ? 'ring-3 ring-koompi-accent-pink/30 scale-105' : ''}`}
                        >
                          {milestone.year.slice(2)}
                        </button>
                        {index < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-gray-200 mt-2" />
                        )}
                        {isActive && (
                          <button
                            onClick={scrollToTimeline}
                            className="mt-2 text-koompi-accent-pink"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Right: card */}
                      <div className="flex-1 min-w-0 pt-1">
                        <MilestoneCard milestone={milestone} />
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ── Story Modal ──────────────────────────────────────────────────── */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-koompi-accent-pink/10 text-koompi-accent-pink rounded-full text-sm font-semibold">
                  {selectedStory.category}
                </span>
                <span className="text-sm text-gray-400">{selectedStory.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-koompi-primary mb-5 leading-snug">
                {selectedStory.title}
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                {renderMarkdown(selectedStory.content)}
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="mt-8 w-full py-3 bg-koompi-primary text-white rounded-xl font-semibold hover:bg-koompi-primary/80 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default StoryPage

import Footer from '../components/Shared/Footer'
import { useState } from 'react'

// Story data
const stories = [
  {
    id: 1,
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

// Timeline with E13, E11, Mini milestones
const milestones = [
  {
    year: '2030',
    title: 'Goal: Every School',
    description: 'A shared vision for 13,000+ public schools equipped with digital education',
    type: 'goal',
  },
  {
    year: '2025',
    title: 'First Solar Lab',
    description: 'Milestone: First fully solar-powered lab in Mondulkiri province',
    type: 'milestone',
    image: '/images/products/solar-in-school.jpg',
  },
  {
    year: '2024',
    title: '65 Schools Reached',
    description: 'Expanded to 65 schools with 12,000 students learning daily across Cambodia',
    type: 'milestone',
    image: '/images/products/onelab-class.jpg',
    stats: { schools: '65', students: '12,000+', provinces: '24' },
  },
  {
    year: '2023',
    title: 'Content Server Launch',
    description: 'Introduced offline digital library for schools without internet. 2TB of STEM videos, Wiki Khmer, and educational content.',
    type: 'milestone',
    image: '/images/products/content-server-device.png',
    stats: { storage: '2TB', content: '3000+ Books', offline: 'No Internet Needed' },
  },
  {
    year: '2022',
    title: 'First Lab Deployed',
    description: 'Pilot program equipped 5 schools with computer labs. KOOMPI Onelab brings modern ICT education to Cambodian schools.',
    type: 'milestone',
    image: '/images/products/onelab-lab.jpg',
    stats: { labs: '5', pcs: '120+', students: '1,500+' },
  },
  {
    year: '2021',
    title: 'KOOMPI Mini Launch',
    description: 'Compact power for any workspace. Mini PC with Intel Alder Lake N95, 8GB RAM, perfect for computer labs and home offices.',
    type: 'product',
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
    title: 'KOOMPI E13 Launch',
    description: 'The classic 13.3" laptop with 8GB RAM, SSD storage, and slim design. Cambodia\'s first locally designed laptop brand.',
    type: 'product',
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

const StoryPage = () => {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null)

  return (
    <div className="min-h-screen bg-cream scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 pt-32 min-h-[600px]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Video-bg-hero-sec.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay with blur */}
        <div className="absolute inset-0 bg-koompi-primary/80 backdrop-blur-[8px]" />

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stories of <span className="text-koompi-accent-persimmon">Change</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real stories from schools, teachers, and donors making digital education accessible across Cambodia.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-koompi-accent-persimmon">65</p>
              <p className="text-gray-300">Schools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-koompi-accent-persimmon">12K</p>
              <p className="text-gray-300">Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-koompi-accent-persimmon">24</p>
              <p className="text-gray-300">Provinces</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-koompi-accent-persimmon">100+</p>
              <p className="text-gray-300">Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Reversed: 2018 at bottom, 2030 at top - with E11/E13 products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-koompi-primary text-center mb-4">
            Our Journey
          </h2>
          <p className="text-gray-500 text-center mb-12">
            From Cambodia's first laptop brand to transforming education across the country.
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block" />

            {/* Timeline items - mapped in order (2030 first/top, 2018 last/bottom) */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1" />
                  <div
                    className={`hidden md:flex w-12 h-12 text-white rounded-full items-center justify-center font-bold z-10 shadow-lg ${
                      milestone.type === 'product'
                        ? 'bg-gradient-to-br from-koompi-accent-persimmon to-koompi-primary w-16'
                        : 'bg-koompi-primary'
                    }`}
                  >
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 p-6 bg-cream rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-koompi-accent-persimmon font-semibold">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-koompi-primary mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>

                    {/* Milestone image and stats */}
                    {milestone.image && !milestone.product && (
                      <div className="mt-4">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        {milestone.stats && (
                          <div className="grid grid-cols-3 gap-2 mt-3">
                            {Object.entries(milestone.stats).map(([key, value]) => (
                              <div key={key} className="bg-white rounded-lg p-2 text-center">
                                <p className="text-lg font-bold text-koompi-accent-persimmon">{value}</p>
                                <p className="text-xs text-gray-500 capitalize">{key}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Product card for E11/E13 */}
                    {milestone.product && (
                      <div className="mt-4 bg-white rounded-xl p-4 border-2 border-gray-100">
                        <div className="flex items-start gap-4">
                          <img
                            src={milestone.product.image}
                            alt={milestone.product.name}
                            className="w-24 h-16 object-contain rounded-lg flex-shrink-0 bg-gray-50 p-2"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-koompi-primary">{milestone.product.name}</h4>
                                <p className="text-sm text-koompi-accent-persimmon">{milestone.product.tagline}</p>
                              </div>
                              <span className="text-lg font-bold text-koompi-primary">{milestone.product.price}</span>
                          </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                            <div>
                              <p className="text-gray-400">{milestone.product.specs.screen || milestone.product.specs.size || '-'}</p>
                              <p className="text-gray-400">{milestone.product.specs.processor}</p>
                              <p className="text-gray-400">{milestone.product.specs.ram}</p>
                              <p className="text-gray-400">{milestone.product.specs.storage}</p>
                              <p className="text-gray-400">{milestone.product.specs.weight || milestone.product.specs.os || '-'}</p>
                              <p className="text-gray-400">{milestone.product.specs.battery || milestone.product.specs.ports || '-'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary text-center mb-4">
            Featured Stories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real stories from the schools, teachers, and donors making change happen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-koompi-accent-persimmon uppercase tracking-wide">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold text-koompi-primary mt-2 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{story.province}</span>
                    <span className="text-koompi-accent-yellow font-bold">
                      {story.students.toLocaleString()} students
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-koompi-accent-persimmon/20 text-koompi-accent-persimmon rounded-full text-sm font-medium">
                  {selectedStory.category}
                </span>
                <span className="text-gray-500">{selectedStory.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-koompi-primary mb-4">
                {selectedStory.title}
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 whitespace-pre-line">
                {selectedStory.content}
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="mt-6 w-full py-3 bg-koompi-primary text-white rounded-lg font-semibold hover:bg-blue-900 transition"
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

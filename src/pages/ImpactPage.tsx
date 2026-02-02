import Footer from '../components/Shared/Footer'
import { useState } from 'react'

// Impact stories data
const impactStories = [
  {
    id: 1,
    title: 'First Solar-Powered Lab in Remote Cambodia',
    excerpt: 'How one rural school became the first fully solar-powered digital learning center in the province.',
    province: 'Mondulkiri',
    image: '/images/impact-solar.jpg',
    date: 'January 2025',
    category: 'Solar Power',
    students: 350,
    content: `
      In a historic moment for digital education in Cambodia, KOOMPI celebrated the installation
      of the country's first fully solar-powered computer lab in a remote Mondulkiri province school.

      The lab, featuring 10 KOOMPI Ministations, a Content Server with 2TB of educational materials,
      and a robust solar power system, now serves 350 students who previously had no access to
      digital learning resources.

      "This is just the beginning," said the school principal. "Our students can now access
      world-class educational content without relying on grid electricity or internet connectivity."
    `,
  },
  {
    id: 2,
    title: 'Connecting 40 Schools with Offline Content',
    excerpt: 'The Content Server project reaches a milestone: 40 schools now equipped with offline digital libraries.',
    province: 'Multiple Provinces',
    image: '/images/impact-content.jpg',
    date: 'December 2024',
    category: 'Content Server',
    students: 24000,
    content: `
      In just six months, KOOMPI has deployed Content Servers to 40 schools across Cambodia,
      bringing offline educational access to over 24,000 students.

      Each Content Server contains 2TB of curated educational content, including Khan Academy
      videos, Wikipedia offline, interactive learning apps, and Cambodian curriculum materials.

      "The Content Server transforms our school," said one teacher. "Students can learn at
      their own pace, even without internet. It's like having a world library in our classroom."
    `,
  },
  {
    id: 3,
    title: 'From Donor to Impact: Sarah\'s Journey',
    excerpt: 'A donor from Australia shares her experience funding a lab for a Cambodian village school.',
    province: 'Siem Reap',
    image: '/images/impact-donor.jpg',
    date: 'November 2024',
    category: 'Donor Story',
    students: 450,
    content: `
      When Sarah first learned about KOOMPI's mission, she knew she had to help. "I wanted
      to make a tangible difference," she explains. "Funding a computer lab seemed like the
      perfect way."

      Six months later, Sarah visited the school she helped equip. "Seeing the students'
      faces as they used the computers for the first time was unforgettable. I knew my
      donation had real impact."

      The lab now serves 450 students in Siem Reap province, providing access to digital
      education that was previously unavailable.
    `,
  },
]

const testimonials = [
  {
    name: 'Sophy Roth',
    role: 'School Principal',
    school: 'Phnom Penh Primary School',
    quote: 'The KOOMPI Lab has transformed how our students learn. Engagement is up, test scores are improving, and children are excited to come to school.',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Chanthou Lim',
    role: 'Teacher',
    school: 'Siem Reap High School',
    quote: 'Having offline content means we can teach even when internet is down. The Content Server is like having a complete library in our classroom.',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'David Chen',
    role: 'Donor',
    location: 'Singapore',
    quote: 'I was impressed by how transparent KOOMPI is about pricing and impact. I could see exactly where my donation was going.',
    image: '/images/testimonial-3.jpg',
  },
]

const milestones = [
  { year: '2021', title: 'KOOMPI Founded', description: 'Started with a mission to bring digital education to Cambodia' },
  { year: '2022', title: 'First Lab Deployed', description: 'Pilot program equipped 5 schools with computer labs' },
  { year: '2023', title: 'Content Server Launch', description: 'Introduced offline digital library for schools without internet' },
  { year: '2024', title: '65 Schools Reached', description: 'Expanded to 65 schools with 12,000+ students impacted daily' },
  { year: '2025', title: 'First Solar Lab', description: 'Milestone: First fully solar-powered lab in Mondulkiri province' },
  { year: '2030', title: 'Goal: All Schools', description: 'Vision: One lab in every school across Cambodia' },
]

const ImpactPage = () => {
  const [selectedStory, setSelectedStory] = useState<typeof impactStories[0] | null>(null)

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cambodian-blue via-blue-900 to-cambodian-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-solar-amber/20 text-solar-amber rounded-full text-sm font-medium mb-4">
              Impact & Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Impact.<br />
              <span className="text-solar-amber">Real Stories.</span>
            </h1>
            <p className="text-xl text-gray-300">
              See how KOOMPI Labs are transforming education across Cambodia, one school at a time.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-solar-amber">65</p>
              <p className="text-gray-300">Schools Equipped</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-solar-amber">12,000+</p>
              <p className="text-gray-300">Students Daily</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-solar-amber">24</p>
              <p className="text-gray-300">Provinces Reached</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold text-solar-amber">$780K</p>
              <p className="text-gray-300">Donated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-cambodian-blue text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1" />
                  <div className="hidden md:flex w-12 h-12 bg-cambodian-blue text-white rounded-full items-center justify-center font-bold z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 p-6 bg-cream rounded-xl shadow-sm">
                    <span className="text-solar-amber font-semibold">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-cambodian-blue mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cambodian-blue text-center mb-4">
            Featured Stories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real stories from the schools, teachers, and donors making change happen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="aspect-video bg-gradient-to-br from-cambodian-blue to-solar-amber flex items-center justify-center">
                  <span className="text-white text-4xl">📸</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-solar-amber uppercase tracking-wide">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold text-cambodian-blue mt-2 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{story.province}</span>
                    <span className="text-growth-green font-medium">
                      {story.students.toLocaleString()} students
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-cambodian-blue text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What People Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-solar-amber rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">👤</span>
                </div>
                <blockquote className="text-gray-200 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.school || testimonial.location}</p>
                </div>
              </div>
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
            <div className="aspect-video bg-gradient-to-br from-cambodian-blue to-solar-amber flex items-center justify-center">
              <span className="text-white text-6xl">📸</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-solar-amber/20 text-solar-amber rounded-full text-sm font-medium">
                  {selectedStory.category}
                </span>
                <span className="text-gray-500">{selectedStory.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-cambodian-blue mb-4">
                {selectedStory.title}
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 whitespace-pre-line">
                {selectedStory.content}
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="mt-6 w-full py-3 bg-cambodian-blue text-white rounded-lg font-semibold hover:bg-blue-900 transition"
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

export default ImpactPage

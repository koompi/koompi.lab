import Footer from '../components/Shared/Footer'
import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Kolneath Ro',
    role: 'Founder & CEO',
    image: '/images/team/kolneath.jpg',
    bio: 'Kolneath founded KOOMPI with a vision to make technology accessible to every Cambodian student.',
  },
  {
    name: 'Team Member',
    role: 'Head of Operations',
    image: '/images/team/member.jpg',
    bio: 'Leading deployment operations across all 24 provinces of Cambodia.',
  },
  {
    name: 'Team Member',
    role: 'Technical Lead',
    image: '/images/team/tech.jpg',
    bio: 'Ensuring our labs run smoothly with offline content and solar power solutions.',
  },
]

const partners = [
  { name: 'Ministry of Education, Youth and Sport', type: 'Government', logo: '🏛️' },
  { name: 'Baray', type: 'Payment', logo: '💳' },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cambodian-blue to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-solar-amber/20 text-solar-amber rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Cambodia<br />
              <span className="text-solar-amber">Through Digital Education</span>
            </h1>
            <p className="text-xl text-gray-300">
              KOOMPI is a Cambodian technology company on a mission to bring digital education
              to every school in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-cambodian-blue text-center mb-12">
            Our Mission
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              To bridge the digital divide in Cambodia by providing affordable, sustainable
              computer labs and offline educational content to every school, ensuring that
              every student has access to quality digital learning resources regardless of
              their location or economic background.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-solar-amber font-semibold">Our Story</span>
              <h2 className="text-3xl font-bold text-cambodian-blue mt-2 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KOOMPI was founded with a simple question: Why should geography determine
                  access to education? In a country where many schools lack electricity and
                  internet connectivity, traditional digital learning solutions simply don't work.
                </p>
                <p>
                  We built our solution from the ground up: low-power computers designed for
                  Cambodian conditions, an offline content server filled with educational
                  materials, and solar power systems for remote areas.
                </p>
                <p>
                  Today, we've equipped 65 schools and counting. Our partnership with the
                  Ministry of Education validates our approach, but our work is far from over.
                  We won't stop until every school in Cambodia has a computer lab.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-cambodian-blue to-solar-amber rounded-2xl flex items-center justify-center">
              <span className="text-white text-8xl">🏫</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cambodian-blue text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-cambodian-blue mb-2">KOOMPI Lab</h3>
              <p className="text-gray-600">
                Complete computer lab setup with 10 KOOMPI Ministations, designed for low
                power consumption and durability in Cambodian conditions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-cambodian-blue mb-2">Content Server</h3>
              <p className="text-gray-600">
                2TB of offline educational content including Khan Academy, Wikipedia,
                interactive apps, and Cambodian curriculum materials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-cambodian-blue mb-2">Solar Power</h3>
              <p className="text-gray-600">
                Complete solar power systems for schools without grid electricity, enabling
                digital learning in the most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cambodian-blue text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-cambodian-blue">{member.name}</h3>
                <p className="text-solar-amber text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-cambodian-blue text-center mb-12">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm"
              >
                <span className="text-4xl">{partner.logo}</span>
                <div>
                  <p className="font-semibold text-cambodian-blue">{partner.name}</p>
                  <p className="text-sm text-gray-500">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-cambodian-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Help us bring digital education to every school in Cambodia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schools"
              className="px-8 py-4 bg-solar-amber text-white rounded-full font-semibold hover:bg-amber-600 transition"
            >
              Fund a School
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage

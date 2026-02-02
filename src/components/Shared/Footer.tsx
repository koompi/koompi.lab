const Footer = () => {
  return (
    <footer className="bg-cambodian-blue text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-solar-amber mb-4">KOOMPI Lab</h3>
            <p className="text-gray-400 text-sm">
              Bringing digital education to every school in Cambodia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#mission" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#schools" className="hover:text-white transition">Schools</a></li>
              <li><a href="https://koompi.com/contentserver" className="hover:text-white transition">Content Server</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@koompi.com</li>
              <li>Phnom Penh, Cambodia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Partners</h4>
            <p className="text-gray-400 text-sm mb-2">Official Partner:</p>
            <p className="text-white">Ministry of Education, Youth and Sport</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KOOMPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerVariants, fadeInUp, heroText, staggerItem, scaleIn } from '../utils/animations'

const team = [
  {
    name: 'Rithy THUL',
    role: 'Promoter',
    image: 'https://koompi.com/images/team/rithy-thul.webp',
    bio: 'Founded KOOMPI in 2018 with a vision to make technology accessible to every Cambodian student.',
  },
  {
    name: 'Brilliant PHAL',
    role: 'OS Lead',
    image: 'https://koompi.com/images/team/brilliant.jpg',
    bio: 'Leading development of KOOMPI OS, a Linux-based operating system optimized for education.',
  },
  {
    name: 'Vuthy SAN',
    role: 'Web Apps Dev Lead',
    image: 'https://koompi.com/images/team/vuthy.jpg',
    bio: 'Building web applications that power KOOMPI\'s digital platform and services.',
  },
  {
    name: 'Raksme VEN',
    role: 'Finance & Vendor Relation',
    image: 'https://koompi.com/images/team/raksme.jpg',
    bio: 'Managing financial operations and vendor partnerships across Cambodia.',
  },
  {
    name: 'Sela THUL',
    role: 'Media & Communication Manager',
    image: 'https://koompi.com/images/team/sela.jpg',
    bio: 'Sharing KOOMPI\'s story and mission with communities across Cambodia.',
  },
  {
    name: 'Theara THENG',
    role: 'Social Marketing & Sale',
    image: 'https://koompi.com/images/team/theara.jpg',
    bio: 'Connecting schools and organizations with KOOMPI\'s education solutions.',
  },
  {
    name: 'Thith THIN',
    role: 'Full Stack Developer',
    image: 'https://koompi.com/images/team/thith.jpg',
    bio: 'Developing end-to-end solutions for KOOMPI\'s digital platforms.',
  },
  {
    name: 'Hangsea HONG',
    role: 'OS Developer',
    image: 'https://koompi.com/images/team/hangsea.jpg',
    bio: 'Contributing to KOOMPI OS development and system architecture.',
  },
  {
    name: 'Sokunsamnang SAM AN',
    role: 'Network Developer',
    image: 'https://koompi.com/images/team/samnang.jpg',
    bio: 'Building network infrastructure for offline learning solutions.',
  },
]

const partners = [
  {
    name: 'Ministry of Education, Youth and Sport',
    type: 'Government Partner',
    logo: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Baray',
    type: 'Payment Partner',
    logo: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
]

const projects = [
  {
    name: 'ONELAB',
    description: 'Advanced learning, teaching, work and study environments, centered around a local independent server at each school.',
    shortDesc: 'Local server-based learning environments',
    tag: 'Lab Solution',
    link: '/onelab',
    gradient: 'from-koompi-accent-pink to-pink-500',
    bgGradient: 'from-pink-50 to-white',
  },
  {
    name: 'Content Server',
    description: 'Offline-first digital library and learning management systems for schools and institutions. Designed to help displaced students continue their education anytime, anywhere.',
    shortDesc: 'Offline digital library systems',
    tag: 'Education',
    link: '/content-server',
    gradient: 'from-koompi-secondary to-cyan-500',
    bgGradient: 'from-cyan-50 to-white',
  },
  {
    name: 'KOOMPI OS',
    description: 'A multi-purpose OS for both desktop and enterprise servers. Our R&D team continues to advance features in Blockchain, P2P, and AI.',
    shortDesc: 'Desktop & enterprise operating system',
    tag: 'Software',
    link: '/os',
    gradient: 'from-koompi-primary to-secondary-600',
    bgGradient: 'from-blue-50 to-white',
  },
  {
    name: 'Weteka',
    description: 'A virtual platform for students, teachers, and professionals to share their knowledge with other students.',
    shortDesc: 'Knowledge sharing platform',
    tag: 'Platform',
    link: 'https://weteka.org',
    external: true,
    gradient: 'from-koompi-accent-yellow to-amber-500',
    bgGradient: 'from-yellow-50 to-white',
  },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream scroll-smooth">
      {/* Hero - Premium Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1c]">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#1a2332] to-[#0a0f1c]" />
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F16179]/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38A7C8]/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#263c5c]/20 rounded-full blur-[150px]" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Floating particles */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#F16179]/40 rounded-full"
            animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-[#38A7C8]/40 rounded-full"
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#FFD700]/30 rounded-full"
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Navigation spacing */}
        <div className="absolute top-0 left-0 right-0 h-24" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 py-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <motion.span
                  className="w-2 h-2 bg-[#F16179] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-gray-400 font-medium tracking-wide">Since 2018</span>
              </motion.div>

              {/* Main headline with staggered animation */}
              <div className="space-y-2">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  variants={heroText}
                >
                  Cambodia's
                </motion.h1>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  variants={heroText}
                >
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#F16179] via-[#FFD700] to-[#F16179]"
                    animate={{ backgroundPosition: ['0% center', '200% center', '0% center'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    style={{ backgroundSize: '200% auto' }}
                  >
                    First Laptop
                  </motion.span>
                </motion.h1>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  variants={heroText}
                >
                  Brand
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Bridging the digital divide, one school at a time. We build technology that works where others don't.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                variants={fadeInUp}
              >
                <Link
                  to="/fund#pricing"
                  className="group relative px-8 py-4 bg-[#F16179] text-white rounded-full font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Fund a School
                    <motion.svg
                      className="w-4 h-4"
                      whileHover={{ x: 4 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e5556b] to-[#F16179]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Link
                  to="/story"
                  className="px-8 py-4 text-white rounded-full font-semibold border border-white/20"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>

            {/* Right Visual - Image showcase */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Floating cards with 3D effect */}
              <motion.div
                className="absolute top-0 right-0 w-[320px] h-[380px] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ y: 100, opacity: 0, rotate: -5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/products/onelab-class.jpg"
                  alt="Students in computer lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 right-6 text-center">
                  <p className="text-white font-semibold text-lg">Digital Learning</p>
                  <p className="text-white/70 text-sm">65 schools equipped</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-[280px] h-[320px] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/products/content-server-device.png"
                  alt="Content Server"
                  className="w-full h-full object-cover bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 right-6 text-center">
                  <p className="text-white font-semibold text-lg">Offline Library</p>
                  <p className="text-white/70 text-sm">3000+ educational resources</p>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { value: '65', label: 'Schools Equipped', color: '#F16179' },
              { value: '13K+', label: 'Students Learning', color: '#38A7C8' },
              { value: '24', label: 'Provinces', color: '#FFD700' },
              { value: '2018', label: 'Founded', color: '#263c5c' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="relative text-center">
                  <motion.p
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    style={{ color: stat.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-2 bg-gray-600 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Our Values - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #263c5c 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.span
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#F16179]/10 to-[#38A7C8]/10 text-[#263c5c] rounded-2xl text-sm font-semibold mb-6 tracking-wide border border-[#263c5c]/10"
              whileHover={{ scale: 1.05 }}
            >
              Our Foundation
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#263c5c] mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Value Cards with distinctive design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Innovation',
                desc: 'Building technology solutions tailored for Cambodian schools and communities.',
                color: '#F59E0B',
                gradient: 'from-amber-50 to-orange-50',
              },
              {
                title: 'Accessibility',
                desc: 'Making digital education available to every student, regardless of location.',
                color: '#3B82F6',
                gradient: 'from-blue-50 to-indigo-50',
              },
              {
                title: 'Sustainability',
                desc: 'Solar-powered solutions that work off-grid and built to last.',
                color: '#10B981',
                gradient: 'from-emerald-50 to-green-50',
              },
              {
                title: 'Community',
                desc: 'Working closely with local communities, teachers, and Ministry of Education.',
                color: '#EF4444',
                gradient: 'from-rose-50 to-red-50',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card container */}
                <div className="relative h-full">
                  {/* Background card with gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />

                  {/* Main white card - asymmetric design */}
                  <motion.div
                    className="relative h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden"
                    whileHover={{
                      y: -4,
                      boxShadow: `0 20px 40px -15px ${item.color}20`,
                      borderColor: `${item.color}30`
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Geometric pattern decoration - unique per card */}
                    <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-5" viewBox="0 0 100 100">
                      {index === 0 && (
                        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill={item.color} />
                      )}
                      {index === 1 && (
                        <circle cx="50" cy="50" r="50" fill={item.color} />
                      )}
                      {index === 2 && (
                        <polygon points="50,0 100,80 0,80" fill={item.color} />
                      )}
                      {index === 3 && (
                        <rect x="10" y="10" width="80" height="80" rx="10" fill={item.color} />
                      )}
                    </svg>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3
                        className="text-lg font-bold text-gray-900 mb-3 group-hover:tracking-wide transition-all duration-300"
                      >
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Animated bottom accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: '20%' }}
                      whileInView={{ width: '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-koompi-accent-blue/20 to-transparent h-px" />

      {/* Vision & Mission */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-koompi-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-koompi-accent-pink/5 rounded-full blur-3xl translate-x-1/2" />

        <motion.div
          className="max-w-5xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision - Dark Premium Card */}
            <motion.div
              className="group relative bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-700 rounded-3xl p-10 md:p-14 text-white overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Side accent line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-koompi-accent-pink to-transparent rounded-full" />

              {/* Label */}
              <motion.span
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-koompi-accent-pink mb-6 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                Vision
              </motion.span>

              {/* Large decorative V */}
              <div className="absolute top-8 right-8 text-8xl font-bold text-white/5 select-none">
                V
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Our Vision
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our vision is to create a tech-driven education and innovation space that empowers individuals to unleash their full potential and drive positive progress.
                </p>

                {/* Decorative quote-like element */}
                <div className="flex items-center gap-2 text-koompi-accent-pink">
                  <span className="text-2xl font-light opacity-50">"</span>
                  <span className="text-sm font-medium">Empowering Potential</span>
                  <span className="text-2xl font-light opacity-50">"</span>
                </div>
              </div>

              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-koompi-accent-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Mission - Light Premium Card */}
            <motion.div
              className="group relative bg-gradient-to-br from-cream to-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-koompi-accent-pink/10 to-transparent rounded-bl-full" />

              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-koompi-accent-pink/30 to-transparent" />

              {/* Label */}
              <motion.span
                className="inline-block px-4 py-1.5 bg-gradient-to-r from-koompi-accent-pink/10 to-pink-500/10 rounded-full text-sm font-medium text-koompi-accent-pink mb-6 border border-koompi-accent-pink/20"
                whileHover={{ scale: 1.05 }}
              >
                Mission
              </motion.span>

              {/* Large decorative M */}
              <div className="absolute top-8 right-8 text-8xl font-bold text-koompi-primary/5 select-none">
                M
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-6 leading-tight">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our mission is to build tools and empower individuals with accessible computing solutions that drive progress, foster learning, and inspire innovation.
                </p>

                {/* Action statement */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-koompi-secondary rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-koompi-secondary">Building Tomorrow</span>
                </div>
              </div>

              {/* Bottom accent line - grows on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-32 h-0.5 bg-gradient-to-r from-transparent via-koompi-secondary to-transparent transition-all duration-500 ease-out" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-koompi-secondary/10" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements / Stats */}
      <section className="py-16 px-4 bg-koompi-primary text-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '65', label: 'Schools Equipped' },
              { value: '13K', label: 'Schools Without Labs' },
              { value: '24', label: 'Provinces Reached' },
              { value: '2018', label: 'Founded' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
              >
                <div className="relative inline-flex items-center justify-center">
                  <motion.svg
                    className="absolute w-24 h-24 text-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + index * 5, repeat: Infinity, ease: 'linear' }}
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                  </motion.svg>
                  <motion.p
                    className="text-4xl md:text-5xl font-bold relative z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
                <p className="text-white/90 mt-3 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <span className="text-accent-700 font-semibold">Our Story</span>
              <h2 className="text-3xl font-bold text-koompi-primary mt-2 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KOOMPI was founded with a simple question: Why should geography determine
                  access to education? In a country where many schools lack electricity and
                  internet connectivity, traditional digital learning solutions simply don't work.
                </p>
                <p>
                  We built our solution from ground up: low-power computers designed for
                  Cambodian conditions, an offline content server filled with educational
                  materials, and solar power systems for remote areas.
                </p>
                <p>
                  Today, we've equipped 65 of Cambodia's 13,000+ public schools. Fewer than 200
                  have any computer lab at all. Our partnership with Ministry of Education validates
                  approach, and we've open-sourced blueprint. Whether you partner with us or build your own — every lab counts.
                </p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={scaleIn}>
              {/* Layered shadow cards for depth */}
              <div className="absolute top-4 left-4 right-8 bottom-8 bg-koompi-accent-pink/20 rounded-2xl -z-10" />
              <div className="absolute top-8 left-8 right-4 bottom-4 bg-koompi-accent-blue/20 rounded-2xl -z-10" />

              {/* Main image container - polaroid style */}
              <motion.div
                className="relative bg-white p-3 rounded-2xl shadow-2xl"
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/media/images/vision-to-reality.JPG"
                    alt="From Vision to Reality"
                    className="w-full h-full object-cover"
                  />

                  {/* Image overlay */}
                  <img
                    src="/images/img/vision-to-reality.JPG"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-semibold text-sm">Our Journey</p>
                    <p className="text-white/80 text-xs">Building Cambodia's future</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stats badges */}
              <motion.div
                className="absolute -top-2 -left-2 bg-white rounded-lg shadow-lg px-3 py-1.5 border-2 border-koompi-accent-pink"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-koompi-primary font-bold text-xs">65 Schools</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-koompi-primary rounded-lg shadow-lg px-3 py-1.5"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <p className="text-white font-bold text-xs">Since 2018</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-cream">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-accent-700/10 text-accent-700 rounded-full text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital education solutions designed for Cambodian schools
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* KOOMPI Lab Card - With Image */}
            <motion.div
              className="group bg-cream rounded-3xl p-8 md:p-12 shadow-lg transition-all text-center border border-gray-100 hover:border-koompi-secondary/30 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-koompi-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-koompi-secondary to-transparent rounded-full" />

              <motion.div
                className="w-32 h-24 mx-auto mb-6 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/images/products/ministation3.png"
                  alt="KOOMPI Lab"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 transition-colors text-koompi-primary group-hover:text-koompi-secondary relative z-10">
                KOOMPI Lab
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Complete computer lab setup with 10 KOOMPI Ministations, designed for low power consumption and durability in Cambodian conditions.
              </p>

              {/* Bottom accent line - grows on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-koompi-secondary to-transparent transition-all duration-500 ease-out" />
            </motion.div>

            {/* Content Server Card - With Image */}
            <motion.div
              className="group bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-lg transition-all text-center border border-gray-100 hover:border-koompi-accent-pink/30 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-koompi-accent-pink/10 to-transparent rounded-bl-full" />

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-koompi-accent-pink/50 to-transparent rounded-full" />

              {/* Product Image */}
              <motion.div
                className="w-32 h-24 mx-auto mb-6 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/images/products/content-server.png"
                  alt="Content Server"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 transition-colors text-koompi-primary group-hover:text-koompi-accent-pink relative z-10">
                Content Server
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10 mb-4">
                2TB of offline educational content including Khan Academy, Wikipedia, interactive apps, and Cambodian curriculum materials.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap justify-center gap-2 relative z-10">
                <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200 text-gray-600">Khan Academy</span>
                <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200 text-gray-600">Wiki Khmer</span>
                <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200 text-gray-600">+1000 Apps</span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-koompi-accent-pink/50 to-transparent transition-all duration-500 ease-out" />
            </motion.div>

            {/* Solar Power Card - With Image */}
            <motion.div
              className="group bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-lg transition-all text-center border border-gray-100 hover:border-yellow-300/50 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-koompi-accent-yellow/10 to-transparent rounded-br-full" />

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-koompi-accent-yellow/70 to-transparent rounded-full" />

              {/* Product Image */}
              <motion.div
                className="w-32 h-24 mx-auto mb-6 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/images/products/solar.png"
                  alt="Solar Power"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 transition-colors text-koompi-primary group-hover:text-yellow-600 relative z-10">
                Solar Power
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10 mb-4">
                Complete solar power systems for schools without grid electricity, enabling digital learning in most remote locations.
              </p>

              {/* Feature highlight */}
              <div className="flex items-center justify-center gap-2 relative z-10">
                <span className="text-lg font-bold text-koompi-accent-yellow">100% Off-Grid</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">Eco-Friendly</span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-koompi-accent-yellow/70 to-transparent transition-all duration-500 ease-out" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-koompi-accent-pink/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-koompi-accent-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-yellow/15 text-yellow-700 rounded-full text-sm font-medium mb-4">
              Innovation Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative solutions transforming education across Cambodia
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Wrapper = project.external ? 'a' : Link
              const wrapperProps = project.external
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: project.link }

              const projectColor = project.gradient.includes('pink') ? '#F16179' :
                project.gradient.includes('cyan') ? '#38A7C8' :
                project.gradient.includes('yellow') ? '#F59E0B' : '#263c5c'

              const projectBgColor = project.gradient.includes('pink') ? 'rgba(241, 97, 121, 0.08)' :
                project.gradient.includes('cyan') ? 'rgba(56, 167, 200, 0.08)' :
                project.gradient.includes('yellow') ? 'rgba(245, 158, 11, 0.08)' :
                'rgba(38, 60, 92, 0.08)'

              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="block group"
                  >
                    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      {/* Top colored bar */}
                      <div className="h-1" style={{ backgroundColor: projectColor }} />

                      {/* Content */}
                      <div className="p-6 relative z-10">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-koompi-accent-pink transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-2">{project.shortDesc}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                          </div>
                          {/* Arrow */}
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-koompi-accent-pink group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom colored gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: `linear-gradient(to top, ${projectBgColor}, transparent)` }} />

                      {/* Right side curved decoration */}
                      <svg className="absolute top-0 right-0 w-16 h-full pointer-events-none text-gray-300/20" viewBox="0 0 60 200" preserveAspectRatio="none">
                        <path
                          d="M 0,0 C 30,40 60,60 60,0 L 60,200 C 60,140 30,120 0,200 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-koompi-accent-pink/20 to-transparent h-px" />

      {/* Team */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-koompi-accent-pink/5 to-koompi-accent-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-accent-700/10 text-accent-700 rounded-full text-sm font-medium mb-4">
              The People Behind KOOMPI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-koompi-primary mb-3">
              Our Talents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At KOOMPI, we believe in power of talents to drive innovation and create exceptional experiences.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-cream rounded-2xl p-6 md:p-8 shadow-lg text-center border border-gray-100"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
              >
                <div className="relative mb-5">
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-koompi-accent-pink/20 to-koompi-accent-blue/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                  />
                  <motion.div
                    className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold text-koompi-primary mb-1 group-hover:text-koompi-accent-pink transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent-700 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-cream">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-koompi-accent-pink/10 text-accent-700 rounded-full text-sm font-medium mb-4">
              Collaboration
            </span>
            <h2 className="text-3xl font-bold text-koompi-primary mb-3">
              Our Partners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Working together to transform education across Cambodia
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="group bg-cream rounded-2xl p-8 md:p-12 flex items-center gap-5 shadow-lg border border-gray-100"
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-koompi-primary/10 to-secondary-600/10 rounded-xl flex items-center justify-center flex-shrink-0 text-koompi-secondary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {partner.logo}
                </motion.div>
                <div>
                  <p className="font-semibold text-koompi-primary text-lg">{partner.name}</p>
                  <p className="text-sm text-accent-700 font-medium">{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-koompi-primary via-koompi-primary to-secondary-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating accent circles */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-koompi-accent-pink/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-koompi-accent-blue/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 border border-white/20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Make a Difference
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Over 13,000 public schools still have no computer lab. We've proven it works — now help us reach more, or start your own.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/fund"
              className="px-10 py-4 bg-accent-700 text-white rounded-full font-semibold border-2 border-accent-500"
            >
              Fund a School
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/20"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Impact indicator */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { icon: <svg className="w-5 h-5 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>, text: '100% Tax Deductible' },
              { icon: <svg className="w-5 h-5 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>, text: 'Transparent Reporting' },
              { icon: <svg className="w-5 h-5 text-koompi-accent-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>, text: 'Direct Impact' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {item.icon}
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}

export default AboutPage

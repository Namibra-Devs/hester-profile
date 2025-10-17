import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Mail, MapPin, Calendar, Users, Globe, BookOpen } from 'lucide-react'

export default function About() {
  const [stats, setStats] = useState([0, 0, 0, 0])

  const statsData = [
    { icon: Calendar, value: 10, suffix: '+', label: 'Years Experience' },
    { icon: Globe, value: 15, suffix: '+', label: 'Countries' },
    { icon: Users, value: 25, suffix: '+', label: 'Businesses Supported' },
    { icon: MapPin, value: 5, suffix: '+', label: 'Continents' }
  ]

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    statsData.forEach((stat, index) => {
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const currentNumber = Math.floor(stat.value * progress)
        
        setStats(prev => {
          const newStats = [...prev]
          newStats[index] = currentNumber
          return newStats
        })

        if (currentStep >= steps) clearInterval(timer)
      }, stepDuration)
    })
  }, [])

  return (
    <PageTransition>

      {/* === About Me Title Section === */}
      <section className="text-center pt-45 px-4">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-4"
        >
          A Good Story
        </motion.h2>

        {/* Subheading with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 
                     text-lg sm:text-xl font-medium"
        >
          <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          <span>Every journey begins with purpose</span>
        </motion.div>
      </section>

      {/* === Existing About Section === */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 lg:-mt-70">
        
        {/* Left: Profile Image */}
        <motion.div 
          className="lg:w-2/5 flex justify-center mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-56 h-56 lg:w-80 lg:h-80">
            <img
              src="/images/profile1.png"
              alt="Hester Francken"
              className="w-full h-full object-cover rounded-xl border-4 border-white dark:border-gray-800 shadow-md"
            />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          className="lg:w-3/5 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 shadow-xl dark:shadow-5xl">
            
            <motion.h1 
              className="text-2xl lg:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Co-Creating <span className="text-blue-500">Inclusive</span> Impact
            </motion.h1>

            <motion.div 
              className="space-y-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="leading-relaxed text-sm lg:text-base">
                I believe in a world where people connect and care – where business and development collaboration drive meaningful change. Inclusive business models are a sustainable force for progress of societies.
              </p>
              <p className="leading-relaxed text-sm lg:text-base">
                Having worked with inspiring entrepreneurs and organizations across Africa, Latin America, Asia, the Middle East and Europe to co-create strategic visions, business models and behavior-based solutions that put people and planet at the core - I guided teams not only to design and grow for impact, but also to shift mindsets and leadership from the inside out.
              </p>
              <p className="leading-relaxed text-sm lg:text-base">
                When it comes to change, we need co-creation. For this, I strongly believe that listening is key - just like in playing my favorite African instrument: the djembé! Rhythm emerges when everyone listens to each other and plays their part.
              </p>
              <p className="leading-relaxed text-sm lg:text-base font-medium">
                Now I am excited to have joined Bopinc: to help design, deliver and grow inclusive, commercially viable businesses that unlock opportunities and improve lives for people at the Base of the Pyramid.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="/Hester_Francken_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-blue-600 text-sm"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href="mailto:hester@example.com"
                className="flex items-center justify-center gap-2 px-5 py-2.5 text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                <span>Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.div 
        className="w-full px-6 lg:px-16 mt-6 lg:-mt-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 400 } }}
            >
              <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-xl font-bold mb-1">
                {stats[index]}{stat.suffix}
              </div>
              <div className="text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </PageTransition>
  )
}

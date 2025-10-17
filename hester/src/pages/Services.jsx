import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Download, MapPin, Calendar, Users, Target, Lightbulb, Camera, Briefcase, Globe } from 'lucide-react'

export default function Services() {
  const [expandedExperience, setExpandedExperience] = useState(null)

  const services = [
    {
      icon: Target,
      title: 'Business Consulting',
      description: 'Strategic business model innovation and growth strategies for inclusive businesses.'
    },
    {
      icon: Lightbulb,
      title: 'Marketing Consulting',
      description: 'Data-driven marketing strategies and customer journey optimization.'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guiding organizational transformation and mindset shifts.'
    },
    {
      icon: Camera,
      title: 'Commercial Photography',
      description: 'Impact storytelling through professional photography.'
    },
    {
      icon: Briefcase,
      title: 'Public Speaking',
      description: 'Keynote talks on inclusive business and innovation.'
    },
    {
      icon: Globe,
      title: 'Demand Generation',
      description: 'Creating market demand for sustainable products and services.'
    }
  ]

  const experiences = [
    {
      company: 'Bopinc',
      role: 'Senior Business Advisor',
      period: 'Sep 2025 - Present · 2 mos',
      location: 'Utrecht, Accra',
      type: 'Full-time',
      summary: 'Designing and growing inclusive, commercially viable business models focused on nutritious food and renewable energy for Base of Pyramid communities.',
      fullDescription: 'At Bopinc, we work with ambitious entrepreneurs and partners to design, deliver and grow inclusive, commercially viable business models. Our mission is to create opportunities and improve everyday lives for people at the Base of the Pyramid by driving innovation that connects businesses with low-income consumers, providing the services and products where they need it most.'
    },
    {
      company: 'Vice Versa',
      role: 'Strategist, Journalist & Photographer',
      period: 'Jan 2025 - Present · 10 mos',
      location: 'Uganda | The Netherlands',
      type: 'Freelance',
      summary: 'Facilitating dialogue between young African storytellers and development organizations through solution-oriented stories.',
      fullDescription: 'Storytelling and interaction are key to change perspectives, behavior and development policies. We bring the stories of and facilitate the dialogue between young African storytellers and local communities to development organizations, private businesses and policymakers.'
    },
    {
      company: 'FRANCK& VALUE',
      role: 'Impact business designer',
      period: 'Dec 2024 - Present · 11 mos',
      location: 'Rwanda | Uganda | Kenya | Côte d\'Ivoire | The Netherlands',
      type: 'Self-employed',
      summary: 'Co-creating strategies and business models that drive meaningful change for people and planet.',
      fullDescription: 'I walk alongside entrepreneurs, organizations and creatives to co-create strategies, business models, and behavior-based solutions that drive meaningful change - not just for profit, but for people and the planet too.'
    },
    {
      company: 'Business Models Inc.',
      role: 'Business Designer',
      period: 'Jun 2021 - Oct 2024 · 3 yrs 5 mos',
      location: 'Amsterdam Area',
      type: 'Full-time',
      summary: 'Creating value for people, planet & business through people-centric business strategies and innovations for global clients.',
      fullDescription: 'At Business Models Inc., we create value for people, planet & business. We do this by delivering people-centric business strategies and innovations for our global clients by fusing the disciplines of strategy, business, design and behavior psychology.'
    },
    {
      company: 'The Talent Institute',
      role: 'Digital Innovator',
      period: 'Jun 2019 - Jun 2021 · 2 yrs 1 mo',
      location: 'Amsterdam Area, Netherlands',
      type: 'Full-time',
      summary: 'Specialized in building new and innovative products and services, running experiments to validate business assumptions.',
      fullDescription: 'As a Digital Innovator, I specialized in building new and innovative products and services. Our team of skilled innovation professionals are expert in running experiments to validate the most risky assumptions underlying an idea or proposition.'
    }
  ]

  const toggleExperience = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col lg:flex-row px-6 lg:px-16 py-6 lg:py-8">
        
        {/* Left: Services Section */}
        <motion.div 
          className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-2xl lg:text-3xl font-bold lg:pt-50 mb-2">
              Professional <span className="text-blue-500">Services</span>
            </h1>
            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>

          {/* Overview */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className=" text-sm leading-relaxed mb-3 ">
              As a business designer with a clear vision, I am driven to support entrepreneurs and their ecosystem to design, build and grow 3P (people, planet, profit) businesses. Circular business, education and health are my main focus.
            </p>
            <p className="text-sm leading-relaxed">
              Reach out to scope your need and discuss the best approach, be it coaching, an innovation & growth strategy process, hands-on validation or growth hacking in the market, workshop facilitation, etc.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {services.map((service, index) => (
              <div 
                key={service.title}
                className=" rounded-lg p-3 text-center border border-gray-200  shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <service.icon className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                <h3 className="text-xs font-semibold  mb-1">
                  {service.title}
                </h3>
                <p className="text-xs  leading-tight">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Availability & Pricing */}
          <motion.div 
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold ">Available</span>
              <span className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">Remote</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold ">Pricing</span>
              <span className="text-xs ">Contact for pricing</span>
            </div>
          </motion.div>

          {/* Side-by-Side CTA Buttons */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="mailto:hester@example.com"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm text-center"
              whileHover={{ scale: 1.02, y: -1 }}
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </motion.a>
            
            <motion.a
              href="/Hester_Francken_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5  text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm text-center"
              whileHover={{ scale: 1.02, y: -1 }}
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Experience Section */}
        <motion.div 
          className="lg:w-2.5/5 lg:pl-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Section Title */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold  mb-2 lg:pt-25">
              Professional <span className="text-blue-500">Experience</span>
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                onClick={() => toggleExperience(index)}
                whileHover={{ scale: 1.01 }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold  text-sm">
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {exp.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-3 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className=" text-sm leading-relaxed mb-2">
                  {exp.summary}
                </p>

                {/* Expandable Content */}
                {expandedExperience === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className=""
                  >
                    <p className="text-sm leading-relaxed">
                      {exp.fullDescription}
                    </p>
                  </motion.div>
                )}

                {/* Read More/Less Toggle */}
                <button className="text-blue-500 text-xs font-medium hover:text-blue-600 transition-colors duration-200 mt-2">
                  {expandedExperience === index ? 'Read Less' : 'Read More'}
                </button>
              </motion.div>
            ))}
          </div>

         
        </motion.div>
      </section>
    </PageTransition>
  )
}
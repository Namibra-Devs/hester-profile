import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Briefcase, GraduationCap, Award, Settings, 
  Mail, Download, MapPin, Calendar, Users 
} from 'lucide-react'

export default function Resume() {
  const [activeSection, setActiveSection] = useState('services')

  const sections = [
    { id: 'services', icon: Settings, title: 'Services', description: 'Professional services and expertise' },
    { id: 'experience', icon: Briefcase, title: 'Experience', description: 'Professional work history' },
    { id: 'education', icon: GraduationCap, title: 'Education', description: 'Academic background' },
    { id: 'skills', icon: Users, title: 'Skills', description: 'Core competencies' },
    { id: 'certifications', icon: Award, title: 'Licenses & Certifications', description: 'Professional credentials' }
  ]

  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col lg:flex-row px-6 lg:px-16 py-6 lg:py-8">
        
        {/* Left: Navigation Links */}
        <motion.div 
          className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 pt-18 lg:pt-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-2xl lg:text-3xl font-bold  mb-2">
              Why Hire <span className="text-blue-500">Me!</span>
            </h1>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
            <p className=" text-sm leading-relaxed">
              Explore my professional background, services and qualifications to see how I can help drive your business forward.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <div className="space-y-5 mb-6">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300  cursor-pointer ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-md mb-4'
                    : ' border border-gray-200 dark:border-gray-700 over:bg-gray-50 dark:hover:bg-gray-700 mb-4'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <section.icon size={18} />
                <div>
                  <div className="font-medium text-sm">{section.title}</div>
                  <div className={`text-xs ${
                    activeSection === section.id ? 'text-blue-100' : ''
                  }`}>
                    {section.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm text-center"
              whileHover={{ scale: 1.02, y: -1 }}
            >
              <Mail size={16} />
              <span>Contact</span>
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

        {/* Right: Content Section */}
        <motion.div 
          className="lg:w-2/3 lg:pt-50 lg:pl-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {activeSection === 'services' && <ServicesSection />}
          {activeSection === 'experience' && <ExperienceSection />}
          {activeSection === 'education' && <EducationSection />}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'certifications' && <CertificationsSection />}
        </motion.div>
      </section>
    </PageTransition>
  )
}

// Services Section Component
function ServicesSection() {
  const [expanded, setExpanded] = useState(false)

  const services = [
    'Business Consulting',
    'Marketing Consulting',
    'Demand Generation',
    'Change Management',
    'Public Speaking',
    'Commercial Photography'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold  mb-2">
          Professional Services
        </h2>
        <p className=" text-sm mb-4">
          Comprehensive business design and innovation services to drive your growth
        </p>
        
        <div className="mb-4">
          <p className=" text-sm leading-relaxed mb-3">
            As a business designer with a clear vision, I am driven to support entrepreneurs and their ecosystem to design, build and grow 3P (people, planet, profit) businesses. Circular business, education and health are my main focus.
          </p>
          
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <p className=" text-sm leading-relaxed mb-3">
                Reach out to scope your need and discuss the best approach, be it coaching, an innovation & growth strategy process, hands-on validation or growth hacking in the market, workshop facilitation, etc. As storytelling is key, I also shoot pictures and distribute impact stories.
              </p>
              
              {/* Availability & Pricing */}
              <div className=" rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold ">Available</span>
                  <span className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">Remote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold ">Pricing</span>
                  <span className="text-xs ">Contact for pricing</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {services.map((service, index) => (
            <div key={service} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm ">{service}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  )
}

// Experience Section Component
function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState(null)

  const experiences = [
    {
      company: 'Bopinc',
      role: 'Senior Business Advisor',
      period: 'Sep 2025 - Present · 2 mos',
      location: 'Utrecht, Accra',
      type: 'Full-time',
      summary: 'Designing and growing inclusive, commercially viable business models focused on nutritious food and renewable energy.',
      fullDescription: 'At Bopinc, we work with ambitious entrepreneurs and partners to design, deliver and grow inclusive, commercially viable business models. Our mission is to create opportunities and improve everyday lives for people at the Base of the Pyramid by driving innovation that connects businesses with low-income consumers, providing the services and products where they need it most.'
    },
    {
      company: 'Vice Versa',
      role: 'Strategist, Journalist & Photographer',
      period: 'Jan 2025 - Present · 10 mos',
      location: 'Uganda | The Netherlands',
      type: 'Freelance',
      summary: 'Facilitating dialogue between young African storytellers and development organizations.',
      fullDescription: 'Storytelling and interaction are key to change perspectives, behavior and development policies. We bring the stories of and facilitate the dialogue between young African storytellers and local communities to development organizations, private businesses and policymakers.'
    },
    {
      company: 'FRANCK& VALUE',
      role: 'Impact business designer',
      period: 'Dec 2024 - Present · 11 mos',
      location: 'Rwanda | Uganda | Kenya | Côte d\'Ivoire | The Netherlands',
      type: 'Self-employed',
      summary: 'Co-creating strategies and business models for meaningful change.',
      fullDescription: 'I walk alongside entrepreneurs, organizations and creatives to co-create strategies, business models, and behavior-based solutions that drive meaningful change - not just for profit, but for people and the planet too.'
    }
  ]

  const toggleExperience = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold  mb-2">
          Professional Experience
        </h2>
        <p className=" text-sm mb-6">
          Extensive experience in business design, innovation and inclusive business development
        </p>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-300"
              onClick={() => toggleExperience(index)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-sm">
                    {exp.role}
                  </h3>
                  <p className="text-blue-500 text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-3 text-xs ">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className=" text-sm leading-relaxed mb-2">
                {exp.summary}
              </p>

              {expandedExperience === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  <p className=" text-sm leading-relaxed">
                    {exp.fullDescription}
                  </p>
                </motion.div>
              )}

              <button className="text-blue-500 text-xs font-medium hover:text-blue-600 transition-colors duration-200 mt-2">
                {expandedExperience === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Education Section Component
function EducationSection() {
  const education = [
    {
      institution: 'Leiden University',
      degree: 'Master\'s Degree, Economic and Consumer Psychology',
      period: '2015 - 2016',
      description: 'Specialized in psychological mechanisms underlying consumption and economic behaviors.'
    },
    {
      institution: 'Startupbootcamp, Innoleaps & The Talent Institute',
      degree: 'Lean Startup Innovation, Growth Hacking',
      period: '2018',
      description: 'Bootcamps and learning-on-the-job traineeship'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold  mb-2">
          Education
        </h2>
        <p className=" text-sm mb-6">
          Academic background in psychology, business, and innovation
        </p>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold  text-sm mb-1">
                {edu.institution}
              </h3>
              <p className="text-sm font-medium mb-2">{edu.degree}</p>
              <p className=" text-xs mb-2">{edu.period}</p>
              <p className=" text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Skills Section Component
function SkillsSection() {
  const skills = [
    'Business Model Innovation',
    'Behavior Change Strategy',
    'Growth Hacking',
    'Strategic Facilitation',
    'Impact Storytelling',
    'Data-Driven Marketing',
    'Inclusive Business Design',
    'Experiment Design'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold  mb-2">
          Core Skills
        </h2>
        <p className=" text-sm mb-6">
          Key competencies and areas of expertise
        </p>

        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div key={skill} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm ">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Certifications Section Component
function CertificationsSection() {
  const certifications = [
    {
      issuer: 'Africa No Filter',
      name: 'Ethical Storytelling',
      issued: 'Mar 2025'
    },
    {
      issuer: 'Lepaya',
      name: 'Consultancy Training Program',
      issued: 'Jun 2020'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold  mb-2">
          Licenses & Certifications
        </h2>
        <p className=" text-sm mb-6">
          Professional credentials and specialized training
        </p>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold  text-sm mb-1">
                {cert.issuer}
              </h3>
              <p className="text-blue-500 text-sm font-medium mb-2">{cert.name}</p>
              <p className=" text-xs">Issued {cert.issued}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
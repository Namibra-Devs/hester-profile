import PageTransition from '@components/PageTransition'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Users, MapPin } from 'lucide-react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects')
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      number: '01',
      title: 'Sustainable Policy Lab - Public Winner',
      period: 'Apr 2018 - Present',
      description: 'Our team won the Public\'s Price for best idea - Two days of brainstorming about how to improve Dutch energy policies with Sustainable Motion, Rijksdienst voor Ondernemend Nederland (RvO) and Economische Zaken (EZ).',
      fullDescription: 'We understood the complexity of changing behavior and the importance of joining forces with people from different backgrounds in crafting the policies for tomorrow.',
      image: '/images/pro1.png',
      links: [
        { name: 'Show Project', url: '#' }
      ],
      contributors: 'Multi-disciplinary team with government and sustainability experts'
    },
    {
      number: '02',
      title: 'Corona Virus Hackathon Participant',
      period: 'Mar 2020 - Mar 2020',
      description: 'Participant of The Corona Virus Hackathon organized by CommonVC.',
      fullDescription: 'With a multi-disciplinary team from around the world we (virtually) worked on identifying possible needs and habits of the consumer in the Low Touch Economy (post-covid), and proposed a business solution.',
      image: '/images/pro2.png',
      links: [
        { name: 'Show Project', url: '#' }
      ],
      contributors: 'International multi-disciplinary team'
    },
    {
      number: '03',
      title: 'Ringvaart Regatta 2012 and 2013',
      period: '2012 - 2013',
      description: 'Participated in the Ringvaart Regatta, an annual 100km rowing contest among Dutch rowing associations.',
      fullDescription: 'Both years in a women\'s four (C4+ boat). This endurance challenge demonstrated teamwork, perseverance, and strategic coordination.',
      image: '/images/pro3.png',
      links: [],
      contributors: 'Women\'s four rowing team'
    }
  ]

  const volunteering = [
    {
      number: '01',
      title: 'Inclusive Business Consultant',
      organization: 'PUM',
      period: 'Dec 2020 - Present · 4 yrs 11 mos',
      category: 'Economic Empowerment',
      description: 'Empowering SMEs and entrepreneurs in developing countries to make their business future proof with a 3P (profit-people-planet) business.',
      fullDescription: 'Worked with businesses in Senegal, Pakistan, Lebanon, Iraq, Vietnam, Bolivia, Colombia, Rwanda & South-Africa. Sectors included agri, food, horti, retail, manufacturing, tourism, fashion, and employee organizations - all with an ecosystem approach that benefit other SMEs, society and the environment.',
      image: '/images/pum.png',
      links: [
        { name: 'PUMcast Podcast', url: 'https://open.spotify.com/show/4j7Lex8eNEZrMeKPF3u1wZ' }
      ],
      achievements: 'Created Podcast "PUMcast: Canvas Conversations" during lockdowns'
    },
    {
      number: '02',
      title: 'Initiator & Growth Volunteer',
      organization: 'Help \'n Happie',
      period: 'Mar 2020 - Jul 2020 · 5 mos',
      category: 'Economic Empowerment',
      description: 'COVID-19 response initiative to support restaurants and provide meals for frontline workers and vulnerable communities.',
      fullDescription: 'With a team of 13 volunteers, we (remotely) set up a crowdfunding platform. This way, we could crowdfund money for restaurants in need. These restaurants cooked delicious meals for the people who deserved something extra: hospital employees, elderly, researchers and the homeless.',
      image: '/images/pro5.png',
      links: [],
      achievements: 'More than 9,000 meals donated'
    },
    {
      number: '03',
      title: 'Podcaster',
      organization: 'Bier & Beleggen',
      period: 'Jul 2020 - Sep 2021 · 1 yr 3 mos',
      category: 'Education',
      description: 'Helping people to become financially less dependent through accessible investment education.',
      fullDescription: 'We believe it\'s not hard to take your first steps in the financial markets. It\'s actually fun. We make it accessible, hands-on and personal. Listen to the Podcasts or join an online group training via Zoom.',
      image: '/images/pro4.png',
      links: [
        { name: 'Visit Website', url: 'https://bierenbeleggen.nl' }
      ],
      achievements: 'Made investing accessible through podcasts and online training'
    }
  ]

  const currentItems = activeTab === 'projects' ? projects : volunteering
  const currentItem = currentItems[currentIndex]

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % currentItems.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length)
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setCurrentIndex(0)
  }

  return (
    <PageTransition>
      <section className="min-h-screen px-6 lg:px-16 py-8">
        {/* Header with Toggle */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold  mb-8 pt-18 lg:pt-50">
            Work Beyond <span className="text-blue-500">Boundaries</span>
          </h1>
          
          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className=" border border-gray-200 dark:border-gray-700 rounded-lg p-1 inline-flex">
              <button
                onClick={() => switchTab('projects')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-blue-500 text-white shadow-md'
                    : ' hover:text-blue-500 dark:hover:text-gray-200'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => switchTab('volunteering')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'volunteering'
                    ? 'bg-blue-500 text-white shadow-md'
                    : ' hover:text-blue-500 dark:hover:text-gray-200'
                }`}
              >
                Volunteering
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left: Project Details */}
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Number and Title */}
                <div className="mb-6">
                  <div className="text-blue-500 text-6xl font-bold mb-2">
                    {currentItem.number}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    {currentItem.title}
                  </h2>
                  
                  {/* Organization for Volunteering */}
                  {activeTab === 'volunteering' && (
                    <p className="text-blue-500 text-lg font-medium mb-2">
                      {currentItem.organization}
                    </p>
                  )}

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm  mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{currentItem.period}</span>
                    </div>
                    {activeTab === 'volunteering' && (
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{currentItem.category}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className=" leading-relaxed mb-4">
                    {currentItem.description}
                  </p>
                  <p className=" leading-relaxed">
                    {currentItem.fullDescription}
                  </p>
                </div>

                {/* Achievements or Contributors */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold  mb-2 uppercase tracking-wide">
                    {activeTab === 'projects' ? 'Other Contributors' : 'Key Achievement'}
                  </h3>
                  <p className=" text-sm">
                    {activeTab === 'projects' ? currentItem.contributors : currentItem.achievements}
                  </p>
                </div>

                {/* Links */}
                {currentItem.links.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-blue-500 mb-3 uppercase tracking-wide">
                      Links & Resources
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {currentItem.links.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={14} />
                          <span>{link.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Dots */}
                <div className="flex gap-2">
                  {currentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-blue-500 w-6'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Image with Navigation */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeTab}-${currentIndex}-image`}
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-64 lg:h-96 object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevItem}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronLeft size={20} className="text-gray-700 dark:text-gray-300" />
              </button>

              <button
                onClick={nextItem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronRight size={20} className="text-gray-700 dark:text-gray-300" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentItem.number} / {currentItems.length}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, Facebook } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const services = [
    'Business Consulting',
    'Marketing Consulting',
    'Demand Generation',
    'Change Management',
    'Public Speaking',
    'Commercial Photography',
    'Workshop Facilitation',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-12">
        
        {/* Left: Profile Image & Contact Info */}
        <motion.div
          className="lg:w-2/5 flex flex-col items-center mb-8 lg:mb-0 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <div className="relative w-56 h-56 lg:w-80 lg:h-80 mb-8">
            <img
              src="/images/profile1.png"
              alt="Hester Francken"
              className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white dark:border-gray-800"
            />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <motion.h2 
              className="text-2xl lg:text-3xl font-bold  mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get In <span className="text-blue-500">Touch</span>
            </motion.h2>

            {/* Social Links */}
            <motion.div 
              className="flex flex-col gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.a
                href="https://linkedin.com/in/hestefrancken"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-3  border border-gray-200 dark:border-gray-700 rounded-xl  hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hestefrancken"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-3  border border-gray-200 dark:border-gray-700 rounded-xl  hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Facebook size={20} />
                <span className="font-medium">Facebook</span>
              </motion.a>

              <motion.a
                href="mailto:francken@bopinc.org"
                className="flex items-center gap-3 px-4 py-3  border border-gray-200 dark:border-gray-700 rounded-xl  hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Mail size={20} />
                <span className="font-medium">francken@bopinc.org</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 px-4 py-3  border border-gray-200 dark:border-gray-700 rounded-xl "
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <MapPin size={20} />
                <div className="text-left">
                  <div className="font-medium">From</div>
                  <div className="text-sm ">Amsterdam, North Holland, Netherlands</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Availability */}
            <motion.div 
              className=" border border-blue-200 dark:border-blue-800 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-1">
                Available for remote work
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Flexible scheduling across timezones
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          className="lg:w-3/5 w-full max-w-2xl "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className=" border border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 shadow-xl lg:-ml-80">
            <motion.h2 
              className="text-2xl lg:text-3xl font-bold  mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Send a <span className="text-blue-500">Message</span>
            </motion.h2>
            
            <motion.p 
              className=" mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ready to start your next project? Let's discuss how we can work together to achieve your goals.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </motion.div>

              {/* Service Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500   transition-all duration-300 appearance-none "
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-medium  mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl"
        >
          Have a question or want to collaborate? I’d love to hear from you. 
          Drop a message below and I’ll get back as soon as possible.
        </motion.p>

        <motion.form
          className="w-full max-w-md space-y-4 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </PageTransition>
  )
}

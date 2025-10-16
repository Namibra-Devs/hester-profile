import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          I’m Hester, a passionate <span className="text-blue-500 font-semibold">Frontend Developer</span> 
          with a strong focus on building elegant and high-performing web experiences. 
          I enjoy transforming complex ideas into intuitive, beautiful, and user-friendly interfaces.
        </motion.p>

        <motion.div
          className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {['React', 'Tailwind', 'Framer Motion', 'JavaScript', 'Vite', 'Git'].map((skill, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500 transition"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  )
}

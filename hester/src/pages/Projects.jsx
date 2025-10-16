import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SalesMaster Dashboard',
    description: 'An interactive analytics dashboard with charts, filters, and smooth transitions.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio with animations, dark mode, and responsive design.',
    tech: ['Vite', 'React Router', 'AOS'],
    link: '#',
  },
  {
    title: 'Voting System',
    description: 'A web app for real-time election tracking with result visualization.',
    tech: ['React', 'Chart.js', 'Firebase'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition bg-white dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-500">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-sm text-blue-500 hover:underline"
                target="_blank"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

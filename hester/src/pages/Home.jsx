import PageTransition from '@components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Hi, I'm <span className="text-blue-500">Hester</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A passionate Frontend Developer building sleek web experiences.
        </p>
      </section>
    </PageTransition>
  )
}

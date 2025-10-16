export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800 mt-10">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Hester</span>. 
        All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-3">
        <a href="https://github.com" target="_blank" className="hover:text-blue-500 transition">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">
          LinkedIn
        </a>
        <a href="mailto:hester@example.com" className="hover:text-blue-500 transition">
          Email
        </a>
      </div>
    </footer>
  )
}

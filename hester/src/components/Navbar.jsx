import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold text-blue-500">Hester</h1>
      <div className="flex items-center space-x-6">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-medium hover:text-blue-500 transition ${
              location.pathname === link.path
                ? 'text-blue-500'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  )
}

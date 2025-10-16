import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-800 hover:scale-110"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

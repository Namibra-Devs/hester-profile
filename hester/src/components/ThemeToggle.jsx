import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition hover:scale-110"
      style={{
        backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb'
      }}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
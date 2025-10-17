import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from '@routes/AnimatedRoutes'
import Navbar from '@components/Navbar'

import { ThemeProvider, useTheme } from '@context/ThemeContext'

// Main App component that uses the theme
function ThemedApp() {
  const { theme } = useTheme()
  
  return (
    <div 
      style={{
        backgroundColor: theme === 'dark' ? '#111827' : '#ffffff', // bg color
        color: theme === 'dark' ? '#e5e7eb' : '#374151', // text color
        minHeight: '100vh',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Navbar />
      <AnimatedRoutes />
    
    </div>
  )
}

// Root component that provides the theme context
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemedApp />
      </BrowserRouter>
    </ThemeProvider>
  )
}
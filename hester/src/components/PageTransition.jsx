import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '@context/ThemeContext'

const pageTitles = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/projects': 'Projects', 
  '/contact': 'Contact'
}

export default function PageTransition({ children }) {
  const location = useLocation()
  const { theme } = useTheme()
  const [showTitle, setShowTitle] = useState(true)
  const currentPageTitle = pageTitles[location.pathname] || 'Page'

  useEffect(() => {
    // Hide title after 200ms
    const timer = setTimeout(() => {
      setShowTitle(false)
    }, 200)

    // Show title again when location changes
    setShowTitle(true)

    return () => clearTimeout(timer)
  }, [location.pathname])

  // Theme-based colors
  const backgroundColor = theme === 'dark' ? '#111827' : '#ffffff'
  const textColor = theme === 'dark' ? '#e5e7eb' : '#374151'

  return (
    <>
      {/* Page Title */}
      <AnimatePresence>
        {showTitle && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            style={{
              backgroundColor: backgroundColor,
              color: textColor
            }}
          >
            <h1 className="text-4xl font-bold" style={{ color: textColor }}>
              {currentPageTitle}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
            minHeight: '100vh'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from '@routes/AnimatedRoutes'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { ThemeProvider } from '@context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

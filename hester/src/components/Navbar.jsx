import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const name = "Hester";

  // Slower, smoother typewriter
  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;
    const type = () => {
      if (!deleting) {
        if (i < name.length) {
          setDisplayText(name.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, 200); // slower speed
        } else {
          deleting = true;
          timeout = setTimeout(type, 1200); // pause before erase
        }
      } else {
        if (i > 0) {
          setDisplayText(name.slice(0, i - 1));
          i--;
          timeout = setTimeout(type, 100);
        } else {
          deleting = false;
          timeout = setTimeout(type, 500);
        }
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <nav
        className="
          fixed top-4 left-1/2 transform -translate-x-1/2
          flex justify-between items-center w-[92%] md:w-[85%]
          px-6 py-3 rounded-2xl
          backdrop-blur-xl bg-white/10 dark:bg-black/20
          border border-white/20 dark:border-gray-700
          shadow-lg z-50
        "
      >
        {/* Brand Name */}
        <motion.h1
          className="text-2xl font-bold text-blue-500 tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {displayText}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition hover:text-blue-500 ${
                location.pathname === link.path
                  ? "text-blue-500"
                  : "text-black dark:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <MobileNav
            navLinks={navLinks}
            onClose={() => setIsMobileOpen(false)}
            currentPath={location.pathname}
          />
        )}
      </AnimatePresence>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 8px;
          background-color: #3b82f6;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}

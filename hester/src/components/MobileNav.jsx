import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Folder, Mail, ClipboardList  } from "lucide-react";

const icons = {
  Home: <Home size={22} />,
  About: <User size={22} />,
  Resume: <ClipboardList  size={22} />,
  Projects: <Folder size={22} />,
  Contact: <Mail size={22} />,
};

export default function MobileNav({ navLinks, onClose, currentPath }) {
  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center z-40 overflow-hidden"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{
        clipPath: "circle(150% at 50% 50%)",
        transition: { type: "spring", stiffness: 80, damping: 15 },
      }}
      exit={{
        clipPath: "circle(0% at 50% 50%)",
        transition: { type: "spring", stiffness: 100, damping: 18 },
      }}
    >
      {/* Background layer (glassy) */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/20 dark:bg-black/40 border border-white/20 dark:border-gray-700 rounded-lg" />

      {/* Navigation links */}
      <motion.nav
        className="relative flex flex-col space-y-8 px-30 py-8 rounded-3xl bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 dark:border-gray-800 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        exit={{ opacity: 0, y: 30 }}
      >
        {navLinks.map((link, i) => {
          const isActive = currentPath === link.path;
          return (
            <motion.div
              key={link.path}
              className="relative flex items-center justify-between space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i }}
            >
              {/* Blue glowing dot */}
              <motion.span
                className={`w-3 h-3 rounded-full ${
                  isActive ? "bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]" : ""
                }`}
              />

              {/* Link Text */}
              <Link
                to={link.path}
                onClick={onClose}
                className={`flex-1 text-left text-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-blue-500"
                    : " hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>

              {/* Right Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${
                  isActive ? "text-blue-500" : ""
                }`}
              >
                {icons[link.name]}
              </motion.div>
            </motion.div>
          );
        })}

        <div className="pt-10 mx-auto" onClick={onClose}>
          <ThemeToggle />
        </div>
      </motion.nav>
    </motion.div>
  );
}

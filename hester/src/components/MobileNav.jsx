import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

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
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 dark:bg-black/40" />

      {/* Navigation links */}
      <motion.nav
        className="relative flex flex-col space-y-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        exit={{ opacity: 0, y: 30 }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i }}
          >
            <Link
              to={link.path}
              onClick={onClose}
              className={`text-2xl font-semibold transition-all ${
                currentPath === link.path
                  ? "text-blue-500"
                  : "text-gray-900 dark:text-gray-200 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <div className="pt-10">
          <ThemeToggle />
        </div>
      </motion.nav>
    </motion.div>
  );
}

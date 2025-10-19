import PageTransition from "@components/PageTransition";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Linkedin, Facebook, Mail } from "lucide-react";

export default function Home() {
  const [stats, setStats] = useState([0, 0, 0, 0]);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hestefrancken",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://twitter.com/hestefrancken",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:francken@bopinc.org", label: "Email" },
  ];

  const statsData = [
    { number: 50, suffix: "+", label: "Inclusive Projects" },
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 25, suffix: "+", label: "Businesses Supported" },
    { number: 15, suffix: "+", label: "Countries Impacted" },
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    statsData.forEach((stat, index) => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentNumber = Math.floor(stat.number * progress);

        setStats((prev) => {
          const newStats = [...prev];
          newStats[index] = currentNumber;
          return newStats;
        });

        if (currentStep >= steps) clearInterval(timer);
      }, stepDuration);
    });
  }, []);

  return (
    <PageTransition>
      {/* Mobile Image on Top */}
      <div className="block lg:hidden pt-18 pb-3">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileWithCircularLines />
        </motion.div>
      </div>

      {/* Main Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-14 lg:py-20">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I'm <span className="text-blue-500">Hester</span> Francken!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-4 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Driving <span className="text-blue-500">inclusive innovation</span>{" "}
            for Base of Pyramid communities.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Expert in business model innovation, behavior change strategy,
            storytelling, bridging sustainable development and market growth.
            PUM consultant passionate about meaningful impact.
          </motion.p>

          {/* Expertise Tags */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {["Business Innovation", "Behavior Change", "PUM Consulting"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm sm:text-base font-medium border border-blue-200 dark:border-blue-700"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email" ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.a
              href="/contact"
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Desktop Animation */}
        <motion.div
          className="lg:w-1/2 hidden lg:flex justify-center lg:justify-end relative mt-10 lg:mt-0 px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProfileWithCircularLines />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-auto md:px-10 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-4 shadow-md text-center backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <div className="text-lg sm:text-xl font-bold text-blue-500 mb-1 sm:mb-2">
                {stats[index]}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
}

/* ---------- Circular Profile Animation ---------- */
function ProfileWithCircularLines() {
  return (
    <motion.div
      className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center overflow-hidden"
      whileHover={{ rotate: 0 }}
    >
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        whileHover={{
          rotate: -360,
          transition: { repeat: Infinity, duration: 15, ease: "linear" },
        }}
      >
        {/* Arcs */}
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.8)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="120 150"
          strokeLinecap="round"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="80 190"
          strokeLinecap="round"
          transform="rotate(120 150 150)"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.6)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="60 220"
          strokeLinecap="round"
          transform="rotate(240 150 150)"
        />
      </motion.svg>

      <img
        src="/images/profile2.png"
        alt="Hester Francken"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/30 dark:border-gray-700 shadow-2xl z-10"
      />
    </motion.div>
  );
}

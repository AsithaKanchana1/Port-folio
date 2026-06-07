import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiArrowRight,
  FiFacebook,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import mePhoto from "../assets/tech-stack/me.jpeg";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/AsithaKanchana1",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/asithakanchana/",
    label: "LinkedIn",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/asithakanchana01",
    label: "Facebook",
  },
  {
    icon: FiYoutube,
    href: "https://youtube.com/@ASI_SOLUTION",
    label: "YouTube",
  },
  { icon: FaWhatsapp, href: "https://wa.me/94701336364", label: "WhatsApp" },
];

// Profile image with graceful error fallback
const HeroImage = () => {
  const [err, setErr] = useState(false);
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Decorative blobs */}
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 dark:bg-accent/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-2xl pointer-events-none" />

      {/* Photo frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 lg:translate-x-6"
        >
        {/* Outer decorative ring */}
        <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 rounded-full p-1 bg-gradient-to-br from-accent via-purple-500 to-blue-500 shadow-2xl shadow-accent/20">
          {/* Inner image */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-950">
            {!err ? (
              <img
                src={mePhoto}
                alt="Asitha Kanchana"
                className="w-full h-full object-cover object-top"
                onError={() => setErr(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <span className="text-7xl font-black text-white">A</span>
              </div>
            )}
          </div>
        </div>

        {/* "Open to work" floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
            Open to opportunities
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-950 pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: Text ── */}
          <div>
            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm <span className="text-accent">Asitha</span>
              <span className="text-accent">.</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-5 flex items-center gap-2 min-h-[2rem]"
            >
              <span>I build</span>
              <span className="text-accent">
                <Typewriter
                  options={{
                    strings: [
                      "Mobile Apps",
                      "Desktop Software",
                      "Web Experiences",
                      "AI Solutions",
                      "Business Systems",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 60,
                    pauseFor: 1500,
                  }}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              Software Engineering student (3rd Year, OUSL) & IT Technician at
              New Lanka Clothing PVT(LTD). Passionate about Mobile &amp; Desktop
              development, Full-Stack Web, Ethical Hacking, and AI/NLP.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30 hover:-translate-y-0.5"
              >
                View Projects <FiArrowRight size={15} />
              </button>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

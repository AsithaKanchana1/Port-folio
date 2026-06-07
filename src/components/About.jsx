import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiBox,
  FiLayout,
  FiShield,
  FiMapPin,
  FiBook,
} from "react-icons/fi";

// Use the photo placed in `src/assets/tech-stack/me.jpeg`
import mePhoto from "../assets/tech-stack/me.jpeg";

const services = [
  { icon: FiLayout, title: "Front End", desc: "React, HTML, CSS, TypeScript" },
  { icon: FiCode, title: "Desktop Software", desc: "Tauri / Electron-style desktop apps" },
  { icon: FiSmartphone, title: "Mobile Apps", desc: "Android (Java), mobile integrations" },
  { icon: FiBook, title: "Microsoft 365", desc: "Excel automation, Office workflows" },
  { icon: FiBox, title: "Excel + Python", desc: "Automate Excel using Python scripts" },
  { icon: FiShield, title: "Computer Repair", desc: "Hardware & software repair (medium)" },
  { icon: FiMapPin, title: "Management", desc: "Managed 2 retail shops, 10 staff — customer service" },
  { icon: FiLayout, title: "Backend (learning)", desc: "Can build backends, currently improving proficiency" },
];

const ServiceCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-accent dark:hover:border-accent transition-all duration-200 group"
  >
      <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-200">
        <Icon
          size={20}
          className="text-accent group-hover:text-white transition-colors"
        />
    </div>
    <div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-base">
        {title}
      </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
    </div>
  </motion.div>
);

// Photo component — gracefully falls back to initials if photo isn't added yet
const ProfilePhoto = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl ring-4 ring-accent/20">
      {!imgError ? (
        <img
          src={mePhoto}
          alt="Asitha Kanchana"
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        // Fallback: gradient initials block
        <div className="w-full h-full bg-gradient-to-br from-accent via-purple-500 to-blue-500 flex flex-col items-center justify-center gap-1 select-none">
          <span className="text-6xl font-black text-white drop-shadow-lg">A</span>
          <span className="text-white/70 text-xs font-medium">Asitha K.</span>
        </div>
      )}
    </div>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          01 — About
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
          About Me
        </h2>
      </motion.div>

      {/* Photo + Bio row */}
      <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
        {/* ── Left: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-5"
        >
          {/* Photo with "Available" badge */}
          <div className="relative">
            <ProfilePhoto />
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-2.5 py-1 shadow-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                Available
              </span>
            </div>
          </div>

          {/* Name + role + quick facts */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-bold text-gray-900 dark:text-white text-lg leading-snug">
              Asitha Kanchana
            </p>
            <p className="text-sm text-accent font-medium">
              Software Engineering Student & IT Technician
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <FiMapPin size={13} className="text-accent shrink-0" />
                Sri Lanka 🇱🇰
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <FiBook size={13} className="text-accent shrink-0" />
                Open University of Sri Lanka — 3rd Year
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Terminal + bio ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          {/* Terminal block */}
          <div className="terminal mb-6">
            <div className="terminal-bar">
              <span className="terminal-dot bg-red-500" />
              <span className="terminal-dot bg-yellow-500" />
              <span className="terminal-dot bg-green-500" />
              <span className="ml-2 text-gray-500 text-xs font-mono">
                asitha ~ profile
              </span>
            </div>
            <div className="terminal-body text-sm space-y-0.5">
              <p>
                <span className="terminal-prompt">$ </span>
                <span className="terminal-string">cat about.json</span>
              </p>
              <div className="mt-2 space-y-0.5">
                <p>
                  <span className="terminal-key">name</span>: {" "}
                  <span className="terminal-value">"Asitha Kanchana"</span>
                </p>
                <p>
                  <span className="terminal-key">role</span>: {" "}
                  <span className="terminal-value">
                    "Software Engineering Student & IT Technician"
                  </span>
                </p>
                <p>
                  <span className="terminal-key">work</span>: {" "}
                  <span className="terminal-value">
                    "New Lanka Clothing PVT(LTD) — Building business management system"
                  </span>
                </p>
                <p>
                  <span className="terminal-key">focus</span>: {" "}
                  <span className="terminal-value">
                    ["HR Management", "Employee DB", "Payroll — in progress"]
                  </span>
                </p>
                <p>
                  <span className="terminal-key">skills</span>: {" "}
                  <span className="terminal-value">
                    ["Mobile", "Desktop", "Excel automation", "MS365"]
                  </span>
                </p>
                <p>
                  <span className="terminal-key">status</span>: {" "}
                  <span className="terminal-value">"Open to opportunities ✓"</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm a 3rd year Software Engineering student and currently working
            as an IT Technician at New Lanka Clothing PVT(LTD). I'm building a
            full-fledged business management system that includes HR
            Management, Inventory, Payroll and a Target Achievement system —
            with both mobile and desktop apps.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Right now I'm focusing on HR Management and the employee database;
            payroll management is an ongoing project. I can build desktop
            software, and I'm proficient with Microsoft 365 (Excel automation
            included). I also automate Excel using Python when needed.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Additionally I have medium experience in computer repair and have
            previously managed two mobile phone shops (10 staff) — giving me
            practical customer service and management experience. I'm open to
            new opportunities.
          </p>
        </motion.div>
      </div>

      {/* Services grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
          What I do
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;

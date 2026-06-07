import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiBriefcase,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import { ousl, ethicalhacker } from "../assets";

// ─── DATA ────────────────────────────────────────────────────────────────────
// To add new entries: update the arrays below.
// Each entry can have: title, org, date, type, icon, description[], link
// type: "work" | "education" | "certification"
// ─────────────────────────────────────────────────────────────────────────────

const workExperience = [
  {
    title: "IT Technician",
    org: "New Lanka Clothing PVT(LTD)",
    date: "Current",
    type: "work",
    description: [
      "Designing and building a full-fledge business management system for the company.",
      "Modules include: HR Management, Employee Database, Inventory Management, Payroll Management, and Target Achievement System.",
      "Developing both mobile apps and desktop applications for the management system.",
      "Currently focused on completing the HR Management module and Employee Database.",
      "Payroll Management is in active development.",
    ],
    link: null,
  },
  {
    title: "Manager",
    org: "Mobile Phone Retail Shops (2 branches)",
    date: "Past Experience",
    type: "work",
    description: [
      "Managed 2 mobile phone retail shops simultaneously with a team of 10 staff.",
      "Responsible for staff management, inventory, customer service, and daily operations.",
      "Developed strong skills in customer care, team leadership, and retail management.",
    ],
    link: null,
  },
];

const education = [
  {
    title: "BSc Software Engineering",
    org: "Open University of Sri Lanka",
    date: "Jan 2024 — Ongoing",
    type: "education",
    icon: ousl,
    description: [
      "Currently in the 3rd year of the Bachelor of Software Engineering program.",
      "Completing coursework in advanced programming, system architecture, databases, and software design.",
    ],
    link: null,
  },
  {
    title: "G.C.E. Advanced Level — Technology Stream",
    org: "R/EMB/Kularathna Central College, Godakawela",
    date: "2022",
    type: "education",
    description: [
      "Technology stream — subjects: IT, Engineering Technology, Science for Technology.",
      "Achieved C passes for all three subjects.",
    ],
    link: null,
  },
];

const certifications = [
  {
    title: "Cisco Certified Ethical Hacker",
    org: "Cisco Networking Academy",
    date: "8th July 2025",
    type: "certification",
    icon: ethicalhacker,
    description: [
      "Gained a solid foundation in network security and threat intelligence.",
      "Covered penetration testing phases, OWASP Top 10, and ethical hacking methodology.",
    ],
    link: "https://www.credly.com/badges/0be5c035-e2b8-4b8b-8bd0-a51e3ff5317a/public_url",
  },
  // ← Add more certifications here (same structure as above)
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const typeIcon = (type) => {
  if (type === "work") return FiBriefcase;
  if (type === "certification") return FiAward;
  return FiBookOpen;
};

const typeBadge = (type) => {
  const map = {
    work: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    education:
      "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    certification:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  };
  const label = {
    work: "Work",
    education: "Education",
    certification: "Certification",
  };
  return { cls: map[type] || map.education, label: label[type] || type };
};

const TimelineCard = ({ item, index, total }) => {
  const DefaultIcon = typeIcon(item.type);
  const badge = typeBadge(item.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="relative pl-9 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      {index < total - 1 && (
        <div className="absolute left-[13px] top-8 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      )}

      {/* Icon dot */}
      <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-accent bg-white dark:bg-gray-950 flex items-center justify-center overflow-hidden shrink-0">
        {item.icon ? (
          <img
            src={item.icon}
            alt={item.org}
            className="w-4 h-4 object-contain"
          />
        ) : (
          <DefaultIcon size={12} className="text-accent" />
        )}
      </div>

      {/* Card */}
      <div className="ml-3 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-accent/40 dark:hover:border-accent/40 transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-accent text-sm font-medium mt-0.5">{item.org}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
              {item.date}
            </span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="View certificate"
              >
                <FiExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Badge */}
        <span
          className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-3 ${badge.cls}`}
        >
          {badge.label}
        </span>

        {/* Bullet points */}
        <ul className="space-y-1">
          {item.description.map((pt, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      active
        ? "bg-accent text-white shadow-md shadow-accent/20"
        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
  >
    {children}
  </button>
);

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

const TABS = [
  { key: "work", label: "💼 Work Experience" },
  { key: "edu", label: "🎓 Education" },
  { key: "cert", label: "🏅 Certifications" },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const items =
    activeTab === "work"
      ? workExperience
      : activeTab === "edu"
        ? education
        : certifications;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            03 — Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
            Experience & Education
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            My professional experience, academic background, and certifications.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-10 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit"
        >
          {TABS.map((t) => (
            <TabButton
              key={t.key}
              active={activeTab === t.key}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </TabButton>
          ))}
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl"
          >
            {items.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                total={items.length}
              />
            ))}

            {/* Placeholder for certifications that are coming */}
            {activeTab === "cert" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-3 mt-6 p-4 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 text-center"
              >
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  More certifications coming soon. See{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    src/components/Experience.jsx
                  </code>{" "}
                  to add yours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;

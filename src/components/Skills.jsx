import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & DB',
    skills: ['Node.js', 'MongoDB', 'Firebase', 'REST APIs', 'Tauri'],
  },
  {
    category: 'Mobile',
    skills: ['Android (Java)', 'Android Studio', 'Google Maps SDK'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Linux', 'VS Code', 'Jira', 'ClickUp', 'NeoVim', 'nano', 'Eclipse', 'Netbeans'],
  },
  {
    category: 'Productivity & Media',
    skills: ['Microsoft 365', 'Excel automation', 'Excel + Python', 'Davinci Resolve', 'AI (base)'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'Canva', 'UI/UX Prototyping'],
  },
];

const SkillBadge = ({ name, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent transition-all duration-200 cursor-default"
  >
    {name}
  </motion.span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            02 — Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
            Tech Stack
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            Tools and technologies I work with regularly.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    delay={gi * 0.05 + si * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

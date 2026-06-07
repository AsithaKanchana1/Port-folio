import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { hiddensrilanka, manim } from "../assets";

const projects = [
  {
    name: "Hidden Sri Lanka",
    description:
      "Android native app that allows users to explore hidden travel destinations in Sri Lanka, suggesting places based on the user's current location using Firebase and Google Maps.",
    tags: ["Android", "Java", "Firebase", "University Project"],
    image: hiddensrilanka,
    github: "https://github.com/AsithaKanchana1/Hidden-Sri-Lanka",
    demo: null,
  },
  {
    name: "Manim Custom Script",
    description:
      "A custom Python script for Manim that generates mathematical animations based on user input, allowing for dynamic and interactive SVG-based visualizations.",
    tags: ["Python", "Manim", "Animation", "Open Source"],
    image: manim,
    github: "https://github.com/AsithaKanchana1/Manim_SVG_Animation",
    demo: null,
  },
];

const tagColors = {
  Android:
    "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  Java: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400",
  Firebase:
    "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400",
  Python: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  Manim:
    "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400",
  default: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
};

const getTagColor = (tag) => tagColors[tag] || tagColors.default;

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="group border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/10 hover:-translate-y-1"
  >
    {/* Project Image */}
    <div className="relative overflow-hidden h-52 bg-gray-100 dark:bg-gray-800">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
          <span className="text-4xl">{"</>"}</span>
        </div>
      )}
      {/* Overlay links */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-accent hover:text-white transition-colors"
            aria-label="View GitHub"
          >
            <FiGithub size={18} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-accent hover:text-white transition-colors"
            aria-label="View Demo"
          >
            <FiExternalLink size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Project Info */}
    <div className="p-5">
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
        {project.name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-md font-medium ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Footer */}
    {project.github && (
      <div className="px-5 pb-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors font-medium"
        >
          <FiGithub size={14} />
          View on GitHub
        </a>
      </div>
    )}
  </motion.div>
);

const Works = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
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
            04 — Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
            Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            A selection of things I've built.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

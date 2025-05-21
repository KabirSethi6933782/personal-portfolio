"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Animation variants for the parent and cards ---
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const projects = [
  {
    title: "Smart Home Automation",
    description: "IoT project for remote home monitoring and device control. Built with React, Node.js, and Azure IoT.",
    github: "https://github.com/yourusername/smart-home-automation",
    demo: "",
    tech: ["React", "Node.js", "Azure"],
  },
  {
    title: "Portfolio Website",
    description: "This portfolio site! Made with Next.js, Tailwind, and framer-motion for beautiful, responsive design.",
    github: "https://github.com/yourusername/personal-portfolio",
    demo: "",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  // Add more projects here...
];

export default function ProjectsSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={card}
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-black/70 rounded-2xl shadow-xl p-8 border border-gray-700 hover:border-blue-600 transition group"
          >
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-blue-700 text-white rounded-lg tracking-wide font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-xl"
                  aria-label="GitHub Repository"
                >
                  <FaGithub />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-xl"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

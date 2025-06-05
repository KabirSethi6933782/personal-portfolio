"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
    {
    title: "AI Knowledge Hub",
    tagline: "Internal Document Parser & Summarizer.",
    description:
      "A full-stack internal document management system that uses AI to extract and summarize uploaded documents. Built with a Spring Boot backend and Next.js frontend. Includes Apache Tika for parsing and OpenAI API for summaries, stored in a PostgreSQL database.",
    tech: ["Next.js", "Java", "Spring Boot", "OpenAI API", "PostgreSQL"],
    github: "https://github.com/KabirSethi6933782/ai-knowledge-hub",
    demo: "",
    image: "/projects/knowledge-hub.png",
  },
  {
    title: "AI-Powered Newsletter Generator",
    tagline: "Personalized newsletters with AI, made easy.",
    description:
      "Developed a user-friendly website with user profiles and dashboards. Users can input news/social sources, topics, keywords, locations, or industries to generate personalized newsletters and social media content using advanced AI techniques like Natural Language Processing (NLP).",
    tech: ["Python", "Django", "React", "OpenAI", "PostgreSQL"],
    github: "https://github.com/iaminhri/COSC-4P02",
    demo: "",
    image: "/projects/newsletter.png",
  },
  {
    title: "Ventii – Mental Health Startup",
    tagline: "Digital solutions to support mental wellness.",
    description:
      "Designed and developed the official website for Ventii, a mental health startup, with a modern UI, clear brand identity, and focus on engagement and accessibility.",
    tech: ["Next.js", "Tailwind", "Vercel", "OpenAI"],
    github: "",
    demo: "https://ventii.co",
    image: "/projects/ventii.png",
  },
  {
    title: "Second Chance Decor E-Commerce",
    tagline: "Online store for upcycled furniture.",
    description:
      "Designed and built an accessible, responsive e-commerce site for Second Chance Decor as part of my CiviConnect team. Focused on seamless shopping and donation experience.",
    tech: ["React", "Node.js", "SQL", "Figma"],
    github: "",
    demo: "https://www.secondchancedecor.ca",
    image: "/projects/secondchance.png",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function ProjectsSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      {/* Animated Header with Underline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
      >
        Projects
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mx-auto mt-2 h-1 w-16 bg-blue-400 origin-left rounded"
        />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={card}
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-white/90 dark:bg-black/70 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-300 dark:border-gray-700 hover:border-blue-600 transition group flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-48 flex items-center justify-center mb-4 bg-transparent">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={192}
                className="w-full h-48 object-contain rounded-lg mb-4 bg-white"
              />
            </div>
            {/* Project Info */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-base mb-2 italic">{project.tagline}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-[1rem]">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-blue-700 dark:bg-blue-600 text-white rounded-lg tracking-wide font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-xl"
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
                  className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition text-xl"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {/* VIEW MORE BUTTON */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2 mt-2">
          <a
            href="https://github.com/KabirSethi6933782?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

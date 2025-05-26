"use client";
import { motion } from "framer-motion";
import SkillsMarquee from "./SkillsMarquee";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="max-w-3xl mx-auto px-6 py-20 text-center bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg backdrop-blur-sm"
    >
      {/* Animated Header with Underline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        About Me
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mx-auto mt-2 h-1 w-16 bg-blue-400 origin-left rounded"
        />
      </motion.h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
        Hi, I am Kabir - With a degree in Computer Science and Business, I enjoy building software solutions that connect technology with real-world needs.<br /><br />
        I have hands-on experience with Python, Java, JavaScript, and DevOps tools like Docker and Git, and have worked on projects using React, Node.js, and cloud platforms such as AWS and Azure.<br /><br />
        My background in business and management helps me understand both technical and organizational goals. I’m eager to learn, collaborate, and contribute to a team where I can grow and help create impactful, scalable solutions.
      </p>

      {/* --- Tech Stack Marquee --- */}
      <SkillsMarquee />
    </motion.div>
  );
}

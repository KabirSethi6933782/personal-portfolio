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
      className="max-w-3xl mx-auto px-6 py-20 text-center"
    >
      {/* Animated Header with Underline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
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

      <p className="text-lg text-gray-300 leading-relaxed mb-10">
        Hi! I’m Kabir—a software developer with a background in computer science and business.<br /><br />
        I’m passionate about building intuitive and efficient digital experiences, with strengths in cloud, full-stack dev, and automation.<br />
        I love learning new technologies and collaborating with creative teams!
      </p>
      {/* --- Tech Stack Marquee --- */}
      <SkillsMarquee />
    </motion.div>
  );
}

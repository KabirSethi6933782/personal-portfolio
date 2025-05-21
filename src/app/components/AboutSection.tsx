"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="max-w-3xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Hi! I’m Kabir—a software developer with a background in computer science and business.<br /><br />
        I’m passionate about building intuitive and efficient digital experiences, with strengths in cloud, full-stack dev, and automation. I love learning new technologies and collaborating with creative teams!
      </p>
    </motion.div>
  );
}

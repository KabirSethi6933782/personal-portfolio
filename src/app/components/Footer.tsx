"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="w-full border-t border-neutral-700 py-8 flex flex-col items-center justify-center bg-black/80"
    >
      <div className="flex gap-6 mb-3">
        <a
          href="mailto:kabirsethi2002@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/kabir-sethi-826116197/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KabirSethi6933782"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>
      </div>
      <span className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Kabir Sethi. All rights reserved.
      </span>
    </motion.footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 max-w-6xl mx-auto">
      {/* Animated Avatar with Glow */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl"
        style={{
          boxShadow: "0 0 64px 8px #2563eb44, 0 8px 32px 0 #0006"
        }}
      >
        <Image
          src="/assets/avatar.png"
          alt="Kabir Sethi"
          width={192}
          height={192}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Animated Text + Typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        className="text-center md:text-left flex-1"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 min-h-[56px]">
          <Typewriter
            words={["Hi, I'm Kabir Sethi"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto md:mx-0">
          I’m a software developer with a passion for building smart, elegant, and efficient solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Link href="#projects" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #2563eb88" }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all text-lg"
            >
              View My Work
            </motion.button>
          </Link>
          <a
            href="/KabirSethi_Resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3 bg-neutral-800 text-white rounded-xl font-semibold shadow-lg hover:bg-neutral-900 transition-all text-lg"
          >
            <FaDownload className="text-lg" />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <a
            href="https://github.com/KabirSethi6933782"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kabir-sethi-826116197/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kabirsethi2002@gmail.com"
            aria-label="Email"
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

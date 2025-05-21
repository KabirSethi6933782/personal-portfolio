// components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800 pt-12 pb-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Name & About */}
        <div className="flex-1 min-w-[220px]">
          <div className="text-2xl font-bold text-white mb-2 tracking-tight">Kabir Sethi</div>
          <p className="text-gray-400 mb-6 max-w-xs">
            A passionate developer focused on creating impactful digital solutions and contributing to the tech community.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/KabirSethi6933782"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/kabir-sethi-826116197/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a
              href="mailto:kabirsethi2002@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <FaEnvelope className="text-2xl text-white" />
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            <Link href="/KabirSethi_Resume.pdf" download className="hover:underline">Resume</Link>
          </div>
        </div>

        {/* Right: Contact & Let's Connect */}
        <div className="flex-1 min-w-[180px] flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <a
              href="https://www.linkedin.com/in/kabir-sethi-826116197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Let's Connect</h3>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition text-white font-medium px-5 py-3 rounded-lg w-max"
            >
              <FaTelegramPlane className="text-lg" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kabir Sethi. All rights reserved.
      </div>
    </footer>
  );
}

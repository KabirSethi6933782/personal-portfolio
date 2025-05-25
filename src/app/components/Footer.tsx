import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      w-full
      bg-black/60
      backdrop-blur-md
      bg-gradient-to-t from-black/70 via-black/30 to-transparent
      border-t border-blue-500/20
      shadow-inner shadow-black/10
      pt-10 pb-4 px-3
      transition-all
    ">
      {/* Accent gradient bar at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-violet-600 mb-8 opacity-80"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-8">
        {/* Left: Name & About */}
        <div className="flex-1 min-w-[180px] text-center md:text-left">
          <div className="text-2xl font-bold text-white mb-2 tracking-tight">Kabir Sethi</div>
          <p className="text-gray-300 mb-6 max-w-xs mx-auto md:mx-0">
            A passionate developer focused on creating impactful digital solutions and contributing to the tech community.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/KabirSethi6933782"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md bg-neutral-800/80 hover:bg-neutral-700 transition"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/kabir-sethi-826116197/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md bg-neutral-800/80 hover:bg-neutral-700 transition"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a
              href="mailto:kabirsethi2002@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md bg-neutral-800/80 hover:bg-neutral-700 transition"
            >
              <FaEnvelope className="text-2xl text-white" />
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex-1 min-w-[160px] text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 items-center md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 text-gray-200">
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            <Link href="/KabirSethi_Resume.pdf" download className="hover:underline">Resume</Link>
          </div>
        </div>

        {/* Right: Contact & Let's Connect */}
        <div className="flex-1 min-w-[160px] flex flex-col gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <a
              href="https://www.linkedin.com/in/kabir-sethi-826116197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Letapos;s Connect</h3>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 transition text-white font-medium px-5 py-3 rounded-lg w-max mx-auto md:mx-0"
            >
              <FaTelegramPlane className="text-lg" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Kabir Sethi. All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-800/90 backdrop-blur-md border-b border-neutral-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="#hero" className="text-2xl font-extrabold text-white tracking-tight">
          Kabir Sethi
        </a>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors duration-200 text-gray-300 hover:text-yellow-300 pb-1"
            >
              {link.label}
            </a>
          ))}
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-2 p-2 rounded-full hover:bg-neutral-800 transition"
            aria-label="Toggle dark mode"
          >
            {mounted && (theme === "light" ? (
              <FaMoon size={22} className="text-yellow-400" />
            ) : (
              <FaSun size={22} className="text-white" />
            ))}
          </button>
        </div>
      </div>
    </nav>
  );
}

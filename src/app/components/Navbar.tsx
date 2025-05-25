"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <nav className="
        fixed top-0 left-0 w-full z-50
        bg-black/60
        backdrop-blur-md
        border-b border-blue-500/20
        shadow-md shadow-black/10
        transition-all
      ">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
          <a href="#hero" className="text-2xl font-extrabold text-white tracking-tight">
            Kabir Sethi
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium transition-colors duration-200 text-gray-200 hover:text-yellow-300 pb-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-2 p-2 rounded-full hover:bg-black/20 transition"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === "light" ? (
                <FaMoon size={22} className="text-yellow-400" />
              ) : (
                <FaSun size={22} className="text-white" />
              ))}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-black/20 transition"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === "light" ? (
                <FaMoon size={22} className="text-yellow-400" />
              ) : (
                <FaSun size={22} className="text-white" />
              ))}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-full hover:bg-black/20 transition"
              aria-label="Open menu"
            >
              <FaBars size={24} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Place overlay OUTSIDE the <nav> */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex flex-col">
          <div className="flex justify-end px-6 pt-6">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-black/30 transition"
              aria-label="Close menu"
            >
              <FaTimes size={26} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-16">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-white hover:text-yellow-300 transition drop-shadow-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="fixed top-[64px] left-0 w-full h-1 z-40 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-violet-600 opacity-80 pointer-events-none"></div>
    </>
  );
}

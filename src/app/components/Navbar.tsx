"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Toggle the theme class on the <html> element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
      <Link href="/">
        <span className="text-xl font-bold text-black dark:text-white">Kabir Sethi</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
        <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-4 px-3 py-1 border rounded text-sm text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}

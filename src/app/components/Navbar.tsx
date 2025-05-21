"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-black/60 border-b border-neutral-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="#hero" className="text-2xl font-extrabold text-white tracking-tight">
          Kabir Sethi
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors duration-200 text-gray-300 hover:text-yellow-300 pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

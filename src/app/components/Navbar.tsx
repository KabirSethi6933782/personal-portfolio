"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="backdrop-blur-md bg-black/60 border-b border-neutral-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        <span className="text-2xl font-extrabold text-white tracking-tight">Kabir Sethi</span>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-300 hover:text-yellow-300"
              } pb-1`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

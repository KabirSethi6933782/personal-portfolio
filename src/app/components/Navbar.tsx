'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-700 bg-black">
      <h1 className="text-xl font-bold text-white">Kabir Sethi</h1>
      <nav className="flex gap-6 text-white text-sm font-medium">
        <Link
          href="/"
          className={`hover:text-yellow-400 transition ${
            pathname === '/' ? 'text-yellow-400' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-yellow-400 transition ${
            pathname === '/about' ? 'text-yellow-400' : ''
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`hover:text-yellow-400 transition ${
            pathname === '/projects' ? 'text-yellow-400' : ''
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`hover:text-yellow-400 transition ${
            pathname === '/contact' ? 'text-yellow-400' : ''
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

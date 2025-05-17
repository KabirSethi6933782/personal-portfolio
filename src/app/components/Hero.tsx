"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 max-w-6xl mx-auto">
      {/* Left: Avatar */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
        <Image
          src="/assets/avatar.png" // ⬅️ You'll replace this with your actual cartoon image later
          alt="Kabir Sethi"
          width={192}
          height={192}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Text */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hey, I'm Kabir 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I’m a software developer with a passion for building smart, elegant, and efficient solutions.
        </p>
        <Link href="/projects">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
}

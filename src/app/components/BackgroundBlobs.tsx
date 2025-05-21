"use client";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full bg-blue-700 opacity-30 blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-6%] w-[400px] h-[400px] rounded-full bg-purple-600 opacity-25 blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[45%] w-[240px] h-[240px] rounded-full bg-pink-600 opacity-20 blur-2xl"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
    </div>
  );
}

"use client";

import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaJava } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3c873a" /> },
  { name: "Python", icon: <FaPython size={40} color="#ffd43b" /> },
  { name: "JavaScript", icon: <FaJs size={40} color="#f7df1e" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#e44d26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572b6" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#f14e32" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#A259FF" /> },
  { name: "Java", icon: <FaJava size={40} color="#007396" /> },
];

export default function SkillsMarquee() {
  return (
    <div className="py-12">
      {/* Tech Stack Heading */}
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Skills</h3>

      {/* Marquee */}
      <Marquee gradient={false} speed={40}>
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="flex flex-col items-center mx-10 min-w-[100px] opacity-80 hover:opacity-100 transition"
          >
            {skill.icon}
            <span className="mt-2 text-gray-700 dark:text-gray-300 text-lg">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:kabirsethi2002@gmail.com",
    classes: "bg-blue-700 hover:bg-blue-800",
    display: "kabirsethi2002@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/kabir-sethi-826116197/",
    classes: "bg-blue-700 hover:bg-blue-800",
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/KabirSethi6933782",
    classes: "bg-gray-800 hover:bg-gray-900",
    display: "GitHub",
  },
];

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="max-w-2xl mx-auto px-6 py-20 text-center"
    >
      {/* Animated Header with Underline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
      >
        Let’s Connect
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mx-auto mt-2 h-1 w-16 bg-blue-400 origin-left rounded"
        />
      </motion.h2>
      <p className="text-lg text-gray-300 mb-8">
        Whether you want to discuss a new project, collaborate, or just chat about tech—my inbox is always open.<br /><br />
        Drop me a message and I’ll get back to you soon!
      </p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col items-center gap-6"
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={contact.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 2px 24px 0 #38bdf8bb"
            }}
            className={`flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold shadow transition text-lg ${contact.classes}`}
          >
            {contact.icon} {contact.display}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

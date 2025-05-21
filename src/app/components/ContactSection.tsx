"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:youremail@example.com",
    classes: "bg-blue-700 hover:bg-blue-800",
    display: "youremail@example.com",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/yourlinkedin",
    classes: "bg-blue-700 hover:bg-blue-800",
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/yourgithub",
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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact</h2>
      <p className="text-lg text-gray-300 mb-8">
        Let’s work together! You can reach me anytime:
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
        {contacts.map((contact, idx) => (
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
            className={`flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold shadow transition text-lg ${contact.classes}`}
          >
            {contact.icon} {contact.display}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

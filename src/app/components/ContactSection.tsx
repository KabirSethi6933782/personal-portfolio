"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:kabirsethi2002@gmail.com",
    classes: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/kabir-sethi-826116197/",
    classes: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/KabirSethi6933782",
    classes: "bg-gray-800 hover:bg-gray-900 dark:bg-neutral-700 dark:hover:bg-neutral-600",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-md mx-auto px-6 py-10 mb-16 text-center bg-white/80 dark:bg-black/60 rounded-2xl shadow-lg backdrop-blur-sm"
      >
        {/* Animated Header with Underline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
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

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
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
          className="flex flex-row items-center justify-center gap-4"
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
                scale: 1.1,
                boxShadow: "0 2px 18px 0 #38bdf8bb",
              }}
              className={`flex items-center justify-center w-12 h-12 text-2xl text-white rounded-lg shadow transition ${contact.classes}`}
            >
              {contact.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

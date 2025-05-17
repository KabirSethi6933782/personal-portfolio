export default function ContactPage() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-4">
        I'm always open to freelance opportunities, collaborations, or just a friendly chat. Reach out through any of the
        platforms below!
      </p>

      <ul className="space-y-3 text-blue-600 dark:text-blue-400">
        <li>
          <a href="mailto:kabir@example.com" className="hover:underline">📧 kabir@example.com</a>
        </li>
        <li>
          <a href="https://github.com/KabirSethi6933782" target="_blank" rel="noopener noreferrer" className="hover:underline">
            💻 GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kabirsethi" target="_blank" rel="noopener noreferrer" className="hover:underline">
            🔗 LinkedIn Profile
          </a>
        </li>
      </ul>
    </main>
  );
}

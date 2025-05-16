export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
        Welcome, Kabir!
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Tailwind CSS is fully working 🔥
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        View Projects
      </button>
    </main>
  );
}

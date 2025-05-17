import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 text-xs px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <Link href={github} className="text-sm text-blue-600 hover:underline">
          GitHub →
        </Link>
        {demo && (
          <Link href={demo} className="text-sm text-green-600 hover:underline">
            Live Demo →
          </Link>
        )}
      </div>
    </div>
  );
}

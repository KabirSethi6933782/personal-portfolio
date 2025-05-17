import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI Resume Generator",
    description: "An AI-powered tool to generate resumes tailored to job descriptions.",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    github: "https://github.com/your-username/ai-resume",
    demo: "https://resume-ai.vercel.app",
  },
  {
    title: "Taskify App",
    description: "A simple Kanban task board for organizing personal projects.",
    tech: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/your-username/taskify",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
        Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}

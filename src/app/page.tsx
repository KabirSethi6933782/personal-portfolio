import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <div className="w-full overflow-hidden">
  <svg viewBox="0 0 500 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
    <path d="M0 20C80 60 160 0 250 20C340 40 420 0 500 20V40H0V20Z" fill="#0ea5e9" fillOpacity="0.08"/>
  </svg>
</div>

      <section id="projects">
        <ProjectsSection />
      </section>
      <div className="w-full overflow-hidden">
  <svg viewBox="0 0 500 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
    <path d="M0 20C80 60 160 0 250 20C340 40 420 0 500 20V40H0V20Z" fill="#0ea5e9" fillOpacity="0.08"/>
  </svg>
</div>

      <section id="contact" className="mt-20">
        <ContactSection />
      </section>
    </main>
  );
}

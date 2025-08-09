import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/config/profile";

const Projects = () => {
  const title = `Projetos | ${profile.name}`;
  const description = `Veja os projetos de ${profile.name}, ${profile.role}.`;

  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <Section title="Projetos" description="Trabalhos, estudos e open source.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Projects;

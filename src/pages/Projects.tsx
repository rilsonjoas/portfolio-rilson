import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/config/profile";

const Projects = () => {
  const title = `Projetos | ${profile.name}`;
  const description = `Veja os projetos de ${profile.name}, ${profile.role}.`;

  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <Section title="Projetos em Destaque" description="Projetos mais robustos, com full-stack, ML e banco de dados em produção.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      {others.length > 0 && (
        <Section title="Outros Projetos" description="Ferramentas e experimentos diversos.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
};

export default Projects;

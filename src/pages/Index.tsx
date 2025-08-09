import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { profile } from "@/config/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const title = `${profile.name} | ${profile.role}`;
  const description = `${profile.bio}`;
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const featured = projects.slice(0, 3);
  const skills = ["React", "TypeScript", "Tailwind", "shadcn-ui", "React Query", "Vite"];

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="container py-16 md:py-24">
        <p className="font-mono text-sm text-muted-foreground">Olá, eu sou</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{profile.role} — {profile.location}</p>
        <p className="mt-4 max-w-2xl text-muted-foreground">{profile.bio}</p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link to="/projects">Ver projetos</Link>
          </Button>
          <Button asChild variant="secondary">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </Button>
        </div>
      </header>

      <Section title="Skills" description="Tecnologias que uso no dia a dia.">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-md border px-2 py-1 text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
      </Section>

      <Section title="Projetos em destaque" description="Alguns projetos selecionados.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link to="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </Section>

      <Section title="Contato">
        <p className="text-muted-foreground">Interessado em colaborar? Envie um email para <a className="underline" href={profile.links.email}>{profile.links.email.replace("mailto:", "")}</a>.</p>
      </Section>
    </main>
  );
};

export default Index;

import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { profile } from "@/config/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ExternalLink } from "lucide-react";

const Index = () => {
  const title = `${profile.name} | ${profile.role}`;
  const description = `${profile.bio}`;
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const featured = projects.slice(0, 3);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* Hero Section */}
      <header className="container py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-muted-foreground animate-pulse">Olá, eu sou</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-muted-foreground">{profile.role}</p>
          <p className="mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Trabalho para produzir, construir e cultivar <span className="text-foreground font-medium">experiências cativantes e intuitivas</span> na web.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link to="/projects">
                Ver projetos
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="group w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Baixar CV
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section 
        title="Sobre Mim" 
        description="Conheça um pouco mais sobre minha trajetória e foco profissional."
        className="animate-slide-in-up"
      >
        <AboutSection profile={profile} />
      </Section>

      {/* Habilidades */}
      <Section 
        title="Habilidades Técnicas" 
        description="Tecnologias e ferramentas que utilizo para criar experiências excepcionais."
        className="animate-slide-in-up"
      >
        <SkillsSection skills={profile.skills} />
      </Section>

      {/* Projetos */}
      <Section 
        title="Projetos em Destaque" 
        description="Alguns projetos selecionados que demonstram minhas habilidades."
        className="animate-fade-in-scale"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, index) => (
            <div 
              key={p.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
            <Link to="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Vamos Conversar?" className="bg-muted/50 rounded-lg p-8 md:p-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Interessado em colaborar em um projeto ou apenas trocar uma ideia sobre desenvolvimento? 
            Ficarei feliz em conversar!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href={profile.links.email}>
                Enviar Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Index;

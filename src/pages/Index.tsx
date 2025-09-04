import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { profile } from "@/config/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

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
        {/*
          MUDANÇA AQUI:
          1. A ordem dos divs foi trocada (imagem primeiro, depois texto).
          2. A classe mudou para `md:flex-row-reverse` para inverter a ordem no desktop.
        */}
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left md:items-center md:justify-between gap-8 md:gap-12">
          {/* 1. Este bloco da imagem agora vem PRIMEIRO no código */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
            <div className="flex justify-center items-center h-full">
              <img
                src="/rilson.jpg"
                alt="Foto de Rilson Joas"
                className="rounded-full object-cover shadow-lg border-2 border-white w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          {/* Este bloco de texto agora vem DEPOIS no código */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <p className="font-mono text-sm text-muted-foreground animate-pulse">
              Olá, eu sou
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl text-muted-foreground">
              {profile.role}
            </p>
            <p className="mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Trabalho para produzir, construir e cultivar{" "}
              <span className="text-foreground font-medium">
                experiências cativantes e intuitivas
              </span>{" "}
              na web.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link to="/projects">
                  Ver projetos
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Link to="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Index;

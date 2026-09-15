import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Section } from "@/components/Section";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { profile } from "@/config/profile";
import { Button } from "@/components/ui/button";
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Check, 
  Copy, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Users 
} from "lucide-react";

const heroStats = [
  {
    icon: Layers,
    value: "15+",
    label: "Projetos Entregues",
    sub: "Web, Mobile, CLIs & ML",
  },
  {
    icon: CheckCircle2,
    value: "150+",
    label: "Testes Automatizados",
    sub: "CI/CD em Produção",
  },
  {
    icon: Users,
    value: "6 Devs",
    label: "Liderança Técnica",
    sub: "Equipe em Empresa Pública",
  },
  {
    icon: Code2,
    value: "5+ Anos",
    label: "Criando Software",
    sub: "Full-Stack & Dados",
  },
];

const Index = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = profile.links.email.replace("mailto:", "");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  const title = `${profile.name} | ${profile.role}`;
  const description = `${profile.bio}`;
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* Hero Section */}
      <header id="inicio" className="container py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left md:items-center md:justify-between gap-8 md:gap-12">
          {/* Foto de Perfil */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
            <div className="flex justify-center items-center h-full">
              <img
                src="/rilson.jpg"
                alt="Foto de Rilson Joas"
                className="rounded-full object-cover shadow-2xl border-4 border-background ring-2 ring-primary/20 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto do Hero */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponível para novos desafios e conexões
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              {profile.role}
            </p>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Trabalho para produzir, construir e cultivar{" "}
              <span className="text-foreground font-medium">
                experiências cativantes e sistemas escaláveis
              </span>{" "}
              na web, com foco em arquitetura corporativa em produção, integrações e inteligência de dados.
            </p>

            {/* Ações / CTAs */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start w-full">
              <Button asChild size="default" className="group shadow-md">
                <a href="#destaques">
                  Ver projetos
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="default">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="default"
                onClick={handleCopyEmail}
                className="transition-all"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar E-mail
                  </>
                )}
              </Button>
              <Button asChild variant="outline" size="default">
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Faixa de Métricas de Impacto (Social Proof) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-border/60">
          {heroStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/60 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </header>

      {/* About Section */}
      <Section
        id="sobre"
        title="Sobre Mim"
        description="Conheça um pouco mais sobre minha trajetória e foco profissional."
        className="animate-slide-in-up scroll-mt-16"
      >
        <AboutSection profile={profile} />
      </Section>

      {/* Habilidades */}
      <Section
        id="habilidades"
        title="Habilidades Técnicas"
        description="Tecnologias e ferramentas que utilizo para criar experiências excepcionais."
        className="animate-slide-in-up scroll-mt-16"
      >
        <SkillsSection skills={profile.skills} />
      </Section>

      {/* Seção Completa de Projetos (Destaques + Categorias + Busca) */}
      <section className="container py-12 md:py-20">
        <ProjectsSection />
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="container py-12 md:py-20 border-t border-border/60 scroll-mt-16">
        <ContactSection />
      </section>
    </main>
  );
};

export default Index;

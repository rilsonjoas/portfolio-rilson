import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  Building2, 
  Server, 
  Smartphone, 
  QrCode, 
  Scale, 
  ShieldCheck 
} from "lucide-react";
import type { Project } from "@/data/projects";

const getCorporateMeta = (project: Project) => {
  if (project.id === "11" || project.techStack.includes("React Native")) {
    return {
      icon: Smartphone,
      subtitle: "App Mobile Offline-First",
    };
  }
  if (project.id === "9") {
    return {
      icon: Server,
      subtitle: "Arquitetura ERP Corporativo",
    };
  }
  if (project.id === "10") {
    return {
      icon: QrCode,
      subtitle: "Gestão de Benefícios & QR Code",
    };
  }
  if (project.id === "14") {
    return {
      icon: Scale,
      subtitle: "Validação Financeira em Tempo Real",
    };
  }
  if (project.id === "13") {
    return {
      icon: ShieldCheck,
      subtitle: "Painel Administrativo MVC",
    };
  }
  return {
    icon: Building2,
    subtitle: "Sistema Corporativo",
  };
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const corporateMeta = getCorporateMeta(project);
  const BannerIcon = corporateMeta.icon;
  const hasActions = Boolean(project.githubUrl || project.liveUrl || project.storybookUrl);

  return (
    <article className="group h-full">
      <Card
        className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border shadow-sm flex flex-col ${
          project.featured
            ? "ring-1 ring-primary/20 bg-gradient-to-b from-background via-primary/[0.02] to-background"
            : "bg-card"
        }`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              {project.featured && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Sparkles className="size-3" />
                  Destaque
                </Badge>
              )}
              {project.professional && (
                <Badge 
                  variant="outline" 
                  className="gap-1 text-[11px] font-medium border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                >
                  <Building2 className="size-3" />
                  Empresa Pública
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 flex-1">
          {project.image ? (
            <div className="relative overflow-hidden rounded-md border">
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-md aspect-video w-full border border-border/60 bg-gradient-to-br from-muted/80 via-muted/30 to-muted/90 p-5 flex flex-col items-center justify-center text-center shadow-inner group-hover:border-primary/40 transition-all duration-300">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center gap-2.5">
                <div className="p-3.5 rounded-2xl bg-background border border-border/80 text-primary shadow-sm group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  <BannerIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wide text-foreground/90 uppercase font-mono">
                    {corporateMeta.subtitle}
                  </span>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Em Produção
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.highlightBadge && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
              <Sparkles className="size-3.5 shrink-0" />
              <span>{project.highlightBadge}</span>
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {hasActions && (
          <CardFooter className="mt-auto flex flex-wrap gap-2 pt-2 pb-5">
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group/btn hover:scale-105 transition-all duration-200"
                aria-label="Código no GitHub"
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                  Código
                </a>
              </Button>
            )}
            {project.storybookUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group/btn hover:scale-105 transition-all duration-200 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50"
                aria-label="Storybook no Chromatic"
              >
                <a href={project.storybookUrl} target="_blank" rel="noreferrer">
                  <BookOpen className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  Storybook
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                className="group/btn hover:scale-105 transition-all duration-200"
                aria-label="Projeto ao vivo"
              >
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  Live
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </article>
  );
};

export default ProjectCard;

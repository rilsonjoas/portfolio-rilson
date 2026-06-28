import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group h-full">
      <Card
        className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] border-0 shadow-md ${
          project.featured
            ? "ring-1 ring-primary/20 bg-gradient-to-b from-background via-primary/[0.02] to-background"
            : ""
        }`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            {project.featured && (
              <Badge variant="secondary" className="shrink-0 gap-1 text-xs">
                <Sparkles className="size-3" />
                Destaque
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.image && (
            <div className="relative overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                loading="lazy"
                className="aspect-video w-full border object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex gap-2 pt-4">
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
      </Card>
    </article>
  );
};

export default ProjectCard;

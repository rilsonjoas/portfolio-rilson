import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group h-full">
      <Card className="h-full overflow-hidden transition-transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.image && (
            <img
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              loading="lazy"
              className="aspect-video w-full rounded-md border object-cover"
            />
          )}
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-md border px-2 py-1 text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex gap-2">
          {project.githubUrl && (
            <Button asChild variant="secondary" size="sm" aria-label="Código no GitHub">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Código
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="sm" aria-label="Projeto ao vivo">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
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

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] border-0 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
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
            {project.techStack.map((tech, index) => (
              <span 
                key={tech} 
                className="rounded-full border px-3 py-1 text-xs text-muted-foreground bg-muted/50 hover:bg-muted transition-colors duration-200"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: 'translateY(10px)',
                  opacity: 0,
                  animation: 'slideInUp 0.5s ease-out forwards'
                }}
              >
                {tech}
              </span>
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

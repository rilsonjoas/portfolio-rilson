export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Landing Page Responsiva",
    description: "Landing page moderna e responsiva desenvolvida com React e Tailwind CSS, focada em conversão e experiência do usuário.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/rilsonjoas/landing-page",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Dashboard de Projetos",
    description: "Interface intuitiva para gerenciamento de projetos freelancer com design system personalizado.",
    techStack: ["React", "TypeScript", "shadcn/ui", "Bootstrap"],
    githubUrl: "https://github.com/rilsonjoas/projects-dashboard",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Aplicação Web Interativa",
    description: "Single Page Application com foco em performance e acessibilidade, utilizando as melhores práticas do React.",
    techStack: ["React", "JavaScript ES6+", "CSS3", "Git"],
    githubUrl: "https://github.com/rilsonjoas/interactive-app",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Componentes Reutilizáveis",
    description: "Biblioteca de componentes UI moderna e acessível, desenvolvida com foco na experiência do desenvolvedor.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    githubUrl: "https://github.com/rilsonjoas/ui-components",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
];

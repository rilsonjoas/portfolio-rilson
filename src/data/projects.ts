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
    title: "Dashboard de Vendas",
    description: "Dashboard interativo com React, Recharts e React Query.",
    techStack: ["React", "TypeScript", "Recharts", "React Query", "Vite"],
    githubUrl: "https://github.com/seuusuario/projeto-dashboard",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Design System com Shadcn",
    description: "Biblioteca de componentes com shadcn-ui e Tailwind.",
    techStack: ["React", "Tailwind", "shadcn-ui", "Vite"],
    githubUrl: "https://github.com/seuusuario/design-system",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "API Client e Hooks",
    description: "Camada de dados com hooks reutilizáveis e cache.",
    techStack: ["React", "TypeScript", "React Query"],
    githubUrl: "https://github.com/seuusuario/api-client",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
];

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
    title: "Removedor de Comentário em Código",
    description: "Ferramenta web que remove comentários de código-fonte em mais de 20 linguagens de programação. Interface inspirada em terminal, processamento rápido via RegEx e design responsivo. Ideal para obter versões limpas de códigos.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+"],
    githubUrl: "https://github.com/rilsonjoas/RemovedorDeComentarios",
    liveUrl: "https://rilsonjoas.github.io/RemovedorDeComentarios/",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "PlantDiseaseAI - Detecção de Doenças em Plantas com IA",
    description: "Website interativo que apresenta pesquisa científica sobre detecção de doenças em plantas usando Machine Learning e Deep Learning. Inclui análise comparativa de modelos, gráficos interativos, metodologia detalhada e resultados com alta acurácia.",
    techStack: ["Next.js", "React", "TypeScript", "Recharts", "CSS"],
    githubUrl: "https://github.com/rilsonjoas/deteccao-doencas-plantas-site",
    liveUrl: "https://deteccao-doencas-plantas-site.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Gerador de Citações C. S. Lewis",
    description: "Aplicação web interativa que gera citações inspiradoras de C. S. Lewis, exibindo fonte e link para compra do livro. Interface elegante, responsiva e moderna, construída com Next.js, TypeScript e Tailwind CSS.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Next/Font"],
    githubUrl: "https://github.com/rilsonjoas/GeradorCSLewis",
    liveUrl: "https://gerador-cs-lewis.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "HelloWorld Generator",
    description: "Ferramenta web interativa que gera o código 'Hello, World!' para mais de 25 linguagens de programação. Interface inspirada em terminal, suporte a internacionalização (i18n) e funcionalidade de cópia rápida.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Google Fonts"],
    githubUrl: "https://github.com/rilsonjoas/HelloWorldGenerator",
    liveUrl: "https://rilsonjoas.github.io/HelloWorldGenerator/",
    image: "/placeholder.svg",
  },
  
];

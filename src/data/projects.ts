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
    title: "Alternativas BR",
    description:
      "Plataforma curada para descobrir softwares e serviços nacionais que rivalizam com as melhores ferramentas internacionais. Fortalece o ecossistema tech brasileiro com catálogo de 25+ produtos 100% brasileiros.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/rilsonjoas/alternativas-br",
    liveUrl: "https://www.alternativasbr.com.br/",
    image: "/alternativas.png",
  },
  {
    id: "2",
    title: "PlantDiseaseAI - Detecção de Doenças em Plantas com IA",
    description:
      "Website interativo que apresenta pesquisa científica sobre detecção de doenças em plantas usando Machine Learning e Deep Learning. Inclui análise comparativa de modelos, gráficos interativos, metodologia detalhada e resultados com alta acurácia.",
    techStack: ["Next.js", "React", "TypeScript", "Recharts", "CSS"],
    githubUrl: "https://github.com/rilsonjoas/deteccao-doencas-plantas-site",
    liveUrl: "https://deteccao-doencas-plantas-site.vercel.app/",
    image: "/PlantDiseaseAI.png",
  },
  {
    id: "3",
    title: "Teste Político 8 Valores",
    description:
      "Questionário político que tenta atribuir porcentagens para oito valores políticos diferentes e gerar resultados (com imagens).",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    githubUrl: "https://github.com/rilsonjoas/TestePolitico",
    liveUrl: "https://www.testepolitico.com.br/",
    image: "/Teste Político 8 Valores.png",
  },
  {
    id: "4",
    title: "A Bancada Evangélica",
    description:
      "Plataforma de transparência que monitora se os membros da Frente Parlamentar Evangélica votam como pregam. Ranking com 514 deputados scorados, análise ML de clusters de votação (KMeans/PCA), scoring híbrido com 5 critérios, 7.500+ votos reais sincronizados da API da Câmara e análise de gastos parlamentares.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Python", "scikit-learn"],
    githubUrl: "https://github.com/rilsonjoas/a-bancada-evangelica",
    liveUrl: "https://a-bancada-evangelica.vercel.app/",
    image: "/a-bancada-evangelica.png",
  },
  {
    id: "5",
    title: "HelloWorld Generator",
    description:
      "Ferramenta web interativa que gera o código 'Hello, World!' para mais de 25 linguagens de programação. Interface inspirada em terminal, suporte a internacionalização (i18n) e funcionalidade de cópia rápida.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Google Fonts"],
    githubUrl: "https://github.com/rilsonjoas/HelloWorldGenerator",
    liveUrl: "https://rilsonjoas.github.io/HelloWorldGenerator/",
    image: "/HelloWorld Generator.png",
  },
   {
    id: "6",
    title: "Gerador de Citações C. S. Lewis",
    description:
      "Aplicação web interativa que gera citações inspiradoras de C. S. Lewis, exibindo fonte e link para compra do livro. Interface elegante, responsiva e moderna, construída com Next.js, TypeScript e Tailwind CSS.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Next/Font",
    ],
    githubUrl: "https://github.com/rilsonjoas/GeradorCSLewis",
    liveUrl: "https://gerador-cs-lewis.vercel.app/",
    image: "/Gerador de Citações C. S. Lewis.png",
  },
  {
    id: "7",
    title: "Removedor de Comentário em Código",
    description:
      "Ferramenta web que remove comentários de código-fonte em mais de 20 linguagens de programação. Interface inspirada em terminal, processamento rápido via RegEx e design responsivo. Ideal para obter versões limpas de códigos.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+"],
    githubUrl: "https://github.com/rilsonjoas/RemovedorDeComentarios",
    liveUrl: "https://removedor-de-comentarios.vercel.app/",
    image: "/RemovedorDeComentarios.png",
  },
  {
    id: "8",
    title: "Quiz Denominacional",
    description:
      "Um quiz interativo projetado para ajudar os usuários a descobrir ou testar conhecimentos sobre diferentes denominações cristãs, com uma interface amigável e resultados dinâmicos.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rilsonjoas/QuizDenominacional", 
    liveUrl: "https://quiz-denominacional.vercel.app/",
    image: "/quiz-denominacional.png", 
  }
];

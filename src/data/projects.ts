export type ProjectCategory = "corporativo" | "politica" | "cultura" | "ferramentas";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  storybookUrl?: string;
  image?: string;
  featured?: boolean;
  professional?: boolean;
  highlightBadge?: string;
};

export const projectCategories: { id: ProjectCategory; label: string; description: string }[] = [
  {
    id: "corporativo",
    label: "Sistemas corporativos",
    description: "Sistemas internos de grande escala, arquitetura corporativa, migrações de banco e impacto real em produção."
  },
  {
    id: "politica",
    label: "Política",
    description: "Plataformas de transparência cívica, análise de votos parlamentares e modelos de Machine Learning."
  },
  {
    id: "cultura",
    label: "Cultura",
    description: "Projetos dedicados à literatura, história, arte sacra, design systems litúrgicos e preservação."
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    description: "Aplicações de produtividade, ecossistema tech nacional, IA aplicada e utilitários interativos."
  },
];

export const projects: Project[] = [
  {
    id: "16",
    title: "Lecionário — PWA & Design System",
    description:
      "Aplicação devocional litúrgica offline-first construída com Next.js 14, TypeScript e Tailwind CSS. Inclui Design System completo documentado no Storybook e publicado via Chromatic com 20 estórias cobrindo 6 componentes principais, esquemas de cores litúrgicas dinâmicas (Advento, Quaresma, Páscoa, Tempo Comum) e auditoria de Acessibilidade por componente no Storybook (axe-core). A acessibilidade do app foi auditada contra a WCAG 2.2 AA com contraste medido token a token, em modo claro e escuro e nas sete estações litúrgicas. Conta também com app mobile Expo e sincronização offline-first.",
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Storybook 10", "Chromatic", "WCAG 2.2 AA", "PWA", "Expo / React Native", "Docker", "Traefik"],
    category: "cultura",
    githubUrl: "https://github.com/rilsonjoas/lecionario",
    liveUrl: "https://lecionario.narniano.com",
    storybookUrl: "https://6aa06cf7b78086dc2c90cdd0-qbdvaubjmo.chromatic.com/",
    image: "/lecionario.png",
    featured: true,
    highlightBadge: "Storybook 10 • WCAG 2.2 AA • Chromatic",
  },
  {
    id: "4",
    title: "A Bancada Evangélica",
    description:
      "Plataforma de transparência que monitora se os membros da Frente Parlamentar Evangélica votam como pregam. Ranking com 514 deputados scorados, análise ML de clusters de votação (KMeans/PCA), scoring híbrido com 5 critérios, 7.500+ votos reais sincronizados da API da Câmara e análise de gastos parlamentares. Backend e serviços de ML hospedados no VPS Hetzner com Docker e Traefik.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Python", "scikit-learn", "Docker", "Traefik"],
    category: "politica",
    githubUrl: "https://github.com/rilsonjoas/a-bancada-evangelica",
    liveUrl: "https://a-bancada-evangelica.vercel.app/",
    image: "/a-bancada-evangelica.png",
    featured: true,
    highlightBadge: "Machine Learning (KMeans/PCA) • 7.5k+ Votos",
  },
  {
    id: "9",
    title: "ERP Corporativo — Gestão Interna",
    description:
      "Sistema interno com 4 módulos em produção: gestão de funcionários, controle de credenciamento com documentos em PDF, estacionamento com QR Code e precificação de produtos. 150+ testes (Vitest + Cypress + Jest), CI/CD com GitHub Actions, monitoramento via Sentry e deploy em ambientes separados de homologação e produção. Liderança na investigação de um bug crítico de performance em produção (99% de CPU, causa raiz em subqueries correlacionadas) e na migração completa de banco de dados (SQL Server → PostgreSQL) já concluída em produção, além de arquitetura de backup com redundância geográfica entre servidores.",
    techStack: ["React 19", "Vite", "Node.js", "Express", "PostgreSQL 16", "Docker", "GitHub Actions", "Sentry"],
    category: "corporativo",
    featured: false,
    professional: true,
    highlightBadge: "150+ Testes (Vitest/Jest/Cypress) • Sentry • Migração Postgres",
  },
  {
    id: "15",
    title: "Bíblia na Arte",
    description:
      "Catálogo curado conectando ~850 pinturas a passagens bíblicas específicas, com auditoria própria de direitos autorais sobre um acervo de quase mil obras (domínio público, licenciamento explícito ou exclusão, artista a artista). Self-hosted num VPS próprio (Docker + Traefik + Postgres), com API REST em Fastify + Drizzle ORM, busca full-text em português e pipeline de dados que popula o banco direto do catálogo curado.",
    techStack: ["React", "TypeScript", "Vite", "Fastify", "Drizzle ORM", "PostgreSQL", "Docker", "Traefik"],
    category: "cultura",
    githubUrl: "https://github.com/rilsonjoas/biblia-na-arte",
    liveUrl: "https://biblianaarte.narniano.com",
    image: "/BiblianaArte.png",
    featured: true,
    highlightBadge: "Fastify + Drizzle ORM • 850+ Obras • VPS Traefik",
  },
  {
    id: "11",
    title: "App Mobile Corporativo — Entregas Offline-First",
    description:
      "Aplicativo mobile criado do zero com React Native e Expo para motoristas de logística. Arquitetura offline-first com WatermelonDB — sincroniza entregas, GPS e scanner de documentos mesmo sem conexão. Build automatizado com EAS Build e monitoramento com Sentry. Desenvolvido, testado e colocado em produção por mim, do design à loja.",
    techStack: ["React Native", "Expo", "WatermelonDB", "EAS Build", "Sentry", "GitHub Actions"],
    category: "corporativo",
    featured: false,
    professional: true,
    highlightBadge: "WatermelonDB (Offline-First) • Sentry • EAS Build",
  },
  {
    id: "10",
    title: "Sistema de Gestão de Benefícios",
    description:
      "Sistema de gestão de benefícios alimentares para funcionários de uma empresa pública, em produção desde 2024. Controla distribuição de créditos por horário e dia da semana, geração de QR Code para pagamento, exportação de relatórios e monitoramento de transações em tempo real. Múltiplos perfis de acesso com permissões granulares, camadas de validação financeira e um piloto completo de migração de banco de dados (SQL Server → PostgreSQL) rodando em Docker — prova de conceito que embasou a decisão de migrar o ERP corporativo principal.",
    techStack: ["Node.js", "Express", "SQL Server", "JavaScript", "QRCode", "ExcelJS", "Winston", "node-cron", "bcrypt", "PM2"],
    category: "corporativo",
    featured: false,
    professional: true,
    highlightBadge: "QR Code Transacional • Validação Financeira • PM2",
  },
  {
    id: "14",
    title: "Sistema de Controle de Peso em Logística",
    description:
      "Um sistema de romaneios de carga não validava o peso dos veículos — campos existiam no cadastro mas eram ignorados pelo código, permitindo exceder a capacidade máxima sem aviso. Identifiquei esse problema de segurança que ninguém tinha notado e implementei validação ponta a ponta: hierarquia de cálculo em 3 níveis no backend, bloqueio de salvamento acima da capacidade, e feedback visual em tempo real no frontend. Levantamento e implementação em 2 semanas, entregue e deployado em homologação pra outra equipe de desenvolvimento.",
    techStack: ["TypeScript", "API REST", "Validação Financeira"],
    category: "corporativo",
    featured: false,
    professional: true,
    highlightBadge: "Hierarquia de Cálculo 3 Níveis • Bloqueio em Tempo Real",
  },
  {
    id: "13",
    title: "Painel Administrativo — Substituição de CMS Terceirizado",
    description:
      "Após o fim de um contrato com uma agência terceirizada, uma organização perdeu acesso ao CMS usado pra atualizar seu site institucional. Liderei a construção de um painel administrativo próprio do zero (PHP, MVC customizado), cobrindo os módulos de conteúdo mais frequentes (notícias, licitações, banners, relatórios), eliminando a dependência de fornecedor externo.",
    techStack: ["PHP", "MySQL", "PDO", "MVC"],
    category: "corporativo",
    featured: false,
    professional: true,
    highlightBadge: "Arquitetura MVC em PHP • Zero Dependência de Fornecedor",
  },
  {
    id: "3",
    title: "Teste Político 8 Valores",
    description:
      "Questionário político que tenta atribuir porcentagens para oito valores políticos diferentes e gerar resultados (com imagens).",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    category: "politica",
    githubUrl: "https://github.com/rilsonjoas/TestePolitico",
    liveUrl: "https://www.testepolitico.com.br/",
    image: "/Teste Político 8 Valores.png",
    featured: false,
  },
  {
    id: "6",
    title: "Gerador de Citações C. S. Lewis",
    description:
      "Aplicação web interativa que gera citações inspiradoras de C. S. Lewis, exibindo fonte e link para compra do livro. Interface elegante, responsiva e moderna, construída com Next.js, TypeScript e Tailwind CSS, migrada e hospedada em VPS próprio Hetzner com Docker e Traefik.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Docker",
      "Traefik",
    ],
    category: "cultura",
    githubUrl: "https://github.com/rilsonjoas/GeradorCSLewis",
    liveUrl: "https://cslewis.narniano.com",
    image: "/Gerador de Citações C. S. Lewis.png",
    featured: false,
    highlightBadge: "Self-Hosted Hetzner • Docker + Traefik",
  },
  {
    id: "12",
    title: "C. S. Lewis Wisdom",
    description:
      "CLI publicada no npm que exibe citações multilíngues (PT/EN/ES) de C. S. Lewis diretamente no terminal. Build com TypeScript, pipeline de CI/CD para publicação automática no npm registry.",
    techStack: ["TypeScript", "Node.js", "npm", "CLI", "CI/CD"],
    category: "cultura",
    githubUrl: "https://github.com/rilsonjoas/cslewis-wisdom",
    liveUrl: "https://www.npmjs.com/package/cslewis-wisdom",
    featured: false,
    image: "/cslewis-wisdom.png",
    highlightBadge: "Pacote CLI no npm • Pipeline de CI/CD",
  },
  {
    id: "8",
    title: "Quiz Denominacional",
    description:
      "Um quiz interativo projetado para ajudar os usuários a descobrir ou testar conhecimentos sobre diferentes denominações cristãs, com uma interface amigável e resultados dinâmicos.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "cultura",
    githubUrl: "https://github.com/rilsonjoas/QuizDenominacional",
    liveUrl: "https://quiz-denominacional.vercel.app/",
    image: "/quiz-denominacional.png",
    featured: false,
  },
  {
    id: "19",
    title: "Portal Narniano.com",
    description:
      "Portal cultural e ensaístico fundado em 2020, focado na obra de C. S. Lewis, literatura fantástica, cultura pop e ensaios sobre cosmovisão cristã. Mais de 5 anos de produção contínua de conteúdo e audiência engajada.",
    techStack: ["WordPress", "PHP", "SEO", "CMS", "Content Strategy"],
    category: "cultura",
    liveUrl: "https://narniano.com",
    featured: false,
    image: "/Narniano.png",
    highlightBadge: "5+ Anos no Ar • SEO & Estratégia de Conteúdo",
  },
  {
    id: "1",
    title: "Alternativas BR",
    description:
      "Plataforma curada para descobrir softwares e serviços nacionais que rivalizam com as melhores ferramentas internacionais. Fortalece o ecossistema tech brasileiro com catálogo de 25+ produtos 100% brasileiros.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "ferramentas",
    githubUrl: "https://github.com/rilsonjoas/alternativas-br",
    liveUrl: "https://www.alternativasbr.com.br/",
    image: "/alternativas.png",
    featured: false,
    highlightBadge: "25+ Softwares Nacionais • Curadoria de Produtos",
  },
  {
    id: "2",
    title: "PlantDiseaseAI - Detecção de Doenças em Plantas com IA",
    description:
      "Website interativo que apresenta pesquisa científica sobre detecção de doenças em plantas usando Machine Learning e Deep Learning. Inclui análise comparativa de modelos, gráficos interativos, metodologia detalhada e resultados com alta acurácia.",
    techStack: ["Next.js", "React", "TypeScript", "Recharts", "CSS"],
    category: "ferramentas",
    githubUrl: "https://github.com/rilsonjoas/deteccao-doencas-plantas-site",
    liveUrl: "https://deteccao-doencas-plantas-site.vercel.app/",
    image: "/PlantDiseaseAI.png",
    featured: false,
    highlightBadge: "Deep Learning (CNN) • Comparativo de Modelos • Recharts",
  },
  {
    id: "7",
    title: "Removedor de Comentário em Código",
    description:
      "Ferramenta web que remove comentários de código-fonte em mais de 20 linguagens de programação. Interface inspirada em terminal, processamento rápido via RegEx e design responsivo. Ideal para obter versões limpas de códigos.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+"],
    category: "ferramentas",
    githubUrl: "https://github.com/rilsonjoas/RemovedorDeComentarios",
    liveUrl: "https://removedor-de-comentarios.vercel.app/",
    image: "/RemovedorDeComentarios.png",
    featured: false,
  },
  {
    id: "5",
    title: "HelloWorld Generator",
    description:
      "Ferramenta web interativa que gera o código 'Hello, World!' para mais de 25 linguagens de programação. Interface inspirada em terminal, suporte a internacionalização (i18n) e funcionalidade de cópia rápida.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Google Fonts"],
    category: "ferramentas",
    githubUrl: "https://github.com/rilsonjoas/HelloWorldGenerator",
    liveUrl: "https://rilsonjoas.github.io/HelloWorldGenerator/",
    image: "/HelloWorld Generator.png",
    featured: false,
  },
];

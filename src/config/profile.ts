export const profile = {
  name: "Rilson Joás",
  role: "Desenvolvedor Full-Stack",
  location: "Recife, Brasil",
  bio: "Desenvolvo sistemas web completos — do banco de dados ao frontend — com foco em dados reais e integrações complexas. Lidero o desenvolvimento de software em uma empresa pública, graduando em Ciência da Computação na UFRPE.",
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Python 3", "PHP", "SQL", "HTML5", "CSS3"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "Shadcn/UI", "Storybook", "PWA", "WCAG (Acessibilidade)"],
    mobile: ["React Native", "Expo", "WatermelonDB", "EAS Build"],
    backend: ["NestJS", "Fastify", "Node.js", "Express.js", "FastAPI", "Laravel", "Drizzle ORM", "Prisma", "PostgreSQL", "MySQL", "SQL Server", "Supabase", "Firebase"],
    datascience: ["scikit-learn", "Pandas", "NumPy", "TensorFlow & Keras"],
    machinelearning: ["KMeans / PCA", "CNN (Redes Neurais Convolucionais)", "Machine Learning Clássico"],
    datavisualization: ["Recharts", "Matplotlib", "Seaborn"],
    imageprocessing: ["OpenCV", "Scikit-image", "PIL/Pillow"],
    tools: ["Docker", "Docker Compose", "Traefik", "GitHub Actions", "Git", "Sentry", "Vitest", "Cypress", "Jest", "Uptime Kuma", "PM2", "Vercel", "Railway", "pnpm", "GLPI", "Vaultwarden"]
  },
  experience: {
    current: "Líder Técnico de Desenvolvimento",
    company: "Empresa Pública",
    level: "Full-Stack Developer",
    focus: "Sistemas internos, integrações e liderança de equipe de desenvolvimento",
    specialties: [
      "Liderança de equipe (3 devs + 2 estagiários + 1 jovem aprendiz)",
      "Arquitetura de sistemas internos de grande escala",
      "Integrações com APIs e sistemas legados",
      "Migração de banco de dados em produção (SQL Server → PostgreSQL)",
      "Troubleshooting de infraestrutura além do código (rede, firewall, DNS)",
      "NestJS + PostgreSQL em produção",
      "Machine Learning aplicado a dados reais",
    ],
    technologies: ["NestJS", "Node.js", "PostgreSQL", "React", "TypeScript", "Python", "scikit-learn", "Prisma"]
  },
  links: {
    github: "https://github.com/rilsonjoas",
    linkedin: "https://www.linkedin.com/in/rilson-joas/",
    instagram: "https://www.instagram.com/rilsonjoas",
    email: "mailto:rilsonjoas10@gmail.com",
    artecristadiaria: "https://www.instagram.com/artecristadiaria",
    narniano: "https://narniano.com",
  },
};

export type Profile = typeof profile;

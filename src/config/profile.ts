export const profile = {
  name: "Rilson Joás",
  role: "Desenvolvedor Full-Stack",
  location: "Recife, Brasil",
  bio: "Desenvolvo sistemas web completos — do banco de dados ao frontend — com foco em dados reais e integrações complexas. Lidero o desenvolvimento de software em uma empresa pública, graduando em Ciência da Computação na UFRPE.",
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Python 3", "HTML5", "CSS3"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "Shadcn/UI"],
    mobile: ["React Native", "Expo"],
    backend: ["NestJS", "Node.js", "Express.js", "FastAPI", "Prisma", "PostgreSQL", "SQL Server"],
    datascience: ["scikit-learn", "Pandas", "NumPy", "TensorFlow & Keras"],
    machinelearning: ["KMeans / PCA", "CNN (Redes Neurais Convolucionais)", "Machine Learning Clássico"],
    datavisualization: ["Recharts", "Matplotlib", "Seaborn"],
    imageprocessing: ["OpenCV", "Scikit-image", "PIL/Pillow"],
    tools: ["Git", "GitHub Actions", "Docker", "Railway", "Vercel", "Vite", "pnpm", "VS Code", "Jupyter Notebook", "GLPI", "Vaultwarden"]
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
      "NestJS + PostgreSQL em produção",
      "Machine Learning aplicado a dados reais",
    ],
    technologies: ["NestJS", "Node.js", "PostgreSQL", "React", "TypeScript", "Python", "scikit-learn", "Prisma"]
  },
  links: {
    github: "https://github.com/rilsonjoas",
    linkedin: "https://www.linkedin.com/in/rilson-joas/",
    email: "mailto:rilsonjoas10@gmail.com",
  },
};

export type Profile = typeof profile;

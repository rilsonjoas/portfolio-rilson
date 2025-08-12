import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    datascience: string[];
    machinelearning: string[];
    datavisualization: string[];
    imageprocessing: string[];
    tools: string[];
    concepts: string[];
  };
}

export const SkillsSection = ({ skills }: SkillsProps) => {
  const skillCategories = [
    {
      title: "Linguagens",
      items: skills.languages,
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Frontend",
      items: skills.frontend,
      color: "bg-green-500/10 text-green-700 dark:text-green-300"
    },
    {
      title: "Backend & Dados",
      items: skills.backend,
      color: "bg-red-500/10 text-red-700 dark:text-red-300"
    },
    {
      title: "Data Science & AI",
      items: skills.datascience,
      color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
    },
    {
      title: "Machine Learning",
      items: skills.machinelearning,
      color: "bg-pink-500/10 text-pink-700 dark:text-pink-300"
    },
    {
      title: "Visualização de Dados",
      items: skills.datavisualization,
      color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
    },
    {
      title: "Processamento de Imagem",
      items: skills.imageprocessing,
      color: "bg-teal-500/10 text-teal-700 dark:text-teal-300"
    },
    {
      title: "Ferramentas",
      items: skills.tools,
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
    },
    {
      title: "Conceitos",
      items: skills.concepts,
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    }
  ];

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skillCategories.map((category, index) => (
        <Card 
          key={category.title} 
          className="p-0 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIndex) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className={`${category.color} transform transition-all duration-200 hover:scale-110 text-xs sm:text-sm`}
                  style={{
                    animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

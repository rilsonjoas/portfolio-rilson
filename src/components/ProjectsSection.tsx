import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Layers, Briefcase, Vote, Library, Wrench, Search, X } from "lucide-react";

const categoryIcons: Record<ProjectCategory, typeof Briefcase> = {
  corporativo: Briefcase,
  politica: Vote,
  cultura: Library,
  ferramentas: Wrench,
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "todos">("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProjects = projects.filter((p) => p.featured);
  
  const rawFilteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === "todos" || p.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchesTitle = p.title.toLowerCase().includes(query);
    const matchesDescription = p.description.toLowerCase().includes(query);
    const matchesTech = p.techStack.some((t) => t.toLowerCase().includes(query));
    const matchesBadge = p.highlightBadge?.toLowerCase().includes(query);

    return matchesTitle || matchesDescription || matchesTech || matchesBadge;
  });

  // Projetos com imagem aparecem primeiro que os sem imagem
  const filteredProjects = [...rawFilteredProjects].sort((a, b) => {
    const aHasImg = Boolean(a.image);
    const bHasImg = Boolean(b.image);
    if (aHasImg && !bHasImg) return -1;
    if (!aHasImg && bHasImg) return 1;
    return 0;
  });

  const getCategoryCount = (catId: ProjectCategory | "todos") => {
    if (catId === "todos") return projects.length;
    return projects.filter((p) => p.category === catId).length;
  };

  const activeCategoryInfo = projectCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="space-y-20">
      {/* 1. Destaques principais */}
      <div id="destaques" className="scroll-mt-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Top 3 Destaques
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Seleção dos projetos de maior impacto técnico e visual, cobrindo sistemas corporativos em produção, machine learning e design systems litúrgicos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, index) => (
            <div
              key={p.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Categorias e todos os projetos */}
      <div id="projetos" className="scroll-mt-20 pt-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">
            <Layers className="h-3.5 w-3.5" />
            Catálogo Completo
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Todos os Projetos
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Navegue pelas categorias ou busque por tecnologias para explorar meus trabalhos corporativos, plataformas cívicas e culturais.
          </p>
        </div>

        {/* Barra de Busca por Tecnologia e Palavra-chave */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tecnologia ou projeto (ex: Python, Fastify, Docker, React)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-full border border-border/80 bg-background text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/70 shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              aria-label="Limpar busca"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Filtro de Categorias */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory("todos")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === "todos"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            <Layers className="h-4 w-4" />
            Todos
            <Badge
              variant={selectedCategory === "todos" ? "secondary" : "outline"}
              className="ml-1 text-[11px] px-1.5 py-0 h-5"
            >
              {getCategoryCount("todos")}
            </Badge>
          </button>

          {projectCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isSelected = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {cat.label}
                <Badge
                  variant={isSelected ? "secondary" : "outline"}
                  className="ml-1 text-[11px] px-1.5 py-0 h-5"
                >
                  {count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Descrição contextual da categoria ativa (quando não estiver pesquisando) */}
        {!searchQuery && activeCategoryInfo && (
          <div className="bg-muted/40 border border-border/50 rounded-xl p-4 mb-8 text-center max-w-2xl mx-auto transition-all animate-fade-in">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{activeCategoryInfo.label}:</span>{" "}
              {activeCategoryInfo.description}
            </p>
          </div>
        )}

        {/* Resultados / Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-border bg-muted/20 max-w-md mx-auto animate-fade-in">
            <p className="text-sm font-semibold text-foreground">Nenhum projeto encontrado</p>
            <p className="text-xs text-muted-foreground mt-1">
              Não encontramos projetos com o termo &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Limpar busca e filtros
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, index) => (
              <div
                key={p.id}
                className="animate-slide-in-up"
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;

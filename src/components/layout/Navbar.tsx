import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/config/profile";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeSheet();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e as any, "#inicio")} 
          className="font-mono font-semibold text-lg hover:text-primary transition-colors"
        >
          {profile.name}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md font-medium"
            >
              {item.label}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-2" />

          {/* Socials */}
          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Instagram">
              <a href={profile.links.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="border-t pt-4 mt-6">
                  <p className="text-sm font-medium mb-3">Redes Sociais</p>
                  <div className="grid grid-cols-1 gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={profile.links.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={profile.links.instagram} target="_blank" rel="noreferrer">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

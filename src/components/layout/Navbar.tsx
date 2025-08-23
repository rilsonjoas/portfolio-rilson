import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/config/profile";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavItem = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`px-3 py-2 text-sm transition-colors rounded-md ${
        isActive 
          ? "text-primary bg-primary/10" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      }`}
    >
      {label}
    </NavLink>
  );
};

const Socials = () => (
  <div className="flex items-center gap-2">
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
  </div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-mono font-semibold text-lg">
          {profile.name}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavItem to="/" label="Início" />
          <NavItem to="/projects" label="Projetos" />
          <Socials />
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
                <NavItem to="/" label="Início" onClick={closeSheet} />
                <NavItem to="/projects" label="Projetos" onClick={closeSheet} />
                {/* Contato removido */}
                
                <div className="border-t pt-4 mt-6">
                  <p className="text-sm font-medium mb-3">Redes Sociais</p>
                  <div className="flex gap-2">
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

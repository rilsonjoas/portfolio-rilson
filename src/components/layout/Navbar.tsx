import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/config/profile";
import { Button } from "@/components/ui/button";

const NavItem = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      className={`px-3 py-2 text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
    >
      {label}
    </NavLink>
  );
};

const Socials = () => (
  <div className="flex items-center gap-2">
    <Button asChild variant="ghost" size="icon" aria-label="GitHub">
      <a href={profile.links.github} target="_blank" rel="noreferrer">
        <Github className="h-5 w-5" />
      </a>
    </Button>
    <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
        <Linkedin className="h-5 w-5" />
      </a>
    </Button>
  </div>
);

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-mono font-semibold">
          {profile.name}
        </Link>
        <div className="flex items-center gap-1">
          <NavItem to="/" label="Início" />
          <NavItem to="/projects" label="Projetos" />
          <Button asChild variant="ghost">
            <a href={profile.links.email}>Contato</a>
          </Button>
          <Socials />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

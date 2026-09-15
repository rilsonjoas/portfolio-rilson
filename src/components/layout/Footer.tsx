import { profile } from "@/config/profile";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        <nav className="flex flex-wrap gap-4 items-center">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href={profile.links.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          <a href={profile.links.email} className="hover:text-foreground transition-colors">Email</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

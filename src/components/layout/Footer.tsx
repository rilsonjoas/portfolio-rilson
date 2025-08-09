import { profile } from "@/config/profile";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        <nav className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={profile.links.email} className="hover:text-foreground">Email</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

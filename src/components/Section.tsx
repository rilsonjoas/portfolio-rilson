import { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container py-12 md:py-16">
      {title && (
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

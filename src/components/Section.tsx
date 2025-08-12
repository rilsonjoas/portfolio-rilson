import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("container py-12 md:py-16", className)}>
      {title && (
        <header className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

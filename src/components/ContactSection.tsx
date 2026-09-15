import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, Check, Copy, ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/config/profile";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = profile.links.email.replace("mailto:", "");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          <MessageSquare className="h-3.5 w-3.5" />
          Vamos Conversar
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Entre em Contato
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Tem uma ideia, proposta de projeto ou quer trocar experiências sobre arquitetura, dados e sistemas web? Minha caixa de mensagens está sempre aberta.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
        {/* Card Email com Copiar */}
        <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/80">
          <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyEmail}
                className="h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">E-mail Direto</p>
              <a 
                href={profile.links.email} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block mt-0.5"
              >
                {emailAddress}
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Card LinkedIn */}
        <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/80">
          <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Conexão Profissional</p>
              <a 
                href={profile.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-0.5"
              >
                in/rilson-joas
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Card GitHub */}
        <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/80 sm:col-span-2 md:col-span-1">
          <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Github className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Código & Repositórios</p>
              <a 
                href={profile.links.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-0.5"
              >
                github.com/rilsonjoas
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;

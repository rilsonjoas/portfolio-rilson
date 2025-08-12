import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Code, Heart } from "lucide-react";

interface AboutProps {
  profile: {
    name: string;
    role: string;
    location: string;
    bio: string;
    experience: {
      current: string;
      company: string;
      level: string;
      focus: string;
      specialties: string[];
      technologies: string[];
    };
  };
}

export const AboutSection = ({ profile }: AboutProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
        <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 animate-pulse" />
            Sobre Mim
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {profile.bio}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
          <MapPin className="h-4 w-4" />
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="space-y-4 order-1 lg:order-2">
        <Card className="transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              <h4 className="font-semibold text-sm sm:text-base">Experiência Atual</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">{profile.experience.current}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{profile.experience.company}</p>
              </div>
              
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{profile.experience.level}</p>
                <p className="text-xs sm:text-sm">{profile.experience.focus}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-xs sm:text-sm font-medium mb-2">Especialidades:</p>
              <div className="space-y-1">
                {profile.experience.specialties.map((specialty, index) => (
                  <div 
                    key={specialty} 
                    className="flex items-center gap-2 transform transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Code className="h-3 w-3 text-green-500" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs sm:text-sm font-medium mb-2">Tecnologias Corporativas:</p>
              <div className="flex flex-wrap gap-1">
                {profile.experience.technologies.map((tech, index) => (
                  <span 
                    key={tech} 
                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground transform transition-all duration-200 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground animate-scale-in">
              <img src="https://avatars.githubusercontent.com/u/191996810?s=400&u=a1385db20e80671f2610f9d690069052fef83e64&v=4" alt="Profile Image" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Samuel{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gonzaga
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Desenvolvedor Backend Python
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialista em automação de tarefas e desenvolvimento de soluções backend robustas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto hover-scale"
            >
              Ver Projetos de Automação
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto hover-scale"
            >
              <Mail className="mr-2 h-4 w-4" />
              Solicitar Orçamento
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/samuel-gonzaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/samuel-henricky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:samuel.gonzaga.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Agente de Automação WhatsApp",
      description: "Agente especializado para automação de atendimento ao cliente, e envio de mensagens humanizadas.",
      image: "src/images/agentegpt.png",
      tags: ["Python", "WhatsApp API", "FastAPI", "PostgreSQL"],
      // github: "#",
      demo: "https://www.youtube.com/watch?v=nxMw0bcB4ho",
      metrics: "500+ mensagens/dia"
    },
    {
      title: "Automação de Chamada para Escolas",
      description: "Conecta planilhas de gestão com lista de chamada, automatizando o processo de atualização de frequência escolar.",
      image: "src/images/py_drive_xl.png",
      tags: ["Python", "Openpyxl", "Google Drive API", "Railway Host"],
      github: "#",
      demo: "#",
      metrics: "267+ alunos monitorados"
    },
    {
      title: "Automação de documentos",
      description: "Sistema que preenche automaticamente documentos Docx de acordo com o formulário, economizando tempo e reduzindo erros.",
      image: "src/images/py_word.png",
      tags: ["Flask", "python-docx", "Jinja2", "Bootstrap"],
      github: "#",
      demo: "#",
      metrics: "Economiza 10h/semana"
    },
    // {
    //   title: "Automação de Relatórios",
    //   description: "Sistema que gera relatórios automáticos em Excel/PDF a partir de múltiplas fontes de dados.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    //   tags: ["Python", "Pandas", "Openpyxl", "Schedule"],
    //   github: "#",
    //   demo: "#",
    //   metrics: "Economiza 20h/semana"
    // }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projetos de Automação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções backend e automações que desenvolvi para resolver problemas reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Detalhes
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="outline" className="text-xs">
                    <Bot className="h-3 w-3 mr-1" />
                    {project.metrics}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

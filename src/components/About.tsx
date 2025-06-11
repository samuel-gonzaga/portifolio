
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bot, Server, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Desenvolvimento de APIs robustas e sistemas escaláveis com Python"
    },
    {
      icon: Bot,
      title: "Automação de Tarefas",
      description: "Criação de scripts e bots para automatizar processos repetitivos"
    },
    {
      icon: Code,
      title: "Freelancer",
      description: "Projetos personalizados focados em eficiência e resultados"
    },
    {
      icon: Zap,
      title: "Soluções Práticas",
      description: "Foco em resolver problemas reais com código limpo e eficiente"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor backend especializado em Python e automação de processos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor backend com foco em Python, especializado em criar soluções de automação 
              que simplificam e otimizam processos empresariais. Trabalho como freelancer desenvolvendo 
              sistemas personalizados para diferentes necessidades.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha experiência inclui desenvolvimento de APIs, automação de tarefas repetitivas, 
              web scraping, integração de sistemas e criação de bots. Acredito que a automação 
              é fundamental para aumentar a produtividade e reduzir erros humanos.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">FastAPI</Badge>
              {/* <Badge variant="secondary">Django</Badge> */}
              <Badge variant="secondary">Flask</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              {/* <Badge variant="secondary">MongoDB</Badge> */}
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Selenium</Badge>
              <Badge variant="secondary">BeautifulSoup</Badge>
              <Badge variant="secondary">Pandas</Badge>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

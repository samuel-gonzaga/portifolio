
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      color: "text-blue-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 88 }
      ]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      color: "text-green-500",
      skills: [
        { name: "PostgreSQL", level: 80 },
        // { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 90 },
        // { name: "Redis", level: 75 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Automação",
      icon: Code2,
      color: "text-purple-500",
      skills: [
        { name: "Selenium", level: 92 },
        { name: "BeautifulSoup", level: 88 },
        { name: "Pandas", level: 85 },
        { name: "Requests", level: 95 }
      ]
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      color: "text-orange-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 65 },
        { name: "Postman", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Tecnologias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino para criar soluções backend robustas e automações eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 bg-background rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Áreas de Especialização</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="px-3 py-1">Web Scraping</Badge>
            <Badge variant="outline" className="px-3 py-1">Automação de Processos</Badge>
            <Badge variant="outline" className="px-3 py-1">APIs RESTful</Badge>
            <Badge variant="outline" className="px-3 py-1">Bots para Telegram/Discord</Badge>
            <Badge variant="outline" className="px-3 py-1">Integração de Sistemas</Badge>
            <Badge variant="outline" className="px-3 py-1">Processamento de Dados</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

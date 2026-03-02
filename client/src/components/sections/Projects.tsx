import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

export function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  const sorted = [...projects].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Projects</h2>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Showcasing my technical expertise through real-world applications and microservices.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} fullWidth>
              <Card className="flex flex-col h-full overflow-hidden border-border/50 glass-card hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <img 
                    src={project.imageUrl || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"} 
                    alt={project.name} 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-none shadow-sm">
                      {project.techStack[0]}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <Badge variant="secondary" key={tech} className="bg-secondary/30 hover:bg-primary/20 hover:text-primary transition-colors text-[10px] uppercase tracking-wider font-bold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest">
                      <Code2 className="w-3 h-3" />
                      Key Highlights
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-3 pt-6 border-t border-border/10 bg-muted/20">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" className="w-full rounded-full hover-elevate border-border/50" asChild>
                      <a href={project.githubLink} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Source
                      </a>
                    </Button>
                  )}
                  {project.liveDemoLink && (
                    <Button size="sm" className="w-full rounded-full shadow-md shadow-primary/10 hover-elevate" asChild>
                      <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

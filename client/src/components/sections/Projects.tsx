import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

export function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  const sorted = [...projects].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Some of the things I've built. Most of them are open source.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} fullWidth>
              <Card className="flex flex-col h-full overflow-hidden border-border/50 glass-card hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  {/* project showcase image */}
                  <img 
                    src={project.imageUrl || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"} 
                    alt={project.name} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display text-xl">{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <Badge variant="secondary" key={tech} className="bg-secondary/50 hover:bg-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      {project.keyFeatures.slice(0, 2).map((feature, i) => (
                        <li key={i} className="line-clamp-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-3 pt-4 border-t border-border/20">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveDemoLink && (
                    <Button size="sm" className="w-full" asChild>
                      <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
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

import { FadeIn } from "@/components/ui/fade-in";
import type { Skill } from "@shared/schema";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Terminal,
  Cloud,
  Cpu,
  Globe
} from "lucide-react";

const categoryIcons: Record<string, any> = {
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  DevOps: Cloud,
  Tools: Settings,
  Languages: Code2,
  Infrastructure: Globe
};

export function Skills({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) return null;

  // Group by category and sort internally by orderIndex
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort groups
  const categories = Object.keys(grouped).sort();

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to build scalable systems.
            </p>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const catSkills = grouped[category].sort((a, b) => a.orderIndex - b.orderIndex);
            const Icon = categoryIcons[category] || Terminal;
            
            return (
              <FadeIn key={category} delay={idx * 0.1} fullWidth>
                <div className="glass-card p-6 rounded-2xl h-full border border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="space-y-5">
                    {catSkills.map(skill => (
                      <div key={skill.id} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm group-hover:text-primary transition-colors">{skill.name}</span>
                          {skill.proficiency && (
                            <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                          )}
                        </div>
                        {skill.proficiency ? (
                          <Progress value={skill.proficiency} className="h-1.5" />
                        ) : (
                          <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-full rounded-full opacity-60"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

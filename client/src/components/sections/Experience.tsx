import { FadeIn } from "@/components/ui/fade-in";
import type { Experience as ExperienceType } from "@shared/schema";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience({ experiences }: { experiences: ExperienceType[] }) {
  if (!experiences || experiences.length === 0) return null;

  // Sort by orderIndex
  const sorted = [...experiences].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Professional Experience</h2>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 py-4">
          {sorted.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1} direction="up" fullWidth>
              <div className="relative pl-8 md:pl-12 group">
                <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-background border-4 border-primary transition-transform duration-300 group-hover:scale-125 shadow-sm shadow-primary/40" />
                
                <div className="glass-card p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="inline-flex items-center text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-lg text-muted-foreground mb-6 font-medium">
                    <Briefcase className="h-5 w-5 mr-2 text-primary/60" />
                    {exp.company}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    {exp.responsibilities}
                  </p>
                  
                  {exp.achievements.length > 0 && (
                    <ul className="grid grid-cols-1 gap-4">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-4 text-muted-foreground group/item">
                          <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

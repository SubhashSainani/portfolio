import { FadeIn } from "@/components/ui/fade-in";
import type { Experience as ExperienceType } from "@shared/schema";
import { Briefcase, Calendar } from "lucide-react";

export function Experience({ experiences }: { experiences: ExperienceType[] }) {
  if (!experiences || experiences.length === 0) return null;

  // Sort by orderIndex
  const sorted = [...experiences].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-border/80 ml-3 md:ml-6 space-y-12">
          {sorted.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1} direction="up" fullWidth>
              <div className="relative pl-8 md:pl-12 group">
                <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-background border-4 border-primary transition-transform duration-300 group-hover:scale-125 shadow-sm shadow-primary/40" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold font-display text-foreground">{exp.role}</h3>
                  <div className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.duration}
                  </div>
                </div>
                
                <div className="flex items-center text-lg text-muted-foreground mb-4 font-medium">
                  <Briefcase className="h-5 w-5 mr-2" />
                  {exp.company}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.responsibilities}
                </p>
                
                {exp.achievements.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground marker:text-primary">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

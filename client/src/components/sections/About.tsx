import { FadeIn } from "@/components/ui/fade-in";
import type { Profile } from "@shared/schema";
import { CheckCircle2 } from "lucide-react";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                {profile.aboutDetails}
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FadeIn delay={0.2} direction="up" fullWidth>
              <div className="glass-card p-8 rounded-2xl h-full">
                <h3 className="text-xl font-bold mb-4 font-display">Core Strengths</h3>
                <ul className="space-y-3">
                  {profile.coreStrengths.map((strength, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" fullWidth>
              <div className="glass-card p-8 rounded-2xl h-full">
                <h3 className="text-xl font-bold mb-4 font-display">Soft Skills</h3>
                <ul className="space-y-3">
                  {profile.softSkills.map((skill, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="sm:col-span-2" fullWidth>
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-card/80 to-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-3 font-display">Career Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {profile.careerGoals}
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/fade-in";
import type { Profile } from "@shared/schema";
import { CheckCircle2, User, Trophy, Target } from "lucide-react";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <User className="w-5 h-5" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
              </div>
              <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                {profile.aboutDetails}
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FadeIn delay={0.2} direction="up" fullWidth>
              <div className="glass-card p-8 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display">Core Strengths</h3>
                </div>
                <ul className="space-y-4">
                  {profile.coreStrengths.map((strength, i) => (
                    <li key={i} className="flex items-start text-muted-foreground group/item">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                      <span className="group-hover/item:text-foreground transition-colors">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" fullWidth>
              <div className="glass-card p-8 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display">Soft Skills</h3>
                </div>
                <ul className="space-y-4">
                  {profile.softSkills.map((skill, i) => (
                    <li key={i} className="flex items-start text-muted-foreground group/item">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                      <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="sm:col-span-2" fullWidth>
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-card/80 to-primary/5 border border-primary/20 group hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display">Career Goals</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
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

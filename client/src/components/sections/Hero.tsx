import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import type { Profile } from "@shared/schema";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-500/20 blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-start text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6 ring-1 ring-primary/20">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Hi, I'm {profile.name.split(' ')[0]}. <br />
                <span className="text-gradient leading-tight">{profile.title}</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                {profile.summary}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="h-14 px-10 shadow-2xl shadow-primary/40 group hover-elevate transition-all duration-500 hover:scale-105 active:scale-95 bg-primary text-primary-foreground rounded-full font-bold" onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-4">
                {profile.githubLink && (
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border/50 hover:bg-muted hover-elevate hover:border-primary/50 transition-all duration-300" asChild>
                    <a href={profile.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {profile.linkedinLink && (
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border/50 hover:bg-muted hover-elevate hover:border-primary/50 transition-all duration-300" asChild>
                    <a href={profile.linkedinLink} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {(profile.resumeUrl || true) && (
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border/50 hover:bg-muted hover-elevate hover:border-primary/50 transition-all duration-300" asChild>
                    <a href={profile.resumeUrl || "#"} target="_blank" rel="noreferrer" aria-label="Resume">
                      <FileText className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="left" className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-2xl transform rotate-6 scale-105 opacity-50"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl glass-card group">
                <img 
                  src={profile.profileImageUrl || "/images/profile.jpg"} 
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

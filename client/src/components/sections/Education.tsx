import { FadeIn } from "@/components/ui/fade-in";
import type { Education as EduType, Certification } from "@shared/schema";
import { GraduationCap, Award, ExternalLink, BookOpen, Calendar, MapPin, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education({ education, certs }: { education: EduType[], certs: Certification[] }) {
  if ((!education || education.length === 0) && (!certs || certs.length === 0)) return null;

  return (
    <section id="education" className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mb-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Education Column */}
          {education.length > 0 && (
            <div className="space-y-12">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">Academic Background</h2>
                </div>
                <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
              </FadeIn>

              <div className="space-y-8">
                {[...education].sort((a, b) => a.orderIndex - b.orderIndex).map((edu, idx) => (
                  <FadeIn key={edu.id} delay={idx * 0.1}>
                    <div className="glass-card p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 group flex flex-col gap-6">
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="w-full sm:w-1/3 shrink-0">
                          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg bg-white/5 border border-border/20">
                            <img 
                              src={edu.achievements || "/images/placeholder-uni.jpg"} 
                              alt={edu.university}
                              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-1">
                              <Calendar className="w-3 h-3" />
                              {edu.year}
                            </div>
                            <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors leading-tight">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1 text-sm font-medium">
                              <MapPin className="w-3 h-3" />
                              {edu.university}
                            </div>
                          </div>
                          {edu.coursework && (
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary/70">
                                <BookOpen className="w-3 h-3" />
                                Key Coursework
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                {edu.coursework}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Achievements & Certifications Column */}
          {(certs && certs.length > 0) && (
            <div className="space-y-12">
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">Achievements & Certs</h2>
                </div>
                <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
              </FadeIn>

              <div className="space-y-6">
                {[...certs].sort((a, b) => a.orderIndex - b.orderIndex).map((cert, idx) => (
                  <FadeIn key={cert.id} delay={0.2 + (idx * 0.1)}>
                    <Card className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold font-display text-lg group-hover:text-primary transition-colors leading-tight mb-1">{cert.name}</h3>
                            <p className="text-muted-foreground text-sm font-medium">
                              {cert.issuingOrg} • {cert.date}
                            </p>
                          </div>
                        </div>
                        {cert.credentialLink && (
                          <a 
                            href={cert.credentialLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-3 rounded-xl bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-elevate"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

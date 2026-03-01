import { FadeIn } from "@/components/ui/fade-in";
import type { Education as EduType, Certification } from "@shared/schema";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education({ education, certs }: { education: EduType[], certs: Certification[] }) {
  if ((!education || education.length === 0) && (!certs || certs.length === 0)) return null;

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          {education.length > 0 && (
            <div>
              <FadeIn>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">Education</h2>
                </div>
              </FadeIn>

              <div className="space-y-6">
                {[...education].sort((a, b) => a.orderIndex - b.orderIndex).map((edu, idx) => (
                  <FadeIn key={edu.id} delay={idx * 0.1}>
                    <Card className="glass-card hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold font-display text-lg">{edu.degree}</h3>
                          <span className="text-xs font-semibold bg-secondary px-2 py-1 rounded text-secondary-foreground whitespace-nowrap ml-2">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-primary font-medium mb-3">{edu.university}</p>
                        
                        {edu.coursework && (
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Relevant Coursework</span>
                            <p className="text-sm text-muted-foreground mt-1">{edu.coursework}</p>
                          </div>
                        )}
                        
                        {edu.achievements && (
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Achievements</span>
                            <p className="text-sm text-muted-foreground mt-1">{edu.achievements}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Column */}
          {certs.length > 0 && (
            <div>
              <FadeIn delay={0.2}>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">Certifications</h2>
                </div>
              </FadeIn>

              <div className="space-y-6">
                {[...certs].sort((a, b) => a.orderIndex - b.orderIndex).map((cert, idx) => (
                  <FadeIn key={cert.id} delay={0.2 + (idx * 0.1)}>
                    <Card className="glass-card hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex items-center justify-between group">
                        <div>
                          <h3 className="font-bold font-display text-lg mb-1">{cert.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            {cert.issuingOrg} • {cert.date}
                          </p>
                        </div>
                        {cert.credentialLink && (
                          <a 
                            href={cert.credentialLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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

import { FadeIn } from "@/components/ui/fade-in";
import type { Skill } from "@shared/schema";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Terminal,
  Cloud,
  Globe,
  Box,
  Infinity as InfinityIcon,
  Layers,
  Webhook
} from "lucide-react";
import * as SiIcons from "react-icons/si";

const categoryIcons: Record<string, any> = {
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  DevOps: Cloud,
  Tools: Settings,
  Languages: Code2,
  Infrastructure: Globe
};

const skillIcons: Record<string, any> = {
  "Java": SiIcons.SiOpenjdk,
  "Spring Boot": SiIcons.SiSpringboot,
  "Spring": SiIcons.SiSpring,
  "Docker": SiIcons.SiDocker,
  "Kubernetes": SiIcons.SiKubernetes,
  "AWS": SiIcons.SiAmazonwebservices,
  "GCP": SiIcons.SiGooglecloud,
  "Terraform": SiIcons.SiTerraform,
  "MongoDB": SiIcons.SiMongodb,
  "SQL": SiIcons.SiPostgresql,
  "JavaScript": SiIcons.SiJavascript,
  "Hibernate": Layers,
  "CI/CD": InfinityIcon,
  "Microservices": Box,
  "RESTful APIs": Webhook
};

export function Skills({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) return null;

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = Object.keys(grouped).sort();

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I use to build robust and scalable enterprise systems.
            </p>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const catSkills = grouped[category].sort((a, b) => a.orderIndex - b.orderIndex);
            const CategoryIcon = categoryIcons[category] || Terminal;
            
            return (
              <FadeIn key={category} delay={idx * 0.1} fullWidth>
                <div className="glass-card p-6 rounded-2xl h-full border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {catSkills.map(skill => {
                      const SkillIcon = skillIcons[skill.name] || Code2;
                      return (
                        <div key={skill.id} className="group flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 transition-colors">
                          <div className="p-2 rounded-lg bg-background border border-border/50 group-hover:border-primary/30 text-muted-foreground group-hover:text-primary transition-all">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                        </div>
                      );
                    })}
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

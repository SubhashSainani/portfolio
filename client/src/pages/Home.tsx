import { 
  useProfile, 
  useExperience, 
  useProjects, 
  useSkills, 
  useCertifications, 
  useEducation 
} from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
      />
    </div>
  );
}

export default function Home() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: experiences, isLoading: expLoading } = useExperience();
  const { data: projects, isLoading: projLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: certs, isLoading: certsLoading } = useCertifications();
  const { data: education, isLoading: eduLoading } = useEducation();

  const isLoading = profileLoading || expLoading || projLoading || skillsLoading || certsLoading || eduLoading;

  if (isLoading) return <LoadingScreen />;
  
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Portfolio data not found. Please verify backend setup.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experiences={experiences || []} />
        <Projects projects={projects || []} />
        <Skills skills={skills || []} />
        <Education education={education || []} certs={certs || []} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

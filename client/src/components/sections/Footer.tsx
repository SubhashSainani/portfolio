import type { Profile } from "@shared/schema";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="font-display font-bold text-xl tracking-tight block mb-2">
              {profile.name}<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {profile.githubLink && (
              <a href={profile.githubLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            )}
            {profile.linkedinLink && (
              <a href={profile.linkedinLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

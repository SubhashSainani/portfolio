import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { profile, experience, projects, skills, certifications, education } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.profile.get.path, async (req, res) => {
    const p = await storage.getProfile();
    res.json(p || null);
  });

  app.get(api.experience.list.path, async (req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const proj = await storage.getProjects();
    res.json(proj);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const s = await storage.getSkills();
    res.json(s);
  });

  app.get(api.certifications.list.path, async (req, res) => {
    const certs = await storage.getCertifications();
    res.json(certs);
  });

  app.get(api.education.list.path, async (req, res) => {
    const edu = await storage.getEducation();
    res.json(edu);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      await storage.createContactMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const p = await storage.getProfile();
  if (!p) {
    await db.insert(profile).values({
      name: "Alex Developer",
      title: "Full Stack Engineer",
      summary: "I build exceptional and accessible digital experiences for the web.",
      aboutDetails: "I am a passionate Full Stack Developer with experience in building scalable web applications. I love solving complex problems and learning new technologies.",
      careerGoals: "My goal is to build impactful software that improves people's lives and to eventually lead a team of talented developers.",
      coreStrengths: ["System Architecture", "React & Node.js", "Database Design", "Performance Optimization"],
      softSkills: ["Communication", "Leadership", "Teamwork", "Problem-solving"],
      email: "hello@example.com",
      githubLink: "https://github.com",
      linkedinLink: "https://linkedin.com",
    });

    await db.insert(experience).values([
      {
        role: "Senior Frontend Engineer",
        company: "Tech Corp",
        duration: "2021 - Present",
        responsibilities: "Led the frontend team in migrating from Vue to React, improving performance by 40%.",
        achievements: ["Improved load time by 30%", "Mentored 3 junior developers"],
        orderIndex: 1
      },
      {
        role: "Software Developer",
        company: "Startup Inc",
        duration: "2018 - 2021",
        responsibilities: "Developed RESTful APIs using Node.js and Express. Managed PostgreSQL database.",
        achievements: ["Built core payment integration", "Reduced server costs by 20%"],
        orderIndex: 2
      }
    ]);

    await db.insert(projects).values([
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with Stripe integration and real-time inventory.",
        techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
        keyFeatures: ["User Authentication", "Shopping Cart", "Payment Processing"],
        githubLink: "https://github.com",
        liveDemoLink: "https://example.com",
        orderIndex: 1
      },
      {
        name: "Task Management App",
        description: "A collaborative task management tool with real-time updates.",
        techStack: ["Next.js", "Socket.io", "Redis", "Tailwind CSS"],
        keyFeatures: ["Real-time Sync", "Kanban Board", "Role-based Access"],
        githubLink: "https://github.com",
        orderIndex: 2
      }
    ]);

    await db.insert(skills).values([
      { category: "Frontend", name: "React", proficiency: 95, orderIndex: 1 },
      { category: "Frontend", name: "TypeScript", proficiency: 90, orderIndex: 2 },
      { category: "Frontend", name: "Tailwind CSS", proficiency: 90, orderIndex: 3 },
      { category: "Backend", name: "Node.js", proficiency: 85, orderIndex: 4 },
      { category: "Backend", name: "PostgreSQL", proficiency: 80, orderIndex: 5 },
      { category: "Tools", name: "Git", proficiency: 90, orderIndex: 6 },
    ]);

    await db.insert(certifications).values([
      {
        name: "AWS Certified Developer",
        issuingOrg: "Amazon Web Services",
        date: "2022",
        credentialLink: "https://aws.amazon.com",
        orderIndex: 1
      }
    ]);

    await db.insert(education).values([
      {
        degree: "B.S. Computer Science",
        university: "University of Technology",
        year: "2014 - 2018",
        coursework: "Data Structures, Algorithms, Web Development",
        achievements: "Graduated with Honors",
        orderIndex: 1
      }
    ]);
  }
}
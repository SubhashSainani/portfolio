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
      name: "Subhash",
      title: "Java Software Engineer",
      summary: "Java Software Engineer with 2 years of experience building microservices for a fintech platform serving millions of users. Skilled in Spring Boot, Docker, Kubernetes, and CI/CD automation.",
      aboutDetails: "I am a focused Software Engineer with a passion for writing clean, maintainable code and solving complex technical problems. Currently pursuing a Master of Information Technology at Deakin University, majoring in Networking and Cloud Technologies.",
      careerGoals: "My goal is to leverage my expertise in Java and cloud technologies to build scalable, secure, and high-performance financial systems that serve global users.",
      coreStrengths: ["Microservices Architecture", "Spring Boot", "Cloud Native Development", "CI/CD Automation"],
      softSkills: ["Problem-solving", "Team Collaboration", "Agile Methodologies", "Technical Leadership"],
      email: "subhashsainani4@gmail.com",
      githubLink: "https://github.com",
      linkedinLink: "https://linkedin.com/in/subhashsainani/",
      profileImageUrl: "/images/profile.jpg",
    });

    await db.insert(experience).values([
      {
        role: "Software Engineer",
        company: "Telenor Microfinance Bank - Easypaisa",
        duration: "Aug 2021 – Jun 2023",
        responsibilities: "Leading digital financial services in Pakistan. Resolved critical issues and designed RESTful APIs.",
        achievements: [
          "Achieved 30% reduction in system downtime",
          "Implemented microservices architecture for millions of users",
          "Led security enhancements and performance optimizations"
        ],
        orderIndex: 1
      }
    ]);

    await db.insert(projects).values([
      {
        name: "Online Voting Platform",
        description: "Secure, microservices-based system with Spring Boot, supporting user registration and real-time result tracking.",
        techStack: ["Java", "Spring Boot", "Docker", "Kubernetes", "GitHub Actions"],
        keyFeatures: ["API Gateway", "Service Discovery", "Containerization", "CI/CD"],
        githubLink: "https://github.com",
        orderIndex: 1
      },
      {
        name: "DevFolio – Personal Portfolio",
        description: "Interactive portfolio using Spring Boot and MySQL with an admin dashboard for real-time updates.",
        techStack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Hibernate"],
        keyFeatures: ["Spring Data JPA", "Rate Limiting", "Responsive UI", "Cloud Deployment"],
        githubLink: "https://github.com",
        orderIndex: 2
      }
    ]);

    await db.insert(skills).values([
      { category: "Backend", name: "Java", proficiency: 95, orderIndex: 1 },
      { category: "Backend", name: "Spring Boot", proficiency: 90, orderIndex: 2 },
      { category: "Backend", name: "Hibernate", proficiency: 85, orderIndex: 3 },
      { category: "DevOps", name: "Docker", proficiency: 90, orderIndex: 4 },
      { category: "DevOps", name: "Kubernetes", proficiency: 85, orderIndex: 5 },
      { category: "DevOps", name: "AWS/GCP", proficiency: 80, orderIndex: 6 },
      { category: "Frontend", name: "JavaScript", proficiency: 75, orderIndex: 7 },
      { category: "Databases", name: "SQL/MongoDB", proficiency: 85, orderIndex: 8 },
    ]);

    await db.insert(education).values([
      {
        degree: "Master of Information Technology (Professional)",
        university: "Deakin University",
        year: "Jul 2023 – Sep 2025",
        coursework: "Software deployment and Operations, Applied Software Engineering, Cloud Native Application Development",
        achievements: "Major in Networking and Cloud Technologies",
        orderIndex: 1
      },
      {
        degree: "Bachelor of Science in Computer Science",
        university: "Ghulam Ishaq Khan Institute - GIKI",
        year: "Sep 2017 – Jul 2021",
        coursework: "Data Analysis, Software Engineering, Operating Systems, Algorithms, Artificial Intelligence",
        orderIndex: 2
      }
    ]);
  }
}
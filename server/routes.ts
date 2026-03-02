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
        responsibilities: "Leading digital financial services in Pakistan. Leading development of microservices and RESTful APIs.",
        achievements: [
          "Resolved critical issues and bugs across the platform, achieving 30% reduction in system downtime and significantly improving application reliability for millions of users.",
          "Designed and implemented RESTful APIs and microservices architecture in collaboration with a 5-person development team, improving system scalability and reducing deployment time.",
          "Designed Led implementation of security enhancements and performance optimizations, resulting in faster response times and improved user engagement across mobile and web platforms.",
          "Collaborated with QA team and stakeholders through agile sprints to ensure high software quality and alignment with business objectives, consistently delivering projects on time and within scope.",
          "Focused on writing clean, maintainable code and solving complex technical problems for a fintech platform serving millions of users."
        ],
        orderIndex: 1
      },
      {
        role: "Software Engineering Intern",
        company: "Inter-Process Communication Project",
        duration: "Jun 2020",
        responsibilities: "Internship focusing on system-level communication and software development practices.",
        achievements: [
          "Successfully completed internship program with focus on Inter-Process Communication.",
          "Gained hands-on experience in modern software development life cycles.",
          "Developed core technical competencies in system-level programming."
        ],
        orderIndex: 2
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
      { category: "Backend", name: "Java", proficiency: null, orderIndex: 1 },
      { category: "Backend", name: "Spring Boot", proficiency: null, orderIndex: 2 },
      { category: "Backend", name: "Hibernate", proficiency: null, orderIndex: 3 },
      { category: "Backend", name: "Spring", proficiency: null, orderIndex: 4 },
      { category: "DevOps", name: "Docker", proficiency: null, orderIndex: 5 },
      { category: "DevOps", name: "Kubernetes", proficiency: null, orderIndex: 6 },
      { category: "DevOps", name: "AWS", proficiency: null, orderIndex: 7 },
      { category: "DevOps", name: "GCP", proficiency: null, orderIndex: 8 },
      { category: "DevOps", name: "Terraform", proficiency: null, orderIndex: 9 },
      { category: "DevOps", name: "CI/CD", proficiency: null, orderIndex: 10 },
      { category: "Languages", name: "JavaScript", proficiency: null, orderIndex: 11 },
      { category: "Languages", name: "SQL", proficiency: null, orderIndex: 12 },
      { category: "Languages", name: "C++", proficiency: null, orderIndex: 13 },
      { category: "Databases", name: "MongoDB", proficiency: null, orderIndex: 14 },
    ]);

    await db.insert(certifications).values([
      {
        name: "System Reliability & Downtime Reduction Award",
        issuingOrg: "Telenor Microfinance Bank",
        date: "2022",
        credentialLink: null,
        orderIndex: 1
      },
      {
        name: "Java Masterclass",
        issuingOrg: "Udemy",
        date: "2023",
        credentialLink: null,
        orderIndex: 2
      },
      {
        name: "Networking & Cloud Technologies",
        issuingOrg: "TAFE",
        date: "2024",
        credentialLink: null,
        orderIndex: 3
      }
    ]);

    await db.insert(education).values([
      {
        degree: "Master of Information Technology (Professional)",
        university: "Deakin University",
        year: "Jul 2023 – Sep 2025",
        coursework: "Software deployment and Operations, Applied Software Engineering, Cloud Native Application Development",
        achievements: "/images/deakin.jpg",
        orderIndex: 1
      },
      {
        degree: "Bachelor of Science in Computer Science",
        university: "Ghulam Ishaq Khan Institute - GIKI",
        year: "Sep 2017 – Jul 2021",
        coursework: "Data Analysis, Software Engineering, Operating Systems, Algorithms, Artificial Intelligence",
        achievements: "/images/giki.png",
        orderIndex: 2
      }
    ]);
  }
}
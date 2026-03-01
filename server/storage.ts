import { db } from "./db";
import {
  profile, experience, projects, skills, certifications, education, contactMessages,
  type Profile, type Experience, type Project, type Skill, type Certification, type Education,
  type InsertContactMessage
} from "@shared/schema";
import { asc } from "drizzle-orm";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getExperience(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getCertifications(): Promise<Certification[]>;
  getEducation(): Promise<Education[]>;
  createContactMessage(message: InsertContactMessage): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const [p] = await db.select().from(profile);
    return p;
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience).orderBy(asc(experience.orderIndex));
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(asc(projects.orderIndex));
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(asc(skills.orderIndex));
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications).orderBy(asc(certifications.orderIndex));
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education).orderBy(asc(education.orderIndex));
  }

  async createContactMessage(message: InsertContactMessage): Promise<void> {
    await db.insert(contactMessages).values(message);
  }
}

export const storage = new DatabaseStorage();
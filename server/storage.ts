import {
  type Profile, type Experience, type Project, type Skill, type Certification, type Education,
  type InsertContactMessage, type ContactMessage
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getExperience(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getCertifications(): Promise<Certification[]>;
  getEducation(): Promise<Education[]>;
  createContactMessage(message: InsertContactMessage): Promise<void>;
}

export class MemStorage implements IStorage {
  currentProfile: Profile | undefined;
  experiences: Experience[] = [];
  projects: Project[] = [];
  skills: Skill[] = [];
  certifications: Certification[] = [];
  education: Education[] = [];
  contactMessages: ContactMessage[] = [];
  messageId = 1;

  async getProfile(): Promise<Profile | undefined> { return this.currentProfile; }
  async getExperience(): Promise<Experience[]> { return this.experiences.sort((a, b) => a.orderIndex - b.orderIndex); }
  async getProjects(): Promise<Project[]> { return this.projects.sort((a, b) => a.orderIndex - b.orderIndex); }
  async getSkills(): Promise<Skill[]> { return this.skills.sort((a, b) => a.orderIndex - b.orderIndex); }
  async getCertifications(): Promise<Certification[]> { return this.certifications.sort((a, b) => a.orderIndex - b.orderIndex); }
  async getEducation(): Promise<Education[]> { return this.education.sort((a, b) => a.orderIndex - b.orderIndex); }

  async createContactMessage(message: InsertContactMessage): Promise<void> {
    this.contactMessages.push({ ...message, id: this.messageId++, createdAt: new Date() });
  }

  // Seeding methods
  async setProfile(p: Profile) { this.currentProfile = p; }
  async addExperiences(e: Experience[]) { this.experiences.push(...e); }
  async addProjects(p: Project[]) { this.projects.push(...p); }
  async addSkills(s: Skill[]) { this.skills.push(...s); }
  async addCertifications(c: Certification[]) { this.certifications.push(...c); }
  async addEducation(e: Education[]) { this.education.push(...e); }
}

export const storage = new MemStorage();
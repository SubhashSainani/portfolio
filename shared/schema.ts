import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  aboutDetails: text("about_details").notNull(),
  careerGoals: text("career_goals").notNull(),
  coreStrengths: text("core_strengths").array().notNull(),
  softSkills: text("soft_skills").array().notNull(),
  email: text("email").notNull(),
  githubLink: text("github_link"),
  linkedinLink: text("linkedin_link"),
  resumeUrl: text("resume_url"),
  profileImageUrl: text("profile_image_url"),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  responsibilities: text("responsibilities").notNull(),
  achievements: text("achievements").array().notNull(),
  orderIndex: integer("order_index").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(),
  keyFeatures: text("key_features").array().notNull(),
  githubLink: text("github_link"),
  liveDemoLink: text("live_demo_link"),
  imageUrl: text("image_url"),
  orderIndex: integer("order_index").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // Frontend, Backend, Databases, DevOps, Tools
  name: text("name").notNull(),
  proficiency: integer("proficiency"), // 1-100
  orderIndex: integer("order_index").notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  issuingOrg: text("issuing_org").notNull(),
  date: text("date").notNull(),
  credentialLink: text("credential_link"),
  orderIndex: integer("order_index").notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  university: text("university").notNull(),
  year: text("year").notNull(),
  coursework: text("coursework"),
  achievements: text("achievements"),
  orderIndex: integer("order_index").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// Export Types
export type Profile = typeof profile.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Education = typeof education.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
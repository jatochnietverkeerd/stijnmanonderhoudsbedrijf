import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import type { InsertContact, Contact, Project, Testimonial } from "@shared/schema";
import { contacts, projects, testimonials } from "@shared/schema";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

export interface IStorage {
  // Contact methods
  createContact(insertContact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getProjectsByService(serviceType: string): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialsByService(serviceType: string): Promise<Testimonial[]>;
}

export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
    this.db = drizzle(pool);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await this.db.insert(contacts).values({
      ...insertContact,
      email: insertContact.email || null,
      phone: insertContact.phone || null,
      message: insertContact.message || null,
    }).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await this.db.select().from(contacts);
  }

  async getProjects(): Promise<Project[]> {
    return await this.db.select().from(projects);
  }

  async getProjectsByService(serviceType: string): Promise<Project[]> {
    return await this.db.select().from(projects).where(eq(projects.serviceType, serviceType));
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await this.db.select().from(projects).where(eq(projects.featured, "true"));
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await this.db.select().from(testimonials);
  }

  async getTestimonialsByService(serviceType: string): Promise<Testimonial[]> {
    return await this.db.select().from(testimonials).where(eq(testimonials.serviceType, serviceType));
  }
}

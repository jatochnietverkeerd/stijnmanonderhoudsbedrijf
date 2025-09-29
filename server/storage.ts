import { type Contact, type InsertContact, type Project, type InsertProject, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getProjectsByService(serviceType: string): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialsByService(serviceType: string): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private projects: Map<string, Project>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.contacts = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: randomUUID(),
        title: "Complete Dakrenovatie",
        description: "Volledige vernieuwing van jaren '30 woning met zink detaillering en hoogwaardige isolatie.",
        serviceType: "zink",
        location: "Haarlem Noord",
        completedDate: "Maart 2024",
        images: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
        featured: "true"
      },
      {
        id: randomUUID(),
        title: "Zink Dakgoot Renovatie", 
        description: "Vervanging van oude dakgoten met nieuwe zinken goten en regenpijpen.",
        serviceType: "zink",
        location: "Haarlem Centrum",
        completedDate: "April 2024",
        images: [
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1556909114-74e8eb30e54c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1516417901640-48fb25c96c75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ],
        featured: "true"
      },
      {
        id: randomUUID(),
        title: "Koperen Dakbedekking",
        description: "Exclusieve koperen dakbedekking voor monumentaal grachtenpand met respect voor historische details.",
        serviceType: "koper",
        location: "Amsterdam Centrum",
        completedDate: "Januari 2024",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ],
        featured: "true"
      },
      {
        id: randomUUID(),
        title: "Dakpannen Restauratie",
        description: "Volledige restauratie van historisch pannendak met behoud van authentieke uitstraling.",
        serviceType: "pannen",
        location: "Bloemendaal",
        completedDate: "December 2023",
        images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
        featured: "true"
      },
      {
        id: randomUUID(),
        title: "Pannen Dak Nieuwbouw",
        description: "Nieuw pannendak voor moderne villa met hoogwaardige keramische dakpannen.",
        serviceType: "pannen", 
        location: "Amsterdam Noord",
        completedDate: "Februari 2024",
        images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
        featured: "true"
      },
      {
        id: randomUUID(),
        title: "Membrane Dak Kantoorpand",
        description: "EPDM dakbedekking voor groot kantoorcomplex met 15 jaar garantie.",
        serviceType: "membrane",
        location: "Haarlem Zuid", 
        completedDate: "Mei 2024",
        images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
        featured: "true"
      }
    ];

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        name: "Maria van der Berg",
        location: "Haarlem Noord",
        rating: "5",
        content: "Uitstekend werk geleverd aan ons dak in Haarlem Noord. Van offerte tot oplevering alles volgens afspraak. De kwaliteit van het zinkwerk is prachtig en de 15 jaar garantie geeft veel vertrouwen.",
        serviceType: "zink",
        isVideo: "false",
        videoUrl: null
      },
      {
        id: randomUUID(),
        name: "Jan Bakker",
        location: "Amsterdam Centrum",
        rating: "5",
        content: "Professionele aanpak bij de restauratie van ons monumentale pand. Stijnman begrijpt traditioneel vakmanschap en heeft ons koperen dak prachtig hersteld. Zeer tevreden!",
        serviceType: "koper",
        isVideo: "false",
        videoUrl: null
      },
      {
        id: randomUUID(),
        name: "Linda Jansen",
        location: "Bloemendaal",
        rating: "5",
        content: "Snelle en vakkundige reparatie van stormschade. Binnen een week was alles hersteld. De communicatie was uitstekend en de prijs eerlijk. Zeker een aanrader!",
        serviceType: "reparaties",
        isVideo: "false",
        videoUrl: null
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
    sampleTestimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      email: insertContact.email || null,
      phone: insertContact.phone || null,
      message: insertContact.message || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectsByService(serviceType: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.serviceType === serviceType
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.featured === "true"
    );
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonialsByService(serviceType: string): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(
      testimonial => testimonial.serviceType === serviceType
    );
  }
}

export const storage = new MemStorage();

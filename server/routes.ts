import type { Express } from "express";
import { createServer, type Server } from "http";
import { DatabaseStorage } from "./db";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const storage = new DatabaseStorage();

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validatie fout", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Er is een fout opgetreden bij het verzenden van uw bericht" 
        });
      }
    }
  });

  // Get all contacts (admin)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const { service, featured } = req.query;
      
      let projects;
      if (featured === "true") {
        projects = await storage.getFeaturedProjects();
      } else if (service && typeof service === "string") {
        projects = await storage.getProjectsByService(service);
      } else {
        projects = await storage.getProjects();
      }
      
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const { service } = req.query;
      
      let testimonials;
      if (service && typeof service === "string") {
        testimonials = await storage.getTestimonialsByService(service);
      } else {
        testimonials = await storage.getTestimonials();
      }
      
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const { category } = req.query;
      
      let posts;
      if (category && typeof category === "string") {
        posts = await storage.getBlogPostsByCategory(category);
      } else {
        posts = await storage.getBlogPosts();
      }
      
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  // Get blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        res.status(404).json({ message: "Blog post niet gevonden" });
        return;
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

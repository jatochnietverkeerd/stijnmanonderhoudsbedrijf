import type { VercelRequest, VercelResponse } from "@vercel/node";
import { DatabaseStorage } from "../server/db";

const storage = new DatabaseStorage();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET - Get testimonials
  if (req.method === "GET") {
    try {
      const { service } = req.query;

      let testimonials;
      if (service && typeof service === "string") {
        testimonials = await storage.getTestimonialsByService(service);
      } else {
        testimonials = await storage.getTestimonials();
      }

      return res.status(200).json(testimonials);
    } catch (error) {
      return res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  }

  // Method not allowed
  return res.status(405).json({ message: "Method not allowed" });
}
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { DatabaseStorage } from "../../server/db";

const storage = new DatabaseStorage();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET - Get blog post by slug
  if (req.method === "GET") {
    try {
      const { slug } = req.query;

      if (!slug || typeof slug !== "string") {
        return res.status(400).json({ message: "Slug is verplicht" });
      }

      const post = await storage.getBlogPostBySlug(slug);

      if (!post) {
        return res.status(404).json({ message: "Blog post niet gevonden" });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  }

  // Method not allowed
  return res.status(405).json({ message: "Method not allowed" });
}
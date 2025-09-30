import type { VercelRequest, VercelResponse } from "@vercel/node";
import { DatabaseStorage } from "../../server/db";

const storage = new DatabaseStorage();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET - Get blog posts
  if (req.method === "GET") {
    try {
      const { category } = req.query;

      let posts;
      if (category && typeof category === "string") {
        posts = await storage.getBlogPostsByCategory(category);
      } else {
        posts = await storage.getBlogPosts();
      }

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  }

  // Method not allowed
  return res.status(405).json({ message: "Method not allowed" });
}
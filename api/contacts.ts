import type { VercelRequest, VercelResponse } from "@vercel/node";
import { DatabaseStorage } from "../server/db";
import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

const storage = new DatabaseStorage();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // POST - Create contact
  if (req.method === "POST") {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      return res.status(200).json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validatie fout",
          errors: error.errors,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Er is een fout opgetreden bij het verzenden van uw bericht",
      });
    }
  }

  // GET - Get all contacts
  if (req.method === "GET") {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json(contacts);
    } catch (error) {
      return res.status(500).json({ message: "Er is een fout opgetreden" });
    }
  }

  // Method not allowed
  return res.status(405).json({ message: "Method not allowed" });
}
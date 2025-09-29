import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  serviceType: text("service_type").notNull(),
  location: text("location").notNull(),
  completedDate: text("completed_date").notNull(),
  images: jsonb("images").notNull().$type<string[]>(),
  featured: text("featured").default("false"),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: text("rating").notNull(),
  content: text("content").notNull(),
  serviceType: text("service_type"),
  isVideo: text("is_video").default("false"),
  videoUrl: text("video_url"),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Ongeldig emailadres").optional().or(z.literal("")),
  phone: z.string().min(10, "Telefoonnummer is verplicht").optional().or(z.literal("")),
  service: z.string().min(1, "Selecteer een dienst"),
  message: z.string().optional(),
}).refine((data) => data.email || data.phone, {
  message: "Email of telefoon is verplicht",
  path: ["email"],
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Dutch roofing company website built with React, Express, and PostgreSQL. The application is a full-stack TypeScript project showcasing services, projects, testimonials, and blog posts. Content is primarily in Dutch.

## Architecture

**Tech Stack:**
- Frontend: React 18 + Vite + Wouter (routing) + TanStack Query + shadcn/ui components + Tailwind CSS
- Backend: Vercel Serverless Functions (TypeScript)
- Database: PostgreSQL (via Neon serverless) with Drizzle ORM
- Build: Vite (frontend), Vercel (serverless functions)
- Deployment: Vercel

**Project Structure:**
- `client/` - React frontend application
  - `client/src/pages/` - Page components (home, services, projects, about, contact, blog)
  - `client/src/components/` - Reusable components and UI library (shadcn/ui)
  - `client/src/lib/` - Utilities and React Query client
- `api/` - Vercel serverless functions (API endpoints)
  - `api/contacts.ts` - Contact form submission and retrieval
  - `api/projects.ts` - Project data endpoints
  - `api/testimonials.ts` - Testimonial data endpoints
  - `api/blog/index.ts` - Blog post list endpoint
  - `api/blog/[slug].ts` - Individual blog post endpoint
- `server/` - Shared server code
  - `server/db.ts` - Database storage layer with IStorage interface
  - `server/seed.ts` - Database seeding script
  - `server/index.ts` - Local dev server (Express, not used in production)
- `shared/` - Shared code between frontend and backend
  - `shared/schema.ts` - Drizzle schema definitions and Zod validation schemas

**Key Design Patterns:**
- Monorepo structure with path aliases (`@/` for client, `@shared/` for shared code)
- Serverless architecture: API routes are individual Vercel serverless functions
- Frontend is a static SPA served by Vercel's CDN
- Development uses Express server (`npm run dev`), production uses Vercel serverless functions
- Database layer implements IStorage interface for testability
- Validation uses drizzle-zod for schema-based validation
- Each API function imports DatabaseStorage directly for data access

## Common Commands

```bash
# Development (starts server with hot reload)
npm run dev

# Type checking
npm run check

# Build for production (builds both frontend and backend)
npm run build

# Start production server
npm start

# Database operations
npm run db:push          # Push schema changes to database
```

## Database

- Drizzle ORM with Neon PostgreSQL serverless
- Schema located in `shared/schema.ts`
- Tables: contacts, projects, testimonials, blog_posts
- Environment variable required: `DATABASE_URL`
- Use `npm run db:push` to sync schema changes (no migrations directory)

## Vercel Deployment

**Environment Variables (set in Vercel dashboard):**
- `DATABASE_URL` - PostgreSQL connection string (required)

**Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Configuration:**
- `vercel.json` - Vercel configuration with build settings and rewrites
- Frontend built to `dist/public` directory
- API functions automatically deployed from `api/` directory
- SPA routing handled via rewrites in vercel.json

## Development Notes

- Local dev server runs on port specified by `PORT` environment variable (default: 5000)
- Development uses Express (`server/index.ts`), production uses Vercel serverless functions
- API endpoints are prefixed with `/api`
- Client-side routing uses Wouter with paths in Dutch (e.g., `/diensten`, `/projecten`, `/over-ons`)
- Form validation uses Zod schemas derived from Drizzle schemas
- Error messages and UI text are in Dutch
- To run locally: copy `.env.example` to `.env` and set `DATABASE_URL`
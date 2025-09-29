# Onderhoudsbedrijf Stijnman

## Overview

This is a premium roofing contractor website for Onderhoudsbedrijf Stijnman, serving the Haarlem and Amsterdam region. The site is a React-based single-page application with a Node.js/Express backend, designed to showcase roofing services, projects, and capture leads through contact forms. The application emphasizes quality craftsmanship, trust, and premium positioning in the roofing market, with specialization in zinc, copper, and lead work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for services, projects, about, and contact
- **State Management**: TanStack React Query for server state management with minimal local state
- **UI Components**: Radix UI primitives with custom styling via Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation for contact forms
- **Styling**: Tailwind CSS with custom color scheme (navy blue primary, copper accent, orange CTAs) and shadcn/ui component library

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Structure**: RESTful endpoints for contacts, projects, and testimonials
- **Data Layer**: Abstract storage interface with in-memory implementation containing sample data
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Vite integration for hot module replacement in development

### Component Architecture
- **Layout Components**: Reusable header, footer, and sticky contact elements
- **Page Components**: Dedicated components for each route (home, services, projects, about, contact)
- **Feature Components**: Specialized components for hero sections, testimonials, project galleries, FAQ sections
- **UI Components**: Comprehensive set of accessible UI components from Radix UI

### Data Models
- **Contacts**: Customer inquiries with name, email, phone, service type, and message
- **Projects**: Portfolio items with title, description, service type, location, completion date, and images
- **Testimonials**: Customer reviews with ratings, content, and optional video testimonials

### Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript implementation with shared schema types
- **Code Quality**: ESLint and TypeScript compiler for code validation
- **Hot Reload**: Vite development server with React Fast Refresh

### Content Management
- **Services**: Six main service categories (installations, maintenance, zinc, copper, lead work, membrane roofing)
- **Process Timeline**: Five-step customer journey from contact to completion  
- **Value Propositions**: Four key differentiators (reliability, craftsmanship, personal approach, transparency)
- **Service Areas**: Focus on Haarlem, Amsterdam, and surrounding municipalities

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with TypeScript support
- **Express.js**: Backend web framework
- **Node.js**: Runtime environment

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database connection (@neondatabase/serverless)
- **Database Schema**: Defined in shared schema with contacts, projects, and testimonials tables

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library based on Radix UI

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library for form data and API responses
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **Fetch API**: HTTP client for API requests

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Plugins**: Development environment integration for runtime error handling and cartographer

### Fonts & Assets
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Stock photography for project and service images (to be replaced with authentic photos)

### Build & Deployment
- **ESBuild**: JavaScript bundler for production builds
- **tsx**: TypeScript execution for development server
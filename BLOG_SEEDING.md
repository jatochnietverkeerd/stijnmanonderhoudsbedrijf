# Blog Post Seeding

The website has a fully functional blog system with database storage. Blog posts are stored in the PostgreSQL database.

## Running the Seed Script

To populate the database with sample blog posts, projects, and testimonials:

```bash
npm run db:seed
```

This will add 5 sample blog posts covering topics like:
- "5 Signalen dat uw Dak Toe is aan Vervanging"
- "EPDM vs Bitumen: Welke Dakbedekking Kiest u?"
- "Dakgoten Onderhoud: Complete Gids"
- "Waarom Zinken Dakwerk de Investering Waard is"
- "Stormschade aan uw Dak? Dit moet u Weten"

## Database Configuration

The blog uses your existing Neon PostgreSQL database configured in the `DATABASE_URL` environment variable.

**Current setup**: Neon PostgreSQL
- Database schema is already defined in `shared/schema.ts`
- API endpoints: `/api/blog` and `/api/blog/[slug]`
- Blog page: `/blog`

## Alternative: Migrate to Supabase (Optional)

If you prefer to use Supabase instead of Neon:

1. Create a Supabase project at https://supabase.com
2. Get your PostgreSQL connection string from Project Settings > Database
3. Update your `.env` or Vercel environment variable:
   ```
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres
   ```
4. Run database migration:
   ```bash
   npm run db:push
   ```
5. Run the seed script:
   ```bash
   npm run db:seed
   ```

**Note**: Your provided Supabase API key `sbp_1df288eb658bfe0175369e5c4da0e553639ac844` is the **service role key**, which should be kept secure and only used server-side.

## Adding New Blog Posts

You can add blog posts by:

1. **Modifying the seed script** (`server/seed.ts`) and re-running `npm run db:seed`
2. **Creating an admin interface** (future enhancement)
3. **Direct database insertion** via Neon/Supabase dashboard

### Blog Post Schema

```typescript
{
  title: string;           // Post title
  slug: string;            // URL-friendly slug (must be unique)
  excerpt: string;         // Short summary
  content: string;         // Full markdown content
  category: string;        // "Onderhoud", "Materialen", or "Reparaties"
  tags: string[];          // Array of tags
  imageUrl: string;        // Featured image URL
  author: string;          // Author name
}
```

## Viewing Blog Posts

After seeding, visit:
- `/blog` - View all blog posts
- `/blog/[slug]` - View individual post (e.g., `/blog/epdm-vs-bitumen-dakbedekking`)

Posts can be filtered by category: Alle, Onderhoud, Materialen, Reparaties
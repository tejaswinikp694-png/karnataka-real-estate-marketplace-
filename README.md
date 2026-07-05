# KarnatakaHomes

A full-stack, Karnataka-first real estate marketplace starter built with Next.js, TypeScript,
Tailwind CSS, Prisma, and a free-tier deployment architecture.

## What is included

- Responsive marketplace homepage with search, filters, featured properties, district navigation,
  role dashboards, AI/SEO readiness, and free-tier architecture sections.
- `GET /api/properties` API route with Zod validation and seed-backed search.
- Prisma PostgreSQL schema for users, listings, media, leads, saved properties, and analytics.
- Environment template for Supabase, Cloudinary, Firebase, Resend, Google Analytics, and maps.
- Vercel config, GitHub Actions CI, PWA manifest, Dockerfile, and deployment notes.

## Free-tier architecture

The default launch architecture uses only free-tier friendly services:

| Layer | Service | Notes |
| --- | --- | --- |
| Frontend and backend | Vercel | Next.js app plus API routes. This avoids a separate backend bill at launch. |
| Database | Supabase PostgreSQL | Prisma connects with `DATABASE_URL`. |
| Images | Cloudinary | Listing media, transformations, optimized delivery. |
| Notifications | Firebase Cloud Messaging | Saved search alerts and lead notifications. |
| Email | Resend | OTP, enquiry, brochure, and transactional email. |
| Source control | GitHub | CI and Vercel deployment integration. |

If the backend outgrows API routes, move the same route handlers and Prisma layer into an Express
service on Render or Railway. Keep Supabase, Cloudinary, Firebase, and Resend unchanged.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run prisma:generate
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

1. Create a free Supabase project.
2. Copy the pooled PostgreSQL connection string into `DATABASE_URL`.
3. Run:

```bash
npm run prisma:migrate
```

The UI currently reads seed data from `src/lib/properties.ts`. Replace that data source with Prisma
queries when you are ready to use live listings.

## Vercel deployment

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Add the variables from `.env.example`.
4. Deploy with the included `vercel.json`.

The app is intentionally shaped to stay functional without paid services: seed data powers the demo,
and provider integrations are configured through environment variables.

## Upgrade path

- Add Supabase Auth or custom JWT auth for buyer, seller, agent, builder, and admin roles.
- Persist `/api/properties` through Prisma queries.
- Add Cloudinary signed uploads for seller listing media.
- Add Firebase web push registration for saved searches.
- Add Resend transactional email for enquiries and OTP.
- Add district static pages, sitemap generation, schema.org JSON-LD, and blog/CMS routes.

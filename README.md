# Hansel marketing site

Next.js 16 (App Router) · Tailwind v4 · Sanity v5 · Resend · Framer Motion. Deploys to Vercel.

## Local development

```bash
pnpm install
cp .env.local.example .env.local      # then fill in values
pnpm dev
```

- App: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

The site has fallback content baked in for `/` and `/the-science`, so it renders even before Sanity is wired up.

## One-time setup

### 1. Sanity

1. Create a project at https://www.sanity.io/manage.
2. Add `localhost:3000` and your Vercel domain to **CORS Origins** (with credentials enabled).
3. Create an API token (Viewer or Editor) under **API → Tokens** and copy it.
4. Fill `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (usually `production`)
   - `SANITY_API_READ_TOKEN`
   - `SANITY_REVALIDATE_SECRET` (any long random string)
5. Restart `pnpm dev`, open `/studio`, sign in, and seed:
   - Site Settings
   - A `page` with slug `home` (or rely on the fallback)
   - A `page` with slug `the-science`
   - A few `post`s, `category`s, `author`s
   - `teamMember`s
   - `legalPage`s with slugs `privacy` and `terms`

### 2. Resend (waitlist)

1. Create a Resend account, then create an **Audience**.
2. Copy the API key and Audience ID into `.env.local`.
3. The form works without these (it logs locally and returns success in dev).

### 3. Vercel

1. Push to GitHub, import in Vercel.
2. Add all env vars from `.env.local`.
3. After first deploy, set up a Sanity webhook:
   - **Manage project → API → Webhooks → Create webhook**
   - URL: `https://your-domain/api/revalidate`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["page", "post", "siteSettings", "teamMember", "legalPage"]`
   - HTTP method: POST
   - Header: `x-sanity-secret: <your SANITY_REVALIDATE_SECRET>`
   - Projection: `{ _type, slug }`

## Day-to-day editing

- Marketing edits the homepage in **Studio → Pages → Home**. Each section is a block; drag to reorder, click to edit.
- Posts in **Studio → Posts** appear on `/blog` and (via the Blog teaser block, when `autoFromLatest` is on) the homepage.
- Team in **Studio → Team** appears on `/team` (and the homepage Team teaser if you add that block).
- Legal copy in **Studio → Legal** drives `/privacy` and `/terms`.

## Scripts

```bash
pnpm dev      # local
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint
```

# Glafira Veretennikova — Portfolio

Personal portfolio website for a Fullstack Developer. Warm terracotta accent, dark mode,
scroll animations, and a full inline admin panel for editing content — no code changes needed.

## Features

- 🎨 Terracotta accent theme with light/dark mode (follows the system, manual toggle)
- ✨ Scroll animations: fade-in reveals, 3D card tilt, scroll progress bar
- 🎬 Project cards: hover to play a screencast, static screenshot otherwise
- 🖊️ Inline admin panel — edit text, projects, timeline, certificates and tech logos directly on the live site
- 🗂️ Content and media stored in Supabase (no rebuilds required)
- 📄 Editable CV upload + download

## Tech Stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/) 5
- [Vite](https://vitejs.dev/) 5
- [Tailwind CSS](https://tailwindcss.com/) 3
- [Supabase](https://supabase.com/) — database, storage, auth
- [react-router-dom](https://reactrouter.com/) — routing
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-image-gallery](https://www.npmjs.com/package/react-image-gallery) — image carousels

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A [Supabase](https://supabase.com/) project

### Install

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Supabase setup

Run the SQL files in the Supabase SQL Editor, in this order:

1. `supabase/schema.sql` — base schema (`projects`, `site_content`, `project-images` bucket)
2. `supabase/migration_1.sql` — `files` bucket, social links, CV URL
3. `supabase/migration_2.sql` — project `visible` column
4. `supabase/migration_3.sql` — project `video` column
5. `supabase/migration_4.sql` — `timeline` + `certificates` tables
6. `supabase/migration_5.sql` — `tech_logos` table

Then create a single admin user under **Authentication → Users**. Log in at `/admin/login`
to start editing.

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Admin Panel

The admin panel is inline editing on the live site:

1. Go to `/admin/login` and sign in with the admin account.
2. You're redirected to `/admin` — the normal site with extra controls:
   - Pencil buttons on each section to edit its text.
   - Buttons on each project card (edit, delete, reorder, hide/show, upload video).
   - A floating toolbar to add projects, manage experience/certificates/tech logos, and log out.

Visitors only see the read-only site at `/`.

## Data Model

| Table | Purpose |
| --- | --- |
| `projects` | Portfolio projects (title, description, tech, images, link, video, sort_order, visible) |
| `site_content` | Key/value editable texts (headings, bio, socials, CV URL) |
| `timeline` | Experience & education entries |
| `certificates` | Certificate images + captions |
| `tech_logos` | Tech stack logos |

Storage buckets: `project-images` (screenshots) and `files` (CV).

## Project Structure

```
src/
├── admin/             # Admin panel (auth, editor modal, forms, managers)
├── components/        # UI sections (Hero, Navbar, Projects, About, Experience, ...)
├── helpers/           # Fallback data + social links helpers
├── hooks/             # Data hooks (useProjects, useSiteContent, useTimeline, ...)
├── lib/               # Supabase client, API, auth, content, download, refresh
├── types.ts           # Shared TypeScript types
├── App.tsx            # Root (routing + providers)
├── ModalContext.ts    # Contact modal context
├── ModalProvider.tsx  # Contact modal provider
└── main.tsx           # Entry point
public/
└── assets/            # Images (WebP), CV, favicon
supabase/
├── schema.sql         # Base schema (projects, site_content, buckets)
└── migration_1..5.sql # Incremental migrations
```

## Deployment

Deployed on [Netlify](https://www.netlify.com/) (Git-connected, deploys from `main`).

Set these environment variables in Netlify (**Site settings → Environment variables**):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Build settings are detected automatically: build command `npm run build`, publish directory `dist`.

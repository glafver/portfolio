# Glafira Veretennikova — Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-00E0D9?style=flat&logo=neon&logoColor=white)

Personal portfolio website for a Fullstack Developer. Warm terracotta accent, dark mode,
scroll animations, and a full inline admin panel for editing content — no code changes needed.

## Features

- 🎨 Terracotta accent theme with light/dark mode (follows the system, manual toggle)
- ✨ Scroll animations: fade-in reveals, 3D card tilt, scroll progress bar
- 🎬 Project cards: hover to play a screencast, static screenshot otherwise
- 🖊️ Inline admin panel — edit text, projects, timeline, certificates and tech logos directly on the live site
- 🗂️ Content stored in Neon Postgres, edited through a serverless Function (no rebuilds required)
- 📄 Editable CV upload + download

## Tech Stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/) 5
- [Vite](https://vitejs.dev/) 5
- [Tailwind CSS](https://tailwindcss.com/) 3
- [Neon](https://neon.com/) — Postgres, serverless Functions, Object Storage
- [react-router-dom](https://reactrouter.com/) — routing
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-image-gallery](https://www.npmjs.com/package/react-image-gallery) — image carousels

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A [Neon](https://neon.com/) project

### Install

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
VITE_API_URL=https://your-function-url.compute.aws.neon.tech
```

### Neon setup

1. Create a [Neon](https://neon.com/) project.
2. Run `supabase/neon_schema.sql` in the Neon SQL Editor — creates the schema and seeds the projects.
3. Deploy the backend Function declared in `neon.ts` with `neon deploy`.
4. Set `ADMIN_PASSWORD` in the Function environment.
5. Set `VITE_API_URL` to the Function's public URL.

Then log in at `/admin/login` to start editing.

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

Image uploads go to Neon Object Storage (coming soon).

## Project Structure

```
src/
├── admin/             # Admin panel (auth, editor modal, forms, managers)
├── components/        # UI sections (Hero, Navbar, Projects, About, Experience, ...)
├── helpers/           # Fallback data + social links helpers
├── hooks/             # Data hooks (useProjects, useSiteContent, useTimeline, ...)
├── lib/               # API client, auth, content, download, refresh
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

- `VITE_API_URL`

Build settings are detected automatically: build command `npm run build`, publish directory `dist`.

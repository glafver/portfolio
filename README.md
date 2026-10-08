# Glafira Veretennikova — Portfolio

Personal portfolio website showcasing my projects as a Fullstack Developer.

## Tech Stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/) 5
- [Vite](https://vitejs.dev/) 5
- [Tailwind CSS](https://tailwindcss.com/) 3
- [react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
- [react-awesome-reveal](https://www.npmjs.com/package/react-awesome-reveal)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

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

## Project Structure

```
src/
├── components/        # UI sections (Hero, Navbar, Projects, About, Contact, ...)
├── helpers/           # Data and shared constants (projects, social links)
├── App.tsx            # Root component
├── ModalContext.ts    # Contact modal context and hook
├── ModalProvider.tsx  # Contact modal provider
└── main.tsx           # Entry point
public/
└── assets/            # Images (WebP), CV, favicon
```

## Adding a Project

Projects live in [`src/helpers/projects.ts`](src/helpers/projects.ts). Add a new entry to the
`projects` array:

```ts
{
    id: 11,
    title: 'Project name',
    description: 'Short description of what it does.',
    imageUrls: ['/assets/my-project_1.webp'],
    tech: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://example.com',
},
```

Place the screenshots in `public/assets/` and reference them by their WebP paths.

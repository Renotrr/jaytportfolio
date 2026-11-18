# John Adewole | Portfolio

Source code for my personal portfolio website.

The site brings together my work in AI automation engineering, product building, workflow integration, and digital product design.

**Live portfolio:** https://jaytee-automation-engineer.vercel.app/

## Built with

- React and TypeScript
- Vite
- Tailwind CSS
- Radix UI and shadcn-style components
- Framer Motion and GSAP

## Run locally

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

- `npm run lint` runs ESLint.
- `npm test` runs the Vitest test suite.
- `npm run build` creates the production build in `dist/`.

## Project structure

- `src/pages/` contains page-level components.
- `src/components/` contains reusable UI and portfolio components.
- `src/components/portfolio/` contains portfolio content and presentation components.
- `src/assets/` contains local visual assets.
- `public/` contains static files served as-is.

## Notes

This repository contains the portfolio frontend. Project case studies describe the work and its status; a public portfolio entry does not imply that every related product repository or production system is open source.

Do not commit credentials, API keys, or local environment files. Keep real secrets in your deployment provider's environment settings.

# Multiconsult — Landing Page

A modern, high-performance landing page for **Multiconsult Norway**, built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS.

## Tech Stack

| Layer          | Choice                        |
| -------------- | ----------------------------- |
| Framework      | Next.js 16.2 (App Router)     |
| UI             | React 19 + Tailwind CSS 4     |
| Language       | TypeScript                    |
| Package Mgr    | npm                           |
| Deploy         | Vercel                        |

## Getting Started

```bash
npm install
npm run dev       # → http://localhost:3000
```

## Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Production build               |
| `npm run start`   | Start production server        |
| `npm run lint`    | Run ESLint                     |

## Project Structure

```
src/
├── app/              # App Router pages & layouts
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── investor-relations/
│   ├── projects/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/       # Shared UI components
│   ├── Header.tsx
│   └── Footer.tsx
public/               # Static assets
```

## Deploy

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deploy.

## License

Private — all rights reserved.

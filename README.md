# Analytics Dashboard Frontend

React + Vite + TypeScript frontend for an analytics dashboard, built with a maintainable architecture and production-oriented defaults.

## Tech Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- TanStack Query (+ Devtools)
- TanStack Router
- Zustand
- Zod
- Recharts
- date-fns
- ESLint

## Requirements

- Node.js `>= 24`
- pnpm (recommended)

## Getting Started

```bash
pnpm install
pnpm dev
```

App runs at `http://localhost:5173`.

## Available Scripts

- `pnpm dev` - start local development server
- `pnpm build` - run TypeScript build + production bundle
- `pnpm preview` - preview the production build
- `pnpm lint` - run ESLint

## Environment Variables

Vite exposes only variables prefixed with `VITE_`.

Create `.env.development` (and optionally `.env.production`) at the project root:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_ENV=development
```

Use in code:

```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
```

## Import Aliases

Project uses `@/` mapped to `src/`.

Examples:

- `@/components/...`
- `@/lib/...`
- `@/providers/...`

## Project Structure

```text
react-vite-ui/
  public/
  src/
    assets/
    components/
      ui/                 # shadcn/ui components
    lib/                  # shared utils
    providers/            # app-level providers (React Query, etc.)
    styles/
    App.tsx
    main.tsx
  components.json         # shadcn/ui config
  eslint.config.js
  tsconfig.json
  tsconfig.app.json
  vite.config.ts
```

## UI Components (shadcn/ui)

Initialize/add components with pnpm:

```bash
pnpm dlx shadcn@latest add button
```

Components are generated inside `src/components/ui`, so the code stays fully customizable in-repo.

## Data Layer

- Use TanStack Query for server state (fetching, cache, retries, stale data control).
- Use Zustand for local/global client state.
- Validate API payloads and forms with Zod.

This separation keeps data concerns explicit and easier to scale across multiple dashboard modules.

# Development Guide

This guide covers local development, checks, and the preferred workflow for extending ThreatScope.

## Requirements

- Node.js compatible with the current Next.js version
- npm

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run build
```

Creates a production build and runs TypeScript checks.

```bash
npm audit --omit=dev
```

Checks production dependency vulnerabilities.

## Recommended Workflow

1. Keep changes small and reviewable.
2. Prefer reusable components over one-off UI.
3. Use local mock data first.
4. Update documentation when behavior or structure changes.
5. Run lint and build before committing.

## Component Guidelines

Use existing local primitives from `src/components/ui` before adding new UI foundations.

Good component boundaries:

- Layout components own app chrome.
- Dashboard components own homepage sections.
- Actor components own the actor directory and profile sections.
- ATT&CK components own technique exploration.
- Data files own mock intelligence content.
- Types own shared contracts.

Avoid mixing data transformation, layout, and UI rendering in one large component.

## Styling Guidelines

ThreatScope should look like a professional defensive security dashboard:

- Dark mode only
- Subtle borders
- Calm card surfaces
- Clean typography
- Dense but readable dashboard layout
- Restrained accent colors
- No neon overload
- No decorative hacker tropes

Use Tailwind utilities and existing CSS variables from `src/app/globals.css`.

## Search And Filters

Search is client-side and powered by `SearchProvider` in `src/lib/search-context.tsx`.

Actor directory filtering lives in `src/components/actors/ActorDirectory.tsx`.

ATT&CK technique filtering lives in `src/components/attack/AttackExplorer.tsx`.

When adding new searchable actor fields, update the `searchable` array inside the actor directory filter logic.

## Adding A New Section

Before adding a new feature, check whether it requires:

- Backend
- Database
- Authentication
- External API
- Scraping
- Complex infrastructure

If yes, prefer a frontend-only MVP version first.

Examples:

- Instead of live threat feeds, add a local mock feed.
- Instead of accounts, add static persona labels.
- Instead of a database, add TypeScript data files.
- Instead of uploads, add a prebuilt local sample view.

## Verification Checklist

Before a commit:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

Manual route checks:

- `/`
- `/actors`
- `/actors/lazarus-group`
- `/actors/lockbit`
- `/actors/apt28-fancy-bear`
- `/attack`
- `/reports`
- unknown actor slug

Manual UI checks:

- Search by actor name
- Search by alias
- Search by country
- Search by sector
- Search by severity
- Search by IOC value
- Use severity filters
- Use actor type filters
- Open every actor profile
- Use the IOC copy button

## Git Workflow

Recommended commit flow:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Do not commit generated folders such as `.next` or `node_modules`.

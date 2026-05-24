# Architecture

ThreatScope is a frontend-only Next.js App Router application. The app is built around local TypeScript data and reusable UI components, with no backend runtime or external data dependency.

## Goals

- Present a polished SOC-style threat intelligence dashboard.
- Keep the codebase small, readable, and portfolio-friendly.
- Use realistic cybersecurity terminology without operational offensive guidance.
- Make mock data easy to extend.
- Keep the UI responsive and dark-mode only.

## Application Layers

### App Router

Routes live under `src/app`.

- `src/app/page.tsx` renders the dashboard homepage.
- `src/app/actors/[slug]/page.tsx` renders static actor detail pages.
- `src/app/layout.tsx` provides the global shell.
- `src/app/not-found.tsx` handles unknown actor profiles.
- `src/app/globals.css` defines Tailwind layers and dark theme variables.

### Layout Components

Layout components live under `src/components/layout`.

- `AppShell.tsx` wraps the full app and provides shared search context.
- `Sidebar.tsx` contains the desktop navigation.
- `Topbar.tsx` contains global search and the local data badge.

The layout is intentionally simple: fixed desktop sidebar, sticky topbar, and a main content region.

### Dashboard Components

Dashboard components live under `src/components/dashboard`.

- `StatsCard.tsx`
- `ThreatActorCard.tsx`
- `ThreatLevelChart.tsx`
- `RecentCampaigns.tsx`
- `MitreSnapshot.tsx`

These components consume local derived data from `src/data/threat-actors.ts`.

### Actor Detail Components

Actor profile components live under `src/components/actors`.

- `ActorHeader.tsx`
- `ActorOverview.tsx`
- `MitreTechniqueList.tsx`
- `MalwareList.tsx`
- `IocTable.tsx`
- `CampaignTimeline.tsx`
- `DetectionNotes.tsx`

Each component receives typed props and stays focused on one section of the actor profile.

### UI Primitives

Local shadcn/ui-style primitives live under `src/components/ui`.

- `badge.tsx`
- `button.tsx`
- `card.tsx`
- `input.tsx`
- `table.tsx`

These components keep styling consistent without introducing a full design system layer too early.

## Data Flow

ThreatScope uses local TypeScript arrays as the source of truth.

```text
src/data/threat-actors.ts
        ↓
derived exports: allCampaigns, allIndicators, allTechniques, dashboardStats
        ↓
dashboard and actor profile components
```

No network request is required to render the MVP.

## Static Rendering

Actor profile routes are generated from local data:

```ts
export function generateStaticParams() {
  return threatActors.map((actor) => ({
    slug: actor.slug,
  }));
}
```

This keeps profiles fast, deterministic, and deploy-friendly.

## Search Model

Search state is stored in `src/lib/search-context.tsx` and shared between the topbar and dashboard page. Search remains client-side and filters the local actor list.

Search includes actor metadata plus related techniques, malware, campaigns, and IOCs.

## Styling

The visual style is dark-only and dashboard-oriented:

- low-contrast dark surfaces
- subtle borders
- compact cards
- restrained badges
- readable tables
- SOC analyst dashboard tone

Theme variables are defined in `src/app/globals.css` and mapped in `tailwind.config.ts`.

## Non-Goals

The current architecture intentionally does not include:

- Backend API routes
- Database layer
- Authentication
- User accounts
- External API clients
- Live feeds
- Scrapers
- File uploads
- Admin UI

These are excluded to keep the MVP focused and safe.

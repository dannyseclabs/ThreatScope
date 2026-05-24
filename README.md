# ThreatScope

ThreatScope is a frontend-only cybersecurity threat intelligence dashboard built as a portfolio project. It presents safe local mock intelligence for threat actors, MITRE ATT&CK techniques, malware families, IOC tables, campaign timelines, detection notes, and dashboard-level analytics.

The app is intentionally defensive and educational. It does not contain offensive procedures, exploit instructions, live collection, scraping, or real threat feeds.

## Status

MVP is working locally.

- Dashboard homepage
- Threat actor directory
- Client-side search and filtering
- Dynamic actor detail pages
- MITRE ATT&CK explorer
- Reports placeholder route
- Threat actor cards
- Malware section
- IOC table with copy actions
- Campaign timeline
- Detection notes for SOC analysts
- Local mock data only

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- lucide-react
- Recharts
- Framer Motion

## Project Scope

ThreatScope is a frontend-first app. The current MVP deliberately avoids:

- Backend services
- Database
- Authentication
- Accounts or roles
- Payment or SaaS flows
- External APIs
- Live threat feeds
- Scraping
- Uploads
- Admin panel
- Offensive security instructions

This keeps the project clean, reviewable, safe, and portfolio-oriented.

## Features

### Dashboard

The dashboard gives a compact SOC-style overview:

- Tracked actors
- Critical threats
- Active campaigns
- Known IOCs
- Actor type chart
- Recent campaign timeline
- Priority actor preview
- Link to the ATT&CK explorer

### Actor Directory

The actor directory lives at `/actors` and provides:

- Actor search
- Severity filters
- Actor type filters
- Responsive actor card grid
- Empty state
- Reset filters action

### Threat Actor Profiles

Each actor has a profile page at `/actors/[slug]` with:

- Actor header
- Aliases
- Type and severity
- Attributed country
- Overview
- Motivation
- Target sectors and regions
- MITRE ATT&CK techniques
- Malware families
- IOC table
- Campaign timeline
- Detection notes

### Search And Filtering

Actor directory search is client-side and searches across:

- Actor name
- Aliases
- Country
- Type
- Severity
- Target sectors
- Target regions
- Motivation
- MITRE technique IDs, names, tactics, and descriptions
- Malware names and descriptions
- Campaign titles and descriptions
- IOC values and notes

Filters support severity and actor type.

### MITRE ATT&CK Explorer

The ATT&CK explorer lives at `/attack` and provides:

- Technique cards
- Search by ID, name, tactic, actor, or description
- Filter by tactic
- Links back to related actor profiles

### Reports

The reports page lives at `/reports`. It is intentionally a placeholder for future local mock intelligence briefs and does not include backend workflows.

## Mock Dataset

The MVP includes three safe local actor profiles:

- Lazarus Group
- LockBit
- APT28 / Fancy Bear

All indicators are mock, defanged, or documentation-range examples.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
```

Use `npm run build` before publishing or deploying.

## Project Structure

```text
threatscope/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── attack/
│   │   │   └── page.tsx
│   │   ├── reports/
│   │   │   └── page.tsx
│   │   └── actors/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── actors/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   └── types/
├── docs/
├── public/
├── README.md
├── package.json
└── tailwind.config.ts
```

## Documentation

- [Architecture](docs/architecture.md)
- [Data Model](docs/data-model.md)
- [Development Guide](docs/development.md)
- [Scope And Safety](docs/scope-and-safety.md)

## Quality Checks

Current verification targets:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

Expected route behavior:

- `/` returns the dashboard
- `/actors` returns the searchable actor directory
- `/actors/lazarus-group` returns the Lazarus profile
- `/actors/lockbit` returns the LockBit profile
- `/actors/apt28-fancy-bear` returns the APT28 profile
- `/attack` returns the ATT&CK explorer
- `/reports` returns the reports placeholder
- Unknown actor slugs return the custom not-found state

## Extending The Dataset

Add new actor profiles in:

```text
src/data/threat-actors.ts
```

Follow the `ThreatActor` type in:

```text
src/types/threat.ts
```

Keep all future examples defensive, educational, and safe for public portfolio display.

## Roadmap

Near-term improvements should stay frontend-only:

- Add more mock threat actors
- Add saved local UI presets with browser state
- Add richer empty states
- Add more chart views from local data
- Add screenshots to this README
- Improve responsive visual QA

Avoid backend, auth, database, live feeds, external APIs, or scraping until the MVP is stable and the scope is intentionally expanded.

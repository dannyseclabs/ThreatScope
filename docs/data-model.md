# Data Model

ThreatScope uses local TypeScript data for all threat intelligence content. The core model lives in `src/types/threat.ts`, and the first dataset lives in `src/data/threat-actors.ts`.

## Core Types

### ThreatActorType

```ts
export type ThreatActorType =
  | "APT"
  | "Ransomware"
  | "Cybercrime"
  | "Hacktivist"
  | "Unknown";
```

This type categorizes actor profiles at a dashboard level.

### Severity

```ts
export type Severity = "Critical" | "High" | "Medium" | "Low";
```

Severity is used for dashboard filtering, badges, and prioritization.

### IocType

```ts
export type IocType =
  | "IP"
  | "Domain"
  | "URL"
  | "SHA256"
  | "Email"
  | "File";
```

IOC examples should remain safe for portfolio display. Prefer defanged values and documentation-range IP addresses.

## ThreatActor

```ts
export type ThreatActor = {
  slug: string;
  name: string;
  aliases: string[];
  type: ThreatActorType;
  attributedCountry: string;
  severity: Severity;
  summary: string;
  motivation: string[];
  targetSectors: string[];
  targetRegions: string[];
  techniques: MitreTechnique[];
  malware: MalwareFamily[];
  campaigns: CampaignEvent[];
  iocs: IndicatorOfCompromise[];
  detectionNotes: string[];
};
```

## Required Actor Fields

### slug

The URL-safe profile identifier.

Example:

```ts
slug: "lazarus-group"
```

The profile will be available at:

```text
/actors/lazarus-group
```

### name and aliases

Used in cards, search, filters, and page headers.

### type and severity

Used for dashboard segmentation and prioritization.

### attributedCountry

Displayed as analyst context. Use careful language when attribution is uncertain.

### summary

A short defensive description suitable for a public portfolio.

### motivation, targetSectors, targetRegions

These arrays power overview sections and search.

### techniques

MITRE ATT&CK-style behavior mappings. Keep descriptions defensive and detection-oriented.

### malware

High-level malware family or tooling labels. Avoid implementation details.

### campaigns

Mock activity events for timeline rendering. Dates should be ISO strings.

### iocs

Safe indicators for table rendering. Use defanged domains and reserved IP ranges where possible.

### detectionNotes

SOC analyst guidance focused on monitoring, triage, and correlation.

## Derived Data

`src/data/threat-actors.ts` exports useful derived collections:

- `allCampaigns`
- `allIndicators`
- `allTechniques`
- `actorTypeDistribution`
- `dashboardStats`

These derived exports keep dashboard components small and avoid repeated transformation logic.

## Adding A New Actor

1. Add a new object to `threatActors`.
2. Use a unique `slug`.
3. Fill every required field from the `ThreatActor` type.
4. Keep all values defensive and educational.
5. Run:

```bash
npm run lint
npm run build
```

## Safety Rules For Data

Do use:

- Defanged domains such as `example[.]com`
- Documentation IP ranges such as `192.0.2.0/24`, `198.51.100.0/24`, and `203.0.113.0/24`
- Mock hashes
- High-level technique descriptions
- Defensive detection notes

Do not use:

- Live malicious infrastructure
- Real credentials
- Exploit steps
- Payload code
- Evasion instructions
- Instructions for unauthorized access

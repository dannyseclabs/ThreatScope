# Scope And Safety

ThreatScope is a defensive, educational portfolio dashboard. It should help demonstrate frontend engineering, product thinking, and cybersecurity literacy without enabling misuse.

## Current Scope

ThreatScope includes:

- Local mock threat actor profiles
- MITRE ATT&CK-style behavior mappings
- Malware family labels
- Safe IOC examples
- Campaign timelines
- SOC detection notes
- Client-side search and filtering
- Dashboard-level visual summaries

## Explicit Non-Scope

ThreatScope does not include:

- Backend services
- Database
- Authentication
- User accounts
- Admin panel
- Payments
- Real API integrations
- Live threat feeds
- Scraping
- Upload system
- AI summaries
- Offensive tooling
- Exploit instructions
- Payload generation
- Evasion instructions

## Safety Principles

### Defensive Framing

All content should be written for:

- SOC analysts
- Threat intelligence analysts
- Incident response planning
- Detection engineering context
- Portfolio demonstration

### Safe Indicators

Use:

- Defanged domains
- Documentation-range IP addresses
- Mock hashes
- High-level family names
- Defensive notes

Avoid:

- Live malicious domains
- Real active infrastructure
- Credentials
- Exploit chains
- Operational steps
- Code that supports unauthorized access

### Attribution Care

Attribution can be sensitive. Use careful language:

- "attributed country"
- "state-linked"
- "associated with"
- "represented as"
- "modeled as"

Avoid presenting uncertain public intelligence as guaranteed fact.

## Feature Request Rule

If a future request requires backend, database, authentication, external APIs, scraping, or complex infrastructure, pause and propose a simpler frontend-only version first.

Examples:

- Request: "Add live threat feeds."
  - Safer MVP: Add a local mock feed with realistic timestamps and filtering.

- Request: "Add user login."
  - Safer MVP: Add a static analyst persona label in the UI.

- Request: "Scrape threat reports."
  - Safer MVP: Add manually curated mock campaign cards.

- Request: "Upload IOC files."
  - Safer MVP: Add a static sample IOC import preview.

## Content Review Checklist

Before adding new cybersecurity content, check:

- Is it defensive?
- Is it educational?
- Is it safe for public portfolio display?
- Does it avoid step-by-step offensive instructions?
- Are indicators mock, defanged, or reserved examples?
- Does the UI make clear this is local mock data?

If any answer is unclear, simplify the content.

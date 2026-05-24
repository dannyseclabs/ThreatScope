import type { ThreatActor } from "@/types/threat";

export const threatActors: ThreatActor[] = [
  {
    slug: "lazarus-group",
    name: "Lazarus Group",
    aliases: ["Hidden Cobra", "Zinc", "Labyrinth Chollima"],
    type: "APT",
    attributedCountry: "North Korea",
    severity: "Critical",
    summary:
      "Lazarus Group is a state-linked intrusion set known for financially motivated operations, espionage, and cryptocurrency-focused activity. This profile is written for defensive analysis and portfolio demonstration.",
    motivation: ["Financial gain", "Espionage", "Crypto theft"],
    targetSectors: ["Crypto exchanges", "Financial institutions", "Defense", "Government"],
    targetRegions: ["East Asia", "North America", "Europe"],
    techniques: [
      {
        id: "T1566",
        name: "Phishing",
        tactic: "Initial Access",
        description:
          "Uses targeted social engineering themes to obtain access or deliver malicious files. Defensive review should focus on mail telemetry, sender reputation, and user-reporting workflows.",
      },
      {
        id: "T1059",
        name: "Command and Scripting Interpreter",
        tactic: "Execution",
        description:
          "Suspicious script execution can appear after initial user interaction. SOC teams should correlate script launches with file downloads and unusual parent processes.",
      },
      {
        id: "T1555",
        name: "Credentials from Password Stores",
        tactic: "Credential Access",
        description:
          "Credential theft activity is represented at a high level for monitoring. Analysts should review endpoint and identity alerts for unusual credential access patterns.",
      },
      {
        id: "T1027",
        name: "Obfuscated Files or Information",
        tactic: "Defense Evasion",
        description:
          "Packed or encoded files can reduce visibility. Detection should prioritize suspicious file creation, unsigned binaries, and uncommon execution paths.",
      },
    ],
    malware: [
      {
        name: "AppleJeus",
        type: "Trojanized application family",
        description:
          "Associated with financially themed lures and cryptocurrency targeting. Included here only as a defensive tracking label.",
      },
      {
        name: "DTrack",
        type: "Reconnaissance and collection malware",
        description:
          "Used in the dashboard as a malware family for host discovery and collection-oriented detections.",
      },
      {
        name: "Manuscrypt",
        type: "Remote access malware",
        description:
          "Represents remote access and persistence concerns that SOC analysts can map to endpoint telemetry.",
      },
    ],
    campaigns: [
      {
        date: "2026-03-18",
        title: "Crypto Platform Update Lures",
        description:
          "Mock reporting cluster involving cryptocurrency-themed lures, suspicious script execution, and follow-on credential access indicators.",
        targetSector: "Crypto exchanges",
      },
      {
        date: "2026-01-29",
        title: "Developer Workstation Targeting",
        description:
          "Analyst note covering developer-focused social engineering and unusual outbound connections from build-adjacent endpoints.",
        targetSector: "Defense",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "wallet-update[.]example",
        confidence: "High",
        note: "Defanged example domain used for safe portfolio display.",
      },
      {
        type: "IP",
        value: "203.0.113.41",
        confidence: "Medium",
        note: "Documentation-range IP address representing mock staging infrastructure.",
      },
      {
        type: "SHA256",
        value: "3f68a7c2d91b45f0a8d3e6b4c527901edab678c4f95e3201a55db832c0f4176a",
        confidence: "High",
        note: "Mock hash value for table rendering and triage UI.",
      },
    ],
    detectionNotes: [
      "Correlate archive extraction, unsigned binary execution, and new outbound sessions from developer workstations.",
      "Review finance and wallet administration logins from first-seen devices or unusual network locations.",
      "Hunt for suspicious script execution shortly after email attachment or browser download events.",
    ],
  },
  {
    slug: "lockbit",
    name: "LockBit",
    aliases: ["LockBit Black", "LockBit 3.0", "LockBitSupp"],
    type: "Ransomware",
    attributedCountry: "Unknown / cybercrime ecosystem",
    severity: "Critical",
    summary:
      "LockBit is represented as a ransomware ecosystem focused on financial extortion, affiliate-driven intrusions, data theft pressure, and file encryption impact.",
    motivation: ["Financial extortion"],
    targetSectors: [
      "Enterprise networks",
      "Healthcare",
      "Manufacturing",
      "Government",
      "Professional services",
    ],
    targetRegions: ["Global", "North America", "Europe"],
    techniques: [
      {
        id: "T1078",
        name: "Valid Accounts",
        tactic: "Initial Access",
        description:
          "Compromised accounts can enable remote access. Defenders should monitor impossible travel, first-seen devices, and unusual administrator sessions.",
      },
      {
        id: "T1021",
        name: "Remote Services",
        tactic: "Lateral Movement",
        description:
          "Lateral movement is modeled defensively through unusual remote session patterns and access to systems outside normal user behavior.",
      },
      {
        id: "T1041",
        name: "Exfiltration Over C2 Channel",
        tactic: "Exfiltration",
        description:
          "Data theft pressure can precede impact. Analysts should review bulk archive creation, outbound transfer anomalies, and DLP events.",
      },
      {
        id: "T1486",
        name: "Data Encrypted for Impact",
        tactic: "Impact",
        description:
          "File encryption is represented as an impact-stage behavior. Detection should focus on abnormal rename bursts and backup access changes.",
      },
    ],
    malware: [
      {
        name: "LockBit ransomware",
        type: "Ransomware payload",
        description:
          "Impact-stage ransomware family represented for defensive monitoring and incident response planning.",
      },
      {
        name: "Stealers",
        type: "Credential and data theft tooling",
        description:
          "Grouped category for theft-oriented tooling without operational implementation details.",
      },
      {
        name: "Remote management tools",
        type: "Dual-use administration tooling",
        description:
          "Represents legitimate tooling that may require monitoring when used outside approved administrative context.",
      },
    ],
    campaigns: [
      {
        date: "2026-02-22",
        title: "Affiliate Remote Access Wave",
        description:
          "Mock campaign cluster where remote access anomalies precede file share enumeration and data staging alerts.",
        targetSector: "Manufacturing",
      },
      {
        date: "2025-12-08",
        title: "Healthcare Extortion Pressure",
        description:
          "Analyst note covering suspicious administrative sessions, archive creation, and high-volume access to sensitive repositories.",
        targetSector: "Healthcare",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "files-recovery[.]example",
        confidence: "Medium",
        note: "Defanged example domain for ransomware-themed table content.",
      },
      {
        type: "IP",
        value: "198.51.100.22",
        confidence: "Medium",
        note: "Documentation-range IP address used as a safe placeholder.",
      },
      {
        type: "SHA256",
        value: "9aa54df1b643028c5ed32a910f7bb8c141214d942ab41d29fb3f7b02c70237de",
        confidence: "High",
        note: "Mock payload hash for defensive UI demonstration.",
      },
    ],
    detectionNotes: [
      "Prioritize valid-account alerts when paired with new remote access tools or first-seen device fingerprints.",
      "Watch for high-volume archive creation, unusual file share enumeration, and access to backup paths.",
      "Correlate DLP, file server audit logs, and identity alerts before impact-stage detections appear.",
    ],
  },
  {
    slug: "apt28-fancy-bear",
    name: "APT28 / Fancy Bear",
    aliases: ["Sofacy", "Sednit", "Forest Blizzard"],
    type: "APT",
    attributedCountry: "Russia",
    severity: "High",
    summary:
      "APT28 / Fancy Bear is modeled as an espionage-focused actor associated with political, defense, media, and government targeting. Content is kept defensive and educational.",
    motivation: ["Espionage", "Political influence", "Military intelligence"],
    targetSectors: ["Government", "Defense", "Media", "Political organizations"],
    targetRegions: ["Europe", "North America", "Caucasus"],
    techniques: [
      {
        id: "T1566.002",
        name: "Spearphishing Link",
        tactic: "Initial Access",
        description:
          "Targeted links may lead to credential collection pages. Defenders should monitor suspicious domains, sender anomalies, and identity risk signals.",
      },
      {
        id: "T1110",
        name: "Brute Force",
        tactic: "Credential Access",
        description:
          "Credential harvesting and password spraying are represented as identity telemetry patterns for SOC triage.",
      },
      {
        id: "T1190",
        name: "Exploit Public-Facing Application",
        tactic: "Initial Access",
        description:
          "Public-facing application alerts should be triaged through patch posture, web logs, and unusual authentication activity.",
      },
      {
        id: "T1087",
        name: "Account Discovery",
        tactic: "Discovery",
        description:
          "Directory and mailbox enumeration can be detected through cloud audit logs and unusual query volume.",
      },
    ],
    malware: [
      {
        name: "X-Agent",
        type: "Remote access malware",
        description:
          "Included as a defensive malware family label tied to collection and remote access monitoring.",
      },
      {
        name: "Zebrocy",
        type: "Downloader and backdoor family",
        description:
          "Used as a high-level family name for endpoint detection and reporting context.",
      },
      {
        name: "Sofacy",
        type: "Intrusion tooling family",
        description:
          "Represents tooling tracked in defensive reporting for this actor profile.",
      },
    ],
    campaigns: [
      {
        date: "2026-04-04",
        title: "Policy Mailbox Collection",
        description:
          "Mock activity cluster involving credential harvesting signals, mailbox access anomalies, and document repository enumeration.",
        targetSector: "Government",
      },
      {
        date: "2026-02-03",
        title: "Media Account Spraying",
        description:
          "Analyst note covering repeated authentication failures against journalist and media staff accounts.",
        targetSector: "Media",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "secure-mail-gateway[.]example",
        confidence: "High",
        note: "Defanged example domain for credential-harvesting themed reporting.",
      },
      {
        type: "IP",
        value: "192.0.2.17",
        confidence: "Medium",
        note: "Documentation-range IP address for mock infrastructure.",
      },
      {
        type: "SHA256",
        value: "71b4c7f601d2b64ea3f902ec9188b126946eb9db8d32ae475947801ed1257b9f",
        confidence: "Medium",
        note: "Mock file hash for portfolio table display.",
      },
    ],
    detectionNotes: [
      "Review impossible travel, first-seen user agents, and new inbox rules for priority users.",
      "Correlate repeated authentication failures with subsequent successful logins and mailbox access.",
      "Monitor public-facing application alerts alongside identity and cloud audit telemetry.",
    ],
  },
];

export function getActorBySlug(slug: string) {
  return threatActors.find((actor) => actor.slug === slug);
}

export const allCampaigns = threatActors
  .flatMap((actor) =>
    actor.campaigns.map((campaign) => ({
      ...campaign,
      actor: actor.name,
      slug: actor.slug,
      severity: actor.severity,
    })),
  )
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export const allIndicators = threatActors.flatMap((actor) =>
  actor.iocs.map((ioc) => ({
    ...ioc,
    actor: actor.name,
    slug: actor.slug,
  })),
);

export const allTechniques = threatActors.flatMap((actor) =>
  actor.techniques.map((technique) => ({
    ...technique,
    actor: actor.name,
    slug: actor.slug,
  })),
);

export const actorTypeDistribution = [
  {
    name: "APT",
    value: threatActors.filter((actor) => actor.type === "APT").length,
  },
  {
    name: "Ransomware",
    value: threatActors.filter((actor) => actor.type === "Ransomware").length,
  },
  {
    name: "Cybercrime",
    value: threatActors.filter((actor) => actor.type === "Cybercrime").length,
  },
  {
    name: "Hacktivist",
    value: threatActors.filter((actor) => actor.type === "Hacktivist").length,
  },
  {
    name: "Unknown",
    value: threatActors.filter((actor) => actor.type === "Unknown").length,
  },
].filter((item) => item.value > 0);

export const dashboardStats = {
  trackedActors: threatActors.length,
  criticalThreats: threatActors.filter((actor) => actor.severity === "Critical").length,
  activeCampaigns: allCampaigns.length,
  knownIocs: allIndicators.length,
};

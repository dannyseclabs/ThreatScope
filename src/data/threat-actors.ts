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
  {
    slug: "apt29",
    name: "APT29",
    aliases: ["Cozy Bear", "Nobelium", "Midnight Blizzard"],
    type: "APT",
    attributedCountry: "Russia",
    severity: "High",
    summary:
      "APT29 is modeled as an espionage-focused actor associated with diplomatic, government, technology, and research targeting. This profile is written for defensive portfolio context.",
    motivation: ["Espionage", "Strategic intelligence", "Long-term access"],
    targetSectors: ["Government", "Diplomatic missions", "Technology", "Research"],
    targetRegions: ["North America", "Europe", "Global"],
    techniques: [
      {
        id: "T1566",
        name: "Phishing",
        tactic: "Initial Access",
        description:
          "Phishing is represented as a high-level initial access pattern. Defenders should review email telemetry, user reports, and suspicious authentication events.",
      },
      {
        id: "T1078",
        name: "Valid Accounts",
        tactic: "Defense Evasion",
        description:
          "Use of valid accounts should be monitored through first-seen devices, impossible travel, and unusual access to sensitive cloud resources.",
      },
      {
        id: "T1098",
        name: "Account Manipulation",
        tactic: "Persistence",
        description:
          "Account changes can indicate persistence. Analysts should review new service principals, mailbox rules, and permission changes.",
      },
    ],
    malware: [
      {
        name: "WellMess",
        type: "Remote access malware",
        description:
          "Included as a defensive malware family label tied to endpoint and network monitoring.",
      },
      {
        name: "WellMail",
        type: "Collection and access tooling",
        description:
          "Used here only as a high-level tracking name for defensive awareness.",
      },
    ],
    campaigns: [
      {
        date: "2026-04-16",
        title: "Research Tenant Access Review",
        description:
          "Mock campaign note focused on unusual cloud access patterns and permission changes in research environments.",
        targetSector: "Research",
      },
      {
        date: "2026-01-12",
        title: "Diplomatic Identity Monitoring",
        description:
          "Analyst scenario covering suspicious sign-ins and new access grants for diplomatic users.",
        targetSector: "Diplomatic missions",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "cloud-identity-review[.]example",
        confidence: "Medium",
        note: "Defanged example domain for safe identity-themed reporting.",
      },
      {
        type: "IP",
        value: "203.0.113.77",
        confidence: "Low",
        note: "Documentation-range IP address used as mock infrastructure.",
      },
      {
        type: "SHA256",
        value: "b45d6e0229f7a3b2d2fd0db7ea2bb02ecdb9b2cb3cbf14b76156db7dc23f9a19",
        confidence: "Medium",
        note: "Mock hash for defensive UI rendering.",
      },
    ],
    detectionNotes: [
      "Review privileged cloud role assignments and new application consent events.",
      "Correlate first-seen devices with suspicious mailbox access and token activity.",
      "Monitor long-lived sessions accessing unusual document repositories.",
    ],
  },
  {
    slug: "sandworm",
    name: "Sandworm",
    aliases: ["Voodoo Bear", "Electrum", "Seashell Blizzard"],
    type: "APT",
    attributedCountry: "Russia",
    severity: "Critical",
    summary:
      "Sandworm is represented as a disruptive and espionage-capable actor profile with emphasis on critical infrastructure awareness and defensive monitoring.",
    motivation: ["Disruption", "Espionage", "Military intelligence"],
    targetSectors: ["Energy", "Government", "Telecommunications", "Transportation"],
    targetRegions: ["Europe", "Ukraine", "Global"],
    techniques: [
      {
        id: "T1190",
        name: "Exploit Public-Facing Application",
        tactic: "Initial Access",
        description:
          "Public-facing application risk should be reviewed through patch posture, web logs, and unexpected authentication attempts.",
      },
      {
        id: "T1485",
        name: "Data Destruction",
        tactic: "Impact",
        description:
          "Destructive behavior is described only at a defensive level. Monitor for abnormal file deletion, service disruption, and backup access changes.",
      },
      {
        id: "T1562",
        name: "Impair Defenses",
        tactic: "Defense Evasion",
        description:
          "Analysts should investigate suspicious security tool tampering, log gaps, or policy changes.",
      },
    ],
    malware: [
      {
        name: "Industroyer",
        type: "Industrial control system malware family",
        description:
          "Tracked as a defensive family label for critical infrastructure awareness.",
      },
      {
        name: "Cyclops Blink",
        type: "Network device malware family",
        description:
          "Included only as a high-level reporting label for defensive monitoring concepts.",
      },
    ],
    campaigns: [
      {
        date: "2026-03-02",
        title: "Critical Services Resilience Review",
        description:
          "Mock note focusing on public-facing service alerts, backup validation, and abnormal administrative activity.",
        targetSector: "Energy",
      },
      {
        date: "2025-11-21",
        title: "Network Device Exposure Tracking",
        description:
          "Analyst scenario covering suspicious network device access and configuration changes.",
        targetSector: "Telecommunications",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "service-health-check[.]example",
        confidence: "Medium",
        note: "Defanged example domain for safe critical services reporting.",
      },
      {
        type: "IP",
        value: "198.51.100.91",
        confidence: "Medium",
        note: "Documentation-range IP address for mock infrastructure.",
      },
      {
        type: "File",
        value: "system-health-update.bin",
        confidence: "Low",
        note: "Mock file name used for table demonstration only.",
      },
    ],
    detectionNotes: [
      "Prioritize alerts involving public-facing services in critical infrastructure environments.",
      "Review changes to backup systems, logging configuration, and endpoint protection controls.",
      "Correlate network device administration with change windows and approved operators.",
    ],
  },
  {
    slug: "fin7",
    name: "FIN7",
    aliases: ["Carbanak Group", "Navigator Group"],
    type: "Cybercrime",
    attributedCountry: "Unknown / cybercrime ecosystem",
    severity: "High",
    summary:
      "FIN7 is modeled as a financially motivated cybercrime actor profile associated with enterprise intrusion, payment-related targeting, and data theft pressure.",
    motivation: ["Financial gain", "Payment data theft", "Fraud enablement"],
    targetSectors: ["Retail", "Hospitality", "Financial services", "Enterprise networks"],
    targetRegions: ["North America", "Europe", "Global"],
    techniques: [
      {
        id: "T1566.001",
        name: "Spearphishing Attachment",
        tactic: "Initial Access",
        description:
          "Attachment-themed initial access is represented at a high level. Analysts should review attachment detonation, sender anomalies, and user reports.",
      },
      {
        id: "T1059.001",
        name: "PowerShell",
        tactic: "Execution",
        description:
          "Suspicious scripting should be correlated with recent downloads, unusual parent processes, and endpoint detections.",
      },
      {
        id: "T1005",
        name: "Data from Local System",
        tactic: "Collection",
        description:
          "Collection behavior should be reviewed through unusual file access, archive creation, and sensitive directory reads.",
      },
    ],
    malware: [
      {
        name: "Carbanak",
        type: "Financial crime malware family",
        description:
          "Included as a defensive tracking label for monitoring enterprise intrusion activity.",
      },
      {
        name: "Griffon",
        type: "Downloader and access tooling",
        description:
          "Used here as a high-level malware family label without operational detail.",
      },
    ],
    campaigns: [
      {
        date: "2026-02-14",
        title: "Retail Endpoint Monitoring",
        description:
          "Mock scenario involving suspicious script execution and data access anomalies in retail environments.",
        targetSector: "Retail",
      },
      {
        date: "2025-10-03",
        title: "Hospitality Finance System Review",
        description:
          "Analyst note covering unusual access to payment-adjacent systems and archive staging signals.",
        targetSector: "Hospitality",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "invoice-review[.]example",
        confidence: "Medium",
        note: "Defanged example domain for safe phishing-themed reporting.",
      },
      {
        type: "IP",
        value: "192.0.2.88",
        confidence: "Low",
        note: "Documentation-range IP address used as a placeholder.",
      },
      {
        type: "SHA256",
        value: "64db04f04c62d52c2b08a0b1c7fd9a4c2a4d003991afd96de4f4f90ef0c6185b",
        confidence: "Medium",
        note: "Mock hash value for portfolio IOC display.",
      },
    ],
    detectionNotes: [
      "Investigate suspicious scripting shortly after email attachment activity.",
      "Review access to payment-adjacent systems from first-seen hosts or users.",
      "Correlate archive creation with unusual outbound transfer patterns.",
    ],
  },
  {
    slug: "scattered-spider",
    name: "Scattered Spider",
    aliases: ["UNC3944", "Octo Tempest", "Muddled Libra"],
    type: "Cybercrime",
    attributedCountry: "Unknown / cybercrime ecosystem",
    severity: "High",
    summary:
      "Scattered Spider is represented as a financially motivated intrusion cluster with emphasis on identity abuse, social engineering risk, and enterprise access monitoring.",
    motivation: ["Financial gain", "Extortion enablement", "Credential access"],
    targetSectors: ["Telecommunications", "Technology", "Business services", "Hospitality"],
    targetRegions: ["North America", "Europe", "Global"],
    techniques: [
      {
        id: "T1078",
        name: "Valid Accounts",
        tactic: "Initial Access",
        description:
          "Valid account abuse should be monitored with identity risk signals, first-seen devices, and unusual MFA activity.",
      },
      {
        id: "T1621",
        name: "Multi-Factor Authentication Request Generation",
        tactic: "Credential Access",
        description:
          "MFA fatigue patterns are represented defensively. Review unusual MFA prompts, help desk events, and conditional access changes.",
      },
      {
        id: "T1021",
        name: "Remote Services",
        tactic: "Lateral Movement",
        description:
          "Remote service use should be compared against normal administrator behavior and approved access windows.",
      },
    ],
    malware: [
      {
        name: "Remote management tools",
        type: "Dual-use administration tooling",
        description:
          "Represents legitimate tools that require monitoring when used outside approved context.",
      },
      {
        name: "Stealers",
        type: "Credential theft tooling category",
        description:
          "Grouped label for defensive awareness, without implementation or operational detail.",
      },
    ],
    campaigns: [
      {
        date: "2026-04-28",
        title: "Identity Help Desk Abuse Review",
        description:
          "Mock campaign note covering unusual help desk changes, MFA reset events, and first-seen device access.",
        targetSector: "Technology",
      },
      {
        date: "2026-01-08",
        title: "Remote Access Pattern Monitoring",
        description:
          "Analyst scenario focused on remote access anomalies and privileged SaaS sessions.",
        targetSector: "Business services",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "identity-support[.]example",
        confidence: "Medium",
        note: "Defanged example domain for identity-themed mock reporting.",
      },
      {
        type: "Email",
        value: "security-review@example.invalid",
        confidence: "Low",
        note: "Reserved example email address for safe display.",
      },
      {
        type: "IP",
        value: "203.0.113.120",
        confidence: "Low",
        note: "Documentation-range IP address used as mock infrastructure.",
      },
    ],
    detectionNotes: [
      "Correlate help desk changes with MFA resets and first-seen endpoint access.",
      "Monitor SaaS admin role assignments and new trusted device registrations.",
      "Review remote access tools that appear outside approved software inventory.",
    ],
  },
  {
    slug: "clop",
    name: "Clop",
    aliases: ["Cl0p", "TA505-linked ecosystem"],
    type: "Ransomware",
    attributedCountry: "Unknown / cybercrime ecosystem",
    severity: "Critical",
    summary:
      "Clop is modeled as a ransomware and extortion ecosystem profile focused on data theft pressure, enterprise exposure, and defensive incident response context.",
    motivation: ["Financial extortion", "Data theft pressure"],
    targetSectors: ["Enterprise networks", "Healthcare", "Education", "Professional services"],
    targetRegions: ["North America", "Europe", "Global"],
    techniques: [
      {
        id: "T1190",
        name: "Exploit Public-Facing Application",
        tactic: "Initial Access",
        description:
          "Application exposure should be triaged through patch posture, web logs, and unusual transfer activity.",
      },
      {
        id: "T1041",
        name: "Exfiltration Over C2 Channel",
        tactic: "Exfiltration",
        description:
          "Data exfiltration is represented defensively through transfer anomalies, archive staging, and DLP review.",
      },
      {
        id: "T1486",
        name: "Data Encrypted for Impact",
        tactic: "Impact",
        description:
          "Impact-stage behavior should be monitored through abnormal file changes and backup access events.",
      },
    ],
    malware: [
      {
        name: "Clop ransomware",
        type: "Ransomware payload",
        description:
          "Included as a defensive family label for incident response planning and detection context.",
      },
      {
        name: "Data theft tooling",
        type: "Exfiltration support category",
        description:
          "Grouped category for defensive monitoring of data staging and transfer behavior.",
      },
    ],
    campaigns: [
      {
        date: "2026-03-27",
        title: "Managed Transfer Exposure Review",
        description:
          "Mock campaign note focusing on exposed file transfer services and unusual outbound data movement.",
        targetSector: "Enterprise networks",
      },
      {
        date: "2025-12-19",
        title: "Education Sector Extortion Monitoring",
        description:
          "Analyst scenario covering archive creation, sensitive data access, and external transfer anomalies.",
        targetSector: "Education",
      },
    ],
    iocs: [
      {
        type: "Domain",
        value: "secure-transfer-update[.]example",
        confidence: "Medium",
        note: "Defanged example domain for safe portfolio reporting.",
      },
      {
        type: "IP",
        value: "198.51.100.144",
        confidence: "Medium",
        note: "Documentation-range IP address representing mock transfer infrastructure.",
      },
      {
        type: "SHA256",
        value: "f2cb2f7b41dfd0ad7a3d4b71f603e5e455106cf54ac7a11d91c3e34141ad6f9f",
        confidence: "High",
        note: "Mock ransomware-themed hash for safe table rendering.",
      },
    ],
    detectionNotes: [
      "Review public-facing file transfer services for patch posture and unusual access.",
      "Correlate bulk archive creation with outbound transfer anomalies and DLP alerts.",
      "Monitor backup access and high-volume file changes during suspected impact windows.",
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

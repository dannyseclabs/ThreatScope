export type ThreatActorType =
  | "APT"
  | "Ransomware"
  | "Cybercrime"
  | "Hacktivist"
  | "Unknown";

export type Severity = "Critical" | "High" | "Medium" | "Low";

export type IocType = "IP" | "Domain" | "URL" | "SHA256" | "Email" | "File";

export type MitreTechnique = {
  id: string;
  name: string;
  tactic: string;
  description: string;
};

export type MalwareFamily = {
  name: string;
  type: string;
  description: string;
};

export type CampaignEvent = {
  date: string;
  title: string;
  description: string;
  targetSector: string;
};

export type IndicatorOfCompromise = {
  type: IocType;
  value: string;
  confidence: "High" | "Medium" | "Low";
  note: string;
};

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

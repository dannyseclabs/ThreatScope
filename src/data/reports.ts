export type ReportPreview = {
  title: string;
  status: string;
  description: string;
};

export const reportPreviews: ReportPreview[] = [
  {
    title: "Quarterly Actor Watchlist",
    status: "Planned",
    description: "Portfolio placeholder for a curated actor risk summary.",
  },
  {
    title: "Ransomware Exposure Brief",
    status: "Draft concept",
    description: "Future local-only report view for defensive executive context.",
  },
  {
    title: "ATT&CK Coverage Notes",
    status: "Planned",
    description: "A lightweight report module for mapped technique coverage.",
  },
];

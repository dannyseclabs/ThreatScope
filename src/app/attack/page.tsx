import { AttackExplorer } from "@/components/attack/AttackExplorer";

export const metadata = {
  title: "MITRE ATT&CK Explorer | ThreatScope",
  description: "Explore locally mapped MITRE ATT&CK techniques across tracked actors.",
};

export default function AttackPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section>
        <p className="text-xs font-semibold uppercase text-primary">MITRE ATT&CK explorer</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Technique Explorer
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Review defensive behavior mappings from the local dataset. Filter by tactic,
          search by technique ID, and jump back into the related actor profile.
        </p>
      </section>

      <AttackExplorer />
    </div>
  );
}

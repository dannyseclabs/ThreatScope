import { BarChart3, Crosshair, FileSearch, Shield } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/#dashboard", icon: BarChart3 },
  { label: "Actors", href: "/#actors", icon: Shield },
  { label: "ATT&CK", href: "/#mitre", icon: Crosshair },
  { label: "Reports", href: "/#campaigns", icon: FileSearch },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-border bg-card/80 lg:block">
      <div className="flex h-16 items-center gap-3 border-b border-border px-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Shield className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="text-sm font-semibold text-foreground">ThreatScope</div>
          <div className="text-xs text-muted-foreground">Threat intelligence</div>
        </div>
      </div>

      <nav className="space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            href={item.href}
            key={item.label}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

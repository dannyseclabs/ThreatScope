import type { BadgeProps } from "@/components/ui/badge";
import type { Severity } from "@/types/threat";

export function getSeverityTone(severity: Severity): BadgeProps["variant"] {
  if (severity === "Critical") {
    return "critical";
  }

  if (severity === "High") {
    return "high";
  }

  if (severity === "Medium") {
    return "medium";
  }

  return "outline";
}

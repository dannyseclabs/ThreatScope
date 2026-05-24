import type { Metadata, Viewport } from "next";

import { AppShell } from "@/components/layout/AppShell";

import "./globals.css";

export const metadata: Metadata = {
  applicationName: "ThreatScope",
  title: {
    default: "ThreatScope | Cyber Threat Intelligence Dashboard",
    template: "%s | ThreatScope",
  },
  description: "A defensive cybersecurity threat intelligence dashboard portfolio app.",
  openGraph: {
    title: "ThreatScope",
    description: "A defensive cybersecurity threat intelligence dashboard portfolio app.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

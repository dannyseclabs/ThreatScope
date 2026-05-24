import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card>
      <CardContent className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <SearchX className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-semibold text-foreground">Profile not found</h1>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          The requested actor profile is not in the local ThreatScope dataset.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Return to dashboard
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[#1FA37A]/30 bg-emerald-50/90 px-2.5 py-1 text-xs font-medium text-[#0d5c4a]",
        className,
      )}
      {...props}
    />
  );
}

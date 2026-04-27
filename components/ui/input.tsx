import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-150 focus-visible:border-[#1FA37A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1FA37A]",
        className,
      )}
      {...props}
    />
  );
}

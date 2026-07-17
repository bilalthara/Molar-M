import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "brand" | "accent" | "neutral" | "warning";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide",
        tone === "brand" && "bg-brand-soft text-brand",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "warning" && "bg-amber-100 text-warning dark:bg-amber-950/50",
        tone === "neutral" && "bg-surface-2 text-muted",
        className,
      )}
      {...props}
    />
  );
}

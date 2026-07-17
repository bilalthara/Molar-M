import { cn } from "@/lib/utils";

/** Scroll-safe data table: wraps on small screens instead of forcing page overflow. */
export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-border [-webkit-overflow-scrolling:touch]">
      <table
        className={cn(
          "w-full min-w-0 border-collapse text-left text-sm md:min-w-[28rem]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-surface-2 text-muted", className)} {...props} />;
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-border bg-surface", className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("transition-colors hover:bg-surface-2/70", className)} {...props} />;
}

export function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "px-2 py-2.5 text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm md:whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn("max-w-[11rem] px-2 py-2.5 align-middle break-words sm:max-w-none sm:px-4 sm:py-3", className)} {...props} />
  );
}

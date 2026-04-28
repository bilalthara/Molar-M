import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Kept for API compatibility; scroll animations were removed for faster, immediate paint. */
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}

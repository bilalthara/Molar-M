import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1FA37A] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-[#1FA37A] bg-[#1FA37A] text-white hover:bg-[#188b68]",
        outline:
          "border border-black/5 bg-white text-slate-800 hover:border-[#1FA37A]/45 hover:text-[#0F766E]",
        ghost: "text-slate-700 hover:bg-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

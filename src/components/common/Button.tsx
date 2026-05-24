import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)] bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:brightness-110",
        secondary:
          "bg-[#2D2D2D] text-white hover:bg-[#3D3D3D] border border-white/5 shadow-inner",
        outline:
          "border border-white/10 bg-[#1A1A1A]/50 text-white hover:bg-white/5 backdrop-blur-sm",
        ghost: "hover:bg-white/5 text-white/70 hover:text-white",
        pill: "rounded-full border border-white/10 bg-[#1A1A1A]/40 text-white/60 hover:text-white hover:border-primary/50 transition-colors uppercase text-[11px] font-bold tracking-wider px-6",
        icon: "rounded-full p-2 bg-[#1A1A1A] border border-white/10 text-white/80 hover:bg-primary hover:text-white hover:border-primary shadow-lg transition-all",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base rounded-2xl",
        icon: "h-10 w-10",
        pill: "h-9 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

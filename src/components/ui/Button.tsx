import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  subtitle?: string;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-red text-white hover:bg-red-hover shadow-lg",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-gray-light",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  subtitle,
  className,
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex flex-col items-center justify-center rounded-lg font-semibold transition-all duration-200 cursor-pointer text-center",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {subtitle && (
        <span className="text-xs font-normal opacity-80 mt-0.5">
          {subtitle}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}


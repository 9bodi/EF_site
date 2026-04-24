import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "dife" | "info" | "highlight";
  className?: string;
}

const variants = {
  dife: "bg-green-dife text-white",
  info: "bg-gray-light text-navy",
  highlight: "bg-red text-white",
};

export default function Badge({
  children,
  variant = "dife",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}


import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, variant = "primary", className, children, ...props }: Props) {
  const styles =
    variant === "primary"
      ? "bg-[rgba(var(--accent),0.18)] text-white border border-[rgba(var(--accent),0.35)] hover:bg-[rgba(var(--accent),0.26)]"
      : variant === "outline"
        ? "bg-transparent text-white border border-white/25 hover:border-white/40 hover:bg-white/[0.04]"
        : "bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.06]";

  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles, className)} {...props}>
      {children}
    </button>
  );
}

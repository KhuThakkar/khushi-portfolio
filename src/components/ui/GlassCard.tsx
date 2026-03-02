import * as React from "react";

export function GlassCard({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "group relative rounded-2xl p-[1px] " +
        "bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.08] " +
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_-12px_rgba(0,0,0,0.6)] " +
        "backdrop-blur-sm " +
        className
      }
      {...props}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px 180px at 30% 20%, rgba(var(--accent),0.15), transparent 55%)," +
            "radial-gradient(450px 200px at 75% 45%, rgba(120,200,255,0.12), transparent 55%)",
        }}
      />
      <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
        <div className="p-0">{props.children}</div>
      </div>
    </div>
  );
}

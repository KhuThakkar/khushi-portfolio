"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          "radial-gradient(800px 600px at var(--x, 50%) var(--y, 50%), rgba(255, 150, 220, 0.08), transparent 55%), " +
          "radial-gradient(500px 400px at var(--x, 50%) var(--y, 50%), rgba(120, 180, 255, 0.06), transparent 50%), " +
          "radial-gradient(400px 300px at var(--x, 50%) var(--y, 50%), rgba(255, 120, 200, 0.05), transparent 45%)",
      }}
    />
  );
}

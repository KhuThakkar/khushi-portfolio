"use client";

/**
 * Full-site translucent gradient wash — blues and pinks breathing in and out.
 */
export function BreathingHue() {
  return (
    <>
      {/* Main breathing layer — pinks and blues */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "radial-gradient(140% 140% at 20% 20%, rgba(255, 150, 220, 0.3), transparent 55%), " +
            "radial-gradient(130% 130% at 80% 30%, rgba(120, 180, 255, 0.26), transparent 52%), " +
            "radial-gradient(130% 130% at 50% 60%, rgba(255, 120, 200, 0.28), transparent 55%), " +
            "radial-gradient(120% 120% at 75% 75%, rgba(140, 170, 255, 0.22), transparent 50%), " +
            "radial-gradient(120% 120% at 15% 70%, rgba(255, 140, 210, 0.24), transparent 52%)",
          filter: "blur(70px) saturate(1.2)",
          animation: "breathing-hue 9s ease-in-out infinite",
        }}
      />
      {/* Second layer — opposite phase */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 120% at 65% 15%, rgba(100, 160, 255, 0.26), transparent 52%), " +
            "radial-gradient(110% 110% at 35% 45%, rgba(255, 130, 210, 0.24), transparent 50%), " +
            "radial-gradient(120% 120% at 90% 60%, rgba(130, 190, 255, 0.22), transparent 52%), " +
            "radial-gradient(100% 100% at 10% 50%, rgba(255, 120, 200, 0.2), transparent 48%)",
          filter: "blur(85px) saturate(1.15)",
          animation: "breathing-hue-alt 10s ease-in-out infinite",
        }}
      />
    </>
  );
}

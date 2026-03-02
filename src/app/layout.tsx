import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Spotlight } from "@/components/animations/Spotlight";
import { BreathingHue } from "@/components/animations/BreathingHue";

export const metadata: Metadata = {
  title: "Khushi Thakkar — Portfolio",
  description: "Product-minded full stack engineer portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" style={{ background: "#000" }}>
      <body className="relative min-h-screen bg-black text-white" style={{ background: "#000" }}>
        <BreathingHue />
        <Spotlight />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              KT<span className="text-white/50">.lab</span>
            </Link>
            <div className="flex items-center gap-4 text-base font-semibold text-white/80">
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <a href="/resume.pdf" className="hover:text-white transition-colors">Resume</a>
            </div>
          </nav>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

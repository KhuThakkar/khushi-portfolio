import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khushi Thakkar — Portfolio",
  description: "Khushi Thakkar builds software for the messy parts of running a business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8">
          <nav className="flex items-baseline justify-between border-b border-vine pb-4">
            <Link
              href="/"
              className="font-display text-2xl font-medium tracking-wide text-parchment no-underline hover:text-foxglove"
            >
              KT<span className="text-lichen">.lab</span>
            </Link>
            <div className="flex items-baseline gap-6 text-[0.95rem]">
              <Link href="/projects" className="text-lichen no-underline hover:text-parchment">
                Projects
              </Link>
              <a href="/resume.pdf" className="text-lichen no-underline hover:text-parchment">
                Resume
              </a>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}

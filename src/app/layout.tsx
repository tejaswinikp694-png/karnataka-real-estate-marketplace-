import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "KarnatakaHomes | Real Estate Marketplace",
  description:
    "A Karnataka-first property marketplace for verified homes, land, rentals, agents, and builders.",
  manifest: "/manifest.json",
  openGraph: {
    title: "KarnatakaHomes",
    description: "Search verified Karnataka property listings with intelligent filters.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#115EBC",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a className="flex items-center gap-3" href="/">
              <img src="/logo.svg" alt="KarnatakaHomes logo" width={40} height={40} />
              <span className="text-lg font-black tracking-normal text-ink">KarnatakaHomes</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
              <a href="#listings">Listings</a>
              <a href="#districts">Districts</a>
              <a href="#dashboards">Dashboards</a>
              <a href="#deploy">Free-tier stack</a>
            </nav>
            <a
              className="focus-ring rounded-md bg-ink px-4 py-2 text-sm font-bold text-white shadow-glow transition hover:bg-ocean"
              href="#listings"
            >
              Explore
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

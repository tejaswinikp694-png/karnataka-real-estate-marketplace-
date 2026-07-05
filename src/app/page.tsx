import { ArrowRight, CheckCircle2, MapPin, Mic, Search, ShieldCheck } from "lucide-react";

import {
  AiAndSeoBand,
  DashboardPreview,
  DistrictNavigator,
  FreeTierStack,
  StatsStrip
} from "@/components/home-sections";
import { MarketplaceExplorer } from "@/components/marketplace-explorer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KarnatakaHomes",
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/properties?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-black text-ocean shadow-sm">
              <ShieldCheck size={18} />
              Karnataka-first verified marketplace
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              KarnatakaHomes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Search homes, land, rentals, commercial spaces, agents, and builders across Karnataka
              with clean filters, fast pages, map-ready listings, and role-based dashboards.
            </p>

            <div className="glass-panel mt-8 max-w-3xl rounded-lg p-3">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
                <label className="flex min-h-14 items-center gap-2 rounded-md bg-white px-4">
                  <Search className="text-ocean" size={21} />
                  <input
                    className="focus-ring w-full bg-transparent text-sm font-semibold outline-none"
                    placeholder="Try Hebbal, Mysuru villa, Belagavi plot"
                  />
                </label>
                <button className="focus-ring flex min-h-14 items-center justify-center gap-2 rounded-md bg-aqua px-5 text-sm font-black text-ink">
                  <Mic size={18} />
                  Voice
                </button>
                <a
                  className="focus-ring flex min-h-14 items-center justify-center gap-2 rounded-md bg-ink px-6 text-sm font-black text-white"
                  href="#listings"
                >
                  Search
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-700">
              {["AI recommendations", "District pages", "PWA", "Dark mode ready"].map((item) => (
                <span className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-sm" key={item}>
                  <CheckCircle2 className="text-aqua" size={17} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-white/70 bg-white shadow-glow">
              <div className="relative min-h-[520px] bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-mint">
                    <MapPin size={16} />
                    Bengaluru Urban
                  </p>
                  <h2 className="mt-2 text-3xl font-black">Featured smart apartment</h2>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-bold">
                    <span className="rounded-md bg-white/15 p-3 backdrop-blur">3 BHK</span>
                    <span className="rounded-md bg-white/15 p-3 backdrop-blur">1490 sqft</span>
                    <span className="rounded-md bg-white/15 p-3 backdrop-blur">INR 1.58 Cr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />
      <MarketplaceExplorer />
      <DistrictNavigator />
      <DashboardPreview />
      <AiAndSeoBand />
      <FreeTierStack />

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-semibold">KarnatakaHomes - built for free-tier launch and clean upgrades.</p>
          <p>Vercel + Supabase + Cloudinary + Firebase + Resend + GitHub</p>
        </div>
      </footer>
    </main>
  );
}

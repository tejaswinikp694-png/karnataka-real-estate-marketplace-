import {
  BarChart3,
  Bell,
  Bot,
  Cloud,
  Database,
  GitBranch,
  Heart,
  Mail,
  Map,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Upload
} from "lucide-react";

import { freeTierArchitecture } from "@/lib/free-tier";
import { districts, marketplaceStats } from "@/lib/properties";

export function StatsStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {marketplaceStats.map((stat) => (
          <div className="rounded-lg bg-white p-4 shadow-sm" key={stat.label}>
            <p className="text-3xl font-black text-ink">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DistrictNavigator() {
  const featuredDistricts = districts.slice(0, 16);

  return (
    <section className="bg-ink py-14 text-white" id="districts">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mint">Karnataka focus</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">District-first discovery</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            The product model supports district, taluk, village, city, locality, pincode, and
            radius filters, with map coordinates ready for Leaflet now and Google Maps later.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold">
            {["Polygon search", "Cluster markers", "Nearby places", "Heatmaps"].map((item) => (
              <span className="rounded-md bg-white/10 px-3 py-2" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {featuredDistricts.map((district, index) => (
              <a
                className="rounded-md border border-white/10 bg-white/10 px-3 py-3 text-sm font-bold transition hover:bg-aqua hover:text-ink"
                href="#listings"
                key={district}
              >
                <span className="block text-xs text-slate-300">Zone {index + 1}</span>
                {district}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DashboardPreview() {
  const dashboards = [
    {
      title: "Seller",
      icon: Upload,
      items: ["KYC", "Drag-drop media", "Lead inbox", "Listing analytics"]
    },
    {
      title: "Buyer",
      icon: Heart,
      items: ["Wishlist", "Saved searches", "EMI tools", "Visit scheduling"]
    },
    {
      title: "Agent",
      icon: MessageSquare,
      items: ["Client CRM", "Commissions", "Appointments", "Reports"]
    },
    {
      title: "Admin",
      icon: BarChart3,
      items: ["Verification", "CMS", "Subscriptions", "Abuse reports"]
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="dashboards">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-saffron">
            Role-based product
          </p>
          <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Dashboards for every actor</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          The architecture leaves room for subscriptions, Razorpay, AI recommendations, and admin
          workflows while the first deployment stays inside free-tier limits.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboards.map((dashboard) => {
          const Icon = dashboard.icon;
          return (
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={dashboard.title}>
              <Icon className="text-ocean" size={28} />
              <h3 className="mt-4 text-xl font-black text-ink">{dashboard.title}</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                {dashboard.items.map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <ShieldCheck className="text-aqua" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function AiAndSeoBand() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            icon: Bot,
            title: "AI-ready search",
            body: "Recommendation, valuation, duplicate detection, and image quality checks can run as scheduled jobs when usage grows."
          },
          {
            icon: Sparkles,
            title: "SEO at the core",
            body: "Dynamic metadata, district landing pages, schema.org listings, sitemap, canonical URLs, and Open Graph are first-class."
          },
          {
            icon: Map,
            title: "Map intelligence",
            body: "Coordinates, nearby places, radius search, and heatmap fields are modeled for Leaflet or Google Maps provider upgrades."
          }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article className="rounded-lg border border-slate-200 p-6" key={item.title}>
              <Icon className="text-orchid" size={30} />
              <h3 className="mt-4 text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function FreeTierStack() {
  const serviceIcons = [Cloud, Database, Cloud, Bell, Mail, GitBranch];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="deploy">
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ocean">Hosting constraint</p>
        <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Free-tier first, upgrade-ready</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          This starter keeps the backend in Next.js API routes for the lowest-cost launch path.
          If traffic outgrows that shape, the API contracts and Prisma schema can move to Render
          or Railway without changing the database or frontend.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {freeTierArchitecture.map((item, index) => {
          const Icon = serviceIcons[index] ?? Cloud;
          return (
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={item.layer}>
              <Icon className="text-aqua" size={28} />
              <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-slate-500">
                {item.layer}
              </p>
              <h3 className="mt-1 text-xl font-black text-ink">{item.service}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.role}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

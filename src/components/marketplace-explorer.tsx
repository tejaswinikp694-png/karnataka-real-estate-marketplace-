"use client";

import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/property-card";
import { districts, listingTypes, searchListings } from "@/lib/properties";

export function MarketplaceExplorer() {
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState("All districts");
  const [type, setType] = useState("All types");

  const filteredListings = useMemo(
    () => searchListings(query, district, type),
    [district, query, type]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="listings">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-aqua">Live marketplace</p>
          <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Find property across Karnataka</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Intelligent search, district navigation, verified sellers, and map-ready coordinates are
          wired into this starter so the data layer can move to Supabase cleanly.
        </p>
      </div>

      <div className="glass-panel mb-8 grid gap-3 rounded-lg p-3 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
        <label className="flex min-h-12 items-center gap-2 rounded-md bg-white px-3">
          <Search className="text-ocean" size={20} />
          <input
            className="focus-ring w-full border-0 bg-transparent text-sm font-semibold outline-none"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search city, locality, listing ID"
            value={query}
          />
        </label>
        <label className="flex min-h-12 items-center gap-2 rounded-md bg-white px-3">
          <Filter className="text-aqua" size={20} />
          <select
            className="focus-ring w-full border-0 bg-transparent text-sm font-semibold outline-none"
            onChange={(event) => setDistrict(event.target.value)}
            value={district}
          >
            <option>All districts</option>
            {districts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="flex min-h-12 items-center gap-2 rounded-md bg-white px-3">
          <SlidersHorizontal className="text-orchid" size={20} />
          <select
            className="focus-ring w-full border-0 bg-transparent text-sm font-semibold outline-none"
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            {listingTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <button className="focus-ring min-h-12 rounded-md bg-ink px-5 text-sm font-black text-white">
          {filteredListings.length} results
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredListings.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}

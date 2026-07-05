import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PropertyCard } from "@/components/property-card";
import { districts, listings } from "@/lib/properties";

type DistrictPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function toSlug(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

function fromSlug(slug: string) {
  return districts.find((district) => toSlug(district) === slug);
}

export function generateStaticParams() {
  return districts.map((district) => ({
    slug: toSlug(district)
  }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = fromSlug(slug);

  if (!district) {
    return {};
  }

  return {
    title: `Property in ${district} | KarnatakaHomes`,
    description: `Search verified homes, land, rentals, and commercial properties in ${district}.`
  };
}

export default async function DistrictPage({ params }: DistrictPageProps) {
  const { slug } = await params;
  const district = fromSlug(slug);

  if (!district) {
    notFound();
  }

  const districtListings = listings.filter((listing) => listing.district === district);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-ocean">District page</p>
      <h1 className="mt-2 text-4xl font-black text-ink sm:text-5xl">Property in {district}</h1>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Browse district-level listings with room for taluk, village, locality, pincode, radius, and
        map filters as live Supabase data is connected.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {districtListings.length > 0 ? (
          districtListings.map((listing) => <PropertyCard key={listing.id} listing={listing} />)
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm xl:col-span-3">
            <h2 className="text-xl font-black text-ink">Listings coming soon</h2>
            <p className="mt-3 text-slate-600">
              This page is generated for SEO and navigation. Add seed or Supabase listings for this
              district to populate the grid.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

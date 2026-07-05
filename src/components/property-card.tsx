import { Bath, BedDouble, CheckCircle2, MapPin, Ruler, ShieldCheck } from "lucide-react";
import Image from "next/image";

import type { PropertyListing } from "@/lib/properties";

type PropertyCardProps = {
  listing: PropertyListing;
};

export function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-56 w-full">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {listing.featured ? (
            <span className="rounded-md bg-saffron px-2.5 py-1 text-xs font-black text-white">
              Featured
            </span>
          ) : null}
          {listing.verified ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2.5 py-1 text-xs font-black text-emerald-700">
              <ShieldCheck size={14} />
              Verified
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-black leading-tight text-ink">{listing.title}</h3>
            <p className="shrink-0 text-right text-lg font-black text-ocean">{listing.priceLabel}</p>
          </div>
          <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-600">
            <MapPin size={15} />
            {listing.locality}, {listing.city}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-slate-700">
          <span className="flex items-center gap-1 rounded-md bg-slate-50 px-2 py-2">
            <BedDouble size={16} />
            {listing.bedrooms || "NA"}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-slate-50 px-2 py-2">
            <Bath size={16} />
            {listing.bathrooms || "NA"}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-slate-50 px-2 py-2">
            <Ruler size={16} />
            {listing.areaSqft}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {listing.amenities.slice(0, 3).map((amenity) => (
            <span
              className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-1 text-xs font-bold text-teal-800"
              key={amenity}
            >
              <CheckCircle2 size={13} />
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="font-semibold text-slate-600">
            {listing.seller.role}: {listing.seller.name}
          </span>
          <button className="focus-ring rounded-md bg-ocean px-3 py-2 font-black text-white transition hover:bg-ink">
            View
          </button>
        </div>
      </div>
    </article>
  );
}

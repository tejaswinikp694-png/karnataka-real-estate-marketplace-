import { NextResponse } from "next/server";
import { z } from "zod";

import { searchListings } from "@/lib/properties";

const propertySearchSchema = z.object({
  q: z.string().default(""),
  district: z.string().default("All districts"),
  type: z.string().default("All types")
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parsed = propertySearchSchema.safeParse({
    q: searchParams.get("q") ?? "",
    district: searchParams.get("district") ?? "All districts",
    type: searchParams.get("type") ?? "All types"
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid property search parameters", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const results = searchListings(parsed.data.q, parsed.data.district, parsed.data.type);

  return NextResponse.json({
    data: results,
    meta: {
      total: results.length,
      source: process.env.DATABASE_URL ? "supabase-ready" : "seed-data"
    }
  });
}

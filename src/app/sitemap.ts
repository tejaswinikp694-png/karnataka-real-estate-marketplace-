import type { MetadataRoute } from "next";

import { districts } from "@/lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1
    },
    ...districts.map((district) => ({
      url: `${baseUrl}/districts/${district.toLowerCase().replaceAll(" ", "-")}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8
    }))
  ];
}

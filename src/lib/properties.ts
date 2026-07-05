export type ListingType =
  | "Apartment"
  | "Villa"
  | "Independent House"
  | "Residential Plot"
  | "Commercial"
  | "Farmhouse"
  | "PG"
  | "Agricultural Land";

export type ListingStatus = "Ready to Move" | "Under Construction" | "Rental" | "Resale";

export type PropertyListing = {
  id: string;
  title: string;
  district: string;
  city: string;
  locality: string;
  type: ListingType;
  status: ListingStatus;
  price: number;
  priceLabel: string;
  pricePerSqft: number;
  areaSqft: number;
  bedrooms: number;
  bathrooms: number;
  facing: "East" | "North" | "West" | "South";
  verified: boolean;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  amenities: string[];
  seller: {
    name: string;
    role: "Owner" | "Agent" | "Builder";
  };
};

export const districts = [
  "Bengaluru Urban",
  "Bengaluru Rural",
  "Mysuru",
  "Mangaluru",
  "Udupi",
  "Belagavi",
  "Dharwad",
  "Hubballi",
  "Davanagere",
  "Shivamogga",
  "Chikkamagaluru",
  "Ballari",
  "Bidar",
  "Kalaburagi",
  "Raichur",
  "Koppal",
  "Vijayapura",
  "Bagalkot",
  "Kodagu",
  "Tumakuru",
  "Hassan",
  "Mandya",
  "Chitradurga",
  "Ramanagara",
  "Haveri",
  "Yadgir",
  "Kolar",
  "Chikkaballapur",
  "Vijayanagara",
  "Gadag",
  "Uttara Kannada",
  "Dakshina Kannada"
];

export const listings: PropertyListing[] = [
  {
    id: "KH-BLR-1001",
    title: "Skyline 3 BHK near Manyata Tech Park",
    district: "Bengaluru Urban",
    city: "Bengaluru",
    locality: "Hebbal",
    type: "Apartment",
    status: "Ready to Move",
    price: 15800000,
    priceLabel: "INR 1.58 Cr",
    pricePerSqft: 10600,
    areaSqft: 1490,
    bedrooms: 3,
    bathrooms: 3,
    facing: "East",
    verified: true,
    featured: true,
    coordinates: { lat: 13.0358, lng: 77.597 },
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Clubhouse", "Pool", "Gym", "Power backup", "EV parking"],
    seller: { name: "Namma Realty", role: "Agent" }
  },
  {
    id: "KH-MYS-2042",
    title: "Heritage villa close to Chamundi Hills",
    district: "Mysuru",
    city: "Mysuru",
    locality: "Vijayanagar",
    type: "Villa",
    status: "Resale",
    price: 22500000,
    priceLabel: "INR 2.25 Cr",
    pricePerSqft: 8650,
    areaSqft: 2600,
    bedrooms: 4,
    bathrooms: 4,
    facing: "North",
    verified: true,
    featured: true,
    coordinates: { lat: 12.3375, lng: 76.6061 },
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Garden", "Solar", "Private parking", "Study", "Security"],
    seller: { name: "Kaveri Estates", role: "Builder" }
  },
  {
    id: "KH-MNG-3188",
    title: "Sea breeze apartment with rental yield",
    district: "Dakshina Kannada",
    city: "Mangaluru",
    locality: "Kadri",
    type: "Apartment",
    status: "Rental",
    price: 42000,
    priceLabel: "INR 42k/mo",
    pricePerSqft: 32,
    areaSqft: 1320,
    bedrooms: 2,
    bathrooms: 2,
    facing: "West",
    verified: true,
    featured: false,
    coordinates: { lat: 12.8926, lng: 74.8557 },
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Balcony", "Lift", "Water supply", "Internet", "Visitor parking"],
    seller: { name: "Coastal Homes", role: "Owner" }
  },
  {
    id: "KH-HBL-4470",
    title: "Commercial corner site on PB Road",
    district: "Dharwad",
    city: "Hubballi",
    locality: "Vidya Nagar",
    type: "Commercial",
    status: "Ready to Move",
    price: 18400000,
    priceLabel: "INR 1.84 Cr",
    pricePerSqft: 18400,
    areaSqft: 1000,
    bedrooms: 0,
    bathrooms: 2,
    facing: "East",
    verified: false,
    featured: false,
    coordinates: { lat: 15.3647, lng: 75.124 },
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Main road", "Corner site", "Parking", "Signage", "Power backup"],
    seller: { name: "North Star Realty", role: "Agent" }
  },
  {
    id: "KH-UDP-5208",
    title: "Coconut grove farmhouse near Udupi",
    district: "Udupi",
    city: "Udupi",
    locality: "Brahmavar",
    type: "Farmhouse",
    status: "Resale",
    price: 9800000,
    priceLabel: "INR 98 L",
    pricePerSqft: 490,
    areaSqft: 20000,
    bedrooms: 2,
    bathrooms: 2,
    facing: "South",
    verified: true,
    featured: false,
    coordinates: { lat: 13.3409, lng: 74.7421 },
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Well water", "Fruit trees", "Road access", "Storage", "Solar"],
    seller: { name: "Owner Direct", role: "Owner" }
  },
  {
    id: "KH-BGM-6120",
    title: "Bank approved plot in gated layout",
    district: "Belagavi",
    city: "Belagavi",
    locality: "Tilakwadi",
    type: "Residential Plot",
    status: "Ready to Move",
    price: 5600000,
    priceLabel: "INR 56 L",
    pricePerSqft: 3500,
    areaSqft: 1600,
    bedrooms: 0,
    bathrooms: 0,
    facing: "North",
    verified: true,
    featured: true,
    coordinates: { lat: 15.8497, lng: 74.4977 },
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Gated layout", "Drainage", "Street lights", "Water line", "Clear title"],
    seller: { name: "Layout Connect", role: "Builder" }
  }
];

export const marketplaceStats = [
  { label: "Verified listings", value: "12.4k" },
  { label: "Karnataka districts", value: "32" },
  { label: "Monthly buyer leads", value: "48k" },
  { label: "Avg. response time", value: "14m" }
];

export function searchListings(query: string, district: string, type: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return listings.filter((listing) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [listing.title, listing.city, listing.locality, listing.district, listing.id]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    const matchesDistrict = district === "All districts" || listing.district === district;
    const matchesType = type === "All types" || listing.type === type;

    return matchesQuery && matchesDistrict && matchesType;
  });
}

export const listingTypes: Array<ListingType | "All types"> = [
  "All types",
  "Apartment",
  "Villa",
  "Independent House",
  "Residential Plot",
  "Commercial",
  "Farmhouse",
  "PG",
  "Agricultural Land"
];

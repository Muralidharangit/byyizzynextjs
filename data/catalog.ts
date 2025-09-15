// main category + subcategory slugs drive the URLs
export const CATEGORIES = [
  {
    slug: "stainless-steel",
    name: "Stainless Steel Products",
    subs: [
      { slug: "sheets", name: "Stainless Steel Sheets" },
      { slug: "pipes", name: "Stainless Steel Pipes" },
      { slug: "rods", name: "Stainless Steel Rods" },
      { slug: "plates", name: "Stainless Steel Plates" },
      { slug: "coils", name: "Stainless Steel Coils" },
    ],
  },
  {
    slug: "Plates",
    name: "Plates, Sheets, Coils & Rounds",
    subs: [
      { slug: "Plates", name: "Steel Plates" },
      { slug: "Aluminium", name: "Aluminium Sheets" },
      { slug: "Coils", name: "Copper Coils" },
      { slug: "Rounds", name: "Stainless Steel Rounds" },
      { slug: "Brass", name: "Brass Sheets" },
    ],
  },
  // add more main categories here...
  // { slug: "copper", name: "Copper Products", subs: [...] }
] as const;

// Product = array of objects (name, category, subcategory, optional price, one image)
export type Product = {
  id: string; // for keys
  name: string;
  category: string; // main category slug, e.g., "stainless-steel"
  subcategory: string; // sub slug, e.g., "sheets"
  price?: number; // optional
  image: string; // single image url
};

export const PRODUCTS: Product[] = [
  {
    id: "ss-sheet-304-1",
    name: "SS 304 Sheet 1mm",
    category: "stainless-steel",
    subcategory: "sheets",
    price: 1350,
    image: "https://example.com/ss-304-sheet-1mm.jpg",
  },
  {
    id: "ss-pipe-316-1",
    name: "SS 316 Pipe 1 inch",
    category: "stainless-steel",
    subcategory: "pipes",
    price: 1999,
    image: "https://example.com/ss-316-pipe-1inch.jpg",
  },
  {
    id: "ss-rod-304-10mm",
    name: "SS 304 Rod 10mm",
    category: "stainless-steel",
    subcategory: "rods",
    image: "https://example.com/ss-304-rod-10mm.jpg",
  },
  {
    id: "ss-plate-316-5mm",
    name: "SS 316 Plate 5mm",
    category: "stainless-steel",
    subcategory: "plates",
    price: 4999,
    image: "https://example.com/ss-316-plate-5mm.jpg",
  },
  {
    id: "ss-coil-201",
    name: "SS 201 Coil",
    category: "stainless-steel",
    subcategory: "coils",
    image: "https://example.com/ss-201-coil.jpg",
  },
  // more products across more categories/subcategories...
];

// tiny helpers
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubcategories(slug: string) {
  return getCategory(slug)?.subs ?? [];
}

export function filterProducts(catSlug: string, subSlug?: string) {
  // subSlug "all" or undefined => return all under the main category
  if (!subSlug || subSlug === "all") {
    return PRODUCTS.filter((p) => p.category === catSlug);
  }
  return PRODUCTS.filter((p) => p.category === catSlug && p.subcategory === subSlug);
}

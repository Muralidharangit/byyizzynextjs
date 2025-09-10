// import Image from "next/image";
// import Link from "next/link";
// import { getCategory, getSubcategories, filterProducts } from "@/data/catalog";

// export default function CategoryPage({
//   params,
//   searchParams,
// }: {
//   params: { category: string };
//   searchParams: { sub?: string };
// }) {
//   const cat = getCategory(params.category);
//   if (!cat) {
//     return <main className="p-6">Category not found.</main>;
//   }

//   const sub = (searchParams.sub ?? "all").toLowerCase();
//   const subs = getSubcategories(params.category);
//   const products = filterProducts(params.category, sub);
//   const tabs = [{ slug: "all", name: "All" }, ...subs];

//   return (
//     <main className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-semibold">{cat.name}</h1>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {tabs.map((t) => {
//           const href =
//             t.slug === "all"
//               ? `/products/${params.category}?sub=all`
//               : `/products/${params.category}?sub=${t.slug}`;
//           const active = sub === t.slug;
//           return (
//             <Link
//               key={t.slug}
//               href={href}
//               className={`rounded-full border px-4 py-2 text-sm ${
//                 active ? "bg-gray-900 text-white" : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               {"name" in t ? t.name : "All"}
//             </Link>
//           );
//         })}
//       </div>

//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.length === 0 ? (
//           <p className="text-gray-500">No products found.</p>
//         ) : (
//           products.map((p) => (
//             <div key={p.id} className="rounded-lg border bg-white p-4">
//               <div className="aspect-[4/3] relative mb-3 rounded overflow-hidden bg-gray-50">
//                 <Image
//                   src={p.image}
//                   alt={p.name}
//                   fill
//                   className="object-contain p-2"
//                   sizes="(max-width:768px) 100vw, 33vw"
//                   unoptimized
//                 />
//               </div>
//               <div className="font-medium">{p.name}</div>
//               {typeof p.price === "number" && (
//                 <div className="text-sm text-gray-600 mt-1">
//                   ₹ {p.price.toLocaleString("en-IN")}
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { getMainBySlug, getSubcats, filterProductsBy, slugify } from "@/data/shopBycatlog";

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { sub?: string };
}) {
  const cat = getMainBySlug(params.category);
  if (!cat) {
    return <main className="p-6">Category not found.</main>;
  }

  const sub = (searchParams.sub ?? "all").toLowerCase();
  const subs = getSubcats(params.category);
  const products = filterProductsBy(params.category, sub);

  // tabs: All + each subcat from `categories` (excluding "All")
  const tabs = [{ slug: "all", name: "All" }, ...subs];

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">{cat.title}</h1>

      {/* subcategory tabs */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const href =
            t.slug === "all"
              ? `/products/${params.category}?sub=all`
              : `/products/${params.category}?sub=${t.slug}`;
          const active = sub === t.slug;
          return (
            <Link
              key={t.slug}
              href={href}
              className={`rounded-full border px-4 py-2 text-sm ${
                active ? "bg-gray-900 text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              {"name" in t ? t.name : "All"}
            </Link>
          );
        })}
      </div>

      {/* products grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          products.map((p, idx) => (
            <div
              key={p.materialCode ?? p.materialName ?? idx}
              className="rounded-lg border bg-white p-4"
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.materialName || "Product"}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width:768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="font-medium">{p.materialName}</div>
              {p.price && (
                <div className="mt-1 text-sm text-gray-600">
                  ₹ {Number(p.price).toLocaleString("en-IN")}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
}

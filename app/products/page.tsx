// import Link from "next/link";
// import { CATEGORIES } from "@/data/catalog";

// export const metadata = { title: "Products" };

// export default function ProductsIndex() {
//   return (
//     <main className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">Product Categories</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {CATEGORIES.map(cat => (
//           <Link
//             key={cat.slug}
//             href={`/products/${cat.slug}?sub=all`}
//             className="rounded-lg border bg-white p-4 hover:shadow"
//           >
//             {cat.name}
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

export const metadata = { title: "Products" };

export default function ProductsIndex() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Product Categories</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {SHOP_BY_CATEGORIES.map((cat) => {
          const catSlug = slugify(cat.title);
          return (
            <Link
              key={cat.id}
              href={`/products/${catSlug}?sub=all`}
              className="block rounded-lg border bg-white p-4 hover:shadow"
            >
              {cat.title}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

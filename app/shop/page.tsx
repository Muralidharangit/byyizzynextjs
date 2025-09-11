
import Link from "next/link";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

export const metadata = { title: "Products" };

export default function ProductsIndex() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="relative h-64 overflow-hidden md:h-96">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="About Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Product Categories
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}

      <main className="mx-auto max-w-7xl p-6">
        <h1 className="mb-4 text-2xl font-semibold">
          Product <span className="text-[#067afd]">Categories</span>{" "}
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SHOP_BY_CATEGORIES.map((cat) => {
            const catSlug = slugify(cat.title);
            return (
              <Link key={cat.id} href={`/shop/${catSlug}?sub=all`} className="">
                <div className="flex h-full min-h-[120px] cursor-pointer flex-row items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden">
                    <img
                      src={cat.images}
                      alt={cat.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <h6 className="line-clamp-2 text-sm font-semibold text-gray-700">{cat.title}</h6>
                </div>

                {/* {cat.title} */}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

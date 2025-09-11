"use client";

import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { filterProductsBy, getMainBySlug, getSubcats } from "@/data/shopBycatlog";
import EnquiryDialog from "@/components/EnquiryDialog";

type Tab = { slug: string; name: string };

export default function MachineryShopPage() {
  // ✅ Read route/query from client hooks (no props)
  const params = useParams<{ category: string }>();
  const searchParams = useSearchParams();

  const category = params?.category ?? "";
  const sub = (searchParams.get("sub") ?? "all").toLowerCase();

  // ✅ Derive data safely
  const cat = useMemo(() => getMainBySlug(category), [category]);
  const subs = useMemo(() => getSubcats(category), [category]);
  const products = useMemo(() => filterProductsBy(category, sub), [category, sub]);

  // Tabs: All + each subcat
  const tabs: Tab[] = useMemo(() => [{ slug: "all", name: "All" }, ...subs], [subs]);

  if (!cat) {
    return <main className="p-6">Category not found.</main>;
  }

  // enquiry form
  const [open, setOpen] = useState(false); // ⬅️ changed
  const [selected, setSelected] = useState<{ name?: string; code?: string } | null>(null); // ⬅️ changed

  function openEnquiry(name?: string, code?: string) {
    setSelected({ name, code });
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Breadcrumbs */}
      <div className="w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="/" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="font-medium hover:text-black">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#067afd]">{cat.title ?? "Machinery"}</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto mt-[112px] grid grid-cols-1 gap-8 px-6 py-6 lg:grid-cols-4">
        {/* Sidebar - Machinery Categories */}
        <aside className="sticky top-6 self-start rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-bold text-black">Categories</h2>

          <ul className="space-y-1 text-gray-700">
            {tabs.map((t) => {
              const href =
                t.slug === "all" ? `/shop/${category}?sub=all` : `/shop/${category}?sub=${t.slug}`;
              const active = sub === t.slug;
              return (
                <li key={t.slug} className="border-b border-gray-200">
                  <Link
                    href={href}
                    className={`flex items-center justify-between px-2 py-3 transition ${
                      active ? "font-semibold text-[#067afd]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{t.name}</span>
                    <i className="ri-arrow-right-s-line text-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Filter Section */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-700">Price Range</h3>
            <input
              type="range"
              min={100}
              max={5000}
              defaultValue={2500}
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-500">Up to $2500</p>
          </div>
        </aside>

        {/* Products Section */}
        <section className="space-y-12 lg:col-span-3">
          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              products.map((product, idx) => (
                <div
                  key={`${product.materialName}-${idx}`}
                  className="group relative overflow-hidden rounded-sm shadow-lg transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Full Image */}
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.materialName || "Product"}
                      width={800}
                      height={600}
                      className="h-72 w-full transform object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                    />

                    {/* Floating Heart */}
                    <button
                      type="button"
                      className="absolute top-3 right-3 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-md transition hover:bg-pink-500 hover:text-white"
                      aria-label="Add to wishlist"
                    >
                      <i className="ri-heart-line text-xl" />
                    </button>
                  </div>

                  {/* Curved Info Panel */}
                  <div className="relative z-10 -mt-10 rounded-t-3xl bg-white p-5 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900">{product.materialName}</h3>

                    {/* code */}
                    {product.materialCode}

                    {/* Price & CTA */}
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        className="relative overflow-hidden rounded bg-[#067afd] px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                        onClick={() => openEnquiry(product.materialName, product.materialCode /* or product.code */)}
                      >
                        <span className="relative z-10">Add Enquiry</span>
                        <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-[150%]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100"
              aria-label="Previous page"
            >
              <i className="ri-arrow-left-s-line" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                type="button"
                key={page}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                  page === 1
                    ? "bg-gradient-to-r from-[#067afd] to-blue-600 text-white shadow-lg"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100"
              aria-label="Next page"
            >
              <i className="ri-arrow-right-s-line" />
            </button>
          </div>
        </section>

        {/* Dialog lives once per page */}
        <EnquiryDialog
          open={open}
          onOpenChange={setOpen}
          productName={selected?.name}
          productCode={selected?.code}
        />
      </main>
    </div>
  );
}

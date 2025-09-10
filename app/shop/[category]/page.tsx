"use client";
import { useState } from "react";
import EnquiryModal from "@/components/pop";
import { filterProductsBy, getMainBySlug, getSubcats } from "@/data/shopBycatlog";
import Link from "next/link";
import Image from "next/image";

export default function MachineryShopPage({
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

  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Breadcrumbs */}
      <div className="w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <a href="#" className="font-medium hover:text-black">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="font-medium hover:text-black">
                Shop
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#067afd]">Machinery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto mt-[112px] grid grid-cols-1 gap-8 px-6 py-6 lg:grid-cols-4">
        {/* Sidebar - Machinery Categories */}
        <aside className="sticky top-6 self-start rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-bold text-black">Categories</h2>

          <ul className="space-y-4 text-gray-700">
            {tabs.map((t) => {
              const href =
                t.slug === "all"
                  ? `/shop/${params.category}?sub=all`
                  : `/shop/${params.category}?sub=${t.slug}`;
              const active = sub === t.slug;
              return (
                <Link
                  key={t.slug}
                  href={href}
                  className={` ${
                    active ? "font-semibold text-[#067afd]" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <li className="flex items-center justify-between border-b border-gray-200 py-2 pb-2">
                    {"name" in t ? t.name : "All"}

                    <i className="ri-arrow-right-s-line text-gray-400"></i>
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* Filter Section */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-700">Price Range</h3>
            <input type="range" min="100" max="5000" value="2500" className="w-full bg-[#067afd]" />
            <p className="mt-2 text-sm text-gray-500">Up to $2500</p>
          </div>
        </aside>

        {/* Products Section */}
        <section className="space-y-12 lg:col-span-3">
          {/* Products Grid */}

          {/* <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                </div> */}
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.length === 0 ? (
                <p className="text-gray-500">No products found.</p>
              ) : (
                products.map((product, idx) => (
                  <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Product Image */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.materialName || "Product"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-between p-5">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.materialName}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">High quality machinery</p>
                      </div>

                      {/* Price & Add Button */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-black">${product.price}</span>

                        <div className="p-6">
                          {/* Button that triggers popup */}
                          {/* <button
                          onClick={() => setOpen(true)}
                          className="px-6 py-3 rounded-lg text-white font-medium 
                   bg-gradient-to-r from-[#067afd] to-[#004aad] hover:opacity-90 transition"
                        >
                          Get Quote
                        </button> */}

                          {/* Reusable Popup */}
                          <EnquiryModal open={open} onClose={() => setOpen(false)} />
                        </div>

                        <button
                          className="relative flex items-center gap-2 overflow-hidden rounded bg-[#067afd] px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                          onClick={() => setOpen(true)}
                        >
                          <span className="relative z-10">Add Enquiry</span>
                          {/* <i className="ri-shopping-cart-2-line relative z-10"></i> */}
                          {/* Shine animation */}
                          <span className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-[150%]"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {/* Prev Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100">
              <i className="ri-arrow-left-s-line"></i>
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((page) => (
              <button
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

            {/* Next Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

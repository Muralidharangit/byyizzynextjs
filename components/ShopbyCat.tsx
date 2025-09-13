"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import your categories data
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

export default function ShopbyCat() {
  // const [mounted, setMounted] = useState(false);

  // // Prevent SSR mismatch
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  return (
    <div>
      <section>
        <div className="relative mx-auto w-full max-w-7xl bg-[#f8f8f9] p-4 font-sans sm:p-6">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Shop By <span className="text-[#017efc]">Categories</span>
              </h2>
              <p className="sm:text-md text-sm text-gray-500">
                Hover on a card to reveal the theme gradient and highlight the service.
              </p>
            </div>

            {/* Button / All Categories */}
            <div className="flex-shrink-0">
              <button className="flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 sm:px-5 sm:text-base">
                All Categories <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-3">
            {SHOP_BY_CATEGORIES.slice(0, 15).map((category) => {
              const catSlug = category.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-+|-+$/g, "");
              return (
                <Link
                  key={category.id}
                  href={`/shop/${catSlug}?sub=all`}
                  className="xs:w-[31%] w-full sm:w-[31%] md:w-[32%] lg:w-[31%]"
                >
                  <div className="flex h-full min-h-[120px] cursor-pointer flex-row items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:gap-4 sm:p-6">
                    {/* Icon */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden sm:h-14 sm:w-14">
                      <Image
                        src={category.images}
                        alt={category.title}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Text */}
                    <h6 className="line-clamp-2 text-sm font-semibold text-gray-700 sm:text-base">
                      {category.title}
                    </h6>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-center py-8">
            <button className="flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 sm:px-5 sm:text-base">
              All Categories <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

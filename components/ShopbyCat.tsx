// app/components/ShopbyCat.tsx  (NO "use client")
import Image from "next/image";
import Link from "next/link";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

export default function ShopbyCat() {
  return (
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

          <Link href="/shop" prefetch={false} aria-label="All categories">
            <span className="inline-flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 sm:px-5 sm:text-base">
              All Categories <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl" />
            </span>
          </Link>
        </div>

        {/* Grid (more stable than flex-wrap) */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          style={{ contentVisibility: "auto", containIntrinsicSize: "800px 600px" }}
        >
          {SHOP_BY_CATEGORIES.slice(0, 15).map((c) => {
            const slug = slugify(c.title);
            return (
              <Link key={c.id} href={`/shop/${slug}?sub=all`} prefetch={false} className="block">
                <div className="flex min-h-[120px] items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden">
                    <Image src={c.images} alt={c.title} width={56} height={56} sizes="56px" />
                  </div>
                  <h6 className="line-clamp-2 min-h-[3rem] text-base font-semibold text-gray-700">
                    {c.title}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center py-8">
          <Link href="/shop" prefetch={false} aria-label="All categories">
            <span className="inline-flex items-center rounded-lg bg-[#1c90f2] px-5 py-2 text-base font-medium text-white shadow-sm transition hover:opacity-90">
              All Categories <i className="ri-arrow-right-s-line ml-1 text-xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

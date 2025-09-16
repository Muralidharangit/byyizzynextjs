import Image from "next/image";
import Link from "next/link";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

export default function Category() {
  return (
    <>
      {/* ✅ Desktop Aside (SSR, no JS) */}
      <aside className="relative z-40 hidden xl:col-span-3 xl:block">
        <nav aria-label="Product Categories" className="sticky top-[130px] rounded shadow">
          <ul
            className="rounded-lg border border-gray-100 text-gray-700 shadow-sm"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "600px 400px",
            }}
          >
            {SHOP_BY_CATEGORIES.slice(0, 15).map((cat) => {
              const catSlug = slugify(cat.title);
              return (
                <li
                  key={cat.id}
                  className="group relative border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={`/shop/${catSlug}?sub=all`}
                    className="flex items-center justify-between px-5 py-3 transition hover:bg-gray-100 hover:text-[#067afd]"
                    aria-label={cat.title}
                  >
                    <span className="flex items-center">
                      <Image
                        src={cat.images}
                        alt={cat.title}
                        width={24}
                        height={24}
                        sizes="24px"
                        loading="lazy"
                        className="mr-2 h-6 w-6 object-contain"
                      />
                      <span>{cat.title}</span>
                    </span>
                    <i className="ri-arrow-right-s-line text-gray-400" />
                  </Link>

                  {/* ✅ Submenu (only appears on hover) */}
                  <div className="invisible absolute top-0 left-full z-50 hidden w-[560px] flex-wrap bg-white p-6 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 xl:flex">
                    <div className="w-1/2 px-4">
                      <h4 className="mb-3 text-sm font-semibold uppercase">Sub Categories</h4>
                      <ul className="space-y-1">
                        {cat.categories.map((sub, i) => {
                          const subSlug = slugify(sub);
                          return (
                            <li key={i}>
                              <Link
                                href={`/shop/${catSlug}?sub=${subSlug}`}
                                className="block transition hover:text-[#067afd]"
                              >
                                {sub}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}

            {/* ✅ All categories link */}
            <li className="border-b border-gray-100 last:border-b-0">
              <Link
                href="/shop"
                className="flex items-center justify-center px-5 py-3 font-semibold text-[#067afd] transition hover:bg-gray-100"
              >
                All Categories
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ✅ Mobile Accordion (CSS-only, no JS) */}
      <section className="px-4 py-2 xl:hidden">
        <details className="rounded border border-gray-200 bg-white">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded px-4 py-3 font-medium text-white"
            style={{ background: "#067afd" }}
          >
            <i className="ri-menu-line"></i> Categories
          </summary>

          {/* Panel */}
          <div className="p-2">
            <ul className="text-gray-700">
              {SHOP_BY_CATEGORIES.map((cat) => {
                const catSlug = slugify(cat.title);
                return (
                  <details key={cat.id} className="border-b border-gray-200 last:border-b-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3">
                      <span className="flex items-center">
                        <Image
                          src={cat.images}
                          alt={cat.title}
                          width={20}
                          height={20}
                          sizes="20px"
                          loading="lazy"
                          className="mr-2 h-5 w-5 object-contain"
                        />
                        {cat.title}
                      </span>
                      <i className="ri-arrow-down-s-line transition-transform"></i>
                    </summary>

                    <div className="bg-gray-50 px-4 pb-3">
                      <h4 className="mb-2 text-sm font-semibold uppercase">Sub Categories</h4>
                      <ul className="space-y-1">
                        {cat.categories.map((sub, i) => {
                          const subSlug = slugify(sub);
                          return (
                            <li key={i}>
                              <Link
                                href={`/shop/${catSlug}?sub=${subSlug}`}
                                className="block py-1 hover:text-[#067afd]"
                              >
                                {sub}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>
                );
              })}
            </ul>
          </div>
        </details>
      </section>
    </>
  );
}

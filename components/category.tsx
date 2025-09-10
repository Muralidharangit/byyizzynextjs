import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";
import Link from "next/link";

export default function category() {
  return (
    <aside className="relative z-50 rounded bg-white p-2 shadow md:col-span-3">
      <div className="sticky top-[130px] rounded bg-white shadow">
        <div className="container mx-auto">
          <div className="w-full">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <ul className="text-gray-700">
                {SHOP_BY_CATEGORIES.map((cat) => {
                  const catSlug = slugify(cat.title);
                  return (
                    <li className="group relative border-b border-gray-100 last:border-b-0">
                      <Link
                        key={cat.id}
                        href={`/shop/${catSlug}?sub=all`}
                        className="flex items-center justify-between px-5 py-3 transition hover:bg-gray-100 hover:text-[#067afd]"
                      >
                        {/* {cat.title} */}

                        <span className="flex items-center">
                          <i className="ri-flashlight-line mr-2" /> {cat.title}
                        </span>
                        <i className="ri-arrow-right-s-line text-gray-400" />
                      </Link>

                      <div className="invisible absolute top-0 left-full z-50 flex w-[600px] flex-wrap bg-white p-6 opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100">
                        <div className="w-1/2 px-4">
                          <h4 className="mb-3 text-sm font-semibold uppercase">Sub Categories</h4>

                          <ul className="space-y-1">
                            {cat.categories.map((sub, idx) => {
                              const subSlug = slugify(sub);
                              return (
                                <li key={idx}>
                                  <Link
                                    href={`/shop/${catSlug}?sub=${subSlug}`}
                                    className="block hover:text-[#067afd]"
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

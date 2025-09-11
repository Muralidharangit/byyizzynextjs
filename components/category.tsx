"use client";
import { useState } from "react";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";
import Link from "next/link";

export default function Category() {
  const [openCategory, setOpenCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ Offcanvas state

  return (
    <>
      {/* ✅ Desktop Aside (only visible above 1000px) */}
      <aside className="relative z-50 hidden xl:col-span-3 xl:block">
        <div className="sticky top-[130px] rounded bg-white shadow">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <ul className="text-gray-700">
              {SHOP_BY_CATEGORIES.map((cat, idx) => {
                const catSlug = slugify(cat.title);

                return (
                  <li
                    key={cat.id}
                    className="group relative border-b border-gray-100 last:border-b-0"
                  >
                    {/* Desktop link */}
                    <Link
                      href={`/shop/${catSlug}?sub=all`}
                      className="flex items-center justify-between px-5 py-3 transition hover:bg-gray-100 hover:text-[#067afd]"
                    >
                      <span className="flex items-center">
                        <i className="ri-flashlight-line mr-2" /> {cat.title}
                      </span>
                      <i className="ri-arrow-right-s-line text-gray-400" />
                    </Link>

                    {/* Desktop hover submenu */}
                    <div className="invisible absolute top-0 left-full z-50 hidden w-[600px] flex-wrap bg-white p-6 opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 xl:flex">
                      <div className="w-1/2 px-4">
                        <h4 className="mb-3 text-sm font-semibold uppercase">Sub Categories</h4>
                        <ul className="space-y-1">
                          {cat.categories.map((sub, idx2) => {
                            const subSlug = slugify(sub);
                            return (
                              <li key={idx2}>
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
            </ul>
          </div>
        </div>
      </aside>

      {/* ✅ Mobile Trigger (below 1000px) */}
      <div className="px-4 py-2 xl:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white shadow"
        >
          <i className="ri-menu-line"></i> Categories
        </button>
      </div>

      {/* ✅ Mobile Offcanvas */}
      {isOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Overlay */}
          <div
            className="bg-opacity-50 absolute inset-0 bg-black"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute top-0 left-0 h-full w-80 overflow-y-auto bg-white p-4 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button onClick={() => setIsOpen(false)}>
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <ul className="text-gray-700">
              {SHOP_BY_CATEGORIES.map((cat, idx) => {
                const catSlug = slugify(cat.title);

                return (
                  <li key={cat.id} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                      className="flex w-full items-center justify-between px-2 py-3 text-left"
                    >
                      <span className="flex items-center">
                        <i className="ri-flashlight-line mr-2" /> {cat.title}
                      </span>
                      <i
                        className={`ri-arrow-down-s-line transition-transform ${
                          openCategory === idx ? "rotate-180 text-[#067afd]" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile accordion submenu */}
                    {openCategory === idx && (
                      <div className="bg-gray-50 px-4 py-2">
                        <h4 className="mb-2 text-sm font-semibold uppercase">Sub Categories</h4>
                        <ul className="space-y-1">
                          {cat.categories.map((sub, idx2) => {
                            const subSlug = slugify(sub);
                            return (
                              <li key={idx2}>
                                <Link
                                  href={`/shop/${catSlug}?sub=${subSlug}`}
                                  className="block py-1 hover:text-[#067afd]"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

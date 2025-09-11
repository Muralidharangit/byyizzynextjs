"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SHOP_BY_CATEGORIES, getSubcats } from "@/data/shopBycatlog";

type Suggestion =
  | {
      type: "category";
      catTitle: string;
      catPath: string;
      label: string;
      url: string;
      groupKey: string;
    }
  | {
      type: "product";
      catTitle: string;
      catPath: string;
      productName: string;
      productCode?: string;
      productCategory?: string;
      label: string;
      secondary?: string;
      url: string;
      groupKey: string;
    };

const normalize = (s: string) => s.toLowerCase();
const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");
const pathSeg = (s: string) => encodeURIComponent(trimSlashes(s).toLowerCase());
const subParam = (s?: string) =>
  encodeURIComponent(trimSlashes((s ?? "all")).toLowerCase());

export default function GlobalSearch({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listboxId = "gs-suggestions";

  // Build flat suggestions
  const suggestions: Suggestion[] = useMemo(() => {
    const query = normalize(q.trim());
    if (!query) return [];

    const out: Suggestion[] = [];

    for (const cat of SHOP_BY_CATEGORIES) {
      const groupKey = cat.title;

      // category hit
      if (normalize(cat.title).includes(query) || normalize(cat.path).includes(query)) {
        out.push({
          type: "category",
          catTitle: cat.title,
          catPath: cat.path,
          label: `Go to ${cat.title}`,
          url: `/shop/${pathSeg(cat.path)}?sub=all`, // ✅ uses pathSeg
          groupKey,
        });
      }

      // product hits (limit per category)
      let added = 0;
      for (const p of cat.product) {
        const hay = `${p.materialName}`;
        if (!normalize(hay).includes(query)) continue;

        // find subcat slug from helper
        let subSlug: string | undefined;
        try {
          const subs = getSubcats(cat.path) as Array<{ slug: string; name?: string }>;
          const match =
            subs?.find(
              (s) =>
                normalize(s.name ?? "") === normalize(p.category ?? "") ||
                normalize(s.slug) === normalize(p.category ?? "")
            ) ??
            subs?.find((s) => (s.name ?? "").toLowerCase().includes((p.category ?? "").toLowerCase()));
          subSlug = match?.slug;
        } catch {
          /* noop */
        }

        out.push({
          type: "product",
          catTitle: cat.title,
          catPath: cat.path,
          productName: p.materialName,
          productCode: p.materialCode,
          productCategory: p.category,
          label: p.materialName,
          secondary: [p.materialCode, p.category].filter(Boolean).join(" • "),
          url: `/shop/${pathSeg(cat.path)}?sub=${subParam(subSlug)}`, // ✅ uses pathSeg + subParam
          groupKey,
        });

        if (++added >= 5) break;
      }
    }
    return out.slice(0, 30);
  }, [q]);

  // Group by category title
  const grouped = useMemo(() => {
    const map = new Map<string, Suggestion[]>();
    for (const s of suggestions) {
      if (!map.has(s.groupKey)) map.set(s.groupKey, []);
      map.get(s.groupKey)!.push(s);
    }
    return Array.from(map.entries());
  }, [suggestions]);

  // close on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => setActive(0), [suggestions.length]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions[active]) go(suggestions[active].url);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function go(url: string) {
    router.push(url);
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (suggestions.length > 0) {
      go(suggestions[active] ? suggestions[active].url : suggestions[0].url);
    } else {
      // optional: router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  }

return (
  <div className={`relative ${className}`} ref={wrapRef}>
    <form className="relative mx-auto w-full" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(Boolean(q.trim()))}
        onKeyDown={handleKeyDown}
        placeholder="Search Products..."
        className="h-[45px] w-full rounded border border-[#067afd] px-3 pr-24 focus:outline-none"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listboxId}
        role="combobox"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
      >
        <i className="ri-search-line" /> Search
      </button>
    </form>

    {open && q.trim() && (
      <div
        className="absolute z-[9999] mt-2 max-h-96 w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-xl"
        role="listbox"
        id={listboxId}
        onMouseDownCapture={(e) => e.stopPropagation()} // 👈 important
      >
        {suggestions.length === 0 ? (
          <div className="p-4 text-sm text-gray-500">No results</div>
        ) : (
          <ul className="divide-y">
            {grouped.map(([groupTitle, items]) => (
              <li key={groupTitle} className="p-0">
                <div className="sticky top-0 z-10 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600 lowercase">
                  {groupTitle}
                </div>
                {items.map((s) => {
                  const flatIndex = suggestions.findIndex((x) => x === s);
                  const isActive = flatIndex === active;
                  return (
                    <button
                      key={`${s.type}-${s.url}`}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => go(s.url)}
                      className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                        isActive ? "bg-gray-100" : ""
                      }`}
                      role="option"
                      aria-selected={isActive}
                    >
                      <div className="min-w-0">
                        <div className="truncate font-medium">{s.label}</div>
                        {"secondary" in s && s.secondary ? (
                          <div className="truncate text-xs text-gray-500">{s.secondary}</div>
                        ) : null}
                      </div>
                      {/* <div className="shrink-0 text-xs text-gray-400">
                        {s.type === "category"
                          ? "Category"
                          : s.productCategory || "Product"}
                      </div> */}
                    </button>
                  );
                })}
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </div>
);
}

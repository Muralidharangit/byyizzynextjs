"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";

type CatItem = {
  id: string;
  title: string;
  slug: string;
  image?: string;
};

export default function GlobalSearch({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Build the list once ---
  const cats: CatItem[] = useMemo(
    () =>
      SHOP_BY_CATEGORIES.map((c) => ({
        id: c.id,
        title: c.title,
        slug: slugify(c.title),
        image: (c as any).images,
      })),
    []
  );

  // --- Filtered suggestions ---
  const suggestions: CatItem[] = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) {
      // initial top 10 when empty
      return [...cats].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10);
    }
    const starts = cats.filter((c) => c.title.toLowerCase().startsWith(query));
    const includes = cats.filter(
      (c) => !starts.includes(c) && c.title.toLowerCase().includes(query)
    );
    return [...starts, ...includes].slice(0, 10);
  }, [q, cats]);

  // reset active on list change
  useEffect(() => setActive(0), [suggestions.length]);

  // close when clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // --- Positioning for the portal dropdown (fixed to input rect) ---
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    function updatePosition() {
      const el = inputRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        top: r.bottom + 4, // 4px gap
        left: r.left,
        width: r.width,
        zIndex: 9999,
      });
    }
    if (open) {
      updatePosition();
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);
    }
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, q]);

  function goTo(cat: CatItem) {
    router.push(`/shop/${cat.slug}?sub=all`);
    setOpen(false);
  }

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
      const pick = suggestions[active] ?? suggestions[0];
      if (pick) goTo(pick);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (suggestions.length) goTo(suggestions[active] ?? suggestions[0]);
  }

  return (
    <div className={`relative ${className}`} ref={wrapRef}>
      <form className="relative mx-auto w-full max-w-md" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search Products..."
          className="h-[45px] w-full rounded border border-[#067afd] px-3 pr-24 focus:outline-none"
          aria-autocomplete="list"
          aria-expanded={open}
          role="combobox"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
        >
          <i className="ri-search-line" /> Search
        </button>
      </form>

      {/* Portal dropdown */}
      {open &&
        createPortal(
          <div
            style={dropdownStyle}
            className="max-h-96 overflow-auto rounded-xl border border-gray-200 bg-white shadow-xl"
            onMouseDownCapture={(e) => e.stopPropagation()} // keep input focus while clicking
          >
            {suggestions.length === 0 ? (
              <div className="p-4 text-sm text-gray-500">No results</div>
            ) : (
              <ul className="divide-y">
                {suggestions.map((cat, i) => {
                  const isActive = i === active;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => goTo(cat)}
                        className={`flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 ${
                          isActive ? "bg-gray-100" : ""
                        }`}
                        role="option"
                        aria-selected={isActive}
                      >
                        {cat.image ? (
                          <img
                            src={cat.image}
                            alt=""
                            className="h-8 w-8 shrink-0 rounded object-contain"
                          />
                        ) : (
                          <div className="h-8 w-8 shrink-0 rounded bg-gray-100" />
                        )}
                        <span className="truncate text-sm font-medium">{cat.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

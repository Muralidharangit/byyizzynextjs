// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoblue from "@/public/images/blue.png";

// ✅ SVG icons (no webfont = no CLS)
import {
  Search,
  Menu,
  X,
  ListChecks,
  ChevronDown,
  Flashlight,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // ✅ lock total header height (top 40 + middle 80 = 120)
    <header className="fixed inset-x-0 top-0 z-[100] h-[120px] bg-white shadow-md">
      {/* Top bar = 40px */}
      <div className="flex h-10 items-center bg-[#1c90f2]">
        <div className="container mx-auto flex w-full items-center justify-between px-4">
          {/* left */}
          <ul className="flex items-center gap-4 text-sm text-white whitespace-nowrap leading-[1.2]">
            <li className="border-r border-white/40 pr-4 last:border-r-0">
              <Link href="/store-location" className="hover:text-[#cbe3ff]">Store Location</Link>
            </li>
            <li className="border-r border-white/40 pr-4 last:border-r-0">
              <Link href="/order-tracking" className="hover:text-[#cbe3ff]">Order Tracking</Link>
            </li>
            <li className="pr-0">
              Call:{" "}
              <Link href="tel:+112345678909" className="text-white/90 hover:text-white">
                +11 2345678909
              </Link>
            </li>
          </ul>

          {/* right */}
          <div className="flex items-center gap-4 text-sm text-white whitespace-nowrap leading-[1.2]">
            <Link href="/my-account" className="hover:text-[#cbe3ff]">My Account</Link>
            <button className="hover:text-[#cbe3ff] flex items-center gap-1">
              <User className="h-4 w-4" /> Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Middle bar = 80px */}
      <div className="h-20 border-b border-gray-200">
        <div className="container mx-auto grid h-full grid-cols-2 items-center gap-4 px-4 lg:grid-cols-12">
          {/* logo */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block">
              {/* reserve space via width/height (no CLS) */}
              <Image
                src={logoblue}
                alt="Logo"
                width={160}
                height={40}
                className="w-24 lg:w-40 h-auto"
                priority
              />
            </Link>
          </div>

          {/* search (desktop only) */}
          <div className="hidden lg:col-span-5 lg:block">
            <form className="relative mx-auto w-full max-w-md">
              <input
                type="text"
                placeholder="Search Products..."
                className="h-[45px] w-full rounded border border-[#067afd] px-3 pr-24 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded bg-[#1c90f2] px-4 py-2 text-white hover:bg-blue-700"
              >
                <Search className="h-4 w-4" /> Search
              </button>
            </form>
          </div>

          {/* nav + actions */}
          <div className="col-span-1 flex items-center justify-end gap-4 lg:col-span-5">
            {/* desktop nav */}
            <ul className="hidden lg:flex items-center gap-6 whitespace-nowrap leading-[1.2]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#067afd]">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/shop">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded bg-[#1c90f2] px-4 py-2 text-white hover:bg-blue-700"
                  >
                    <ListChecks className="h-4 w-4" /> All Categories
                  </button>
                </Link>
              </li>
            </ul>

            {/* mobile trigger */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1e8] text-[#067afd] shadow-md transition hover:bg-[#f0f4ff]"
                aria-label="Open categories"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* offcanvas */}
            <div
              className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
                isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
              <div
                className={`absolute top-0 left-0 h-full w-80 transform overflow-y-auto bg-white p-4 shadow-lg transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Categories</h2>
                  <button onClick={() => setIsOpen(false)} aria-label="Close">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* example category list without icon font */}
                {/* ...your category list here; replace any <i className="ri-..."> with lucide icons */}
                <ul className="space-y-2">
                  <li className="flex items-center justify-between px-2 py-3">
                    <span className="flex items-center gap-2"><Flashlight className="h-4 w-4" /> Example</span>
                    <ChevronDown className="h-4 w-4" />
                  </li>
                </ul>
              </div>
            </div>

            {/* cart */}
            <button className="flex items-center gap-2 transition hover:text-[#067afd] lg:mr-2">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1e8] text-[#067afd]">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#1c90f2] text-xs text-white">
                  0
                </span>
              </span>
            </button>

            {/* mobile menu button (simple pages) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-700 hover:text-[#067afd] lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile dropdown menu (outside the fixed bars so it doesn't change header height) */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block hover:text-[#067afd]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/product" className="block">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#1c90f2] px-4 py-2 text-white hover:bg-blue-700"
                >
                  <User className="h-4 w-4" /> Enquiry
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

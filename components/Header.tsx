"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoblue from "@/public/images/blue.png"; // adjust path
import GlobalSearch from "./GlobalSearch";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Product" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-white shadow-md">
      {/* Top Header */}
      <div className="bg-[#f8f8f9] py-3">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 lg:flex-row lg:gap-0">
          {/* Left */}
          <ul className="flex flex-wrap justify-center gap-4 text-center text-sm text-gray-600 lg:justify-start">
            <li className="border-r border-gray-300 pr-4 last:border-r-0">
              <Link href="/store-location" className="hover:text-[#067afd]">
                Store Location
              </Link>
            </li>
            <li className="border-r border-gray-300 pr-4 last:border-r-0">
              <Link href="/order-tracking" className="hover:text-[#067afd]">
                Order Tracking
              </Link>
            </li>
            <li className="pr-0">
              Call:{" "}
              <a href="tel:+112345678909" className="font-semibold text-[#067afd]">
                +11 2345678909
              </a>
            </li>
          </ul>

          {/* Right */}
          <div className="mt-2 flex items-center gap-4 text-sm lg:mt-0">
            <Link href="/my-account" className="hover:text-[#067afd]">
              My Account
            </Link>
            <button className="text-gray-800 hover:text-[#067afd]">Sign in</button>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="border-b border-gray-300 py-4">
        <div className="container mx-auto grid grid-cols-2 items-center gap-4 px-4 lg:grid-cols-12">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <Image src={logoblue} alt="Logo" className="w-24 lg:w-40" priority />
            </Link>
          </div>

          {/* Search (desktop only: from 992px) */}
          <div className="hidden lg:col-span-5 lg:block">
            <form className="relative mx-auto w-full max-w-md">
              <input
                type="text"
                placeholder="Search Products..."
                className="h-[45px] w-full rounded border border-[#067afd] px-3 pr-24 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
              >
                <i className="ri-search-line" /> Search
              </button>
            </form>
          </div>

          {/* Nav + Icons */}
          <div className="col-span-1 flex items-center justify-end gap-4 lg:col-span-5">
            {/* Desktop Nav (only visible >= 992px) */}
            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#067afd]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
                  >
                    All Categories
                  </button>
                </Link>
              </li>
            </ul>

            {/* Cart */}
            <button
              className="flex items-center gap-2 transition hover:text-[#067afd] lg:mr-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal-cart"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1e8] text-[#067afd]">
                <i className="ri-shopping-cart-line text-lg" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#067afd] text-xs text-white">
                  0
                </span>
              </span>
            </button>

            {/* Mobile Menu Button (< 992px) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-700 hover:text-[#067afd] lg:hidden"
            >
              <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav (< 992px) */}
      {isMenuOpen && (
        <div className="space-y-4 border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          {/* Search (mobile/tablet only) */}
          {/* <form className="relative w-full">
            <input
              type="text"
              placeholder="Search Products..."
              className="h-[45px] w-full rounded border border-[#067afd] px-3 pr-24 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
            >
              <i className="ri-search-line" /> Search
            </button>
          </form> */}

          {/* search */}
         <GlobalSearch className="w-full" />

          {/* Nav links */}
          <ul className="flex flex-col gap-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block hover:text-[#067afd]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/product">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
                >
                  <i className="ri-user-line"></i> Enquiry
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

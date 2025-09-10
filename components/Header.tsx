"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoblue from "@/public/images/blue.png"; // adjust your image path

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-100 w-full bg-white shadow-md">
      {/* Top Header */}
      <div className="top-header bg-[#f8f8f9] py-3">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 md:flex-row md:gap-0">
          {/* Left */}
          <ul className="flex flex-wrap justify-center gap-4 text-center text-sm text-gray-600 md:justify-start">
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
          <div className="mt-2 flex items-center gap-4 text-sm md:mt-0">
            <Link href="/my-account" className="hover:text-[#067afd]">
              My Account
            </Link>
            <button className="text-gray-800 hover:text-[#067afd]">Sign in</button>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="middle-header border-b border-gray-300 py-4">
        <div className="container mx-auto grid grid-cols-2 items-center gap-4 px-4 md:grid-cols-12">
          {/* Logo */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image src={logoblue} alt="Logo" className="w-24 md:w-40" priority />
            </Link>
          </div>

          {/* Search (hidden on mobile) */}
          <div className="hidden md:col-span-5 md:block">
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
          <div className="col-span-1 flex items-center justify-end gap-4 md:col-span-5">
            {/* Desktop Menu */}
            <ul className="hidden items-center gap-6 md:flex">
              <li>
                <Link href="/" className="hover:text-[#067afd]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#067afd]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#067afd]">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#067afd]">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/product" className="hover:text-[#067afd]">
                  <button
                    type="submit"
                    className="top-1/2 right-1 flex items-center gap-2 rounded bg-[#067afd] px-4 py-2 text-white hover:bg-blue-700"
                  >
                    <i className="ri-user-line"></i> Enquiry
                  </button>
                </Link>
              </li>
            </ul>

            {/* Wishlist */}
            <ul className="wish-cart flex flex-col gap-6 text-sm md:flex-row">
              {/* Wishlist */}
              {/* <li>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 hover:text-[#067afd] transition"
                >
                  <span className="relative wish-icon flex items-center justify-center w-10 h-10 rounded-full bg-[#fff1e8] text-[#067afd]">
                    <i className="ri-heart-line text-lg" />
                    <span className="count absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center bg-[#067afd] text-white rounded-full">
                      0
                    </span>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="favorite text-xs text-gray-500">
                      Favorite
                    </span>
                    <span className="font-medium">My Wishlist</span>
                  </div>
                </Link>
              </li> */}

              {/* Cart */}
              <li>
                <button
                  className="flex items-center gap-2 transition hover:text-[#067afd]"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-cart"
                >
                  <span className="wish-icon relative flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1e8] text-[#067afd]">
                    <i className="ri-shopping-cart-line text-lg" />
                    <span className="count absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#067afd] text-xs text-white">
                      0
                    </span>
                  </span>
                  {/* <div className="flex flex-col leading-tight">
                    <span className="favorite text-xs text-gray-500">
                      Your Cart:
                    </span>
                    <span className="font-medium">$00.00</span>
                  </div> */}
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-700 hover:text-[#067afd] md:hidden"
            >
              <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li>
              <Link href="/" className="hover:text-[#067afd]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#067afd]">
                About
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#067afd]">
                Product
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#067afd]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

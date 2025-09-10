"use client";

import Image from "next/image";
import Link from "next/link";
import logoblue from "@/public/images/blue.png"; // adjust path
import logowhite from "@/public/images/white.png"; // adjust path

export default function Footer() {
  return (
    <>
      {/* ✅ Subscribe Area */}
      <section className="bg-[#067afd] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* Logo */}
            <div className="flex justify-center lg:w-2/12 lg:justify-start">
              <Link href="/">
                <Image src={logowhite} alt="Logo" className="w-40" priority />
              </Link>
            </div>

            {/* Text */}
            <div className="text-center lg:w-5/12 lg:text-left">
              <span className="mb-2 block text-sm text-white">
                30% Discount For Your First Order
              </span>
              <h3 className="text-xl font-semibold text-white">Subscribe To Our Newsletter</h3>
              <p className="mt-2 text-white">
                Subscribe to the newsletter for all the latest updates
              </p>
            </div>

            {/* Form */}
            <div className="w-full lg:w-5/12">
              <form className="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-[55px] w-full rounded-sm bg-white px-4 pr-[140px] text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 h-[50px] -translate-y-1/2 rounded-sm bg-[#067afd] px-6 text-white transition hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer Area */}
      <footer className="bg-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Info */}
            <div>
              <Image src={logoblue} alt="Logo" className="mb-2 w-40" priority />
              <p className="text-sm text-[#9c9c9c]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto amet quae
                nesciunt quod molestiae.
              </p>
            </div>

            {/* Information */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Information</h3>
              <ul className="space-y-2 text-sm text-[#9c9c9c]">
                <li>
                  <Link href="/about" className="hover:text-[#067afd]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/order-tracking" className="hover:text-[#067afd]">
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="hover:text-[#067afd]">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/store-location" className="hover:text-[#067afd]">
                    Store Location
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#067afd]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#067afd]">
                    Delivery Information
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2 text-sm text-[#9c9c9c]">
                <li>
                  <Link href="/faq" className="hover:text-[#067afd]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#067afd]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="hover:text-[#067afd]">
                    Money-back Guarantee!
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#067afd]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#067afd]">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#067afd]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Information</h3>
              <ul className="space-y-3 text-sm text-[#9c9c9c]">
                <li className="flex items-start gap-2">
                  <i className="ri-map-pin-line text-[#067afd]" />
                  2491 Reel Avenue Albuquerque, NM
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-phone-line text-[#067afd]" />
                  <a href="tel:+1-(514)-321-4566" className="hover:text-[#067afd]">
                    +1 (514) 321-4566
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-mail-send-line text-[#067afd]" />
                  <a href="mailto:[email protected]" className="hover:text-[#067afd]">
                    [email protected]
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-time-line text-[#067afd]" />
                  Mon-Sat 8:00 AM - 8:00 PM
                </li>
              </ul>

              {/* Socials */}
              <div className="mt-4">
                <span className="text-black-800 mb-2 block">Stay connected:</span>
                <div className="flex gap-3 text-lg">
                  <a href="https://facebook.com" target="_blank" className="hover:text-[#067afd]">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="hover:text-[#067afd]">
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="hover:text-[#067afd]">
                    <i className="ri-linkedin-fill" />
                  </a>
                  <a href="https://instagram.com" target="_blank" className="hover:text-[#067afd]">
                    <i className="ri-instagram-fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ Copy Right */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-[#9c9c9c]">
        <p>
          © {new Date().getFullYear()} Murali is Proudly Owned by{" "}
          <a href="#" target="_blank" className="text-[#067afd] hover:underline">
            Syscorptheme
          </a>
        </p>
      </div>
    </>
  );
}

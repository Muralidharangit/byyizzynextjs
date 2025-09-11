"use client";

import Image from "next/image";
import Link from "next/link";
import logoblue from "@/public/images/blue.png"; // adjust path
import logowhite from "@/public/images/white.png"; // adjust path

export default function Footer() {
  return (
    <>
      {/* ✅ Subscribe Area */}
      <section className="bg-[#067afd] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left Content */}
            <div className="text-center lg:w-7/12 lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Take Your Business to the Next Level?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Get in touch with us today and explore how we can help you achieve your goals.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:w-5/12 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#067afd] shadow-md transition hover:scale-105 hover:bg-gray-100"
              >
                Contact Us
              </Link>
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

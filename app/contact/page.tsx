import React from "react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
export default function ContactPage() {

  
  return (
    <div className="min-h-screen bg-[#edf6ff] text-gray-900">
      {/* Start Page Title Area cvg */}
      <div className="mt-[110px] w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Byyizzy
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#1c90f2]">Contact</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <Image
          src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
          alt="About Banner"
          width={100}
          height={100}
          className="h-full w-full object-cover blur-xs filter"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="px-4 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="bg-gray min-h-screen py-12">
        <div className="mx-auto max-w-6xl px-5">
          {/* Contact Info Cards */}
          <div className="mt-5 flex flex-wrap justify-center gap-6">
            {/* Address */}
            <div className="max-w-sm min-w-[280px] flex-1 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd] hover:shadow-xl">
              <div className="group relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200">
                <i className="ri-map-pin-line text-2xl text-[#1c90f2] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#067afd] transition-transform duration-500 group-hover:scale-100"></span>
              </div>
              <div>
                <span className="mb-1 block text-lg font-semibold text-gray-800">Address</span>
                <p className="text-sm text-gray-500">123 Street, Old Trafford, London, UK</p>
              </div>
            </div>

            {/* Email */}
            <div className="max-w-sm min-w-[280px] flex-1 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd] hover:shadow-xl">
              <div className="group relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200">
                <i className="ri-mail-line text-2xl text-[#1c90f2] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#067afd] transition-transform duration-500 group-hover:scale-100"></span>
              </div>
              <div>
                <span className="mb-1 block text-lg font-semibold text-gray-800">
                  Email Address
                </span>
                <Link
                  href="mailto:info@yourmail.com"
                  className="text-sm text-gray-500 transition-colors hover:text-[#1c90f2]"
                >
                  info@yourmail.com
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="max-w-sm min-w-[280px] flex-1 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd] hover:shadow-xl">
              <div className="group relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200">
                <i className="ri-phone-line text-2xl text-[#1c90f2] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#067afd] transition-transform duration-500 group-hover:scale-100"></span>
              </div>
              <div>
                <span className="mb-1 block text-lg font-semibold text-gray-800">Phone</span>
                <p className="text-sm text-gray-500">+ 457 789 789 65</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 flex flex-wrap gap-8">
            {/* Contact Form */}
            <div className="min-w-[320px] flex-1 rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                Get In <span className="text-[#1c90f2]">Touch</span>{" "}
              </h2>
              <p className="mb-6 text-gray-600">
                We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
              </p>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="min-w-[320px] flex-1 overflow-hidden rounded-xl border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.28130573357!2d-0.145!3d51.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x123456789abcdef!2sLondon!5e0!3m2!1sen!2suk!4v1693500000000!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
                className="h-full w-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Start Page Title Area */}
      <div classname="bg-white py-5 w-full mt-[110px]">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <a href="#" className="font-medium hover:text-black">
                Byyizzy
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="font-medium hover:text-black">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#067afd]">Contact</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="About Banner"
          className="h-full w-full object-cover"
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
          {/* Contact Info Cards */}
          <div className="mt-5 flex flex-wrap justify-center gap-6">
            {/* Address */}
            <div className="max-w-sm min-w-[280px] flex-1 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd] hover:shadow-xl">
              <div className="group relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200">
                <i className="ri-map-pin-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
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
                <i className="ri-mail-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#067afd] transition-transform duration-500 group-hover:scale-100"></span>
              </div>
              <div>
                <span className="mb-1 block text-lg font-semibold text-gray-800">
                  Email Address
                </span>
                <a
                  href="mailto:info@yourmail.com"
                  className="text-sm text-gray-500 transition-colors hover:text-[#067afd]"
                >
                  info@yourmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="max-w-sm min-w-[280px] flex-1 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd] hover:shadow-xl">
              <div className="group relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200">
                <i className="ri-phone-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
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
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">Get In Touch</h2>
              <p className="mb-6 text-gray-600">
                We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
              </p>

              <form className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <i className="ri-user-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Enter Name *"
                    required
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <i className="ri-mail-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="email"
                    placeholder="Enter Email *"
                    required
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <i className="ri-phone-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="tel"
                    placeholder="Enter Phone No. *"
                    required
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <i className="ri-chat-1-line absolute top-4 left-3 text-gray-400"></i>
                  <textarea
                    rows="4"
                    placeholder="Message *"
                    required
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#067afd] px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg md:w-auto"
                >
                  Send Message
                </button>
              </form>
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

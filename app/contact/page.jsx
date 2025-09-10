import React from "react";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      {/* Start Page Title Area */}
      <div classname="bg-white py-5 w-full mt-[110px]">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600 ">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <a href="#" className="hover:text-black font-medium">
                Byyizzy
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-black font-medium">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-[#067afd] font-semibold">Contact</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="bg-gray py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-5">
          {/* Contact Info Cards */}
          {/* Contact Info Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-5">
            {/* Address */}
            <div className="flex-1 min-w-[280px] max-w-sm text-center bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd]">
              <div className="relative mx-auto mb-4 h-20 w-20 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden group">
                <i className="ri-map-pin-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 bg-[#067afd] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 -z-10"></span>
              </div>
              <div>
                <span className="block font-semibold text-lg text-gray-800 mb-1">
                  Address
                </span>
                <p className="text-gray-500 text-sm">
                  123 Street, Old Trafford, London, UK
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex-1 min-w-[280px] max-w-sm text-center bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd]">
              <div className="relative mx-auto mb-4 h-20 w-20 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden group">
                <i className="ri-mail-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 bg-[#067afd] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 -z-10"></span>
              </div>
              <div>
                <span className="block font-semibold text-lg text-gray-800 mb-1">
                  Email Address
                </span>
                <a
                  href="mailto:info@yourmail.com"
                  className="text-gray-500 text-sm hover:text-[#067afd] transition-colors"
                >
                  info@yourmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex-1 min-w-[280px] max-w-sm text-center bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#067afd]">
              <div className="relative mx-auto mb-4 h-20 w-20 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden group">
                <i className="ri-phone-line text-2xl text-[#067afd] transition-colors duration-500 group-hover:text-white"></i>
                <span className="absolute inset-0 bg-[#067afd] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 -z-10"></span>
              </div>
              <div>
                <span className="block font-semibold text-lg text-gray-800 mb-1">
                  Phone
                </span>
                <p className="text-gray-500 text-sm">+ 457 789 789 65</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-8 mt-12">
            {/* Contact Form */}
            <div className="flex-1 min-w-[320px] bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6">
                We’d love to hear from you. Fill out the form and we’ll get back
                to you shortly.
              </p>

              <form className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Enter Name *"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#067afd] transition"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <i className="ri-mail-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="email"
                    placeholder="Enter Email *"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#067afd] transition"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <i className="ri-phone-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="tel"
                    placeholder="Enter Phone No. *"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#067afd] transition"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <i className="ri-chat-1-line absolute left-3 top-4 text-gray-400"></i>
                  <textarea
                    rows="4"
                    placeholder="Message *"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#067afd] transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#067afd] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="flex-1 min-w-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.28130573357!2d-0.145!3d51.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x123456789abcdef!2sLondon!5e0!3m2!1sen!2suk!4v1693500000000!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

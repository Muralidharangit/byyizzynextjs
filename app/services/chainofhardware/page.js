import { Mail, MapPin } from "lucide-react";
import { Check } from "lucide-react";
import { Settings } from "lucide-react";

export default function ChainHardware() {
  return (
    <div>
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
            <li className="text-[#067afd] font-semibold">Services</li>
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
            Chain of Hardware
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24 ">
        {/* Hero / Intro Section */}
        <section className="py-16 bg-gray-50 rounded-xl">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="px-3 py-1 text-sm font-medium text-[#067afd] bg-blue-100 rounded-full">
                  About Us
                </span>

                <h3 className="text-3xl font-bold text-black leading-snug mt-3">
                  Chain of Hardware Stores
                </h3>

                <p className="text-lg text-[#067afd] font-semibold">
                  Management of Hardware Stores &amp; Tools
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We aim to bring together local hardware stores under one
                  unified platform — boosting competitiveness, reducing dead
                  inventory, and improving margins through technology and
                  expertise.
                </p>

                {/* Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    "Reduce dead inventory",
                    "Improve margins & volume",
                    "Shop anytime, anywhere",
                    "B2B support & growth",
                    "Competitive advantage",
                    "Lowest prices guaranteed",
                    "Widest range of products",
                    "Seamless shopping experience",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                        {/* <i className="fas fa-check text-sm"></i> */}

                        <Check className="w-4 h-4 text-green-600" />
                      </span>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="text-center lg:text-right">
                <img
                  src="/assets/images/chainHardware.png"
                  alt="Chain of Hardware Stores"
                  className="mx-auto lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-0 mb-1 via-white to-blue-50">
          <div className="container mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Icon in a circle */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600 text-3xl">
                    {/* <i className="ti-settings"></i> */}
                    <Settings className="w-8 h-8 text-[#067afd]" />
                  </div>

                  {/* Title */}
                  <h5 className="font-bold text-xl text-gray-800">
                    Efficient Sourcing
                  </h5>

                  {/* Description */}
                  <p className="text-gray-600 text-base mt-3 leading-relaxed">
                    There are many variations of have to make your process
                    smooth and reliable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white py-20 px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#067afd] to-[#004aad] text-white p-10 rounded-2xl shadow-lg space-y-8">
              <div>
                <h3 className="text-3xl font-bold">Get in Touch</h3>
                <p className="text-blue-100 mt-3 leading-relaxed">
                  We’re here to answer your questions and explore opportunities
                  to grow together.
                </p>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email us at</p>
                  <p className="font-semibold">Byizzy@gmail.com</p>
                </div>
              </div>

              {/* Office Locations */}
              {/* India Office */}
              <div>
                <p className="font-semibold text-lg">India</p>
                <div className="flex items-start gap-4 mt-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Head Office</p>
                    <p className="font-semibold">123 Business Street, City</p>
                  </div>
                </div>
              </div>
              {/* Singapore Office */}
              <div>
                <p className="font-semibold text-lg">Singapore</p>
                <div className="flex items-start gap-4 mt-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Branch Office</p>
                    <p className="font-semibold">456 Market Road, Singapore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 bg-gray-50 p-10 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                    required
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#067afd] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Mail, MapPin } from "lucide-react";
import { Check } from "lucide-react";
import { Settings } from "lucide-react";

export default function ChainHardware() {
  return (
    <div>
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
            <li className="font-semibold text-[#067afd]">Services</li>
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
            Chain of Hardware
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        {/* Hero / Intro Section */}
        <section className="rounded-xl bg-gray-50 py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#067afd]">
                  About Us
                </span>

                <h3 className="mt-3 text-3xl leading-snug font-bold text-black">
                  Chain of Hardware Stores
                </h3>

                <p className="text-lg font-semibold text-[#067afd]">
                  Management of Hardware Stores &amp; Tools
                </p>

                <p className="leading-relaxed text-gray-600">
                  We aim to bring together local hardware stores under one unified platform —
                  boosting competitiveness, reducing dead inventory, and improving margins through
                  technology and expertise.
                </p>

                {/* Points */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        {/* <i className="fas fa-check text-sm"></i> */}

                        <Check className="h-4 w-4 text-green-600" />
                      </span>
                      <span className="text-sm text-gray-700">{point}</span>
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
        <section className="mb-1 via-white to-blue-50 py-0">
          <div className="container mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  {/* Icon in a circle */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
                    {/* <i className="ti-settings"></i> */}
                    <Settings className="h-8 w-8 text-[#067afd]" />
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-bold text-gray-800">Efficient Sourcing</h5>

                  {/* Description */}
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    There are many variations of have to make your process smooth and reliable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact Info */}
            <div className="space-y-8 rounded-2xl bg-gradient-to-br from-[#067afd] to-[#004aad] p-10 text-white shadow-lg lg:col-span-4">
              <div>
                <h3 className="text-3xl font-bold">Get in Touch</h3>
                <p className="mt-3 leading-relaxed text-blue-100">
                  We’re here to answer your questions and explore opportunities to grow together.
                </p>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email us at</p>
                  <p className="font-semibold">Byizzy@gmail.com</p>
                </div>
              </div>

              {/* Office Locations */}
              {/* India Office */}
              <div>
                <p className="text-lg font-semibold">India</p>
                <div className="mt-3 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Head Office</p>
                    <p className="font-semibold">123 Business Street, City</p>
                  </div>
                </div>
              </div>
              {/* Singapore Office */}
              <div>
                <p className="text-lg font-semibold">Singapore</p>
                <div className="mt-3 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Branch Office</p>
                    <p className="font-semibold">456 Market Road, Singapore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-gray-50 p-10 shadow-lg lg:col-span-8">
              <h3 className="mb-8 text-3xl font-bold text-gray-800">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#067afd] px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700 md:w-auto"
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

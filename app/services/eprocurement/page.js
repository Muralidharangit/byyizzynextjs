import { CheckCircle, Settings, Mail, MapPin } from "lucide-react";

export default function Eprocurement() {
  return (
    <div>
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
            E-Sourcing Platform
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-28">
        {/* Start Page Title Area */}

        {/* About Section */}
        <section id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  E-Sourcing Platform
                </h3>
                <p className="text-[#067afd] font-semibold text-lg">
                  Source to Pay Process
                </p>
              </div>

              {/* Points */}
              <div className="space-y-4">
                {[
                  "Inviting potential suppliers to an RFxtender",
                  "Collecting supplier information",
                  "Running sourcing events, tenders, and eAuctions",
                  "Analyzing and evaluating responses",
                  "Awarding the top response with a contract or PO",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fsorcing-procurement.png?alt=media&token=dcc6858f-33cd-4971-b586-c205ea1483eb"
                alt="E-Sourcing Platform"
                className="transform transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-0 mb-1 via-white to-blue-50">
          <div className="container mx-auto px-5 lg:px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Icon in a circle */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 text-[#067afd] text-3xl">
                    {/* <i className="ti-settings"></i> */}
                    <Settings className="w-8 h-8 text-[#067afd]" />
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    Efficient Sourcing
                  </h5>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed">
                    There are many variations of have to make your process
                    smooth and reliable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white py-20 px-6 lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-lg space-y-8">
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

import { Settings, Mail, MapPin } from "lucide-react"; // install lucide-react

export default function EprocurementPage() {
  return (
    <div>
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
            E2E Procurement
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        {/* E2E Procurement Section */}
        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">E2E Procurement</h3>
              <p className="text-lg font-semibold text-[#067afd]">Procure to Pay</p>
            </div>

            {/* Points */}
            <div className="space-y-4">
              {[
                "Tail spend Management (Supplier aggregation)",
                "80% of suppliers account for only 20% of spend",
                "Consolidates the fragmented Supplier base into one entity",
                "One-stop shop for all MRO needs vs fragmented vendors",
                "Standard Terms & Conditions for 50%+ of transactions",
                "Price standardization & inflation savings",
                "Optimized PR-PO Lead Time (ordering at zero lead time)",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl text-green-600">✔</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fe2eprocurement.png?alt=media&token=39021019-fd98-440d-86e1-35da41bb4e28"
              alt="E2E Procurement"
              className="mx-auto w-3/4"
            />
          </div>
        </section>

        {/* Service Cards */}
        <section className="mb-1 mb-3 via-white to-blue-50 py-0">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#067afd]">
                  <Settings size={28} />
                </div>
                <h5 className="mb-3 text-center text-xl font-semibold text-gray-800">
                  Efficient Sourcing
                </h5>
                <p className="text-center leading-relaxed text-gray-600">
                  There are many variations of sourcing strategies that bring efficiency.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-3 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact Info */}
            <div className="space-y-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white shadow-lg lg:col-span-4">
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

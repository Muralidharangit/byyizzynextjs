import { Check, Settings, Mail, MapPin } from "lucide-react";

export default function ProcurementAsAService() {
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
            E2E Procurement
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-28">
        {/* About Section */}
        <section id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Procurement as a Service (PaaS)
              </h3>
              <p className="text-[#067afd] font-semibold text-xl">
                Large Enterprises (Efficient sourcing with inhouse resources)
              </p>

              {/* Large Enterprises Points */}
              <ul className="space-y-3">
                {[
                  "Supplier Market Analysis / Market Intelligence",
                  "Negotiating Power due to large volume",
                  "Efficient sourcing process with tools like Ariba, Coupa etc.",
                  "Teams focus only on high-value categories, consultants for major changes",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="text-[#067afd] font-semibold text-xl">
                  Major Benefits:
                </h4>
                <ul className="space-y-3 mt-2">
                  {[
                    "Explore reputed supplier marketplaces",
                    "Charges: Flat 1.5% of order value",
                    "Year 1: 20% of achieved savings",
                    "Year 2: 10% of achieved savings",
                    "Year 3: 5% of achieved savings",
                    "No advance / transactional risks",
                    "Acts as extension of your procurement team",
                    "Industry benchmarked ordering cost",
                    "Faster PR → PO cycle time",
                    "Supplier onboarding & capability mapping",
                    "100% E-Sourcing platform tracking",
                    "Competitive pricing via collaboration",
                    "Overall procurement cost optimization",
                    "Sustainable procurement model",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="text-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fpass.jpeg?alt=media&token=70709f7d-427e-4e2f-9131-3c774b008836"
                  alt="Procurement as a Service"
                  className="mx-auto w-3/4"
                />
              </div>
              {/* Medium Enterprises */}
              <div>
                <h4 className="text-[#067afd] font-semibold text-xl mt-8">
                  Medium Enterprises (Below 500 Crs Turnover/Annum)
                </h4>
                <p className="text-gray-600 mt-2">
                  Medium enterprises face challenges due to limited resources,
                  non-competitive pricing, and lack of access to affordable
                  e-sourcing tools.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Limited resources (SME hiring challenge)",
                    "Relying on local sources",
                    "Non-competitive pricing due to lower volumes",
                    "Lack of access to affordable e-sourcing tools",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Small Enterprises */}
              <div>
                <h4 className="text-[#067afd] font-semibold text-xl mt-8">
                  Small Enterprises (Below 50 Crs Turnover/Annum)
                </h4>
                <ul className="space-y-3 mt-4">
                  {[
                    "Very limited resources and compensation issues",
                    "Dependent on local sources",
                    "Non-competitive pricing due to low volume",
                    "No budget or skills for e-sourcing tools",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-0 mb-1 via-white to-blue-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Efficient sourcing",
                desc: "Smart procurement solutions",
              },
              {
                title: "Cost Optimization",
                desc: "Maximize savings effectively",
              },
              {
                title: "Supplier Network",
                desc: "Access trusted vendors easily",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-[#067afd] mx-auto mb-6">
                  <Settings className="w-7 h-7 text-[#067afd]" />
                </div>
                <h5 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {card.title}
                </h5>
                <p className="text-gray-600 text-center leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white py-20 px-0">
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

import { Check, Settings, Mail, MapPin } from "lucide-react";

export default function ProcurementAsAService() {
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
      <div className="mx-auto max-w-7xl space-y-28 px-4 py-20">
        {/* About Section */}
        <section id="about">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Procurement as a Service (PaaS)
              </h3>
              <p className="text-xl font-semibold text-[#067afd]">
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
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="text-xl font-semibold text-[#067afd]">Major Benefits:</h4>
                <ul className="mt-2 space-y-3">
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
                      <Check className="mt-0.5 h-5 w-5 text-green-600" />
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
                <h4 className="mt-8 text-xl font-semibold text-[#067afd]">
                  Medium Enterprises (Below 500 Crs Turnover/Annum)
                </h4>
                <p className="mt-2 text-gray-600">
                  Medium enterprises face challenges due to limited resources, non-competitive
                  pricing, and lack of access to affordable e-sourcing tools.
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Limited resources (SME hiring challenge)",
                    "Relying on local sources",
                    "Non-competitive pricing due to lower volumes",
                    "Lack of access to affordable e-sourcing tools",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Small Enterprises */}
              <div>
                <h4 className="mt-8 text-xl font-semibold text-[#067afd]">
                  Small Enterprises (Below 50 Crs Turnover/Annum)
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    "Very limited resources and compensation issues",
                    "Dependent on local sources",
                    "Non-competitive pricing due to low volume",
                    "No budget or skills for e-sourcing tools",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="mb-1 via-white to-blue-50 py-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#067afd]">
                  <Settings className="h-7 w-7 text-[#067afd]" />
                </div>
                <h5 className="mb-3 text-center text-xl font-semibold text-gray-800">
                  {card.title}
                </h5>
                <p className="text-center leading-relaxed text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white px-0 py-20">
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

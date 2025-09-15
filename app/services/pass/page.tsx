import { Check, Cog, Workflow, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProcurementAsAService() {
  return (
    <div className="bg-[#edf6ff]">
      {/* Breadcrumb */}
      <div className="mt-[110px] w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="/" className="font-medium hover:text-black">
                Byyizzy
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#1c90f2]">Services</li>
          </ol>
        </nav>
      </div>

      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        {/* <img
          src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
          alt="About Banner"
          className="h-full w-full object-cover blur-xs filter"
        /> */}

         <Image
            src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
            alt="About Banner"
            fill
            sizes="100vw"
            className="object-cover filter blur-xs"
            priority
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
            {/* Right Content shows first on mobile, second on desktop */}
            <div className="order-1 space-y-8 lg:order-2">
              <div className="text-center">
                {/* <img
                  src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fpass.jpeg?alt=media&token=70709f7d-427e-4e2f-9131-3c774b008836"
                  alt="Procurement as a Service"
                  className="mx-auto w-3/4 rounded-lg"
                /> */}

                  <Image
                  src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fpass.jpeg?alt=media&token=70709f7d-427e-4e2f-9131-3c774b008836"
                  alt="Procurement as a Service"
                  width={640}             // put the real size if you know it
                  height={480}
                  className="mx-auto lg:ml-auto h-auto w-full max-w-md"
                />
              </div>

              {/* Medium Enterprises */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Medium Enterprises{" "}
                  <span className="text-[#1c90f2]">(Below 500 Crs Turnover/Annum)</span>
                </h3>
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
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Small Enterprises{" "}
                  <span className="text-[#1c90f2]">(Below 50 Crs Turnover/Annum)</span>
                </h3>
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

            {/* Left Content shows second on mobile, first on desktop */}
            <div className="order-2 space-y-8 lg:order-1">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Procurement as a <span className="text-[#1c90f2]">Service (PaaS)</span>
              </h3>

              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Large Enterprises{" "}
                <span className="text-[#1c90f2]">(Efficient sourcing with inhouse resources)</span>
              </h3>

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
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Major <span className="text-[#1c90f2]">Benefits:</span>
                </h3>
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
          </div>
        </section>

        {/* Section 6: Service Cards */}
        <section className="mb-1 py-5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Efficient Sourcing",
                  desc: "Streamline your supplier discovery process",
                  icon: <Cog className="h-8 w-8" />,
                },
                {
                  title: "Automated Workflows",
                  desc: "Reduce manual efforts with automation",
                  icon: <Workflow className="h-8 w-8" />,
                },
                {
                  title: "Analytics Dashboard",
                  desc: "Visualize your spend and supplier performance",
                  icon: <BarChart3 className="h-8 w-8" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#1c90f2]">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h5 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    {item.title}
                  </h5>

                  {/* Description */}
                  <p className="text-center leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
      </div>
    </div>
  );
}

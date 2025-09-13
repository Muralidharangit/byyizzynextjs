import { Mail, MapPin } from "lucide-react";
import { Check } from "lucide-react";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function ChainHardware() {
  return (
    <div>
      {/* Start Page Title Area */}
      <div classname="bg-white py-5 w-full mt-[110px]">
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
            <li className="font-semibold text-[#1c90f2]">Hardware</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <img
          src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
          alt="About Banner"
          className="h-full w-full object-cover blur-xs filter"
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
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#1c90f2]">
                  About Us
                </span>

                <h3 className="mt-3 text-3xl leading-snug font-bold text-black">
                  Chain of <span className="text-[#1c90f2]">Hardware Stores</span>
                </h3>

                <p className="text-lg font-semibold text-[#1c90f2]">
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
                    <Settings className="h-8 w-8 text-[#1c90f2]" />
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
      </div>
    </div>
  );
}

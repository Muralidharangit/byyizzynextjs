import { Settings, Mail, MapPin } from "lucide-react"; // install lucide-react
import Link from "next/link";

export default function EprocurementPage() {
  return (
    <div className="bg-[#edf6ff]">
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
            <li className="font-semibold text-[#1c90f2]">Services</li>
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
              <h3 className="mb-2 text-3xl font-bold text-gray-900">
                E2E <span className="text-[#1c90f2]">Procurement</span>
              </h3>
              <p className="text-lg font-semibold text-[#1c90f2]">Procure to Pay</p>
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
      </div>
    </div>
  );
}

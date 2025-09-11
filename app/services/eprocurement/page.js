import { CheckCircle, Settings, Mail, MapPin } from "lucide-react";

export default function Eprocurement() {
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
            E-Sourcing Platform
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-28 px-4 py-20">
        {/* Start Page Title Area */}

        {/* About Section */}
        <section id="about">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-3xl font-bold text-gray-900">E-Sourcing <span className="text-[#067afd]"> Platform</span></h3>
                <p className="text-lg font-semibold text-[#067afd]">Source to Pay Process</p>
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
                    <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

             
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
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#067afd]">
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

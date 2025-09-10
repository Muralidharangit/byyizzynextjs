import Link from "next/link";
import { Factory, ShoppingCart, Package, Globe, Boxes } from "lucide-react"; // Example icons

export default function ServicesPage() {
 const services = [
   {
     href: "/services/eprocurement",
     icon: "/images/icons/1.png",
     title: "Industrial Products Aggregation",
   },
   {
     href: "/services/saas",
     icon: "/images/icons/2.png",
     title: "Manufacturing as (MaaS)",
   },
   {
     href: "/services/chainofhardware",
     icon: "/images/icons/3.png",
     title: "Chain of Hardware Stores",
   },
   {
     href: "/services/pass",
     icon: "/images/icons/4.png",
     title: "Procurement as (PaaS)",
   },
   {
     href: "/services/esourcing",
     icon: "/images/icons/5.png",
     title: "E-Sourcing Platform",
   },
 ];

  return (
    <div className="mt-[120px] min-h-screen bg-gray-100 text-gray-900">
      {/* Start Page Title Area */}
      <div classname="bg-white py-5 w-full">
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
            Services
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* <h1 className="text-4xl font-bold text-center mb-10 text-[#067afd]">
          Our Services
        </h1> */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-3xl font-bold text-[#067afd] mb-2">
                  Our Services
                </h2>
                <p className="text-md text-gray-500">
                  Hover on a card to reveal the theme gradient and highlight the
                  service.
                </p>
              </div>

              {/* Custom Arrows */}
              <div className="flex space-x-3">
                <div className="flex items-center space-x-4">
                  {/* Arrows */}

                  {/* Action Button */}
                  <button
                    className="px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-white 
                     bg-gradient-to-r from-[#067afd] to-[#004aad] shadow-md hover:opacity-90 transition"
                  >
                    Contact us{" "}
                    <i className="ri-arrow-right-s-line text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href || "#"}
                  className="group relative rounded-xl shadow-lg p-6 cursor-pointer overflow-hidden transition-transform duration-300 
                 bg-white hover:bg-gradient-to-r hover:from-[#067afd] hover:to-[#004aad] 
                 hover:scale-[1.02] hover:shadow-xl
                 flex flex-col items-center justify-center h-full text-center"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-blue-100 group-hover:bg-white transition-all duration-500">
                    <img
                      src={service.icon}
                      className="w-12 h-12 transition-colors duration-500 group-hover:invert"
                      alt={service.title}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold mt-5 mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h4>

                  {/* Description */}
                  {service.description && (
                    <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
                      {service.description}
                    </p>
                  )}

                  {/* Read More */}
                  <div className="mt-4 flex items-center justify-center text-sm font-medium">
                    <span className="flex items-center gap-2 text-blue-600 group-hover:text-white transition-colors duration-500">
                      Read More <i className="ri-arrow-right-line text-lg"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* <div className="flex justify-center items-center py-4 mt-4">
              <button
                className="px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-white 
                     bg-gradient-to-r from-[#067afd] to-[#004aad] shadow-md hover:opacity-90 transition"
              >
                Contact More <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

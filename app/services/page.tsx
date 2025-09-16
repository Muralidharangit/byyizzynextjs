import Image from "next/image";
import Link from "next/link";
// import { Factory, ShoppingCart, Package, Globe, Boxes } from "lucide-react"; // Example icons

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

      {/* End Page Title Area */}

      {/* Start Page Title Area */}
      <div className="mt-[110px] w-full bg-white py-5">
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
        {/* <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="About Banner"
          className="h-full w-full object-cover"
        /> */}
        <Image
          src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
          alt="About Banner"
          fill
          sizes="100vw"
          className="object-cover blur-xs filter"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="px-4 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Services
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* <h1 className="text-4xl font-bold text-center mb-10 text-[#1c90f2]">
          Our Services
        </h1> */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                  Our <span className="text-[#1c90f2]">Services</span>
                </h2>
                {/* <h2 className="mb-2 text-3xl font-bold text-[#1c90f2] md:text-3xl">Our Services</h2> */}
                <p className="text-md text-gray-500">
                  Hover on a card to reveal the theme gradient and highlight the service.
                </p>
              </div>

              {/* Custom Arrows */}
              <div className="flex space-x-3">
                <div className="flex items-center space-x-4">
                  {/* Arrows */}

                  {/* Action Button */}
                  <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#067afd] to-[#004aad] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
                    Contact us <i className="ri-arrow-right-s-line text-xl"></i>
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
                  className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-[#067afd] hover:to-[#004aad] hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100 transition-all duration-500 group-hover:bg-white">
                    {/* <img
                      src={service.icon}
                      className="h-12 w-12 transition-colors duration-500 group-hover:invert"
                      alt={service.title}
                    /> */}

                    <Image
                      src={service.icon}
                      className="h-12 w-12 transition-colors duration-500 group-hover:invert"
                      alt={service.title}
                      fill
                      sizes="100vw"
                      // className="object-cover filter blur-xs"
                      // priority
                    />
                  </div>

                  {/* Title */}
                  <h4 className="mt-5 mb-2 text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h4>

                  {/* Description */}
                  {/* {service.description && (
                    <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
                      {service.description}
                    </p>
                  )} */}

                  {/* Read More */}
                  <div className="mt-4 flex items-center justify-center text-sm font-medium">
                    <span className="flex items-center gap-2 text-blue-600 transition-colors duration-500 group-hover:text-white">
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

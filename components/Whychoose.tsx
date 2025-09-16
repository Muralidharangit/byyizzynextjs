import Image from "next/image";

const whyByizzy = [
  {
    img: "/images/by/1.webp",
    title: "Best Pricing",
    text: "Our light-asset Business Model ensures the best prices in the industry. Get rates at least 0.25% lower than market rates through efficient sourcing, optimized operations and economies of scale, without compromising quality.",
  },
  {
    img: "/images/by/2.webp",
    title: "Access to credit & technical support",
    text: "Effectively manage your working capital, product technical clarification (24Hrs Local & On-site support), Material Quality and trade assurance with no supply risk.",
  },
  {
    img: "/images/by/3.webp",
    title: "Local Business engagement",
    text: "Our business model involves collaborating with local hardware stores to support local economies, foster relationships, and contribute to social well-being. This collaboration will indirectly encourage our clients to give back to the local community & aligns well with ESG policy.",
  },
  {
    img: "/images/by/4.webp",
    title: "Women-Led Company",
    text: "Our company has over 60% women diversity, ensuring enhanced compliance, governance, social responsibility, and sustainability.",
  },
  {
    img: "/images/by/5.webp",
    title: "Time, Purchase and Process Costs",
    text: "Managing tail spend procurement (MRO) from multiple suppliers involves complex negotiations and checks, often leading to higher costs due to smaller volumes, risks of advance payments, and challenges with multiple invoices and systems.",
  },
  {
    img: "/images/by/6.webp",
    title: "Tail Spend Transformation",
    text: "Increasing efficiency in tail spend procurement through E-catalogs, suppliers consolidation, operations consolidation, and Byyizzy physical store inventory management.",
  },
  {
    img: "/images/by/7.webp",
    title: "Fastest Delivery",
    text: "Optimized Inventory Mgmt at Byyizzy Physical stores, technology-driven logistics system, direct-OEM tie-ups and process automation, ensuring maximum visibility and the fastest delivery.",
  },
  {
    img: "/images/by/8.webp",
    title: "Unique Business approach for Standard & Customized products",
    text: "For Standard Products-OEM Tie-ups, Byyizzy physical stores, automated and streamlined supply chain process. For Customized Products-leverages cloud technology and digital platform like 3D scanners & printing, IOT to facilitate the on-demand production of goods.",
  },
  {
    img: "/images/by/9.webp",
    title: "Catalogue Based buying",
    text: "E-commerce-type (Amazon-like) buying experience for industrial products with standardized catalogs, primarily focusing on standard prices and quality.",
  },
];

export default function Whychoose() {
  return (
    <section className="bg-gradient-to-b py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          {/* Left: Title + Subtitle */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Why Choose <span className="text-[#017efc]">Byyizzy?</span>
            </h2>
            <p className="sm:text-md text-sm text-gray-500">
              Discover the benefits that make Byyizzy stand out from the rest.
            </p>
          </div>

          {/* Right: Action Button */}
          <div className="flex-shrink-0">
            <button className="flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 sm:px-5 sm:text-base">
              Learn More <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyByizzy.map((card, index) => (
            <div
              key={index}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:border-[#017efc] hover:shadow-xl"
            >
              {/* Always visible content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#1c90f2]/10 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="object-contain"
                    loading="lazy" // ✅ lazy load images
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#017efc]">
                  {card.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex translate-y-4 flex-col items-center justify-center bg-white p-6 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{card.text}</p>
                <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#017efc] to-[#004aad]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

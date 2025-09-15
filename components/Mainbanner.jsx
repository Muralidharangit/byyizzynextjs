"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const slides = [
  {
    title: "India's Growing Hardware & DIY Store Brand",
    description:
      "To integrate and create a chain of hardware stores under one roof of our brand, expertise, and technology.",
    highlights: [
      "Easy credit & EMI Facility to B2C Customers",
      "Fastest Delivery of Industrial Products",
      "Optimized Inventory Model",
      "Improved Margins",
      "More Business Volume",
    ],
    img: "/images/Banner/4.svg",
    link1: { text: "Get Started", href: "#services", primary: true },
    link2: { text: "Learn More", href: "#learn" },
  },
  {
    title: "Procurement as a Service (PaaS) & Valuable",
    description:
      "An efficient & sustainable way of procurement that helps businesses optimize overall costs.",
    highlights: [
      "Overall Procurement Cost Optimization",
      "On Demand Service",
      "Leverage Global Expertise",
      "Multiple Marketplaces",
    ],
    img: "/images/Banner/3.svg",
    link1: { text: "Get Started", href: "#services", primary: true },
    link2: { text: "Learn More", href: "#learn" },
  },
  {
    title: "Best & Cost-effective Contract Lifecycle Management",
    description:
      "Simplify and streamline your sourcing-to-pay (S2P) process with modern platforms.",
    highlights: [
      "P2P / E-Sourcing / Auction Platforms",
      "Optimize Your Ordering Costs",
      "Entire Procurement Visibility",
      "Flexible, Customizable & Easy-To-Use",
      "Fast & Efficient Platform",
    ],
    img: "/images/Banner/2.svg",
    link1: { text: "Get Started", href: "#services", primary: true },
    link2: { text: "Learn More", href: "#learn" },
  },
  {
    title: "Transforming Industrial Supply Chain",
    description:
      "Standard and customized MRO spares, consumables, and hardware products with hyper-local stores and advanced technology.",
    highlights: [
      "Source Direct-from-Factory",
      "Fastest Delivery",
      "Best Prices & Trade Assurance",
      "OTIF",
      "Quality Assurance",
    ],
    img: "/images/Banner/1.svg",
    link1: { text: "Get Started", href: "#services", primary: true },
    link2: { text: "Learn More", href: "#learn" },
  },
];

export default function Mainbanner() {
  return (
    <section
      className="relative flex items-center py-8"
      style={{ backgroundImage: "-webkit-linear-gradient(0, #4dabff 0, #62ddff 100%)" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          loop
          // effect="fade"
          fadeEffect={{ crossFade: true }}
          aria-live="polite"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                {/* Left Content */}
                <div className="animate-fadeIn space-y-6 text-white">
                  <h1 className="text-2xl leading-snug font-bold md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="text-md text-white/80 md:text-lg">{slide.description}</p>

                  {/* Highlights */}
                  {slide.highlights && (
                    <ul className="list-inside list-disc space-y-1 text-white/70">
                      {slide.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={slide.link1.href}
                      className={`rounded-lg px-6 py-3 font-semibold shadow-md transition ${
                        slide.link1.primary
                          ? "bg-white text-[#004aad] hover:bg-gray-200"
                          : "border border-white text-white hover:bg-white hover:text-[#004aad]"
                      }`}
                      aria-label={slide.link1.text}
                    >
                      {slide.link1.text}
                    </Link>
                    <Link
                      href={slide.link2.href}
                      className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#004aad]"
                      aria-label={slide.link2.text}
                    >
                      {slide.link2.text}
                    </Link>
                  </div>
                </div>

                {/* Desktop Image */}
                <div className="animate-fadeIn hidden lg:flex lg:justify-end">
                  <div className="relative h-[450px] w-full">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      width={1200}
                      height={450}
                      className="rounded-xl object-cover"
                      priority
                      fetchPriority="high"
                      decoding="auto"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="animate-fadeIn flex justify-center lg:hidden">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      width={600}
                      height={250}
                      className="rounded-lg object-cover"
                      priority
                      fetchPriority="high"
                      decoding="auto"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules"; // ⬅️ removed Navigation
import "swiper/css";
import "swiper/css/pagination";

export default function Ourservice() {
  const [autoplay, setAutoplay] =
    useState<false | { delay: number; disableOnInteraction: boolean }>(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setAutoplay(m.matches ? false : { delay: 3000, disableOnInteraction: false });
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  const services = [
    { href: "/services/eprocurement", icon: "/images/icons/1.png", text: "Industrial Products Aggregation" },
    { href: "/services/saas", icon: "/images/icons/2.png", text: "Manufacturing as a service (MaaS)" },
    { href: "/services/chainofhardware", icon: "/images/icons/3.png", text: "Chain of Hardware Stores" },
    { href: "/services/pass", icon: "/images/icons/4.png", text: "Procurement as a service (PaaS)" },
    { href: "/services/esourcing", icon: "/images/icons/5.png", text: "E-Sourcing Platform" },
  ];

  return (
    <div>
      {/* Title Section */}
      <div className="flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Leading the Evolution of Industrial & Hardware Products Supply Chain
          </h2>
          <p className="sm:text-md mt-4 text-gray-600 md:text-lg">
            Revolutionizing the fragmented Industrial & Hardware products market through an
            integrated B2B & B2C ecosystem featuring hyperlocal Byyizzy-powered stores and advanced technology.
          </p>
        </div>
      </div>

      {/* Services Carousel */}
      <section className="py-4">
        <div className="container mx-auto flex flex-col px-4 lg:flex-row lg:items-center">
          <div className="mb-10 flex w-full flex-col lg:w-auto lg:flex-row lg:items-center lg:justify-between">
            <div className="order-2 mb-6 w-full lg:order-1 lg:mb-0 lg:w-auto">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                Our <span className="text-[#017efc]"> Services </span>
              </h2>
              <p className="text-md text-gray-500">Hover on a card to reveal the theme gradient and highlight the service.</p>
            </div>
          </div>

          <div className="order-1 w-full lg:order-2">
            <Swiper
              className="pb-8"                         // ✅ reserve space for pagination
              modules={[Pagination, Autoplay, A11y]}
              spaceBetween={12}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 12 },
                768: { slidesPerView: 1.5, spaceBetween: 12 },
                1024: { slidesPerView: 2, spaceBetween: 12 },
              }}
              pagination={{ clickable: true }}
              autoplay={autoplay}
              a11y={{ enabled: true }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <Link href={service.href} 
                    // prefetch={false}
                    >
                      <div
                        className={`group relative cursor-pointer overflow-hidden rounded-xl p-6 shadow-lg transition-transform duration-300`}
                        style={{ contentVisibility: "auto", containIntrinsicSize: "280px 220px" }} // ✅ faster paint, steady size
                      >
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-lg transition-all duration-500 ${
                            isActive ? "bg-white" : "bg-blue-100"
                          }`}
                        >
                          <Image
                            src={service.icon}
                            alt={service.text}
                            width={64}
                            height={64}
                            sizes="64px"
                            loading="lazy"
                            className="object-contain"
                          />
                        </div>
                        <h4
                          className={`mt-5 mb-2 text-lg font-semibold transition-colors duration-500 ${
                            isActive ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.text}
                        </h4>
                        <div className="mt-4 flex items-center text-sm font-medium transition-colors duration-300">
                          <span
                            className={`flex cursor-pointer items-center gap-2 ${
                              isActive ? "text-white hover:text-gray-200" : "text-blue-600 hover:text-blue-800"
                            }`}
                          >
                            Read More <i className="ri-arrow-right-line text-lg" />
                          </span>
                        </div>

                        {/* active bg theme (if you want) */}
                        <div className={`${isActive ? "services_active absolute inset-0 -z-10" : ""}`} />
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

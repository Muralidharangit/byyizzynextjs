"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

type Service = {
  href: string;
  icon: string; // allow external or local; whitelist domains in next.config
  text: string;
};

export default function ServicesCarousel({ services }: { services: Service[] }) {
  return (
    <Swiper
      className="h-[250px]"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={12}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 12 },
        768: { slidesPerView: 1.5, spaceBetween: 12 },
        1024: { slidesPerView: 2, spaceBetween: 12 },
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {services.map((service, id) => (
        <SwiperSlide key={id}>
          {({ isActive }) => (
            <Link href={service.href} prefetch={false}>
              <div
                className={`group relative cursor-pointer overflow-hidden rounded-xl p-6 shadow-lg transition-transform duration-300 ${
                  isActive ? "services_active" : "bg-gray"
                }`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-lg transition-all duration-500 ${
                    isActive ? "bg-white" : "bg-blue-100"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={64}
                    height={64}
                    className="h-12 w-12"
                    loading="lazy"
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
                    className={`${isActive ? "text-white hover:text-gray-200" : "text-blue-600 hover:text-blue-800"}`}
                  >
                    Read More <i className="ri-arrow-right-line text-lg" />
                  </span>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

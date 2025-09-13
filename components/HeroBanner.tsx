"use client"; // required for Swiper (uses client-side JS)

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Slide {
  title: string;
  description: string;
  highlights?: string[];
  img: string;
  link1: { href: string; text: string; primary: boolean };
  link2: { href: string; text: string };
}

interface HeroBannerProps {
  slides: Slide[];
}

export default function HeroBanner({ slides }: HeroBannerProps) {
  return (
    <section className="primary-color relative h-[500px] py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="[&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                {/* Left Content */}
                <div className="animate-fadeIn space-y-6 text-white">
                  <h1 className="text-1xl font-700 leading-tight md:text-3xl">{slide.title}</h1>
                  <p className="text-md text-white-200 md:text-md">{slide.description}</p>

                  {/* Highlights */}
                  <ul className="text-white-200 list-inside list-disc space-y-1">
                    {slide.highlights?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={slide.link1.href}
                      className={`rounded-lg px-6 py-3 font-semibold shadow-md transition ${
                        slide.link1.primary
                          ? "bg-white text-[#004aad] hover:bg-gray-200"
                          : "border border-white text-white hover:bg-white hover:text-[#004aad]"
                      }`}
                    >
                      {slide.link1.text}
                    </Link>
                    <Link
                      href={slide.link2.href}
                      className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#004aad]"
                    >
                      {slide.link2.text}
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="animate-fadeIn hidden justify-center lg:flex lg:justify-end">
                  <div className="relative h-[450px] w-full">
                    <Image
                      src={slide.img}
                      alt="Banner Illustration"
                      width={1200} // numeric pixel width
                      height={450} // numeric pixel height
                      className="rounded-xl object-cover"
                      priority
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

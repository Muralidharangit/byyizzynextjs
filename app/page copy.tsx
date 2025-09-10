
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // active state for custom nav
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function setActive(activeBtn, otherBtn) {
      activeBtn.classList.add("active");
      otherBtn.classList.remove("active");
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => setActive(prevBtn, nextBtn));
      nextBtn.addEventListener("click", () => setActive(nextBtn, prevBtn));
      setActive(nextBtn, prevBtn); // default
    }
  }, []);

  

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sidebar */}

            <aside className="md:col-span-3 bg-white shadow rounded p-2 relative">
              <div className="container mx-auto my-6">
                <div className="w-full">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-lg">
                    <ul className="text-gray-700">
                      {/* 1. Heavy Machinery */}
                      <li className="group relative border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 text-gray-800 text-sm hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-truck-line mr-2" /> Heavy Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                        {/* Dropdown */}
                        <div
                          className="absolute left-full top-0 w-[800px] bg-white shadow-lg opacity-0 invisible translate-y-3 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all 
                duration-300 ease-out p-6 flex flex-wrap z-50"
                        >
                          <div className="w-1/4 px-4">
                            <h4 className="uppercase text-sm font-semibold mb-3">
                              Construction
                            </h4>
                            <ul className="space-y-1">
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Excavators
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Cranes
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Bulldozers
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-1/4 px-4">
                            <h4 className="uppercase text-sm font-semibold mb-3">
                              Mining
                            </h4>
                            <ul className="space-y-1">
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Drilling Rigs
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Loaders
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-1/4 px-4">
                            <h4 className="uppercase text-sm font-semibold mb-3">
                              Agriculture
                            </h4>
                            <ul className="space-y-1">
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Tractors
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Harvesters
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-1/4 px-4">
                            <h4 className="uppercase text-sm font-semibold mb-3">
                              Industrial
                            </h4>
                            <ul className="space-y-1">
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  CNC Machines
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-[#067afd]"
                                >
                                  Press Machines
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/* 2. Power Tools */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-flashlight-line mr-2" /> Power
                            Tools
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 3. Spare Parts */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-settings-3-line mr-2" /> Spare
                            Parts
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 4. Safety Equipment */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-shield-check-line mr-2" /> Safety
                            Equipment
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 5. Agricultural Machinery */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-leaf-line mr-2" /> Agricultural
                            Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 6. Packaging Machinery */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-archive-line mr-2" /> Packaging
                            Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 7. Food Processing Machines */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-cup-line mr-2" /> Food Processing
                            Machines
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 8. Textile Machinery */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-stack-line mr-2" /> Textile
                            Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 9. Printing Machinery */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-printer-line mr-2" /> Printing
                            Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 10. Electrical Equipment */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-flashlight-line mr-2" /> Electrical
                            Equipment
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 11. Industrial Robots */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-robot-line mr-2" /> Industrial
                            Robots
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>

                      {/* 12. Renewable Energy Machinery */}
                      <li className="border-b border-gray-100 last:border-b-0">
                        <a
                          href="#"
                          className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                        >
                          <span className="flex items-center">
                            <i className="ri-sun-line mr-2" /> Renewable Energy
                            Machinery
                          </span>
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            {/* Body Content */}
            <main className="md:col-span-9 bg-white shadow rounded p-2 overflow-hidden">
              <div className="slider bg-red">
                {/* swiper slide main banner */}
                <div className=""></div>
                {/* end */}

                {/* tilt */}
                <div className="w-full">
                  <h2 className="text-3xl md:text-4xl font-700 text-gray-900 mb-4 tracking-tight text-center">
                    Main Topic Product
                  </h2>
                  <p className="text-center md:text-md text-gray-600 leading-relaxed w-full">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quibusdam repudiandae alias odit porro eos quasi unde
                    ducimus assumenda.Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Magni quibusdam repudiandae alias odit
                    porro eos quasi unde ducimus assumenda.
                  </p>
                </div>

                <div>
                  <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-200 font-[Segoe UI]">
                    <div className="container mx-auto px-4">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-black">
                          Best Sellers.
                          <span className="text-gray-500 font-normal">
                            {" "}
                            Best selling of the month
                          </span>
                        </h2>

                        {/* Custom Navigation */}
                        <div className="flex gap-3">
                          {/* Previous Button */}
                          <button className="prev w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 text-2xl shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
                            <i className="ri-arrow-left-s-line"></i>
                          </button>

                          {/* Next Button */}
                          <button className="next w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 text-2xl shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
                            <i className="ri-arrow-right-s-line"></i>
                          </button>
                        </div>
                      </div>

                      {/* Swiper */}
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                          768: { slidesPerView: 4 },
                          992: { slidesPerView: 4 },
                        }}
                        className="pb-10"
                      >
                        {[1, 2, 3, 4].map((item) => (
                          <SwiperSlide key={item}>
                            {/* Product Card */}
                            <div className="relative p-2 rounded-2xl bg-white/70 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
                              <a
                                href="/products/cashmere-sweater"
                                className="absolute inset-0"
                              ></a>

                              {/* Image + Wishlist */}
                              <div className="relative overflow-hidden rounded-2xl">
                                <img
                                  src="https://b2861582.smushcdn.com/2861582/wp-content/uploads/2023/02/splash-01-605-v1.png?lossy=2&strip=1&webp=1"
                                  alt="Cashmere Sweater"
                                  className="rounded-2xl transition-transform duration-500 hover:scale-105"
                                />

                                <button className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow hover:bg-pink-500 hover:text-white transition">
                                  <i className="ri-heart-line"></i>
                                </button>

                                {/* Hover buttons */}
                              </div>

                              {/* Card Body */}
                              <div className="text-center mt-4">
                                {/* Color dots */}

                                <h5 className="font-semibold mb-1">
                                  Cashmere Sweater
                                </h5>
                                <p className="text-gray-500 text-sm">Cream</p>

                                <div className="flex justify-between items-center mt-3 px-2">
                                  <span className="bg-[#067afd] text-white px-4 py-1 rounded-full text-sm shadow">
                                    $150.00
                                  </span>
                                  <div className="flex items-center text-sm">
                                    <i className="ri-star-fill text-yellow-400"></i>
                                    <span className="ml-2 font-semibold text-gray-800">
                                      4.8
                                    </span>
                                    <span className="ml-1 text-gray-500">
                                      (75 review)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Custom Nav Styles */}
                    <style jsx>{`
                      .nav-btn {
                        @apply w-12 h-12 flex items-center justify-center rounded-xl border border-black/10 bg-white text-gray-600 text-2xl cursor-pointer shadow-md transition-all;
                      }
                      .nav-btn:hover {
                        @apply bg-gradient-to-r from-indigo-600 to-blue-500 text-white -translate-y-1 shadow-xl;
                      }
                      .nav-btn.active {
                        @apply bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-2xl;
                      }
                      .product-hover {
                        opacity: 0;
                        bottom: 0.5rem;
                      }
                      .product-hover:hover {
                        opacity: 1 !important;
                        bottom: 1.5rem !important;
                      }
                    `}</style>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

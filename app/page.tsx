"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Grid, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useRef, useState } from "react";
import { SHOP_BY_CATEGORIES, slugify } from "@/data/shopBycatlog";
import Link from "next/link";
import DualMarqueeSwiper from "@/components/ui/DualMarqueeSwiper";
import bn1 from "@/public/images/Banner/1.webp";
import bn2 from "@/public/images/Banner/2.webp";
import bn3 from "@/public/images/Banner/3.webp";
import bn4 from "@/public/images/Banner/4.webp";

import Category from "@/components/category";
import HeroBanner from "@/components/HeroBanner";
import { slides } from "@/data/slides";
export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // const filteredProducts = SHOP_BY_CATEGORIES.flatMap((category) =>
  //   category.product.filter((product) => String(product.popularity).startsWith("4"))
  // );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR mismatch
  const filteredProducts = SHOP_BY_CATEGORIES.flatMap((category) =>
    category.product
      .filter((product) => String(product.popularity).startsWith("4"))
      .map((product) => ({
        ...product,
        categoryTitle: category.title, // add the category title here
      }))
  );

  const services = [
    {
      href: "/services/eprocurement",
      icon: "/images/icons/1.png",
      text: "Industrial Products Aggregation",
    },
    {
      href: "/services/saas",
      icon: "/images/icons/2.png",
      text: "Manufacturing as a service (MaaS)",
    },
    {
      href: "/services/chainofhardware",
      icon: "/images/icons/3.png",
      text: "Chain of Hardware Stores",
    },
    {
      href: "/services/pass",
      icon: "/images/icons/4.png",
      text: "Procurement as a service (PaaS)",
    },
    {
      href: "/services/esourcing",
      icon: "/images/icons/5.png",
      text: "E-Sourcing Platform",
    },
  ];


  
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

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-6">
          <div className="mt-[122px] grid h-full grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Sidebar Starts*/}
            <Category />
            {/* Sidebar Ends */}

            {/* Body Content */}
            <main className="relative z-10 overflow-hidden rounded bg-white p-2 shadow md:col-span-12 lg:col-span-12 xl:col-span-9">
              <div className="slider bg-red">
                {/* swiper slide main banner */}
                <HeroBanner slides={slides} />

                {/* <Mainbanner /> */}
             
                {/* end */}

                {/* tilte */}
                <div className="flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
                  <div className="max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">
                      Leading the Evolution of Industrial & Hardware Products Supply Chain
                    </h2>
                    <p className="sm:text-md mt-4 text-gray-600 md:text-lg">
                      Revolutionizing the fragmented Industrial & Hardware products market through
                      an integrated B2B & B2C ecosystem featuring hyperlocal Byyizzy-powered stores
                      and advanced technology.
                    </p>
                  </div>
                </div>

                <div>
                  {/* Our Services Section */}
                  <section className="py-4">
                    <div className="container mx-auto flex h-full flex-col items-start px-4 lg:flex-row lg:items-center">
                      {/* Section Header */}
                      <div className="mb-10 flex w-full flex-col items-start justify-between lg:w-auto lg:flex-row lg:items-center">
                        {/* Header Text */}
                        <div className="order-2 mb-6 w-full lg:order-1 lg:mb-0 lg:w-auto">
                          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                            Our <span className="text-[#017efc]"> Services </span>
                          </h2>
                          <p className="text-md text-gray-500">
                            Hover on a card to reveal the theme gradient and highlight the service.
                          </p>
                        </div>

                        {/* Navigation Arrows (desktop only) */}
                        {/* <div className="order-1 hidden space-x-3 lg:order-2 lg:flex">
                          <button
                            ref={prevRef}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition hover:bg-blue-600 hover:text-white"
                          >
                            <i className="ri-arrow-left-s-line text-xl"></i>
                          </button>
                          <button
                            ref={nextRef}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c90f2] text-white shadow-md transition hover:opacity-90"
                          >
                            <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div> */}
                      </div>

                      {/* Swiper */}
                      <div className="order-1 w-full lg:order-2">
                        <Swiper
                          className="h-[250px]"
                          modules={[Navigation, Pagination, A11y, Autoplay]}
                          spaceBetween={12}
                          slidesPerView={1}
                          initialSlide={0}
                          breakpoints={{
                            640: { slidesPerView: 1.5, spaceBetween: 12 },
                            768: { slidesPerView: 1.5, spaceBetween: 12 },
                            1024: { slidesPerView: 2, spaceBetween: 12 },
                          }}
                          pagination={{ clickable: true }}
                          autoplay={{ delay: 3000, disableOnInteraction: false }}
                          onBeforeInit={(swiper) => { 
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                          }}
                          navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                          }}
                        >
                          {services.map((service) => (
                            <SwiperSlide key={service.id}>
                              {({ isActive }) => (
                                <Link href={service.href}>
                                  <div
                                    className={`group relative cursor-pointer overflow-hidden rounded-xl p-6 shadow-lg transition-transform duration-300 ${
                                      isActive ? "services_active" : "bg-gray"
                                    }`}
                                  >
                                    {/* Icon */}
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

                                    {/* Title */}
                                    <h4
                                      className={`mt-5 mb-2 text-lg font-semibold transition-colors duration-500 ${
                                        isActive ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {service.text}
                                    </h4>

                                    {/* Read More */}
                                    <div className="mt-4 flex items-center text-sm font-medium transition-colors duration-300">
                                      <span
                                        className={`flex cursor-pointer items-center gap-2 ${
                                          isActive
                                            ? "text-white hover:text-gray-200"
                                            : "text-blue-600 hover:text-blue-800"
                                        }`}
                                      >
                                        Read More
                                        <i className="ri-arrow-right-line text-lg"></i>
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              )}
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </section>

                  {/*  Shop By CategoriesSection */}
                  <section>
                    <div className="relative mx-auto w-full max-w-7xl bg-[#f8f8f9] p-4 font-sans sm:p-6">
                      {/* Header */}
                      <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                        <div>
                          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                            Shop By <span className="text-[#017efc]">Categories</span>
                          </h2>
                          <p className="sm:text-md text-sm text-gray-500">
                            Hover on a card to reveal the theme gradient and highlight the service.
                          </p>
                        </div>

                        {/* Button / All Categories */}
                        <div className="flex-shrink-0">
                          <button className="flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 sm:px-5 sm:text-base">
                            All Categories{" "}
                            <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
                          </button>
                        </div>
                      </div>

                      {/* Categories Grid */}
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-3">
                        {SHOP_BY_CATEGORIES.slice(0, 15).map((category) => {
                          const catSlug = slugify(category.title);
                          return (
                            <Link
                              key={category.id}
                              href={`/shop/${catSlug}?sub=all`}
                              className="xs:w-[31%] w-full sm:w-[31%] md:w-[32%] lg:w-[31%]"
                            >
                              <div className="flex h-full min-h-[120px] cursor-pointer flex-row items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:gap-4 sm:p-6">
                                {/* Icon */}
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden sm:h-14 sm:w-14">
                                  <Image
                                    src={category.images}
                                    alt={category.title}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                  />
                                </div>

                                {/* Text */}
                                <h6 className="line-clamp-2 text-sm font-semibold text-gray-700 sm:text-base">
                                  {category.title}
                                </h6>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-center py-8">
                        <button className="flex items-center rounded-lg bg-[#1c90f2] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 sm:px-5 sm:text-base">
                          All Categories{" "}
                          <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Why Byizzy Section */}
                  <section className="bg-[#edf6ff] bg-gradient-to-b py-16 lg:py-20">
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
                            Learn More{" "}
                            <i className="ri-arrow-right-s-line ml-1 text-lg sm:text-xl"></i>
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
                              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                {card.text}
                              </p>
                              <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#017efc] to-[#004aad]"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* <section>
                    <div className="py-4">
                      <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 md:text-2xl">
                        How we Work
                      </h2>
                      <p className="text-md text-center text-gray-500">
                        Discover the most popular machinery and equipment available now.
                      </p>
                    </div>

                    <div className="md:flex-column flex flex-col gap-4">
                      <video className="mb-3 w-full rounded-lg" autoPlay loop muted playsInline>
                        <source
                          src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fvideo%2FnewByyizzy_01.mp4?alt=media&token=e0bf7c55-41e5-4a44-bb52-6d47f165fbec"
                          type="video/mp4"
                        />
                      </video>

                      {/* <video className="w-full rounded-lg " autoPlay loop muted playsInline>
                        <source
                          src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fvideo%2FnewByyizzy_03.mp4?alt=media&token=a5cb2265-cc82-4a03-8801-3f92a130ecf0"
                          type="video/mp4"
                        />
                      </video> 
                    </div>
                  </section> */}

                  <section className="bg-[#1c90f2]">
                    <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:px-12 lg:grid-cols-2">
                      {/* Left Content */}
                      <div className="animate-fadeIn space-y-6 text-white">
                        <h1 className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-4xl">
                          Our Services1
                        </h1>

                        {/* Bullet Points */}
                        <ul className="list-inside list-disc space-y-2 text-white">
                          <li>Easy credit &amp; EMI Facility to B2C Customers</li>
                          <li>Fastest Delivery of Industrial Products</li>
                          <li>Optimized Inventory Model</li>
                          <li>Improved Margins</li>
                          <li>More Business Volume</li>
                        </ul>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                          <Link
                            href="#services"
                            className="rounded-lg bg-white px-6 py-3 font-semibold text-[#004aad] shadow-md transition hover:bg-gray-200"
                          >
                            Get Started
                          </Link>
                          <Link
                            href="#learn"
                            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#004aad]"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>

                      {/* Right Image */}
                      {/* <div className="animate-fadeIn flex justify-center lg:justify-end">
                        <Image
                          src="https://i.pinimg.com/1200x/bc/7e/db/bc7edb885820ae38acd5c482d091d489.jpg"
                          alt="Banner Illustration"
                          fill
                          className="max-h-[400px] w-full max-w-md rounded-xl object-contain shadow-lg"
                        />
                      </div> */}
                    </div>
                  </section>

                  <section className="bg-[#1c90f2]">
                    <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:px-12 lg:grid-cols-2">
                      {/* Left Content */}
                      <div className="animate-fadeIn space-y-6 text-white">
                        <h1 className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-4xl">
                          Our Services1 content
                        </h1>

                        {/* Bullet Points */}
                        <ul className="list-inside list-disc space-y-2 text-white">
                          <li>Easy credit &amp; EMI Facility to B2C Customers</li>
                          <li>Fastest Delivery of Industrial Products</li>
                          <li>Optimized Inventory Model</li>
                          <li>Improved Margins</li>
                          <li>More Business Volume</li>
                        </ul>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                          <Link
                            href="#services"
                            className="rounded-lg bg-white px-6 py-3 font-semibold text-[#004aad] shadow-md transition hover:bg-gray-200"
                          >
                            Get Started
                          </Link>
                          <Link
                            href="#learn"
                            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#004aad]"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>

                      {/* Right Image */}
                      {/* <div className="animate-fadeIn flex justify-center lg:justify-end">
                        <Image
                          src="https://i.pinimg.com/1200x/bc/7e/db/bc7edb885820ae38acd5c482d091d489.jpg"
                          alt="Banner Illustration"
                          fill
                          className="max-h-[400px] w-full max-w-md rounded-xl object-contain shadow-lg"
                        />
                      </div> */}
                    </div>
                  </section>

                  <div className="bg-[#edf6ff] py-5 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                      Our <span className="text-[#017efc]">Brand</span>
                    </h2>
                    <p className="text-md text-gray-500">
                      Discover the benefits that make Byyizzy stand out from the rest.
                    </p>
                  </div>

                  <DualMarqueeSwiper />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

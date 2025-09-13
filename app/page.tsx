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

  const categories = [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FFabrication.png?alt=media&token=99131e98-21ed-450b-9b0b-ebaeed34ab97",
      title: "Fabrication & customized products",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FStainless.png?alt=media&token=c8a5796f-98f9-4f94-a543-9f57b95c98fd",
      title: "Stainless Steel Products",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FRailway.png?alt=media&token=a7ca7172-4d5a-426a-ba66-a193a89c55c8",
      title: "Railway Spares & equipments",
    },
    {
      id: 4,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FWire.png?alt=media&token=141d561e-1740-4246-9e88-ec1d117198ec",
      title: "Wire Meshes & Perforated sheets",
    },
    {
      id: 5,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPlates.png?alt=media&token=438b9164-ff7b-4001-8902-5bde091f712d",
      title: "Plates, Sheets, Coils & Rounds",
    },
    {
      id: 6,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fwelder.png?alt=media&token=02c8f65a-8ec0-4c38-b998-73df823dd149",
      title: "Welding & accessories",
    },
    {
      id: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FRoofing.png?alt=media&token=b8807994-81d7-4373-b8ea-46af66ca1d4a",
      title: "Roofing Sheets",
    },
    {
      id: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FNonFerrousProducts.png?alt=media&token=06eccb48-4d87-4f89-8893-02318113e8b2",
      title: "Non Ferrous Products",
    },
    {
      id: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FBuilding.png?alt=media&token=cc2b1c5b-3fc6-475b-90f2-94b0aa18f0b6",
      title: "Building & construction",
    },
    {
      id: 10,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FMildSteel.png?alt=media&token=6f4bae50-bdc6-41b5-97a3-d4d76daa957b",
      title: "Mild Steel",
    },
    {
      id: 11,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPlumbing.png?alt=media&token=6918b001-a061-491a-97b8-fbfd9b58c172",
      title: "Plumbing, Pipes & Fittings",
    },
    {
      id: 12,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FSafety.png?alt=media&token=ae79946e-ab21-4413-ba1a-63decc9cbde6",
      title: "Safety & PPE supplies",
    },
    {
      id: 13,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fbearing.png?alt=media&token=56556ff5-c8b8-46ee-a302-4dc817216f83",
      title: "Bearings & Power Transmission",
    },
    {
      id: 14,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAbrasivesc.png?alt=media&token=9925e0b1-e3bd-4968-9016-684f7c48305e",
      title: "Abrasives, Adhesives & Sealants",
    },
    {
      id: 15,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FMotors.png?alt=media&token=3fc11b41-edcc-4add-9cf5-3ef5e1ab3481",
      title: "Motors & Pumps",
    },
    {
      id: 16,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FFasteners.png?alt=media&token=b014d08c-ebd1-47c5-8797-cccd045b827d",
      title: "Fasteners",
    },
    {
      id: 17,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FElectricals.png?alt=media&token=8cbe235f-b135-406c-98b2-e57c94a773d0",
      title: "Electricals & Electronics",
    },
    {
      id: 18,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FHardware.png?alt=media&token=8a514928-addd-4cf6-8644-7cb0b7baf685",
      title: "Hardware, Cutting and Hand Tools",
    },
    {
      id: 19,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FHydraulics.png?alt=media&token=5504d9c4-cba8-42c2-9dd3-72f32ec43767",
      title: "Hydraulics & Pneumatics",
    },
    {
      id: 20,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FTesting.png?alt=media&token=4e5cab22-7f99-4cf9-8565-ec5fbb59cb53",
      title: "Testing & Measuring Instruments",
    },
    {
      id: 21,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPackaging.png?alt=media&token=d52af5c2-2df2-408d-89f9-96c65c9ea2d2",
      title: "Material Handling & Packaging",
    },
    {
      id: 22,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPowerTools.png?alt=media&token=7d675026-1ac0-401d-b23a-1b75acdb107b",
      title: "Power Tools",
    },
    {
      id: 23,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FAutomative.png?alt=media&token=896fab3f-ca6b-44a4-9393-dc8a3e8e311c",
      title: "Automative Supplies & Lubricants",
    },
    {
      id: 24,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fgardening.png?alt=media&token=e040bbfc-9559-424e-9240-43a7344545c8",
      title: "Agriculture, Garden & Landscaping",
    },
    {
      id: 25,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FITSupplies.png?alt=media&token=37d6cd1f-304f-4054-a2a6-c846c3708cab",
      title: "ITSupplies",
    },
    {
      id: 26,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Flab.png?alt=media&token=161c533d-26d9-4cc0-9e14-8c2995966348",
      title: "Lab supplies",
    },
    {
      id: 27,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2Fled.png?alt=media&token=e2b9293a-38f5-49ce-9d55-32725f06b9e7",
      title: "Luminaires, LEDs & Lights",
    },
    {
      id: 28,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FCleaning.png?alt=media&token=ca05bb98-9398-4f84-9b84-336d6d7aa15f",
      title: "Cleaning Equipments",
    },
    {
      id: 29,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FFurniture.png?alt=media&token=8051ef9e-c04c-4bf0-be76-6bbd5202a76a",
      title: "Furniture, Hospitality & Food Services",
    },
    {
      id: 30,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FSolar.png?alt=media&token=abfdc750-fdbe-47b2-8740-4f9cdc797f79",
      title: "Solar Products",
    },
    {
      id: 31,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FOfficeStationery.png?alt=media&token=fe85a2d2-01e6-4c4d-a942-577a15441968",
      title: "Office Stationery & admin supplies",
    },
    {
      id: 32,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FPaints.png?alt=media&token=3f5025fa-3a07-4ebe-80e1-df7ebe63d970",
      title: "Paints, Powders & Coatings",
    },
    {
      id: 33,
      image:
        "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FShop%20By%20Categories%20main%20images%2FTooling.png?alt=media&token=29491e42-e5d6-44f1-a631-5c34ce988dad",
      title: "Tooling & cutting",
    },
  ];
  const whyByizzy = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Freward.png?alt=media&token=57809f54-eea2-4ce4-8034-c1cfe3b1792c",
      title: "Best Pricing",
      text: "Our light-asset Business Model ensures the best prices in the industry. Get rates at least 0.25% lower than market rates through efficient sourcing, optimized operations and economies of scale, without compromising quality.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Fvalue-chain.png?alt=media&token=c51678d5-8a85-4440-83a8-0c550c9b3e75",
      title: "Access to credit & technical support",
      text: "Effectively manage your working capital, product technical clarification (24Hrs Local & On-site support), Material Quality and trade assurance with no supply risk.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2FSocial%20Obligations.png?alt=media&token=a2fefc1a-8a76-4e1b-a120-ac2cba81098d",
      title: "Local Business engagement",
      text: "Our business model involves collaborating with local hardware stores to support local economies, foster relationships, and contribute to social well-being. This collaboration will indirectly encourage our clients to give back to the local community & aligns well with ESG policy.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Fwomen.png?alt=media&token=c62b7505-4386-424a-a1c4-de24fc715ba1",
      title: "Women-Led Company",
      text: "Our company has over 60% women diversity, ensuring enhanced compliance, governance, social responsibility, and sustainability.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Fwork-process.png?alt=media&token=83b1b291-a5d6-4289-b6ed-d7a54993415f",
      title: "Time, Purchase and Process Costs",
      text: "Managing tail spend procurement (MRO) from multiple suppliers involves complex negotiations and checks, often leading to higher costs due to smaller volumes, risks of advance payments, and challenges with multiple invoices and systems.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Farrow.png?alt=media&token=192d060c-f913-4b55-8581-a9badf158afc",
      title: "Tail Spend Transformation",
      text: "Increasing efficiency in tail spend procurement through E-catalogs, suppliers consolidation, operations consolidation, and Byyizzy physical store inventory management.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2FOn-time%20delivery%20icon.png?alt=media&token=f8609515-958b-4966-bd1b-579ffaffa521",
      title: "Fastest Delivery",
      text: "Optimized Inventory Mgmt at Byyizzy Physical stores, technology-driven logistics system, direct-OEM tie-ups and process automation, ensuring maximum visibility and the fastest delivery.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Fassurance.png?alt=media&token=405bddc7-91b2-4553-a49c-9b35f4e8de7d",
      title: "Unique Business approach for Standard & Customized products",
      text: "For Standard Products-OEM Tie-ups, Byyizzy physical stores, automated and streamlined supply chain process. For Customized Products-leverages cloud technology and digital platform like 3D scanners & printing, IOT to facilitate the on-demand production of goods.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FWhy_Byizzy%2Fmanagement.png?alt=media&token=e0d39902-9dc1-4847-a15c-04238c3115e8",
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
                {/* end */}

                {/* tilte */}
                <div className="flex items-center justify-center">
                  <div className="container grid w-full grid-cols-12">
                    <h2 className="col-span-12 mb-2 px-5 pt-[30px] text-center text-4xl font-bold text-gray-900 md:text-3xl lg:col-span-8 lg:col-start-3">
                      Leading the Evolution of Industrial & Hardware Products Supply Chain
                    </h2>
                    <p className="md:text-md col-span-12 w-full px-5 text-center leading-relaxed text-gray-600 lg:col-span-8 lg:col-start-3">
                      Revolutionizing the fragmented Industrial & Hardware products market through
                      an integrated B2B & B2C ecosystem featuring hyperlocal Byyizzy-powered stores
                      and advanced technology.
                    </p>
                  </div>
                </div>

                <div>
                  {/* Our Services Section */}
                  <section className="py-4">
                    <div className="container mx-auto px-4 h-full flex items-center">
                      {/* Section Header with Navigation Arrows */}
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                            Our <span className="text-[#017efc]"> Services </span>
                          </h2>
                          <p className="text-md text-gray-500">
                            Hover on a card to reveal the theme gradient and highlight the service.
                          </p>
                        </div>

                        {/* Custom Arrows */}
                        {/* <div className="flex space-x-3">
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
                      <Swiper
                        className="h-[250px]"
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={12}
                        slidesPerView={1}
                        initialSlide={0}
                        breakpoints={{
                          640: { slidesPerView: 2, spaceBetween: 12 },
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
                                  {/* Shape */}
                                  {/* <div className="service-shape absolute relative right-[-45px] flex h-[200px] w-[200px] items-end">
                                    <Image
                                      src="/images/icons/r.webp"
                                      alt="service item shape"
                                      width={150}
                                      height={150}
                                      className="object-contain"
                                      decoding="async"
                                    />
                                  </div> */}

                                  {/* Icon */}
                                  <div
                                    className={`flex h-20 w-20 items-center justify-center rounded-lg transition-all duration-500 ${
                                      isActive ? "bg-white" : "bg-blue-100"
                                    }`}
                                  >
                                    <Image
                                      src={service.icon}
                                      alt="icon"
                                      width={64} // 👈 match h-12
                                      height={64} // 👈 match w-12
                                      className="h-12 w-12"
                                      loading="lazy" // ✅ lazy load images
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
                  </section>

                  {/*  Shop By CategoriesSection */}
                  <section>
                    <div className="relative mx-auto w-full max-w-7xl bg-[#f8f8f9] p-6 font-sans">
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                            Shop By <span className="text-[#017efc]">Categories</span>
                          </h2>
                          <p className="text-md text-gray-500">
                            Hover on a card to reveal the theme gradient and highlight the service.
                          </p>
                        </div>

                        {/* Custom Arrows with Remix Icons */}
                        <div className="flex space-x-3">
                          <button className="flex items-center rounded-lg bg-[#1c90f2] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
                            All Categories <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6">
                        {SHOP_BY_CATEGORIES.map((category) => {
                          const catSlug = slugify(category.title);
                          return (
                            <Link
                              key={category.id}
                              href={`/shop/${catSlug}?sub=all`}
                              className="w-full sm:w-[48%] lg:w-[31.5%]" // ✅ responsive width for 4 cards in row
                            >
                              <div className="flex h-full min-h-[120px] cursor-pointer flex-row items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                                {/* Icon */}
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden">
                                  <Image
                                    src={category.images}
                                    alt={category.title}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-contain"
                                    loading="lazy" // ✅ lazy load images
                                  />
                                </div>

                                {/* Text */}
                                <h6 className="line-clamp-2 text-sm font-semibold text-gray-700">
                                  {category.title}
                                </h6>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Swiper Slider with Custom Class */}
                    </div>
                  </section>

                  {/* Why Byizzy Section */}
                  <section className="bg-[#edf6ff] bg-gradient-to-b py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4">
                      {/* Section Header */}
                      <div className="mb-10 flex items-center justify-between">
                        {/* Left: Title + Subtitle */}
                        <div>
                          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                            Why Choose <span className="text-[#017efc]">Byyizzy?</span>
                          </h2>
                          <p className="text-md text-gray-500">
                            Discover the benefits that make Byyizzy stand out from the rest.
                          </p>
                        </div>

                        {/* Right: Arrows + Button */}
                        <div className="flex items-center space-x-4">
                          {/* Arrows */}

                          {/* Action Button */}
                          <button className="flex items-center rounded-lg bg-[#1c90f2] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
                            Learn More <i className="ri-arrow-right-s-line text-xl"></i>
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

                  <section>
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
                      </video> */}
                    </div>
                  </section>

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

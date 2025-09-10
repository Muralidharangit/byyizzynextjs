"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Grid,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      title: "Build Smarter Websites with Modern UI",
      description:
        "Create engaging, responsive, and powerful web applications using the latest tools and technologies.",
      img: "https://calderamfg.com/wp-content/uploads/2023/11/metal-parts.jpg",
      link1: { text: "Get Started", href: "#services", primary: true },
      link2: { text: "Learn More", href: "#learn" },
    },
    {
      title: "Innovate Your Web Experience",
      description:
        "Transform your digital presence with cutting-edge design and seamless performance.",
      img: "https://calderamfg.com/wp-content/uploads/2023/11/metal-parts.jpg",
      link1: { text: "Get Started", href: "#services", primary: true },
      link2: { text: "Learn More", href: "#learn" },
    },
    // Add more slides as needed
  ];

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

  // useEffect(() => {
  //   // active state for custom nav
  //   const prevBtn = document.querySelector(".prev");
  //   const nextBtn = document.querySelector(".next");

  //   function setActive(activeBtn, otherBtn) {
  //     activeBtn.classList.add("active");
  //     otherBtn.classList.remove("active");
  //   }

  //   if (prevBtn && nextBtn) {
  //     prevBtn.addEventListener("click", () => setActive(prevBtn, nextBtn));
  //     nextBtn.addEventListener("click", () => setActive(nextBtn, prevBtn));
  //     setActive(nextBtn, prevBtn); // default
  //   }
  // }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full mt-[122px]">
            {/* Sidebar */}

            <aside className="md:col-span-3 bg-white shadow rounded p-2 relative z-50">
              <div className="sticky top-[130px] bg-white shadow rounded">
                <div className="container mx-auto">
                  <div className="w-full">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-lg">
                      <ul className="text-gray-700">
                        {/* 1. Heavy Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
                          <a
                            href="#"
                            className="flex items-center justify-between px-5 py-3 text-sm hover:bg-gray-100 hover:text-[#067afd] transition"
                          >
                            <span className="flex items-center">
                              <i className="ri-truck-line mr-2" /> Heavy
                              Machinery
                            </span>
                            <i className="ri-arrow-right-s-line text-gray-400" />
                          </a>
                          <div className="absolute left-full top-0 w-[800px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
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
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Compactors
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
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Haul Trucks
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
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Seeders
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
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Lathe Machines
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 2. Power Tools */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Cutting
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Angle Grinders
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Circular Saws
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Jigsaws
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Drilling
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Cordless Drills
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Hammer Drills
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Rotary Hammers
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 3. Spare Parts */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Engine
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Filters
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Belts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Bearings
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Hydraulics
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Pumps
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Valves
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Hoses
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 4. Safety Equipment */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Protective Gear
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Helmets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Gloves
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Safety Boots
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Fire Safety
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Extinguishers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Alarms
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Sprinklers
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 5. Agricultural Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Field
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Ploughs
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Cultivators
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Rotavators
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Processing
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Threshers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Milling Machines
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 6. Packaging Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Sealing
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Shrink Wrappers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Sealers
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Filling
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Bottle Fillers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Pouch Fillers
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 7. Food Processing Machines */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Beverage
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Juicers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Mixers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Blenders
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Snacks
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Fryers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Extruders
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 8. Textile Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Weaving
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Looms
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Jacquards
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Finishing
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Dyeing
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Printing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 9. Printing Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
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
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Offset
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Sheet-fed
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Web-fed
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Digital
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Inkjet
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Laser
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 10. Chemical Machinery */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
                          <a
                            href="#"
                            className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                          >
                            <span className="flex items-center">
                              <i className="ri-flask-line mr-2" /> Chemical
                              Machinery
                            </span>
                            <i className="ri-arrow-right-s-line text-gray-400" />
                          </a>
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Mixing
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Reactors
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Mixers
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Separation
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Distillers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Centrifuges
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 11. Construction Materials */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
                          <a
                            href="#"
                            className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                          >
                            <span className="flex items-center">
                              <i className="ri-building-line mr-2" />{" "}
                              Construction Materials
                            </span>
                            <i className="ri-arrow-right-s-line text-gray-400" />
                          </a>
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Raw
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Cement
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Bricks
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Finishing
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Tiles
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Paints
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* 12. Electrical Equipment */}
                        <li className="group relative border-b border-gray-100 last:border-b-0">
                          <a
                            href="#"
                            className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-[#067afd] transition"
                          >
                            <span className="flex items-center">
                              <i className="ri-plug-line mr-2" /> Electrical
                              Equipment
                            </span>
                            <i className="ri-arrow-right-s-line text-gray-400" />
                          </a>
                          <div className="absolute left-full top-0 w-[600px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-6 flex flex-wrap z-50">
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Wiring
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Cables
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Switches
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2 px-4">
                              <h4 className="uppercase text-sm font-semibold mb-3">
                                Power
                              </h4>
                              <ul className="space-y-1">
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Transformers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block hover:text-[#067afd]"
                                  >
                                    Generators
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Body Content */}
            <main className="md:col-span-9 bg-white shadow rounded p-2 overflow-hidden relative z-10">
              <div className="slider bg-red">
                {/* swiper slide main banner */}
                <div className="">
                  <section className="relative bg-gradient-to-r from-[#067afd] to-[#004aad] py-16">
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
                      >
                        {slides.map((slide, index) => (
                          <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                              {/* Left Content */}
                              <div className="text-white space-y-6 animate-fadeIn">
                                <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                                  {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200">
                                  {slide.description}
                                </p>
                                <div className="flex gap-4">
                                  <a
                                    href={slide.link1.href}
                                    className={`px-6 py-3 font-semibold rounded-lg shadow-md transition ${
                                      slide.link1.primary
                                        ? "bg-white text-[#004aad] hover:bg-gray-200"
                                        : "border border-white text-white hover:bg-white hover:text-[#004aad]"
                                    }`}
                                  >
                                    {slide.link1.text}
                                  </a>
                                  <a
                                    href={slide.link2.href}
                                    className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#004aad] transition"
                                  >
                                    {slide.link2.text}
                                  </a>
                                </div>
                              </div>

                              {/* Right Image */}
                              <div className="flex justify-center lg:justify-end animate-fadeIn delay-300">
                                <img
                                  src={slide.img}
                                  alt="Banner Illustration"
                                  className="rounded-xl shadow-lg"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </section>
                </div>
                {/* end */}

                {/* tilt */}
                <div className="w-full">
                  <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2 text-center pt-[30px]">
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
                  {/* new added */}

                  <section className="py-16 bg-[#f8f8f9] ">
                    <div className="container mx-auto px-4 ">
                      {/* Section Header with Navigation Arrows */}
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2">
                            Trending Products
                          </h2>
                          <p className="text-md text-gray-500">
                            Discover the most popular machinery and equipment
                            available now.
                          </p>
                        </div>

                        {/* Custom Arrows */}
                        <div className="flex space-x-3">
                          <button
                            ref={prevRef}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
                          >
                            <i className="ri-arrow-left-s-line text-xl"></i>
                          </button>
                          <button
                            ref={nextRef}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-white transition bg-gradient-to-r from-[#067afd] to-[#004aad] hover:opacity-90 shadow-md"
                          >
                            <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div>
                      </div>

                      {/* Swiper */}
                      <Swiper
                        className="pb-12"
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                          480: { slidesPerView: 1, spaceBetween: 10 },
                          640: { slidesPerView: 2, spaceBetween: 12 },
                          768: { slidesPerView: 3, spaceBetween: 16 },
                          1024: { slidesPerView: 3.5, spaceBetween: 20 },
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
                        {[
                          {
                            name: "Excavator",
                            price: 3200,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                          {
                            name: "Tractor",
                            price: 2500,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                          {
                            name: "Drilling Machine",
                            price: 1800,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                          {
                            name: "Bulldozer",
                            price: 4200,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                          {
                            name: "Power Generator",
                            price: 1500,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                          {
                            name: "Forklift",
                            price: 2800,
                            img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                          },
                        ].map((product, i) => (
                          <SwiperSlide key={i}>
                            <div className="w-full h-full flex justify-center">
                              <div className="group w-full max-w-xs bg-white rounded-sm shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-0 transition-all duration-500">
                                {/* Product Image */}
                                <div className="relative w-full h-52 overflow-hidden">
                                  <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  {/* Overlay effect */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-5 flex flex-col justify-between">
                                  <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                      {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                      High quality machinery
                                    </p>
                                  </div>

                                  {/* Price & Enquiry Button */}
                                  <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-bold text-black">
                                      ${product.price}
                                    </span>
                                    <button className="relative flex items-center gap-2 px-5 py-2 rounded bg-[#067afd] text-white font-medium text-sm shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 overflow-hidden">
                                      <span className="relative z-10">
                                        Enquiry
                                      </span>
                                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition duration-700"></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </section>

                  {/* Our Services Section */}
                  <section className="py-16">
                    <div className="container mx-auto px-4">
                      {/* Section Header with Navigation Arrows */}
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2">
                            Our Services
                          </h2>
                          <p className="text-md text-gray-500">
                            Hover on a card to reveal the theme gradient and
                            highlight the service.
                          </p>
                        </div>

                        {/* Custom Arrows */}
                        <div className="flex space-x-3">
                          <button
                            ref={prevRef}
                            className="w-10 h-10 flex items-center justify-center  rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
                          >
                            <i className="ri-arrow-left-s-line text-xl"></i>
                          </button>
                          <button
                            ref={nextRef}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-white transition bg-gradient-to-r from-[#067afd] to-[#004aad] hover:opacity-90 shadow-md"
                          >
                            <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div>
                      </div>

                      {/* Swiper */}
                      <Swiper
                        className="h-[250px]"
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={12}
                        slidesPerView={1}
                        breakpoints={{
                          640: { slidesPerView: 2, spaceBetween: 12 },
                          1024: { slidesPerView: 2, spaceBetween: 12 },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll
                        onBeforeInit={(swiper) => {
                          swiper.params.navigation.prevEl = prevRef.current;
                          swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        navigation={{
                          prevEl: prevRef.current,
                          nextEl: nextRef.current,
                        }}
                      >
                        {services.map((service, index) => (
                          <SwiperSlide key={index}>
                            {({ isActive }) => (
                              <div
                                className={`group relative rounded-xl shadow-lg p-6 cursor-pointer overflow-hidden transition-transform duration-300 relative ${
                                  isActive
                                    ? "bg-gradient-to-r from-[#067afd] to-[#004aad] text-white"
                                    : "bg-white"
                                }`}
                              >
                                {/* Shape */}
                                <div className="service-shape absolute right-[-45px] flex items-end">
                                  <img
                                    decoding="async"
                                    src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-item-shape.png"
                                    alt="service item shape"
                                    className="w-[75%]"
                                  />
                                </div>

                                {/* Icon */}
                                <div
                                  className={`w-20 h-20 flex items-center justify-center rounded-lg transition-all duration-500 ${
                                    isActive ? "bg-white" : "bg-blue-100"
                                  }`}
                                >
                                  <img
                                    src={service.icon}
                                    className="w-12 h-12"
                                    alt="icon"
                                  />
                                </div>

                                {/* Title */}
                                <h4
                                  className={`text-lg font-semibold mt-5 mb-2 transition-colors duration-500 ${
                                    isActive ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {service.text}
                                </h4>

                                {/* Read More */}
                                <div className="mt-4 flex items-center text-sm font-medium transition-colors duration-300">
                                  <a
                                    href="#"
                                    className={`flex items-center gap-2 ${
                                      isActive
                                        ? "text-white hover:text-gray-200"
                                        : "text-blue-600 hover:text-blue-800"
                                    }`}
                                  >
                                    Read More
                                    <i className="ri-arrow-right-line text-lg"></i>
                                  </a>
                                </div>
                              </div>
                            )}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </section>

                  {/*  Shop By CategoriesSection */}
                  <section>
                    <div className="w-full max-w-7xl mx-auto p-6 font-sans relative bg-[#f8f8f9] ">
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2">
                            Our Categories
                          </h2>
                          <p className="text-md text-gray-500">
                            Hover on a card to reveal the theme gradient and
                            highlight the service.
                          </p>
                        </div>

                        {/* Custom Arrows with Remix Icons */}
                        <div className="flex space-x-3">
                          <button
                            ref={prevRef}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
                          >
                            <i className="ri-arrow-left-s-line text-xl"></i>
                          </button>
                          <button
                            ref={nextRef}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-white transition bg-gradient-to-r from-[#067afd] to-[#004aad] hover:opacity-90 shadow-md"
                          >
                            <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div>
                      </div>
                      {/* Swiper Slider with Custom Class */}
                      <Swiper
                        modules={[Navigation, Grid]}
                        navigation={{
                          nextEl: ".category-swiper-next",
                          prevEl: ".category-swiper-prev",
                        }}
                        spaceBetween={20}
                        slidesPerView={4}
                        grid={{ rows: 3, fill: "row" }}
                        breakpoints={{
                          320: { slidesPerView: 2, grid: { rows: 3 } },
                          640: { slidesPerView: 3, grid: { rows: 3 } },
                          1024: { slidesPerView: 3, grid: { rows: 3 } },
                        }}
                        className="category-swiper pb-12"
                      >
                        {categories.map((category) => (
                          <SwiperSlide key={category.id}>
                            <div className="flex flex-row items-center gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full min-h-[120px]">
                              {/* Icon */}
                              <div className="w-14 h-14 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img
                                  src={category.image}
                                  alt={category.title}
                                  className="object-contain w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <h6 className="font-semibold text-gray-700 text-sm line-clamp-2">
                                {category.title}
                              </h6>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Custom Navigation Arrows */}
                      {/* <div className="category-swiper-prev rounded-full flex items-center justify-center">
                        &#10094;
                         */}

                      {/* Left arrow symbol */}
                      {/* </div>
                      <div className="category-swiper-next rounded-full flex items-center justify-center"> */}
                      {/* &#10095; */}

                      {/* Right arrow symbol */}
                      {/* </div> */}

                      <style jsx global>{`
                        .category-swiper-prev,
                        .category-swiper-next {
                          width: 35px;
                          height: 35px;
                          color: #fff !important;
                          background-color: #1f2937 !important; /* Tailwind's gray-800 */
                          cursor: pointer;
                          border-radius: 50%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 18px; /* arrow size */
                          z-index: 10;
                        }

                        .category-swiper-prev::after,
                        .category-swiper-next::after {
                          font-size: 14px;
                          font-weight: bold;
                        }

                        .category-swiper-prev {
                          position: absolute;
                          top: 7%;
                          left: 88%;
                          transform: translateY(-50%);
                          z-index: 10;
                        }

                        .category-swiper-next {
                          position: absolute;
                          top: 7%;
                          right: 50px;
                          transform: translateY(-50%);
                          z-index: 10;
                        }

                        @media only screen and (max-width: 768px) {
                          .category-swiper-prev {
                            left: 80%;
                          }
                        }

                        @media (max-width: 480px) {
                          .category-swiper-prev {
                            left: 70%;
                          }
                          .category-swiper-prev::after,
                          .category-swiper-next::after {
                            font-size: 12px;
                          }
                          .category-swiper-prev,
                          .category-swiper-next {
                            width: 28px;
                            height: 28px;
                          }
                        }
                      `}</style>
                    </div>
                  </section>
                  {/* Why Byizzy Section */}
                  <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-[#f9fbff] to-white">
                    <div className="max-w-7xl mx-auto px-4">
                      {/* Section Header */}
                      <div className="mb-10 flex items-center justify-between">
                        {/* Left: Title + Subtitle */}
                        <div>
                          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2">
                            Why Choose{" "}
                            <span className="text-[#067afd]">Byyizzy?</span>
                          </h2>
                          <p className="text-md text-gray-500">
                            Discover the benefits that make Byyizzy stand out
                            from the rest.
                          </p>
                        </div>

                        {/* Right: Arrows + Button */}
                        <div className="flex items-center space-x-4">
                          {/* Arrows */}

                          {/* Action Button */}
                          <button className="px-5 py-2 rounded-lg text-sm font-medium flex items-center text-white bg-gradient-to-r from-[#067afd] to-[#004aad] shadow-md hover:opacity-90 transition">
                            Learn More{" "}
                            <i className="ri-arrow-right-s-line text-xl"></i>
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {whyByizzy.map((card, index) => (
                          <div
                            key={index}
                            className="relative bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden group cursor-pointer h-80 transition-all duration-500 hover:shadow-xl hover:border-[#067afd]"
                          >
                            {/* Always visible content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#067afd]/10 mb-4 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                  src={card.img}
                                  alt={card.title}
                                  width={60}
                                  height={60}
                                  className="object-contain"
                                />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#067afd] transition-colors">
                                {card.title}
                              </h3>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {card.text}
                              </p>
                              <div className="mt-5 w-14 h-1 bg-gradient-to-r from-[#067afd] to-[#004aad] rounded-full"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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

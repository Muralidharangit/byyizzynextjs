"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Grid, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import DualMarqueeSwiper from "@/components/ui/DualMarqueeSwiper";

import Category from "@/components/category";
import HeroBanner from "@/components/HeroBanner";
import Ourservice from "@/components/Ourservice";
import ShopbyCat from "@/components/ShopbyCat";
import Whychoose from "@/components/Whychoose";
import Serv1 from "@/components/serv1";
import Serv2 from "@/components/serv2";
import Ourbrand from "@/components/Ourbrand";
import { slides } from "@/data/slides";
export default function Home() {
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
                <div>
                  {/* Our Services Section */}
                  <Ourservice />

                  {/*  Shop By CategoriesSection */}
                  <ShopbyCat />
                  {/* Why Byizzy Section */}
                  <Whychoose />

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
                  <Serv1 />
                  <Serv2 />

                  <Ourbrand />

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

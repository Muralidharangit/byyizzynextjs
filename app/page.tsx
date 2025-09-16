// app/page.tsx
import Category from "@/components/category";
import ShopbyCat from "@/components/ShopbyCat";
import ClientHeroBanner from "@/components/ClientHeroBanner";
// import ClientOurservice from "@/components/ClientOurservice";
// import ClientOurbrand from "@/components/ClientOurbrand";
// import ClientWhychoose from "@/components/ClientWhychoose";
// import LazyOnVisible from "@/components/LazyOnVisible";
import HeroPoster from "@/components/HeroPoster";
import { slides } from "@/data/slides";
import Ourservice from "@/components/Ourservice";
import Whychoose from "@/components/Whychoose";
import Ourbrand from "@/components/Ourbrand";
import DualMarqueeSwiper from "@/components/ui/DualMarqueeSwiper";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-12">
        <Category />

        <main className="relative z-10 overflow-hidden rounded bg-white p-2 shadow md:col-span-12 lg:col-span-12 xl:col-span-9">
          {/* <div className="relative"> */}
          {/* <HeroPoster img={slides[0].img} alt={slides[0].title} />
            <div className="absolute inset-0">
              <ClientHeroBanner slides={slides} />
            </div> */}
          {/* <HeroPoster img={slides[0].img} alt={slides[0].title} /> */}
          <div className="relative inset-0">
            {/* Skip the first slide to avoid duplicate LCP image */}
            <ClientHeroBanner slides={slides.slice(1)} />
          </div>

          {/* </div> */}

          <section>
            <Ourservice />
            <ShopbyCat />
            <Whychoose />
            <Ourbrand />
            <DualMarqueeSwiper />
          </section>
        </main>
      </div>
    </div>
  );
}

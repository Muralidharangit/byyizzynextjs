// app/page.tsx
import Category from "@/components/category";
import ShopbyCat from "@/components/ShopbyCat";
import ClientHeroBanner from "@/components/ClientHeroBanner";
import ClientOurservice from "@/components/ClientOurservice";
import ClientOurbrand from "@/components/ClientOurbrand";
import ClientWhychoose from "@/components/ClientWhychoose";
// import LazyOnVisible from "@/components/LazyOnVisible";
import HeroPoster from "@/components/HeroPoster";
import { slides } from "@/data/slides";
// import type { CSSProperties } from "react";

// ⛔️ REMOVE this line if it exists:
// import { reserve } from "@/lib/styl"; // (also note the path is typo)

// ✅ Local type + helper
// type CSSWithIntrinsic = CSSProperties & { containIntrinsicSize?: string };
// const reserve = (w: number, h: number): CSSWithIntrinsic => ({
//   contentVisibility: "auto",
//   containIntrinsicSize: `${w}px ${h}px`,
// });

// export const revalidate = 60; // ISR every 60s
// export const dynamic = "force-static";

export default function Home() {
return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-12">
        <Category />

        <main className="relative z-10 overflow-hidden rounded bg-white p-2 shadow md:col-span-12 lg:col-span-12 xl:col-span-9">
          <div className="relative">
            <HeroPoster img={slides[0].img} alt={slides[0].title} />
            <div className="absolute inset-0">
              <ClientHeroBanner slides={slides} />
            </div>
          </div>

          <section>
            {/* <LazyOnVisible> */}
              <div className="min-h-[340px]" style={reserve(600, 340)}>
                <ClientOurservice />
              </div>
            {/* </LazyOnVisible> */}

            <ShopbyCat />

            {/* <LazyOnVisible> */}
              <div className="min-h-[320px]" style={reserve(600, 320)}>
                <ClientWhychoose />
              </div>
            {/* </LazyOnVisible> */}

            {/* <LazyOnVisible> */}
              <div className="min-h-[280px]" style={reserve(600, 280)}>
                <ClientOurbrand />
              </div>
            {/* </LazyOnVisible> */}
          </section>
        </main>
      </div>
    </div>
  );
}

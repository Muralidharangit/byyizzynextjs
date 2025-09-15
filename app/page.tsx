// app/page.tsx  (Server Component)
import Category from "@/components/category";
import ShopbyCat from "@/components/ShopbyCat";
import ClientHeroBanner from "@/components/ClientHeroBanner";
import ClientOurservice from "@/components/ClientOurservice";       // ← wrapper
import ClientOurbrand from "@/components/ClientOurbrand";           // ← wrapper (if client)
import ClientWhychoose from "@/components/ClientWhychoose";         // ← wrapper (if client)
import LazyOnVisible from "@/components/LazyOnVisible";
// import DualMarqueeSwiper from "@/components/ui/DualMarqueeSwiper";
import { slides } from "@/data/slides";

export const revalidate = 86400;
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-12">
        <Category />
        <main className="relative z-10 overflow-hidden rounded bg-white p-2 shadow md:col-span-12 lg:col-span-12 xl:col-span-9">
          <ClientHeroBanner slides={slides} />

          <section  className="min-h-[360px]"
  style={{ contentVisibility: "auto", containIntrinsicSize: "600px 360px" as any }}>
            {/* Below-the-fold blocks mount when near viewport */}
            <LazyOnVisible>
              <ClientOurservice />
            </LazyOnVisible>

            <ShopbyCat /> {/* server, cheap */}

            {/* <LazyOnVisible>
              <ClientWhychoose />
            </LazyOnVisible>

            <LazyOnVisible>
              <ClientOurbrand />
            </LazyOnVisible> */}
{/* <Serv1 /> */}
                  {/* <Serv2 /> */}
            {/* <DualMarqueeSwiper /> */}
          </section>
        </main>              
          </div>
        </div>

      </div>
    </div>
  );
}

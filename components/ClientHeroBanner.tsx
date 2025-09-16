// "use client";

import dynamic from "next/dynamic";
import type { HeroBannerProps } from "@/components/HeroBanner";

// ✅ Keep SSR (don’t disable it), just add skeleton loader for text
const HeroBannerDyn = dynamic<HeroBannerProps>(() => import("@/components/HeroBanner"), {
  loading: () => (
    <section className="primary-color relative flex h-[500px] items-center py-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Skeleton text */}
          <div className="space-y-4 text-white">
            <div className="h-8 w-3/4 rounded bg-white/20" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="h-4 w-1/2 rounded bg-white/10" />
            <div className="mt-4 h-10 w-40 rounded bg-white/20" />
          </div>
          {/* Skeleton image (just placeholder box, real img is SSR from HeroPoster) */}
          <div className="hidden lg:block">
            <div className="h-[450px] w-full rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  ),
});

export default function ClientHeroBanner(props: HeroBannerProps) {
  return <HeroBannerDyn {...props} />;
}

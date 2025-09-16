// components/ClientWhychoose.tsx
"use client";
import dynamic from "next/dynamic";
const WhychooseDyn = dynamic(() => import("@/components/Whychoose"), {
  ssr: false,
  loading: () => null,
});
export default function ClientWhychoose() {
  return <WhychooseDyn />;
}

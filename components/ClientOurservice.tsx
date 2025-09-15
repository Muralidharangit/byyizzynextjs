"use client";
import dynamic from "next/dynamic";
const OurserviceDyn = dynamic(() => import("@/components/Ourservice"), { ssr: false, loading: () => null });
export default function ClientOurservice() { return <OurserviceDyn />; }


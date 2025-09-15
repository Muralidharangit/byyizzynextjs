// components/ClientOurbrand.tsx (example)
"use client";
import dynamic from "next/dynamic";
const OurbrandDyn = dynamic(() => import("@/components/Ourbrand"), { ssr: false, loading: () => null });
export default function ClientOurbrand(){ return <OurbrandDyn/>; }

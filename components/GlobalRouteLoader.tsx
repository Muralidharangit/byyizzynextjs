"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logowhite from "@/public/images/white.png";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500); // fake delay or until API ready
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <Image src={logowhite} alt="Logo" width={120} height={120} className="animate-pulse" />
      </div>
    );
  }

  return <>{children}</>;
}
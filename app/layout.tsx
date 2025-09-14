// app/layout.tsx
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
// Option A: keep Remixicon via CSS import (no JS needed)
// If you plan to keep Remixicon, do this import and DELETE the RemixiconLoader component:
import "remixicon/fonts/remixicon.css";

import Header from "@/components/Header";
import Footer from "@/components/footer";
// import SplashLoader from "@/components/GlobalRouteLoader"; // keep disabled unless truly needed

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with optimized fonts & icons",
  icons: { icon: "/favicon.ico" },
};

export const revalidate = 86400;        // SSG + ISR (rebuild once/day)
export const dynamic = "force-static";   // ensure static for layout shell

// const rubik = Rubik({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   display: "swap",           // default when self-hosted, safe to be explicit
// });

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400","600","700"],  // keep it lean
  display: "swap",
  // fallback to reduce metric mismatch (less shift)
  fallback: ["system-ui","Segoe UI","Arial"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} pt-[120px]`}>{/* h-20 = 80px top padding */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
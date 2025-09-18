import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
// import "remixicon/fonts/remixicon.css";

import Header from "@/components/Header";
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });
// import Head from "next/head";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with optimized fonts & icons",
  icons: { icon: "/favicon.ico" },
};

// export const revalidate = 86400;        // SSG + ISR (rebuild once/day)
// export const dynamic = "force-static";   // ensure static for layout shell

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

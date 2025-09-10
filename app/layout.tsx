import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import logowhite from "@/public/images/white.png";
import logoblue from "@/public/images/blue.png";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/footer";


const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />

     

        {children}

        <Footer />
      </body>
    </html>
  );
}

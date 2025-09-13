import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import SplashLoader from "@/components/GlobalRouteLoader";
import RemixiconLoader from "@/components/RemixiconLoader"; // ✅ client loader

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "My App",
  description: "Next.js App with Remixicon",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        {/* Preconnect + preload only */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        />
      </head>
      <body className={rubik.className} suppressHydrationWarning={true}>
        {/* Injects Remixicon CSS client-side */}
        <RemixiconLoader />

        <Header />
        {/* <SplashLoader> */}
          {children}
          {/* </SplashLoader> */}
        <Footer />
      </body>
    </html>
  );
}

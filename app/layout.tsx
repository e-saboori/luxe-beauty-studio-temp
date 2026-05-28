import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/SiteHeader";
import { business } from "@/lib/site-data";
import { withBasePath } from "@/lib/paths";

const pagesOrigin = "https://e-saboori.github.io";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap"
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

const cursive = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
  display: "swap"
});

const signature = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES === "true" ? pagesOrigin : "http://localhost:3000"),
  title: {
    default: `${business.name} | Luxury Lashes, Brows & Cosmetic Beauty`,
    template: `%s | ${business.name}`
  },
  description: business.description,
  openGraph: {
    title: business.name,
    description: business.description,
    type: "website",
    images: [
      {
        url: withBasePath("/images/home-hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Luxury cosmetic beauty studio"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${cursive.variable} ${signature.variable}`}>
      <body>
        <ScrollToTop />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}

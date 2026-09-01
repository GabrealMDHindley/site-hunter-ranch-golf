import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BIZ, LINKS } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://site-hunter-ranch-golf.vercel.app"),
  title: {
    default: "Hunter Ranch Golf Course | Championship Golf in Paso Robles, CA",
    template: "%s | Hunter Ranch Golf Course",
  },
  description:
    "18-hole championship golf atop the highest point in Paso Robles wine country — century-old oaks, natural lakes, vineyard views, and the Hunter Ranch Bar & Grill. Golf Digest 4½ stars.",
  openGraph: {
    type: "website",
    siteName: BIZ.name,
    images: ["/photos/clubhouse-hill.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GolfCourse",
  name: BIZ.name,
  url: "https://site-hunter-ranch-golf.vercel.app",
  telephone: "+18052377444",
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: BIZ.city,
    addressRegion: BIZ.state,
    postalCode: BIZ.zip,
    addressCountry: "US",
  },
  sameAs: [LINKS.facebook, LINKS.instagram, LINKS.twitter, BIZ.currentSite],
  award: [
    "Golf Digest Best Places to Play — 4 to 4½ stars every year since opening",
    "Top 10 Customer Satisfaction Facility, National Golf Foundation, 2002",
    "California Top 50, California Golf, 1999",
  ],
  containsPlace: {
    "@type": "Restaurant",
    name: "The Hunter Ranch Bar & Grill",
    servesCuisine: "American",
    telephone: "+18052377444",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

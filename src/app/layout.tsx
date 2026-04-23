import type { Metadata } from "next";
import { Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seraphic Medium | Digital Marketing Agency",
  description: "We scale 7- & 8-figure DTC brands with converting ad creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${quicksand.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BOEING - A Team Dedicated to Improving Aviation Standards",
  description: "BOEING - With our modern fleet and well-trained crew, experience the future of aviation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

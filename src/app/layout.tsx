import type { Metadata } from "next";
import { Forum, Inter_Tight } from "next/font/google";
import "./globals.css";

const forum = Forum({
  weight: "400",
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
});

const interTight = Inter_Tight({
  weight: "400",
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbus - Private Aviation Excellence",
  description: "Experience private travel without any limits. Jetora redefines private aviation with dark elegance, bespoke services, and unrivaled comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${forum.variable} ${interTight.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter-tight), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

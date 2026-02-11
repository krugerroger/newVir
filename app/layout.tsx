import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Traduction du titre depuis le HTML
  title: "Олон улсын шилжүүлэг", 
  description: "Дэлхийн аль ч газар хурдан, аюулгүй мөнгө шилжүүлэх үйлчилгээ.",
  icons: {
    icon: "/images/ban12.png", // Correspond à <link rel="icon" href="images/ban12.png">
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Langue changée de "en" à "mn" (Mongol) comme dans le HTML
    <html lang="mn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
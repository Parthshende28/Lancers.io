import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lancers.io - Powered by Creativity.",
  description: "We combine cutting-edge AI technology with rocket-science expertise to build websites and apps faster, smarter, and tailored to your vision.",
  keywords: "web development, app development, UI/UX design, freelancing, AI-powered development, creative agency",
  authors: [{ name: "Parth Shende" }, { name: "Rahul Shende" }],
  openGraph: {
    title: "Lancers.io - Creative Development Agency",
    description: "Powered by Creativity. Driven by AI. Delivered with Precision.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/lancers.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}

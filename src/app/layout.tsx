import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import FooterPage from "./components/footer";
import Navbar from "./components/navbar";
import CartProvider from "@/providers/CartProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahmed Store | Next.js Shop",
  description:
    "Premium electronics shop with fast shipping, product discovery, and a seamless cart experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface min-h-screen text-slate-900`}
      >
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white px-4 py-2 font-semibold text-slate-900 rounded-lg shadow-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <FooterPage />
        </CartProvider>
      </body>
    </html>
  );
}

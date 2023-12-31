import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/react';
// import file common 
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import FooterForm from "../components/layout/form/page";

// react slick 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Muzammil Portfolio Website",
  description: "Muzammil Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <FooterForm />
        <Footer />
      </body>
    </html>
  );
}

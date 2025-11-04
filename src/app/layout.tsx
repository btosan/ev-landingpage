// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "BYD Electric Vehicles Nigeria | eVehicles",
  description:
    "Explore BYD electric cars in Nigeria — Dolphin, Atto 3, Tang, and Seal. Save on fuel, enjoy cutting-edge EV technology, and drive the future today.",
  keywords:
    "BYD Nigeria, electric vehicles Nigeria, BYD Dolphin, BYD Atto 3, EV Lagos, affordable electric cars Nigeria",
      icons: {
    icon: '/favicon.ico',
  },
};

// Define the ViewPort type
type ViewPort = {
  themeColor: string;
  width: string;
  colorScheme: string;
};

export const viewport: ViewPort = {
  themeColor: '#000000',
  width: 'device-width',
  colorScheme: 'dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100 font-sans antialiased overflow-x-hidden">
        {/* Navbar - fixed and global */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20">
          {children}
          <FloatingContact />
        </main>

        {/* Footer (optional placeholder for now) */}
        <Footer />
      </body>
    </html>
  );
}

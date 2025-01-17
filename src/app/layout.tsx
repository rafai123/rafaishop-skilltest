"use client";

import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SubNavbar from "@/components/Navbar/SubNavbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "RafaiShop",
//   description: "Skilltest for Minilemon",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Navbar />
          <SubNavbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}

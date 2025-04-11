import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";
import "./globals.css";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "IMDb clone",
  description: "This is a clone of IMDb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-stone-950 text-stone-100 h-max min-h-screen">
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </div>
      </body>
    </html>
  );
}

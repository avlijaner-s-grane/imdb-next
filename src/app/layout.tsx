import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}

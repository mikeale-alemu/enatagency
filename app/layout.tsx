import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navebar";
import Footer from "@/components/shared/Footer";
import { Poppins } from "next/font/google";
import Header from "@/components/shared/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight:[ '400', '500', '700', '900' ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Enat Agency",
  description: "Travel Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

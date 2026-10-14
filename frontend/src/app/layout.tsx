
import type { Metadata } from "next";
import { Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BitBunker | Enter the Arcade",
    template: "%s | BitBunker",
  },
  description:
    "Ten classic games. One arcade. Enter BitBunker, chase high scores, and test your skills.",
  applicationName: "BitBunker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${pressStart2P.variable}`}>
      <body>
        <Navbar />
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

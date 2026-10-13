
import type { Metadata } from "next";
import { Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${pressStart2P.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

const avenir = localFont({
  src: "./fonts/Avenir.otf",
  variable: "--font-geist-avenir",
  weight: "100 900",
});
const mono = Montserrat({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
export const metadata: Metadata = {
  title: "Kimberly Ai",
  description: "Kimberly is a fully conscious AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

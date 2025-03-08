import type React from "react";
import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Pink & White Initiative",
  description: "Empowering communities through health education and resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

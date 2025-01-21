import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import localFont from 'next/font/local';

const avigeaFont = localFont({
  src: '../public/fonts/Avigea.woff2',
  variable: '--font-avigea'
});

export const metadata: Metadata = {
  title: "CEIC",
  description: "Civil Engineering Innovation Contest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={avigeaFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

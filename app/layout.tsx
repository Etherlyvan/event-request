// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import localFont from 'next/font/local';

const avigeaFont = localFont({
  src: '../public/fonts/Avigea.woff2',
  variable: '--font-avigea'
});

export const metadata = {
  title: "CEIC",
  description: "Civil Engineering Innovation Contest",
  icons: {
    icon: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737273155/CEIC/LogoNavBar_kbtiba.svg", 
    shortcut: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737273155/CEIC/LogoNavBar_kbtiba.svg",
    apple: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737273155/CEIC/LogoNavBar_kbtiba.svg", 
  },
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

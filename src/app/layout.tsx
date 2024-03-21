import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohan Tayade - Web Developer",
  description: "Passionate MERN web developer dedicated to crafting seamless digital experiences. Specializing in MongoDB, Express.js, React, and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}

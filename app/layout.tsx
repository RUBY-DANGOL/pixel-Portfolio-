import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruby | Portfolio",
  description: "cute ruby portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // ensures fixed background
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/top-header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kimhor Portfolio",
  description: "Kimhor's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans`}>
        <TopHeader />
        {children}
      </body>
    </html>
  );
}

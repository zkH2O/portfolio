import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraCursor } from "@/components/UI/AuroraCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zigao Zeng | ML Engineer & Developer",
  description: "UC Davis Computer Science & Statistics student building intelligent, scalable systems.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuroraCursor />
        {children}
      </body>
    </html>
  );
}

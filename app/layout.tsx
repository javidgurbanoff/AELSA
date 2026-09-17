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
  title: {
    default: "AELSA Technologies",
    template: "%s | AELSA",
  },
  description:
    "Autonomous marine systems and intelligent sea technology built for the modern ocean.",
  keywords: [
    "marine technology",
    "autonomous systems",
    "ocean monitoring",
    "sea technology",
    "AI",
  ],
  openGraph: {
    title: "AELSA Technologies",
    description: "Autonomous marine systems and intelligent sea technology.",
    url: "https://aelsa.vercel.app",
    siteName: "AELSA Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

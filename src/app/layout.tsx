import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://multiconsultgroup.com"),
  title: "Multiconsult Group | Engineering & Architecture Consultancy",
  description:
    "Multiconsult is a leading Norwegian engineering and architecture consultancy delivering sustainable solutions across industries.",
  openGraph: {
    title: "Multiconsult Group | Engineering & Architecture Consultancy",
    description:
      "Multiconsult is a leading Norwegian engineering and architecture consultancy delivering sustainable solutions across industries.",
    url: "https://multiconsultgroup.com",
    siteName: "Multiconsult Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiconsult Group | Engineering & Architecture Consultancy",
    description:
      "Multiconsult is a leading Norwegian engineering and architecture consultancy delivering sustainable solutions across industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

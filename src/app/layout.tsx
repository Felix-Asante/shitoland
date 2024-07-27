import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shitoland",
  description: "Authentic ghanaian shito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${SpaceGrotesk.className} overflow-x-hidden`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

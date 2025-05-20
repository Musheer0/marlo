import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

const font = DM_Sans({
  subsets:['latin','latin-ext']
})
export const metadata: Metadata = {
  title: "Marlo-Ai",
  description: "AI-Powered marketing intellingence Turn chaos intro clarity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  px-10 bg-zinc-50 text-zinc-950 antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

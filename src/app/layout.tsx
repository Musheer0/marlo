import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

const font = DM_Sans({
  subsets:['latin','latin-ext']
})
export const metadata: Metadata = {
  title: 'Marlo | AI-Powered Marketing Intelligence',
  description:
    "Turn chaos into clarity with Marlo's AI-powered marketing intelligence platform. Automate reporting, discover hidden revenue opportunities, and get real-time account-level insights.",
  metadataBase: new URL('https://marlo.ai'), // Replace with your real domain
  openGraph: {
    title: 'Marlo | AI-Powered Marketing Intelligence',
    description:
      "Marlo helps B2B marketing and sales teams turn noisy GTM data into revenue-driving clarity. Experience faster reporting, smarter workflows, and deeper insights.",
    url: 'https://marlo.ai',
    siteName: 'Marlo',
    images: [
      {
        url: '/logo.jpg', // Replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Marlo AI - Marketing Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marlo | AI Marketing Intelligence',
    description:
      "Marlo's AI agents automate deep reporting and uncover hidden revenue opportunities across your GTM stack.",
    images: ['/logo.jpg'], // Replace with your Twitter card image
    creator: '@MarloAI', // Replace with your actual Twitter handle
  },
  keywords: [
    'AI Marketing',
    'B2B Marketing Intelligence',
    'GTM Data',
    'Revenue Operations',
    'Marketing Automation',
    'Pipeline Insights',
    'Marlo AI',
    'Cookieless Tracking',
    'Marketing Analytics',
  ],
  authors: [{ name: 'Marlo', url: 'https://marlo.ai' }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: 'Marketing Technology',
  alternates: {
    canonical: 'https://marlo.ai',
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
        className={`${font.className}  px-10 bg-zinc-50 text-zinc-950 antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

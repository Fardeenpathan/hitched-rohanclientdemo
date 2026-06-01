import type { Metadata } from "next";
import DisableInspect from "@/app/components/DisableInspect";
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
  metadataBase: new URL("https://hitched-rohanclientdemo.vercel.app/"),

  openGraph: {
    title: "Rohan & Devna",
    description: "We invite you to celebrate our forever",
    url: "https://hitched-rohanclientdemo.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rohan & Devna",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Rohan & Devna",
    description: "We invite you to celebrate our forever",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://hitched-rohanclientdemo.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
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
        <DisableInspect /> 
        {children}
      </body>
    </html>
  );
}

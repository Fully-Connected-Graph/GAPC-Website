import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "github-markdown-css/github-markdown-dark.css";
import { NavBar } from "@/components/molecules/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GAPC 2027",
    template: "%s · GAPC 2027",
  },
  description: "The programming competition organized in Groningen!",
  applicationName: "gapc2027website",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://gapc.svcover.nl/",
    title: "Groningen Algorithmic Programming Contest 2027",
    description: "The programming competition organized in Groningen!",
    siteName: "GAPC 2027",
    images: ["https://gapc.svcover.nl/assets/thumbnails/banner-2027.png"],
    emails: ["programming_committee@svcover.nl"],
    countryName: "The Netherlands",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="mt-0 m-auto max-w-4xl py-20 max-lg:px-4 max-lg:max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}

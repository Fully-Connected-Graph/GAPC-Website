import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { NavBar } from "@/components/molecules/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAPC 2026",
  description: "The programming competition organized in Groningen!",
  applicationName: "gapc2026website",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://gapc.svcover.nl/",
    title: "Groningen Algorithmic Programming Competition 2026",
    description: "The programming competition organized in Groningen!",
    siteName: "GAPC 2026",
    images: [
      "https://gapc.svcover.nl/assets/thumbnails/banner.png",
    ],
    emails: ["programming_committee@svcover.nl"],
    countryName: "The Netherlands",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />

        <meta name="og:site_name" content="GAPC 2026" />
        <meta
          name="og:description"
          content="The programming competition organized in Groningen!"
        />

        <meta name="application-name" content="gapc2026website" />
        <meta name="og:email" content="programming_committee@svcover.nl" />

        <meta name="og:latitude" content="53.2403955" />
        <meta name="og:longitude" content="6.5338483" />
        <meta name="og:street-address" content="Zernikelaan" />
        <meta name="og:locality" content="Groningen" />
        <meta name="og:region" content="Groningen" />
        <meta name="og:postal-code" content="9747AG" />
        <meta name="og:country-name" content="The Netherlands" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <main className="mt-0 m-auto max-w-4xl py-20 max-lg:px-4 max-lg:max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}

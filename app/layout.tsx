import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Oswald } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Z1 Concepts | Automotive Detailing, Protection & Styling in Manjeri",
    template: "%s | Z1 Concepts",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Z1 Concepts",
    "automotive detailing Manjeri",
    "car detailing Manjeri",
    "PPF Manjeri",
    "ceramic coating Manjeri",
    "car wrapping Manjeri",
  ],
  openGraph: {
    title: "Z1 Concepts | Automotive Detailing, Protection & Styling in Manjeri",
    description: site.description,
    locale: "en_IN",
    type: "website",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-dvh overflow-x-hidden bg-z1-black font-sans text-z1-white">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-z1-red focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

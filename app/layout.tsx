import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Oswald } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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

const siteUrl = "https://akhilmansoor5-maker.github.io/Z1-concepts";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.seoTitle,
    template: "%s | Z1 Concepts",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "best car wash in Manjeri",
    "best car wash Manjeri",
    "car wash Manjeri",
    "car wash in Manjeri",
    "Google rated 4.6",
    "Z1 Concepts",
    "automotive detailing Manjeri",
    "car detailing Manjeri",
    "PPF Manjeri",
    "ceramic coating Manjeri",
    "car wrapping Manjeri",
  ],
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    locale: "en_IN",
    type: "website",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
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
      <body className="min-h-dvh overflow-x-clip bg-z1-black font-sans text-z1-white">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-[max(1rem,env(safe-area-inset-top))] focus:left-4 focus:z-[100] focus:bg-z1-red focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="w-full max-w-full overflow-x-clip pt-[calc(3.5rem+env(safe-area-inset-top))] lg:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Baloo_2, Capriola } from "next/font/google";
import { Monomaniac_One } from "next/font/google";
import { Fredoka } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MenuViewerProvider } from "@/components/menu-viewer-provider";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const capriola = Capriola({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-capriola",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://momokato.in"),
  title: {
    default: "Momo Kato - Fresh Momos & Bubble Tea",
    template: "%s | Momo Kato",
  },
  description:
    "Momo Kato is a growing QSR brand serving fresh momos, authentic Himalayan cuisine, and delicious bubble tea. Visit our locations, order online, or franchise with us!",
  keywords: [
    "Momo Kato",
    "momos",
    "bubble tea",
    "QSR",
    "quick service restaurant",
    "franchise",
    "Himalayan food",
    "dumplings",
    "order online",
    "fresh food",
    "Indian momos",
    "street food",
  ],
  authors: [{ name: "Momo Kato Team" }],
  creator: "Momo Kato Team",
  publisher: "Momo Kato",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Momo Kato - Fresh Momos & Bubble Tea",
    description:
      "Momo Kato is a growing QSR brand serving fresh momos, authentic Himalayan cuisine, and delicious bubble tea.",
    url: "/",
    siteName: "Momo Kato",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/about1.jpg",
        width: 500,
        height: 500,
        alt: "Momo Kato Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momo Kato - Fresh Momos & Bubble Tea",
    description:
      "Momo Kato is a growing QSR brand serving fresh momos, authentic Himalayan cuisine, and delicious bubble tea.",
    images: ["/images/about1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          baloo.variable,
          fredoka.variable,
          capriola.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MenuViewerProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </MenuViewerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

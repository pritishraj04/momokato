import type React from "react";
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

export const metadata = {
  title: "Momo Kato - Fresh Momos & Bubble Tea",
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
  author: "Momo Kato Team",
  openGraph: {
    title: "Momo Kato - Fresh Momos & Bubble Tea",
    description:
      "Momo Kato is a growing QSR brand serving fresh momos, authentic Himalayan cuisine, and delicious bubble tea.",
    url: "https://momokato.in/",
    siteName: "Momo Kato",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 800,
        height: 600,
        alt: "Momo Kato Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momo Kato - Fresh Momos & Bubble Tea",
    description:
      "Momo Kato is a growing QSR brand serving fresh momos, authentic Himalayan cuisine, and delicious bubble tea.",
    site: "@momokato",
    creator: "@momokato",
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

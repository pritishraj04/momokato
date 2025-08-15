import type React from "react";
import "@/app/globals.css";
import { Baloo_2 } from "next/font/google";
import { Fredoka } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnimationProvider } from "@/components/animation-provider";
import { MenuViewerProvider } from "@/components/menu-viewer-provider";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
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
    url: "https://momokato.com/",
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
          "min-h-screen bg-white font-sans antialiased initial-load",
          baloo.variable,
          fredoka.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <MenuViewerProvider>
              <div className="relative z-fix">
                <Header />
                <main className="force-visible">{children}</main>
                <Footer />
                <WhatsAppButton />
              </div>
            </MenuViewerProvider>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

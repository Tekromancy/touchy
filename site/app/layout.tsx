import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "touchy - Smart Touchpad Disable-While-Typing Daemon for Hyprland",
  description:
    "touchy monitors raw keyboard events via libinput and dynamically locks the touchpad during active typing on Hyprland (Wayland), eliminating accidental palm taps with zero latency.",
  keywords: [
    "touchy",
    "hyprland",
    "touchpad disable while typing",
    "wayland touchpad",
    "hyprctl",
    "libinput debug-events",
    "linux touchpad",
    "game mode disable touchpad",
  ],
  authors: [{ name: "Joshua Edward McLaughlin Cox" }],
  other: {
    "google-adsense-account": "ca-pub-8973108060277483",
  },
  openGraph: {
    title: "touchy - Smart Touchpad Daemon for Hyprland",
    description:
      "Prevent accidental palm brushes while typing on Hyprland. Zero-latency hardware event filtering via libinput and hyprctl.",
    type: "website",
    siteName: "touchy Documentation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1H2CLH4R3');
          `}
        </Script>

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroller } from "@/components/smooth-scroller";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web.smarting.gr"),
  title: {
    default: "Web.Smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
    template: "%s | Web.Smarting.gr",
  },
  description:
    "Επαγγελματική ανάπτυξη ιστοσελίδων και ψηφιακές λύσεις για επιχειρήσεις. Δημιουργούμε εντυπωσιακές, λειτουργικές ιστοσελίδες και εφαρμογές που βοηθούν την επιχείρησή σας να αναπτυχθεί.",
  keywords: [
    "ανάπτυξη ιστοσελίδων",
    "ψηφιακές λύσεις",
    "σχεδιασμός ιστοσελίδων",
    "ιστοσελιδικές εφαρμογές",
    "ανάπτυξη επιχείρησης",
    "ψηφιακό μάρκετινγκ",
  ],
  authors: [{ name: "Smarting.gr", url: "https://web2.smarting.gr" }],
  creator: "Smarting.gr",
  publisher: "Smarting.gr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://web2.smarting.gr",
    title: "Web.Smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
    description:
      "Επαγγελματική ανάπτυξη ιστοσελίδων και ψηφιακές λύσεις για επιχειρήσεις. Δημιουργούμε εντυπωσιακές, λειτουργικές ιστοσελίδες και εφαρμογές που βοηθούν την επιχείρησή σας να αναπτυχθεί.",
    siteName: "Web.Smarting.gr",
    images: [
      {
        url: "/og-image.jpg", // You should create this image
        width: 1200,
        height: 630,
        alt: "Web.Smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
    description:
      "Επαγγελματική ανάπτυξη ιστοσελίδων και ψηφιακές λύσεις για επιχειρήσεις. Δημιουργούμε εντυπωσιακές, λειτουργικές ιστοσελίδες και εφαρμογές που βοηθούν την επιχείρησή σας να αναπτυχθεί.",
    images: ["/og-image.jpg"], // You should create this image
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
  verification: {
    google: "google-site-verification-code", // Add your Google Search Console verification code
    yandex: "yandex-verification-code", // Add your Yandex verification code if needed
  },
  alternates: {
    canonical: "https://web.smarting.gr",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Bartle&display=swap"
          rel="stylesheet"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smarting.gr",
              url: "https://web.smarting.gr",
              logo: "https://web.smarting.gr/logo.png", // You should update this with your actual logo URL
              description:
                "Επαγγελματική ανάπτυξη ιστοσελίδων και ψηφιακές λύσεις για επιχειρήσεις. Δημιουργούμε εντυπωσιακές, λειτουργικές ιστοσελίδες και εφαρμογές που βοηθούν την επιχείρησή σας να αναπτυχθεί.",
              address: {
                "@type": "PostalAddress",
                // Add your actual address here
              },
              contactPoint: {
                "@type": "ContactPoint",
                // Add your contact information here
              },
              sameAs: [
                // Add your social media profiles here
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="noise" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroller>
            <SiteHeader />
            {children}
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}

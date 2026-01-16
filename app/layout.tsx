import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroller } from "@/components/smooth-scroller";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

// Import business information
import businessInfo from "./mocks/business-info.json";

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
    default: `${businessInfo.name} - ${businessInfo.tagline}`,
    template: "%s | " + businessInfo.name,
  },
  description: businessInfo.description,
  keywords: [
    "ανάπτυξη ιστοσελίδων",
    "ψηφιακές λύσεις",
    "σχεδιασμός ιστοσελίδων",
    "ιστοσελιδικές εφαρμογές",
    "ανάπτυξη επιχειρήσης",
    "ψηφιακό μάρκετινγκ",
  ],
  authors: [{ name: businessInfo.name, url: "https://web.smarting.gr" }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://web.smarting.gr",
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
    siteName: businessInfo.name,
    images: [
      {
        url: "/og-image.jpg", // You should create this image
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - ${businessInfo.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
    images: ["/og-image.png"], // You should create this image
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: businessInfo.name,
              url: "https://web.smarting.gr",
              logo: "https://web.smarting.gr/logo.png", // You should update this with your actual logo URL
              description: businessInfo.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: businessInfo.address.street,
                addressLocality: businessInfo.address.city,
                postalCode: businessInfo.address.postalCode,
                addressCountry: businessInfo.address.country,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: businessInfo.phone,
                  contactType: "customer service",
                  areaServed: "GR",
                  availableLanguage: "Greek",
                },
                {
                  "@type": "ContactPoint",
                  telephone: businessInfo.mobile,
                  contactType: "customer service",
                  areaServed: "GR",
                  availableLanguage: "Greek",
                },
              ],
              email: businessInfo.email,
              foundingDate: "2025", // Assuming a founding date - you may want to update this
              identifier: businessInfo["business-registry-number"],
              sameAs: [
                businessInfo.socials.facebook,
                businessInfo.socials.instagram,
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
            <Toaster position="top-right" />
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}

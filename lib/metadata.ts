import { Metadata } from "next";

// Base metadata that can be extended by individual pages
export const baseMetadata: Metadata = {
  title: {
    default: "web.smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
    template: "%s | web.smarting.gr",
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
  authors: [{ name: "web.smarting.gr", url: "https://web2.smarting.gr" }],
  creator: "web.smarting.gr",
  publisher: "web.smarting.gr",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://web.smarting.gr",
    title: "web.smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
    description:
      "Επαγγελματική ανάπτυξη ιστοσελίδων και ψηφιακές λύσεις για επιχειρήσεις. Δημιουργούμε εντυπωσιακές, λειτουργικές ιστοσελίδες και εφαρμογές που βοηθούν την επιχείρησή σας να αναπτυχθεί.",
    siteName: "web.smarting.gr",
    images: [
      {
        url: "/og-image.jpg", // You should create this image
        width: 1200,
        height: 630,
        alt: "web.smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "web.smarting.gr - Ψηφιακές Λύσεις & Ανάπτυξη Ιστοσελίδων",
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
  alternates: {
    canonical: "https://web.smarting.gr",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

/**
 * Helper function to merge base metadata with page-specific metadata
 * @param pageMetadata - Metadata specific to the current page
 * @returns Merged metadata object
 */
export function createMetadata(pageMetadata: Partial<Metadata>): Metadata {
  return {
    ...baseMetadata,
    ...pageMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      ...pageMetadata.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...pageMetadata.twitter,
    },
    alternates: {
      ...baseMetadata.alternates,
      ...pageMetadata.alternates,
    },
  };
}

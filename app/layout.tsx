import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chilla° — Solar Cold Chain for West Africa",
  description:
    "Modular solar-powered cold chain kiosks for food vendors, pharmacies, and clinics across West Africa. Leased, installed in a day, always monitored.",
  metadataBase: new URL("https://chilla.africa"),
  alternates: {
    canonical: "https://chilla.africa",
  },
  openGraph: {
    title: "Chilla° — Solar Cold Chain for West Africa",
    description:
      "Modular solar-powered cold chain kiosks for food vendors, pharmacies, and clinics across West Africa.",
    url: "https://chilla.africa",
    siteName: "Chilla°",
    images: [{ url: "/og-chilla.png", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilla° — Solar Cold Chain for West Africa",
    description:
      "Modular solar-powered cold chain kiosks for food vendors, pharmacies, and clinics across West Africa.",
    images: ["/og-chilla.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

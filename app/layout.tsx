import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import socialCard from "./jobs-social-card.png";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-flutter-jobs.watchxstore7.chatgpt.site"),
  title: "فرص محمد وأسماء | Flutter وAndroid Native",
  description: "تقرير يومي لوظائف Flutter لمحمد Essam وAndroid Native لأسماء Atya في مصر والوطن العربي.",
  openGraph: {
    title: "فرص محمد وأسماء | Flutter وAndroid Native",
    description: "فرص موبايل مختارة يوميًا لمحمد وأسماء في مصر والوطن العربي.",
    url: "https://muhammad-flutter-jobs.watchxstore7.chatgpt.site",
    images: [socialCard.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "فرص محمد وأسماء | Flutter وAndroid Native",
    description: "فرص موبايل مختارة يوميًا لمحمد وأسماء في مصر والوطن العربي.",
    images: [socialCard.src],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

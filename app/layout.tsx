import type { Metadata } from "next";
import "./globals.css";
import socialCard from "./jobs-social-card.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "فرص محمد وأسماء | Flutter وAndroid Native",
  description: "تقرير يومي لوظائف Flutter لمحمد Essam وAndroid Native لأسماء Atya في مصر فقط.",
  openGraph: {
    title: "فرص محمد وأسماء | Flutter وAndroid Native",
    description: "فرص موبايل مصرية مختارة يوميًا لمحمد وأسماء.",
    images: [socialCard.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "فرص محمد وأسماء | Flutter وAndroid Native",
    description: "فرص موبايل مصرية مختارة يوميًا لمحمد وأسماء.",
    images: [socialCard.src],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

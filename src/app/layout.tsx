import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import { Barlow_Condensed, Cormorant_Garamond } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Museu das Forças Armadas de Angola",
  description:
    "Preservando a história e a honra das Forças Armadas de Angola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className={`${cormorant.variable} ${barlow.variable}`}>
      <body className="antialiased">
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}

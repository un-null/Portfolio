import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "null's portfolio",
  description: "portofolio by null"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#161616] text-[#FFFFFFAF] mx-auto max-w-2xl font-mono">
        <main className="grid min-h-dvh grid-rows-[auto_1fr_auto] p-6 pt-3 md:pt-6">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

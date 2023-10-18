import Header from "@/components/header";

import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "null's portfolio",
  description: "portofolio by null",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-app text-gray-normal mx-auto max-w-2xl font-mono">
        <main className="grid min-h-[100dvh] grid-rows-layout p-6 pt-3 md:pt-6">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

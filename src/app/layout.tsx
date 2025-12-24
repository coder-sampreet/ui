import type { Metadata } from "next";

import "@/styles/globals.css";

import { fonts } from "@/configs/fonts";
import { siteConfig } from "@/configs/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen", fonts)}>{children}</body>
    </html>
  );
}

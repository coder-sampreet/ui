import type { Metadata } from "next";

import "@/styles/globals.css";

import { RootProvider } from "fumadocs-ui/provider/next";

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
      <body className={cn("flex flex-col antialiased min-h-screen", fonts)}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

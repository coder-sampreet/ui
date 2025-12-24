import { JetBrains_Mono as FontMono, Inter as FontSans, Outfit } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const fonts = cn(fontSans.variable, fontMono.variable, fontOutfit.variable);

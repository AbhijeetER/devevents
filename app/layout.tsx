import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "./components/LightRays";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devevents",
  description: "Events registration app for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", schibsted_Grotesk.variable, martianMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="absolute inset-0 top-0 z-[-2] min-h-screen">
  <LightRays
    raysOrigin="top-center"
    raysColor="#ff1414"
    raysSpeed={1.5}
    lightSpread={2}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
/></div>
<main>
{children}
</main></body>
    </html>
  );
}

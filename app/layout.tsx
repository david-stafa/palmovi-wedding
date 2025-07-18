import type { Metadata } from "next";
import { Aleo, Lora } from "next/font/google";
import "./globals.css";

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mámo, bude svatba!",
  description: "Palmovi - svatba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${aleo.variable} ${lora.variable} antialiased bg-[#FDF6ED]`}
      >
        {children}
      </body>
    </html>
  );
}

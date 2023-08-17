import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pricing UI</title>
        <meta name="description" content="A Next.js pricing UI " />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

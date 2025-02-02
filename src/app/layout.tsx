import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import TRPCProvider from "./_trpc/Provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dsm-firmenich - PhotoVault",
  description: "PhotoVault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased bg-gray-50`}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}

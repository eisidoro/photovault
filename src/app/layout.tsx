import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { TRPCProvider } from "@/trpc/client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { Header } from "@/components/header";

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
        <TRPCProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col w-full">
              <Header />
              {children}
            </main>
          </SidebarProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}

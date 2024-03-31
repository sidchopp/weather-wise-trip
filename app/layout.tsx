import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Heading } from "../components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Wise Trip",
  description: "Plan a trip based on weather",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={inter.className}>
      <Heading />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;

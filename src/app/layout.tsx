import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rubik, Vazirmatn} from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--rubik" });
const vazirmatn = Vazirmatn({ subsets: ["latin"], variable: "--Vazirmatn" });

export const metadata: Metadata = {
  title: "الحركة",
  description: "الحركة الوطنية للبناء والتنمية",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body  className={`${inter.variable} ${rubik.variable} ${vazirmatn.variable}  overflow-x-hidden`} dir="rtl">
        <div className="w-full " >
          {children}  
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}

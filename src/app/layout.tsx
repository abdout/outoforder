'use client';
// import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/root/header/ui";
import Footer from "@/components/root/footer/ui";
import { ModalProvider } from "@/components/modal/context";
import { ArticleProvider } from "@/components/root/article/context";
import { UploadProvider } from "@/components/upload/context";
import { ThemeProvider } from "@/components/theme/provider";
import { usePathname } from "next/navigation";

const rubik = Rubik({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "الحركة الوطنية",
//   description: "الحركة الوطنية للبناء والتنمية - المجتمع اولا",
// };



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const NoLayout = ['/register','/member', '/error', '/password', '/verification', '/join', '/reset']
  if (NoLayout.includes(pathname)) {
    return (
      <html lang="en">
        <body className={rubik.className} dir="rtl">
        <div className="container">
          <div className="wrapper">
          {children}
          </div>
        </div>
        </body>
      </html>
    )
  }
  return (
    <html lang="en">
      <body className={rubik.className} dir="rtl">
        <div className="container">
          <div className="wrapper">
            <Header />
            <ModalProvider>
              <ArticleProvider>
                <UploadProvider>
                  <ThemeProvider >
                    {children}
                  </ThemeProvider>
                </UploadProvider>
              </ArticleProvider>
            </ModalProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


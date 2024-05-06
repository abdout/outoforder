'use client';
import { useState } from 'react';
import { Inter } from "next/font/google";
import "./../globals.css";
import Sidebar from "../../component/platform/layout/sidebar";
import { usePathname } from "next/navigation";
import Header from '../../component/platform/layout/header';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const NoLayout = ['/', '/error', '/password', '/verification', '/join', '/reset']
  if (NoLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <html lang="en">
      <body className={`${inter.className} flex overflow-x-hidden`} dir='rtl'>
        <div className="flex w-full h-full">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="fixed right-0 top-[47px] h-screen"
          >
            <Sidebar />
          </div>
          <div className='flex  flex-col '>
            
            <Header />


          <div className={`mx-20 my-10 transition-all duration-200 ease-in-out ${hovered ? 'pr-[10rem]' : 'pr-[40px]'} pt-2 flex flex-col `}>
           
            {children}
          </div>
          </div>
        </div>
      </body>
    </html>
  );
}
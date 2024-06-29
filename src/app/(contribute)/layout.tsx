import { Rubik, Inter } from "next/font/google"; // Step 1: Import Inter
import "../globals.css";

export const rubik = Rubik({ subsets: ["latin"], variable: "--rubik" });
const inter = Inter({ subsets: ["latin"] }); // Step 2: Initialize Inter

export default function ContributeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${inter.className}`} dir="ltr"> {/* Step 3: Apply both classNames */}
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zac Douglas",
  description: "Finance Graduate at WiseTech Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <Navbar />
        {children}
        <footer>
          <div className="footer-inner">
            <div className="footer-name">Zac Douglas</div>
            <div className="footer-copy">© {new Date().getFullYear()}</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

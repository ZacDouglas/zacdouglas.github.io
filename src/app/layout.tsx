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
      <body className="font-sans">
        <Navbar />
        {children}
        <footer className="mt-20 border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-[1080px] items-center justify-between px-9 py-7">
            <div className="font-serif text-[0.88rem] text-[var(--text-faint)]">Zac Douglas</div>
            <div className="text-[0.74rem] text-[var(--text-faint)]">© {new Date().getFullYear()}</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

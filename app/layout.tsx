import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css"; // Changed from index.css since we edited globals.css
import TopBar from "@/components/TopBar";

const inter = Inter({
  variable: "--font-geist-sans", // Matching globals.css variable
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono", // Matching globals.css variable
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MichaelBTech Blog",
  description: "Explorations in Tech, Design, and Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.variable} ${robotoMono.variable} flex min-h-full flex-col bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)]`}
      >
        <TopBar />
        <main className="flex-auto">
            {children}
        </main>
        
        {/* Simple Footer */}
        <footer className="mt-auto border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] py-12">
            <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
                <p className="text-center text-xs leading-5 text-[var(--md-sys-color-on-surface-variant)]">
                    &copy; 2026 MichaelBTech. All rights reserved.
                </p>
            </div>
        </footer>
      </body>
    </html>
  );
}

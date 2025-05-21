import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './styles/globals.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundBlobs from "./components/BackgroundBlobs";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kabir Sethi | Portfolio",
  description: "Personal portfolio website for Kabir Sethi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e0e7ff] dark:from-[#0f172a] dark:to-[#312e81] transition-colors duration-700">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundBlobs />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

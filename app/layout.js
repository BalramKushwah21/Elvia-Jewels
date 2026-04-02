import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "Elvia Jewels",
  description:
    "This is a jewelry store website built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--font-geist-sans": geistSans.variable, "--font-geist-mono": geistMono.variable }}>
      <body>
        <Navbar />
        <div className="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

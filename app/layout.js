import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/navbar";
import Footer from "@/componets/footer";

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
    "This is a jewelry store website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>

      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="min-h-[83vh] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}<div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

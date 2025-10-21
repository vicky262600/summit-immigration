import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppSticky from "../components/WhatsAppSticky";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Summit Immigration Consulting Group",
  description: "",
  openGraph: {
    title: "Summit Immigration Consulting Group",
    description: "",
    images: [
      {
        url: "/summitLogo.png", // must be in your public folder
        width: 1200,
        height: 630,
        alt: "Summit Immigration Consulting Group",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppSticky />
      </body>
    </html>
  );
}

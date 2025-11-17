import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/Geist/webfonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    }, {
      path: "../public/fonts/Geist/webfonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-geist-sans",
  // subsets: ["latin"],
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono/webfonts/GeistMono-Regular.woff2",
  variable: "--font-geist-mono",
  // subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SafeNest",
  description: "Welcome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "../components/Provider";
import TopNav from "../components/navbar/TopNav";

//app's font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//app's Metadata
export const metadata: Metadata = {
  // icons: {
  //   icon: "../assets/images/svg/logo-white.svg",
  // },
  title: "NextMatch",
  description: "Generated by create next app",
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
        <Provider>
          <TopNav />
          <main className="container mx-auto">{children}</main>
        </Provider>
      </body>
    </html>
  );
}

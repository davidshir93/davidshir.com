import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "David Shir - Front End Developer",
  description:
    "I’m an experienced Front End Developer with 4+ years of experience in web development and a background in Interaction Design and Web Animation. Strive to incorporate my skills into the development of innovative, visually appealing, pixel-perfect, and animated web apps, components, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <h1>Welcome to me new website</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about/juttom">Juttom</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react"; // Client-side hook
import NavBar from "@/components/NavBar";
import { getCookie } from "typescript-cookie";
import "./global.css";
import StyleLayout from "./StyleLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "L3OSME Website",
  description: "By F.N.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyleLayout>
          {children}
          <NavBar />
        </StyleLayout>
      </body>
    </html>
  );
}

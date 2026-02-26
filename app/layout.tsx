import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Portfolio | Nam Yoonseo",
  description:
    "프론트엔드 개발자 남윤서 포트폴리오 – 사용자 경험 중심의 웹 인터페이스와 안정적인 프런트엔드 아키텍처를 설계합니다.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Frontend Portfolio | Nam Yoonseo",
    description:
      "프론트엔드 개발자 남윤서 포트폴리오 – 사용자 경험 중심의 웹 인터페이스와 안정적인 프런트엔드 아키텍처를 설계합니다.",
    url: "https://example.com",
    siteName: "Nam Yoonseo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

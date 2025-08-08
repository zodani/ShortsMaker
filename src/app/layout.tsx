// src/app/layout.tsx

import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "썰메이커 - 나만의 유튜브 숏츠 제작기",
  description:
    "몇 번의 클릭만으로 썰, 이슈, 정보성 콘텐츠를 위한 유튜브 숏츠 영상을 만들어보세요.",
  openGraph: {
    title: "썰메이커 - 나만의 유튜브 숏츠 제작기",
    description: "AI로 더 쉽고 빠르게, 나만의 유튜브 숏츠를 만들어보세요.",
    // 나중에 웹사이트 대표 이미지를 이곳에 추가하세요.
    // images: ['/og-image.png'],
    siteName: "썰메이커",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={clsx(
          GeistSans.variable,
          GeistMono.variable,
          notoSansKr.variable,
          "font-sans",
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
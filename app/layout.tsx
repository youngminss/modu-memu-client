import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

const pretendard = localFont({
  display: "swap",
  variable: "--font-pretendard",
  src: [
    {
      path: "./fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "thin",
    },
    {
      path: "./fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
})

export const metadata: Metadata = {
  title: "모두의 회식",
  description: "1분 만에 마음에 드는 회식 장소 찾으러가기",
  icons: ["./favicon.ico"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  )
}

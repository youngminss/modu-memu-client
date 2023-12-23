import { KAKAO_SDK_URL } from "@/src/utils/constants/sdk"
import Script from "next/script"

export default function SearchPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body>{children}</body>
      <Script src={KAKAO_SDK_URL} type="text/javascript" async strategy="beforeInteractive" />
    </>
  )
}

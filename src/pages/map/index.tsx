"use client"

import KakaoMap from "@/src/components/KakaoMap"
import Header from "@/src/components/common/Header"

const MapPage = () => {
  return (
    <div className="flex h-[100svh]">
      <div className="w-[45rem]">
        <Header />
      </div>

      <div className="relative flex-1">
        <KakaoMap />
      </div>
    </div>
  )
}

export default MapPage

"use client"

import Header from "@/src/components/common/Header"
import IconTileList from "@/src/components/home/IconTileList"
import { useGeolocationPosition } from "@/src/store/map/useGeolocationPosition"
import Link from "next/link"

const HomePage = () => {
  const init = useGeolocationPosition((state) => state.actions.init)

  return (
    <div className="h-[100dvh] w-[100dvw]">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-[1.6rem] px-[3.2rem] pb-[3.6rem] pt-[14.5rem]">
          <h2 className="whitespace-pre-wrap text-center text-[7.2rem] font-bold text-gray-800 max-md:text-heading-2 max-[475px]:text-[2.8rem] max-[475px]:text-heading-3">
            1분만에 맘에 드는{`\n`}회식장소 찾으러가기
          </h2>

          <p className="text-center text-[2rem] font-medium text-gray-600 max-md:text-heading-3 max-[475px]:text-[1.4rem] max-[475px]:text-detail max-[475px]:font-medium">
            위치 정보 이용 권한을 허용하고 회식 장소 바로 봐요!
          </p>
        </div>

        <Link
          href="/map"
          replace
          className="!w-fit rounded-[0.4rem] bg-gray-700 px-[3.8rem] py-[1.6rem] text-[1.6rem] font-bold text-white"
          onClick={() => {
            init()
          }}
        >
          회식 장소 찾기
        </Link>
      </div>

      <div className="relative flex justify-center">
        <IconTileList />
      </div>
    </div>
  )
}

export default HomePage

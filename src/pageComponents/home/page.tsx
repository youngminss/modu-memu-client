"use client"

import Header from "@/src/components/common/Header"
import IconTileList from "@/src/components/home/IconTileList"

const HomePage = () => {
  return (
    <div className="h-[100dvh] w-[100dvw]">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-[1.6rem] pb-[3.6rem] pt-[14.5rem]">
          <h2 className="whitespace-pre-wrap text-center text-[7.2rem] font-bold text-gray-800">
            1분만에 맘에 드는{`\n`}회식장소 찾으러가기
          </h2>

          <p className="text-[2rem] font-medium text-gray-600">
            위치 정보 이용 권한을 허용하시면 내 주변의 다양한 회식 장소를 볼 수 있어요!
          </p>
        </div>

        <button
          className="!w-fit rounded-[0.4rem] bg-gray-700 px-[3.8rem] py-[1.6rem] text-[1.6rem] font-bold text-white"
          onClick={() => {}}
        >
          회식 장소 찾기
        </button>
      </div>

      <div className="relative flex justify-center">
        <IconTileList />
      </div>
    </div>
  )
}

export default HomePage

"use client"

import InputPostCode from "@/src/components/InputPostCode"
import { IconCurrentLocation } from "@tabler/icons-react"
import { useState } from "react"

const HomePage = () => {
  const [address, setAddress] = useState<string | undefined>()

  const isSubmitAble = !!address

  const handlePostCodeInputCompleted = (address: string) => {
    setAddress(address)
  }

  const onSubmit = () => {
    if (isSubmitAble) console.log(address)
  }

  return (
    <div>
      <div className="flex flex-col bg-primary-500 px-[2rem]">
        <div className="pb-[3.85rem] pt-[4.4rem]">
          <p className="pb-[3rem] text-heading-2 text-white">
            아래 문항에 답변하면 모두가 원하는
            <br />
            강남구 내의 회식 장소를
            <br />
            1분만에 찾아드려요!
          </p>
          <div className="flex flex-col rounded bg-white px-[2rem] py-[2.4rem]">
            <div className="flex items-center pb-[0.4rem]">
              <IconCurrentLocation className="text-gray-700" size="1.8rem" />
              <span className="ml-[0.6rem] text-heading-4">원하는 지역을 검색해 주세요.</span>
            </div>
            <span className="flex-1 pb-[1.6rem] text-body-5 text-gray-500">
              선택한 위치에서 1km 이내의 가장 적합한 음식점 장소를 추천해줘요
            </span>

            <InputPostCode address={address} onPostCodeInputCompleted={handlePostCodeInputCompleted} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[48rem] bg-white px-[2rem] py-[3.2rem]">
        <div
          className={`rounded-[0.4rem] py-[2rem] ${
            address ? "cursor-pointer bg-primary-500 " : "cursor-not-allowed bg-gray-300"
          }`}
          onClick={onSubmit}
        >
          <p className="text-center text-body-1 text-white">회식 장소 찾기</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage

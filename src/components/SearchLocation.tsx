import { IconCurrentLocation } from "@tabler/icons-react"
import { memo } from "react"
import InputPostCode from "./InputPostCode"

const SearchLocation = () => {
  return (
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

          <InputPostCode />
        </div>
      </div>
    </div>
  )
}

export default memo(SearchLocation)

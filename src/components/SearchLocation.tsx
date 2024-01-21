import Image from "next/image"

const SearchLocation = () => {
  return (
    <div className="h-[38.4rem] w-[48rem] bg-primary-500 px-[2rem]">
      <div className="w-[39.8rem] pt-[4.4rem]">
        <span className="text-heading-2 text-white">
          아래 문항에 답변하면 모두가 원하는 강남구 내의 회식 장소를 <br /> 1분만에 찾아드려요!
        </span>
        <div className="mt-[3rem] grid w-[44rem] place-items-start rounded bg-white px-[2rem] py-[2.4rem]">
          <div className="flex">
            <Image src="/images/search-location.svg" alt="search-location" height={18} width={18} />
            <span className="ml-[0.6rem] text-heading-4">원하는 지역을 검색해 주세요.</span>
          </div>
          <span className="text-body-5 text-gray-500">
            선택한 위치에서 1km 이내의 가장 적합한 음식점 장소를 추천해줘요
          </span>
          <div className="mt-[1.6rem] w-[40rem] rounded border-[1px] border-gray-200">
            <div className="flex items-center bg-gray-50">
              <div className="my-[1.2rem] ml-[1.2rem] mr-[0.4rem]">
                <Image src="/images/search.svg" alt="search" height={18} width={18} />
              </div>
              <div className="text-body-3 text-gray-400">
                <input className="h-full w-full bg-transparent outline-none" placeholder="클릭하여 주소 검색하기" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchLocation

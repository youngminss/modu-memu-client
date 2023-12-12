import PickListButton from "../atoms/PickListButton"
import Image from "next/image"

const ListItem = () => {
  return (
    <div className="mb-[1px] h-[152px] w-[100%]">
      <div className="m-[2rem] flex">
        <div className="h-[112px] w-[112px] bg-black">이미지 자리</div>
        <div className="ml-[2rem]">
          <div className="h-[2rem] text-body-2">음식점 이름</div>
          <div className="mt-[4px] flex h-[2rem] text-body-5">
            <Image src={`/icons/location.svg`} alt="location" width={13} height={21} />
            <span className="ml-[6px]">주소</span>
          </div>
          <div className="mb-[1rem] mt-[2px] flex h-[2rem] text-body-5">
            <Image src={`/icons/walktime.svg`} alt="walktime" width={13} height={21} />
            <span className="ml-[6px]">도보</span>
          </div>
          <div>
            <PickListButton />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListItem

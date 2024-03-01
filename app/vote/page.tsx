"use client"
import PlaceItem from "@/src/components/place/PlaceItem"
import { VoteMookUpData } from "@/src/mocks/PlaceData"
import Image from "next/image"

const Vote = () => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("https://www.naver.com")
      alert("링크가 복사되었습니다.")
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }
  return (
    <>
      <div>
        <div className="top-[12.6rem] flex h-[6.8rem] justify-between bg-white">
          <div className="flex h-[6.8rem] px-[2rem] py-[2.2rem]">
            <Image alt="vote-icon" src="/icons/vote_icon.svg" width={24} height={24} />
            <p className="ml-[0.8rem] self-center text-body-3">회식장소 투표</p>
          </div>
          <div className="w-[12rem] px-[2rem] py-[1.7rem] text-detail text-white">
            <button
              className="flex w-full justify-around rounded bg-gray-500 px-[1rem] py-[0.7rem]"
              onClick={handleCopyToClipboard}
            >
              <span className="text-detail">초대하기</span>
              <Image alt="vote-invite" src="/icons/vote_invite.svg" width={16} height={16} className="mt-[0.3rem]" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[0.5rem] w-full bg-gray-200" />
      {VoteMookUpData.map((placeData, index) => (
        <PlaceItem key={index} place={placeData.place} mood={placeData.mood} />
      ))}
      {/* <div className="sticky bottom-0 grid h-[11.6rem] place-content-center overflow-x-hidden bg-white">
        <div className="flex justify-between">
          <button className="mr-[1rem] h-[5.2rem] w-[15rem] rounded bg-gray-300 text-body-1 text-white">
            투표하기
          </button>
          <button className="h-[5.2rem] w-[15rem] rounded bg-gray-500 text-body-1 text-white">투표종료</button>
        </div>
      </div> */}
      <div className="sticky bottom-0 flex w-full place-content-center bg-white">
        <button className="h-[5.2rem] w-6/12 bg-gray-300 text-body-1 text-white">투표하기</button>
        <button className="h-[5.2rem] w-6/12 bg-gray-500 text-body-1 text-white">투표종료</button>
      </div>
    </>
  )
}

export default Vote

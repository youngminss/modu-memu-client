"use client"

import Toggle from "@/src/components/Toggle"
import useReviewActions from "@/src/hooks/review/useReviewActions"
import Image from "next/image"
import { memo } from "react"

const placeMetaData = {
  name: "타코벨",
  address: "서울 종로구 삼일대로",
  food: "멕시칸, 브라질",
  img: "/images/place-thumbnail.svg",
}

const roomValueList = ["네", "아니오", "모르겠어요"]

const ReviewPage = () => {
  const { name, food, address, img } = placeMetaData

  const {
    starList,
    selectedStarIndex,
    vibeFilterList,
    selectedFilterMetaMap,
    selectedPeopleCount,
    selectedRoomValue,
    textReviewRef,
    handleStarClicked,
    onSelectedFilterChanged,
    handleSelectedRoomValueChanged,
    handleSelectedPeopleCountRangeInputChanged,
    handleCancelReview,
    handleSubmitReview,
    isEnabled,
  } = useReviewActions()

  return (
    <div className="absolute left-0 top-0 z-[9999] flex flex-col justify-center bg-white pt-[6rem] shadow-xl wide:left-1/2 wide:-translate-x-1/2">
      <div className="scroll-hidden flex max-h-[100dvh] w-screen max-w-[48rem] flex-col overflow-y-scroll wide:mx-auto ">
        <div className="flex flex-col py-[2rem] wide:mx-auto">
          <p className="pb-[3.2rem] text-center text-heading-3 text-gray-700 wide:text-heading-2">
            전에 방문한 <span className="text-primary-500">{name}</span> 어땠나요?
          </p>

          <div className="flex flex-col border-t border-solid border-gray-200 p-[2rem] wide:max-w-[36rem] wide:border-l wide:border-r">
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-[0.8rem]">
                <div className="flex gap-x-[0.8rem]">
                  <p className="text-heading-4 text-gray-800">{name}</p>
                  <p className="text-body-5 text-gray-500">{food}</p>
                </div>

                <p className="text-body-5 text-gray-700">{address}</p>
              </div>

              <div className="aspect-square h-[13.2rem] w-[13.2rem]">
                <Image src={img} alt="place-thumbnail" width={132} height={132} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-t border-solid border-gray-200 px-[2rem] py-[1rem] wide:max-w-[36rem] wide:border-l wide:border-r">
            <p className="text-body-2 text-gray-700">평점</p>

            <div className="flex">
              {starList.map((_, index) => {
                return (
                  <div
                    key={`star_${index}`}
                    className="aspect-square h-[3rem] w-[3rem] cursor-pointer"
                    onClick={() => handleStarClicked(index)}
                  >
                    <Image
                      src={
                        selectedStarIndex && index <= selectedStarIndex
                          ? "/icons/star_filled.svg"
                          : "/icons/star_default.svg"
                      }
                      alt="star"
                      width={30}
                      height={30}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="my-[2.4rem] h-[0.6rem] bg-gray-100" />

      <div className="flex flex-col gap-y-[1.6rem] p-[2rem]">
        <p className="text-body-2 text-gray-700">분위기는 어땠나요?</p>

        <div className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.8rem]">
          {vibeFilterList.map((vibe) => {
            const { id, name, value } = vibe
            return (
              <div
                key={`${id}_${name}`}
                onClick={() => {
                  onSelectedFilterChanged({ searchFilterCategory: "vibe", value })
                }}
              >
                <Toggle pressed={selectedFilterMetaMap.vibe[value]}>{name}</Toggle>
              </div>
            )
          })}
        </div>
      </div>
      <div className="my-[2.4rem] h-[0.6rem] bg-gray-100" />

      <div className="flex flex-col gap-y-[2rem] p-[2rem]">
        <div className="flex gap-x-[0.8rem]">
          <p className="text-body-2 text-gray-700">몇 명이 가셨나요?</p>
          {selectedPeopleCount && <p className="text-body-2 text-primary-600">{selectedPeopleCount}명</p>}
        </div>

        <input
          type="range"
          min={0}
          max={20}
          defaultValue={0}
          value={selectedPeopleCount}
          step={1}
          onChange={handleSelectedPeopleCountRangeInputChanged}
        />
      </div>

      <div className="my-[2.4rem] h-[0.6rem] bg-gray-100" />

      <div className="flex flex-col gap-y-[2rem] p-[2rem]">
        <p className="text-body-2 text-gray-700">룸이 있었나요?</p>

        <div className="flex gap-x-[1.2rem]">
          {roomValueList.map((roomValue) => {
            return (
              <div
                key={roomValue}
                className={`flex flex-1 cursor-pointer items-center justify-center whitespace-nowrap rounded-[10rem] border border-solid px-[2rem] py-[1rem] text-body-3 ${
                  selectedRoomValue == roomValue
                    ? "border-primary-300 bg-primary-50 text-primary-500"
                    : "border-gray-300 bg-white text-gray-500"
                } `}
                onClick={() => handleSelectedRoomValueChanged(roomValue)}
              >
                {roomValue}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-[2rem] p-[2rem]">
        <textarea
          className="h-[24rem] resize-none border border-solid border-gray-200 bg-gray-50 p-[2rem] text-body-2"
          ref={textReviewRef}
          placeholder="후기를 작성해보세요!"
        />
      </div>

      <div className="mb-[6rem] flex flex-col px-[2rem]">
        <div
          className={`flex-1 cursor-pointer rounded-[0.4rem] py-[2rem] text-center text-body-1 font-bold ${
            isEnabled()
              ? "bg-primary-500 text-white hover:opacity-90"
              : "bg-gray-200 text-gray-500 hover:cursor-not-allowed"
          }`}
          onClick={isEnabled() ? handleSubmitReview : undefined}
        >
          멋진 리뷰를 모두 작성했어요
        </div>
        <div
          className="flex-1 cursor-pointer rounded-[0.4rem] py-[2rem] text-center text-body-3 text-gray-400 hover:opacity-80"
          onClick={handleCancelReview}
        >
          리뷰 작성은 다음에 할게요
        </div>
      </div>
    </div>
  )
}

export default memo(ReviewPage)

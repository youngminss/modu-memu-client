"use client"

import FilterDiv from "@/src/components/FilterDiv"
import Image from "next/image"
import SearchPageTab, { ITabStore } from "@/src/components/SearchPageTab"
import PlaceItem, { IMood, IPlace, IPlaceItem } from "@/src/components/place/PlaceItem"
import { PlaceMookUpData } from "@/src/mocks/PlaceData"
import { useTabStore } from "@/src/store/useTabStore"
import { useEffect, useState } from "react"
import Modal from "@/src/components/DoubleModal"

const SearchPage = () => {
  const { isVoteClicked } = useTabStore() as ITabStore
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [clickedItems, setClickedItems] = useState<IPlaceItem[]>([])
  const [storedClickedItems, setStoredClickedItems] = useState<unknown>()

  useEffect(() => {
    setStoredClickedItems(localStorage.getItem("clickedItems"))
  }, [clickedItems])

  useEffect(() => {
    if (storedClickedItems) {
      setClickedItems(JSON.parse(storedClickedItems as string))
    }
  }, [storedClickedItems])

  const handleRemoveItem = () => {
    setClickedItems(JSON.parse(storedClickedItems as string))
  }

  const handleItemClick = (place: IPlace, mode: IMood) => {
    if (clickedItems.length >= 3) {
      setIsModalOpen(true)
    } else {
      setClickedItems((prevClickedItems) => [
        ...prevClickedItems,
        {
          key: String(prevClickedItems.length),
          place: place,
          mood: mode,
          onClick: () => handleItemClick(place, mode),
          onRemove: handleRemoveItem,
        },
      ])

      setClickedItems((prevClickedItems) => {
        localStorage.setItem("clickedItems", JSON.stringify(prevClickedItems))
        return prevClickedItems
      })
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const modalStyle = {
    modalStyle: "w-[48rem] h-[24.6rem]",
    buttonStyle: "w-[16.3rem] h-[5.2rem] bg-primary-500",
    modalText: "최대 3곳까지 선택할 수 있어요. 이대로 투표를 진행할까요?",
    buttonText: "진행할게요",
  }

  return (
    <div id="layout">
      {isModalOpen && (
        <Modal onClose={closeModal} isSingleButton={false} doubleButtonProps={modalStyle} buttonClick={closeModal} />
      )}
      <SearchPageTab />
      <FilterDiv />
      {isVoteClicked ? (
        clickedItems.length === 0 ? (
          <div className="grid h-[22rem] place-content-center">
            <div className="grid w-[18.4rem] place-items-center">
              <Image alt="vote-empty" src="/icons/vote_empty.svg" width={77} height={44} />
              <span className="mt-[2rem] text-center text-body-5 text-gray-500">
                장소에서 모두를 위한 회식 장소를 투표함에 추가해보세요!
              </span>
            </div>
          </div>
        ) : (
          clickedItems.map((placeData) => (
            <PlaceItem
              key={placeData.place.name}
              place={placeData.place}
              mood={placeData.mood}
              onClick={() => handleItemClick(placeData.place, placeData.mood)}
              onRemove={handleRemoveItem}
            />
          ))
        )
      ) : (
        <>
          {PlaceMookUpData.map((placeData, index) => (
            <PlaceItem
              key={index}
              place={placeData.place}
              mood={placeData.mood}
              onClick={() => handleItemClick(placeData.place, placeData.mood)}
              onRemove={handleRemoveItem}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default SearchPage

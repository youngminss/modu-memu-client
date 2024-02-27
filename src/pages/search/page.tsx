"use client"

import Modal from "@/src/components/DoubleModal"
import SearchFilterSelectionSection from "@/src/components/SearchFilterSelectionSection"
import SearchPageTab, { ITabStore } from "@/src/components/SearchPageTab"
import SearchSelectedFilterSection from "@/src/components/SearchSelectedFilterSection"
import PlaceItem, { IMood, IPlace, IPlaceItem } from "@/src/components/place/PlaceItem"
import { PlaceMookUpData } from "@/src/mocks/PlaceData"
import { TSearchBoundedSlice, createSearchStore } from "@/src/store/search/SearchCreateStore"
import useSearchBoundStore from "@/src/store/search/useSearchBoundStore"
import { useTabStore } from "@/src/store/useTabStore"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { createContext, memo, useEffect, useRef, useState } from "react"
import { StoreApi } from "zustand"

export const SearchStoreContext = createContext<StoreApi<TSearchBoundedSlice> | null>(null)

const SearchPageProvider = () => {
  const searchStoreRef = useRef<StoreApi<TSearchBoundedSlice>>(createSearchStore())

  return (
    <SearchStoreContext.Provider value={searchStoreRef.current}>
      <SearchPage />
    </SearchStoreContext.Provider>
  )
}

export default memo(SearchPageProvider)

const SearchPage = () => {
  const searchParams = useSearchParams()
  const latitudeString = searchParams?.get("latitude") ?? ""
  const longitudeString = searchParams?.get("longitude") ?? ""
  const addressString = searchParams?.get("address") ?? ""
  const foodString = searchParams?.get("food") ?? ""
  const vibeString = searchParams?.get("vibe") ?? ""

  const { isVoteClicked } = useTabStore() as ITabStore
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [clickedItems, setClickedItems] = useState<IPlaceItem[]>([])
  const [storedClickedItems, setStoredClickedItems] = useState<unknown>()

  console.log(foodString)
  console.log(vibeString)

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

  const isFilterSettingsOpen = useSearchBoundStore((state) => state.isFilterSettingsOpen)
  const { init } = useSearchBoundStore((state) => state.searchActions)

  useEffect(() => {
    init({
      foodList: foodString ? foodString.split(",") : [],
      vibeList: vibeString ? vibeString.split(",") : [],
      location: {
        latitude: parseFloat(latitudeString),
        longitude: parseFloat(longitudeString),
        address: addressString,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="layout">
      {isModalOpen && (
        <Modal onClose={closeModal} isSingleButton={false} doubleButtonProps={modalStyle} buttonClick={closeModal} />
      )}
      <SearchPageTab />

      <SearchSelectedFilterSection />

      {isFilterSettingsOpen && <SearchFilterSelectionSection />}

      {!isFilterSettingsOpen &&
        (isVoteClicked ? (
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
        ))}
    </div>
  )
}

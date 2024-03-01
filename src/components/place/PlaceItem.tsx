import PlaceMood from "./PlaceMood"
import Image from "next/image"
import PlaceUrl from "./PlaceUrl"
import { useEffect, useMemo, useState } from "react"
import { useTabStore } from "@/src/store/useTabStore"
import { ITabStore } from "../SearchPageTab"
import { useLocation } from "react-router-dom"

interface ILocation {
  name: string
  distance: number
}

export interface IPlace {
  name: string
  info: string
  location: ILocation
  url: string
  thumbnail: unknown
}

export interface IMood {
  label: string
  textColor: string
  backgroundColor: string
}

export interface IButton {
  backgroundColor: string
  isDisabled: boolean
}

export interface IPlaceItem {
  key: string | number
  place: IPlace
  mood: IMood
  onClick?: () => void
  onRemove?: () => void
}

const PlaceItem = ({ key, place, mood, onClick, onRemove }: IPlaceItem) => {
  const { isVoteClicked } = useTabStore() as ITabStore
  const [isClicked, setIsClicked] = useState<boolean>()
  const buttonText = isVoteClicked ? "투표함에서 제거" : "투표함으로 이동"
  const location = useLocation()
  console.log(location.pathname)

  const conditionalStyle = useMemo(
    () => (isClicked ? "bg-white text-gray-500 border-gray-500 border" : "bg-primary-500 text-white"),
    [isClicked]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const clickedItems = localStorage.getItem("clickedItems")
    if (clickedItems) {
      const result = JSON.parse(clickedItems).some((item: IPlaceItem) => item.place.name === place.name)
      setIsClicked(result)
    }
  })

  const removeLocalStorage = (place: IPlace) => {
    const items = localStorage.getItem("clickedItems")

    if (items) {
      const currentClickedItems = JSON.parse(items)
      const indexToRemove = currentClickedItems.findIndex((item: IPlaceItem) => item.place.name === place.name)

      if (currentClickedItems.length === 1) {
        localStorage.removeItem("clickedItems")
      }

      if (indexToRemove !== -1) {
        currentClickedItems.splice(indexToRemove, 1)
        localStorage.setItem("clickedItems", JSON.stringify(currentClickedItems))
      }

      onRemove && onRemove()
    }
  }

  return (
    <div key={key}>
      <div className="h-[0.1rem] bg-gray-100" />
      <div className="flex min-h-[20rem] justify-between px-[2rem] py-[2.8rem]">
        <div className="mr-[1rem] max-w-[30rem] break-keep">
          <p className="mb-[0.8rem]">
            <span className="text-heading-4">{place.name}</span>
            <span className="ml-[0.6rem] text-body-5 text-gray-500">{place.info}</span>
          </p>
          <PlaceMood label={mood.label} textColor={mood.textColor} backgroundColor={mood.backgroundColor} />
          <p className="mt-[1.2rem] text-body-5">
            {place.location.name} ({place.location.distance}m)
          </p>
          <PlaceUrl url={place.url} />
          {(onClick || onRemove) && (
            <button
              id="vote-button"
              className={`mt-[2rem] h-[3.7rem] w-[11.3rem] rounded ${conditionalStyle}`}
              disabled={isClicked && !isVoteClicked}
              onClick={() => {
                isVoteClicked ? removeLocalStorage(place) : onClick && onClick()
              }}
            >
              <span className="text-body-5">{buttonText}</span>
            </button>
          )}
        </div>
        <div className="min-w-[13.2rem]">
          {/* <Image src="/images/place-thumbnail.svg" alt="place-thumbnail" height={132} width={132} /> */}
          <Image src={place.thumbnail as string} alt="place-thumbnail" height={132} width={132} />
        </div>
      </div>
    </div>
  )
}

export default PlaceItem

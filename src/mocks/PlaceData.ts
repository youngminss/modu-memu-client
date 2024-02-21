import { IMood, IPlace } from "../components/place/PlaceItem"

interface IMockupData {
  key: string | number
  place: IPlace
  mood: IMood
}

export const PlaceMookUpData: IMockupData[] = Array.from({ length: 10 }, (_, index) => ({
  // 추후에 가게 정보를 받아올 때 가게 정보 관련한 값으로 key 값을 수정할 계획
  key: index,
  place: {
    name: `가게 이름${index + 1}`,
    info: `가게 정보${index + 1}`,
    location: { name: `가게 위치${index + 1}`, distance: index + 1 },
    url: `https://www.example.com/${index + 1}`,
    thumbnail: "/images/place-thumbnail.svg",
  },
  mood: { label: `무드타입${index + 1}`, textColor: "text-yellow-100", backgroundColor: "bg-yellow-50" },
}))

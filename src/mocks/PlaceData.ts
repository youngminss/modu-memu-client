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

export const VoteMookUpData: IMockupData[] = [
  {
    // 추후에 가게 정보를 받아올 때 가게 정보 관련한 값으로 key 값을 수정할 계획
    key: "타코벨",
    place: {
      name: `타코벨 역삼점`,
      info: `멕시코, 남미음식`,
      location: { name: `서울 강남구 논현로 85길 11`, distance: 10 },
      url: `https://naver.me/GvkXF935`,
      thumbnail: "/images/taco_bell.jpeg",
    },
    mood: { label: `시끌벅적해요`, textColor: "text-yellow-100", backgroundColor: "bg-yellow-50" },
  },
  {
    // 추후에 가게 정보를 받아올 때 가게 정보 관련한 값으로 key 값을 수정할 계획
    key: "매드포갈릭",
    place: {
      name: `매드포갈릭 강남삼성타운점`,
      info: `이탈리아 음식`,
      location: { name: `서울 서초구 서초대로74길 11 삼성전자 강남사옥 지하1층 B108호`, distance: 10 },
      url: `https://naver.me/xVl3JTCr`,
      thumbnail: "/images/mad_for_garlic.jpeg",
    },
    mood: { label: `뷰맛집이에요`, textColor: "text-orange-100", backgroundColor: "bg-orange-50" },
  },
  {
    // 추후에 가게 정보를 받아올 때 가게 정보 관련한 값으로 key 값을 수정할 계획
    key: "창고43",
    place: {
      name: `창고43 강남점`,
      info: `소고기구이`,
      location: { name: `서울 강남구 강남대로 362 대륭강남타워 지하1층`, distance: 10 },
      url: `https://naver.me/FcagTjpl`,
      thumbnail: "/images/chang_go43.jpeg",
    },
    mood: { label: `시끌벅적해요`, textColor: "text-teal-100", backgroundColor: "bg-teal-50" },
  },
]

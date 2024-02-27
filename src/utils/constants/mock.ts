import { TSearchFilter, TSearchFilterCategory } from "@/src/hooks/useSearchFilter"

export const DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP: {
  [searchFilterCategory in TSearchFilterCategory]: TSearchFilter[]
} = {
  food: [
    {
      id: 1,
      type: "한식",
      name: "육류,고기요리",
      value: "meat",
    },
    {
      id: 2,
      type: "한식",
      name: "해물,생선요리",
      value: "seafood",
    },
    {
      id: 3,
      type: "양식",
      name: "양식",
      value: "westernFood",
    },
    {
      id: 4,
      type: "양식",
      name: "멕시칸,브라질",
      value: "latin",
    },
    {
      id: 5,
      type: "술집",
      name: "실내 포장마차",
      value: "indoorBar",
    },
    {
      id: 6,
      type: "술집",
      name: "오뎅바",
      value: "fishCakeBar",
    },
    {
      id: 7,
      type: "술집",
      name: "와인바",
      value: "wineBar",
    },
    {
      id: 9,
      type: "술집",
      name: "일본식주점",
      value: "izakaya",
    },
    {
      id: 10,
      type: "술집",
      name: "칵테일바",
      value: "cocktailBar",
    },
    {
      id: 11,
      type: "술집",
      name: "호프,요리주점",
      value: "hof",
    },
    {
      id: 12,
      type: "퓨전요리",
      name: "퓨전요리",
      value: "fusion",
    },
    {
      id: 13,
      type: "치킨",
      name: "치킨",
      value: "chicken",
    },
  ],
  vibe: [
    {
      id: 1,
      name: "시끌벅적",
      value: "noisy",
    },
    {
      id: 2,
      name: "모던한",
      value: "modern",
    },
    {
      id: 3,
      name: "뷰맛집",
      value: "niceView",
    },
    {
      id: 4,
      name: "조용한",
      value: "quiet",
    },
    {
      id: 5,
      name: "트렌디한",
      value: "trendy",
    },
    {
      id: 6,
      name: "좋은 서비스",
      value: "goodService",
    },
  ],
}

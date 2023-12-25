import { TSearchFilterTypeListMap } from "./store/SearchFilterSlice"

export const DUMMY_SEARCH_FILTER_TYPE_LIST_MAP: TSearchFilterTypeListMap = {
  food: {
    filterName: "음식 종류",
    filterList: [
      {
        id: 1,
        name: "소고기",
      },
      {
        id: 2,
        name: "치킨",
      },
      {
        id: 3,
        name: "삼겹살",
      },
      {
        id: 4,
        name: "회/해물",
      },
      {
        id: 5,
        name: "샤브샤브",
      },
      {
        id: 6,
        name: "마라탕",
      },
      {
        id: 7,
        name: "양꼬치",
      },
      {
        id: 8,
        name: "베트남음식",
      },
    ],
  },
  mood: {
    filterName: "분위기",
    filterList: [
      {
        id: 1,
        name: "모던한",
      },
      {
        id: 2,
        name: "조용한",
      },
      {
        id: 3,
        name: "화려한",
      },
    ],
  },
}

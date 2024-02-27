import { TLocation } from "@/src/pages/home/page"
import { DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP } from "@/src/utils/constants/mock"
import { StateCreator } from "zustand"

export type TSearchFilterType = "food" | "vibe"

export type TSearchFilterTypeSelectedMap = { [key in TSearchFilterType]: { [key: string]: boolean } }

type TSearchState = {
  location?: TLocation
  isFilterSettingsOpen: boolean
  filterValueNameMap: { [key: string]: string }
  filterTypeSelectedMap: { [key in TSearchFilterType]: { [key: string]: boolean } }
}

type TSearchAction = {
  searchActions: {
    setIsFilterSettingsOpen: () => void
    setFilterTypeSelectMap: ({ type, selectedValue }: { type: TSearchFilterType; selectedValue: string }) => void
    init: ({ foodList, vibeList, location }: { foodList: string[]; vibeList: string[]; location: TLocation }) => void
    clear: () => void
  }
}

type TSearchSlice = TSearchState & TSearchAction

const initState: TSearchState = {
  isFilterSettingsOpen: false,
  filterValueNameMap: {},
  filterTypeSelectedMap: {
    food: {},
    vibe: {},
  },
}

const createSearchSlice: StateCreator<TSearchSlice, [], [], TSearchSlice> = (set, get) => ({
  ...initState,
  searchActions: {
    setIsFilterSettingsOpen: () => {
      set((state) => {
        state.isFilterSettingsOpen = !state.isFilterSettingsOpen
        return state
      })
    },
    setFilterTypeSelectMap: ({ type, selectedValue }) => {
      const filterTypeSelectedMap = get().filterTypeSelectedMap

      set((state) => {
        state.filterTypeSelectedMap[type][selectedValue] = !filterTypeSelectedMap[type][selectedValue]
        return state
      })
    },
    init: ({ foodList, vibeList, location }) => {
      const filterValueNameMap: { [key: string]: string } = {}
      const filterTypeSelectedMap: { [key in TSearchFilterType]: { [key: string]: boolean } } = {
        food: {},
        vibe: {},
      }
      const { food: foodFilterList, vibe: vibeFilterList } = DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP

      foodFilterList.forEach((foodFilter) => {
        filterValueNameMap[foodFilter.value] = foodFilter.name
      })

      vibeFilterList.forEach((vibeFilter) => {
        filterValueNameMap[vibeFilter.value] = vibeFilter.name
      })

      foodList.forEach((food) => {
        filterTypeSelectedMap["food"][food] = true
      })

      vibeList.forEach((vibe) => {
        filterTypeSelectedMap["vibe"][vibe] = true
      })

      set((state) => {
        ;(state.location = location),
          (state.filterValueNameMap = filterValueNameMap),
          (state.filterTypeSelectedMap = filterTypeSelectedMap)
        return state
      })
    },
    clear: () => {
      set((state) => {
        ;(state.filterValueNameMap = initState.filterValueNameMap),
          (state.filterTypeSelectedMap = initState.filterTypeSelectedMap)
        return state
      })
    },
  },
})

export { createSearchSlice }
export type { TSearchSlice }

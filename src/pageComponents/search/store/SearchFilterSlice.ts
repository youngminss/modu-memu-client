import { StateCreator } from "zustand"

export type TSearchFilterType = "food" | "mood"

export interface ISearchFilter {
  id: number
  name: string
}

export type TSearchFilterTypeListMap = {
  [key in TSearchFilterType]: {
    filterName: string
    filterList: ISearchFilter[]
  }
}

export type TSearchFilterTypeSelectedMap = { [key in TSearchFilterType]: { [id: number]: boolean } }

type TSearchFilterState = {
  filterTypeSelectedMap: { [type in TSearchFilterType]: { [id: number]: boolean } }
}

type TSearchFilterAction = {
  searchFilterActions: {
    setFilterTypeSelectMap: ({ type, selectedId }: { type: TSearchFilterType; selectedId: number }) => void
    init: (searchFilterTypeListMap: TSearchFilterTypeListMap) => void
  }
}

type TSearchFilterSlice = TSearchFilterState & TSearchFilterAction

const initState: TSearchFilterState = {
  filterTypeSelectedMap: {
    food: {},
    mood: {},
  },
}

const createSearchFilterSlice: StateCreator<TSearchFilterSlice, [], [], TSearchFilterSlice> = (set, get) => ({
  ...initState,
  searchFilterActions: {
    setFilterTypeSelectMap: ({ type, selectedId }) => {
      const filterTypeSelectedMap = get().filterTypeSelectedMap

      set((state) => {
        state.filterTypeSelectedMap[type][selectedId] = !filterTypeSelectedMap[type][selectedId]
        return state
      })
    },
    init: (searchFilterTypeListMap: TSearchFilterTypeListMap) => {
      const filterTypeSelectedMap: TSearchFilterTypeSelectedMap = {
        food: {},
        mood: {},
      }

      Object.keys(searchFilterTypeListMap).forEach((filterKey) => {
        searchFilterTypeListMap[filterKey as TSearchFilterType].filterList.forEach((filter) => {
          filterTypeSelectedMap[filterKey as TSearchFilterType][filter.id] = false
        })
      })

      set((state) => {
        state.filterTypeSelectedMap = filterTypeSelectedMap
        return state
      })
    },
  },
})

export { createSearchFilterSlice }
export type { TSearchFilterSlice }

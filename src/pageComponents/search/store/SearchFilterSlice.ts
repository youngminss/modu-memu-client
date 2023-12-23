import { StateCreator } from "zustand"

type TSearchFilterState = {
  isSearchFilterEditSectionVisible: boolean
  filterKeyAndSelectedListMap: { [key: string]: unknown }
}

type TSearchFilterAction = {
  searchFilterActions: {
    setIsSearchFilterEditSectionVisible: (isSearchFilterEditSectionVisible: boolean) => void
    init: () => void
  }
}

type TSearchFilterSlice = TSearchFilterState & TSearchFilterAction

const initState: TSearchFilterState = {
  isSearchFilterEditSectionVisible: false,
  filterKeyAndSelectedListMap: {},
}

const createSearchFilterSlice: StateCreator<TSearchFilterSlice, [], [], TSearchFilterSlice> = (set, get) => ({
  ...initState,
  searchFilterActions: {
    setIsSearchFilterEditSectionVisible: (isSearchFilterEditSectionVisible) => {
      set({
        isSearchFilterEditSectionVisible: isSearchFilterEditSectionVisible,
      })
    },
    init: () => set(initState),
  },
})

export { createSearchFilterSlice }
export type { TSearchFilterSlice }

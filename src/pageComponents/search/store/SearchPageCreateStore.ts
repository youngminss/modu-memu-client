import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import type { TSearchFilterSlice } from "./SearchFilterSlice"
import { createSearchFilterSlice } from "./SearchFilterSlice"

export type TSearchPageBoundedSlice = TSearchFilterSlice

export const createSearchPageStore = () => {
  return createStore<TSearchPageBoundedSlice>()(
    devtools(
      immer((...a) => ({
        ...createSearchFilterSlice(...a),
      }))
    )
  )
}

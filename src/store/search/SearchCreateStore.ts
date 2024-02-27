import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import type { TSearchSlice } from "./SearchSlice"
import { createSearchSlice } from "./SearchSlice"

export type TSearchBoundedSlice = TSearchSlice

export const createSearchStore = () => {
  return createStore<TSearchBoundedSlice>()(
    devtools(
      immer((...a) => ({
        ...createSearchSlice(...a),
      }))
    )
  )
}

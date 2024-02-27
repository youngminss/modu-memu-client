import { SearchStoreContext } from "@/src/pages/search/page"
import { useContext } from "react"
import { StoreApi, useStore } from "zustand"
import { TSearchBoundedSlice } from "./SearchCreateStore"

function useSearchBoundStore<U>(selector: (state: TSearchBoundedSlice) => U) {
  const store = useContext(SearchStoreContext) as StoreApi<TSearchBoundedSlice>

  return useStore(store, selector)
}

export default useSearchBoundStore

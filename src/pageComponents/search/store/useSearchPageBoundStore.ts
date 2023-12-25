import { SearchPageStoreContext } from "@/app/search/page"
import { useContext } from "react"
import { StoreApi, useStore } from "zustand"
import { TSearchPageBoundedSlice } from "./SearchPageCreateStore"

function useSearchPageBoundStore<U>(selector: (state: TSearchPageBoundedSlice) => U) {
  const store = useContext(SearchPageStoreContext) as StoreApi<TSearchPageBoundedSlice>

  return useStore(store, selector)
}

export default useSearchPageBoundStore

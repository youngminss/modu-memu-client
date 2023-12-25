"use client"

import { TSearchPageBoundedSlice, createSearchPageStore } from "@/src/pageComponents/search/store/SearchPageCreateStore"
import SearchPage from "@/src/pageComponents/search/view/SearchPageView"
import { createContext, useRef } from "react"
import { StoreApi } from "zustand"

export const SearchPageStoreContext = createContext<StoreApi<TSearchPageBoundedSlice> | null>(null)

export default function Search() {
  const searchPageStoreRef = useRef<StoreApi<TSearchPageBoundedSlice>>(createSearchPageStore())

  return (
    <SearchPageStoreContext.Provider value={searchPageStoreRef.current}>
      <SearchPage />
    </SearchPageStoreContext.Provider>
  )
}

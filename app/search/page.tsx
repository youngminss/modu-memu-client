"use client"

import SearchPage from "@/src/pages/search/page"
import { TSearchBoundedSlice, createSearchStore } from "@/src/store/search/SearchCreateStore"
import { createContext, useRef } from "react"
import { StoreApi } from "zustand"

export const SearchStoreContext = createContext<StoreApi<TSearchBoundedSlice> | null>(null)

export default function Search() {
  const searchStoreRef = useRef<StoreApi<TSearchBoundedSlice>>(createSearchStore())

  return (
    <SearchStoreContext.Provider value={searchStoreRef.current}>
      <SearchPage />
    </SearchStoreContext.Provider>
  )
}

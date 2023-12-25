"use client"

import KakaoMap from "@/src/components/KakaoMap"
import Header from "@/src/components/common/Header"
import { Position, useGeolocationPosition } from "@/src/store/map/useGeolocationPosition"
import { STORAGE_KEYS, getSessionStorageItem } from "@/src/utils/functions/storage"
import { useEffect } from "react"
import { DUMMY_SEARCH_FILTER_TYPE_LIST_MAP } from "../search.const"
import useSearchPageBoundStore from "../store/useSearchPageBoundStore"
import SearchFilterListView from "./SearchFilterListView"

const SearchPage = () => {
  const setPosition = useGeolocationPosition((state) => state.actions.setPosition)

  useEffect(() => {
    const userPositionBySession: Position | null = getSessionStorageItem(STORAGE_KEYS.MODU_MEMU_USER_POSITION)

    if (userPositionBySession) {
      setPosition(userPositionBySession)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchFilterTypeListMap = DUMMY_SEARCH_FILTER_TYPE_LIST_MAP
  const init = useSearchPageBoundStore((state) => state.searchFilterActions.init)

  useEffect(() => {
    if (searchFilterTypeListMap) {
      init(searchFilterTypeListMap)
    }
  }, [searchFilterTypeListMap, init])

  return (
    <div className="flex h-[100svh]">
      <div className="relative w-[45rem]">
        <Header />

        <div className="flex flex-col gap-y-[3rem]">
          <div className="flex flex-col gap-y-[1.2rem]">
            <p className="text-2xl font-bold">{searchFilterTypeListMap["food"].filterName}</p>
            <SearchFilterListView filterType="food" filterList={searchFilterTypeListMap["food"].filterList} />
          </div>

          <div className="flex flex-col gap-y-[1.2rem]">
            <p className="text-2xl font-bold">{searchFilterTypeListMap["mood"].filterName}</p>
            <SearchFilterListView filterType="mood" filterList={searchFilterTypeListMap["mood"].filterList} />
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <KakaoMap />
      </div>
    </div>
  )
}

export default SearchPage

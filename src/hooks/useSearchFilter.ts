import { useState } from "react"

export type TSearchFilterCategory = "food" | "vibe"

const searchFoodFilterTypeList = ["한식", "양식", "술집", "퓨전요리", "치킨"] as const
export type TSearchFoodFilterType = (typeof searchFoodFilterTypeList)[number]

export type TSearchFilter = {
  id: number
  type?: TSearchFoodFilterType
  name: string
  value: string
}

const useSearchFilter = ({
  searchFilterListMap,
}: {
  searchFilterListMap: { [searchFilterCategory in TSearchFilterCategory]: TSearchFilter[] }
}) => {
  const {
    vibeFilterList,
    foodFilterListMap,
  }: {
    vibeFilterList: TSearchFilter[]
    foodFilterListMap: { [searchFilterType in TSearchFoodFilterType]: TSearchFilter[] }
  } = refineSearchFilterListMap(searchFilterListMap)

  const [selectedFilterMetaMap, setSelectedFilterMetaMap] = useState<{
    [searchFilterCategory in TSearchFilterCategory]: { [value: string]: boolean }
  }>({
    food: {},
    vibe: {},
  })

  const onSelectedFilterChanged = ({
    searchFilterCategory,
    value,
  }: {
    searchFilterCategory: TSearchFilterCategory
    value: string
  }) => {
    const newSelectedFilterMetaMap = { ...selectedFilterMetaMap }

    if (selectedFilterMetaMap[searchFilterCategory][value]) {
      newSelectedFilterMetaMap[searchFilterCategory][value] = false
      setSelectedFilterMetaMap(newSelectedFilterMetaMap)
    } else {
      newSelectedFilterMetaMap[searchFilterCategory][value] = true
      setSelectedFilterMetaMap(newSelectedFilterMetaMap)
    }
  }

  return {
    selectedFilterMetaMap,
    vibeFilterList,
    foodFilterListMap,
    onSelectedFilterChanged,
  }
}

export default useSearchFilter

const refineSearchFilterListMap = (searchFilterListMap: {
  [searchFilterCategory in TSearchFilterCategory]: TSearchFilter[]
}) => {
  const vibeFilterList = searchFilterListMap.vibe
  const foodFilterListMap: { [searchFilterType in TSearchFoodFilterType]?: TSearchFilter[] } = {}

  searchFilterListMap.food.forEach((filter) => {
    if (filter.type) {
      if (foodFilterListMap[filter.type]) {
        foodFilterListMap[filter.type]!.push(filter)
      } else {
        foodFilterListMap[filter.type] = [filter]
      }
    }
  })

  return {
    vibeFilterList,
    foodFilterListMap: foodFilterListMap as { [searchFilterType in TSearchFoodFilterType]: TSearchFilter[] },
  }
}

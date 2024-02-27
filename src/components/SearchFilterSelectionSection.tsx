import { IconCurrentLocation, IconRefresh, IconX } from "@tabler/icons-react"
import Image from "next/image"
import useSearchFilter, { TSearchFoodFilterType } from "../hooks/useSearchFilter"
import { DEFAULT_ADDRESS } from "../pages/home/page"
import useSearchBoundStore from "../store/search/useSearchBoundStore"
import { DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP } from "../utils/constants/mock"
import Toggle from "./Toggle"

const SearchFilterSelectionSection = () => {
  const location = useSearchBoundStore((state) => state.location)
  const filterTypeSelectedMap = useSearchBoundStore((state) => state.filterTypeSelectedMap)
  const { vibe: selectedVibeValueMap, food: selectedFoodValueMap } = filterTypeSelectedMap
  const { vibeFilterList, foodFilterListMap } = useSearchFilter({
    searchFilterListMap: DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP,
  })

  const { setIsFilterSettingsOpen, setFilterTypeSelectMap, clear } = useSearchBoundStore((state) => state.searchActions)

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-solid border-gray-100 px-[2rem] py-[1.6rem]">
        <div className="flex items-center gap-x-[0.4rem]">
          <IconCurrentLocation size="1.8rem" />
          <p className=" text-body-2 font-medium text-gray-800">{location?.address ?? DEFAULT_ADDRESS}</p>
        </div>

        <IconX className="ml-auto cursor-pointer text-gray-500" size="3.2rem" onClick={setIsFilterSettingsOpen} />
      </div>

      <div className="flex flex-col px-[2rem] py-[1.6rem]">
        <div className="ml-auto">
          <div className="flex cursor-pointer gap-x-[0.6rem]" onClick={clear}>
            <IconRefresh size="1.6rem" color="#FF604A" />
            <p className="text-body-3 text-primary-500">초기화</p>
          </div>
        </div>
        <div className="flex items-center gap-x-[0.6rem] pb-[1.2rem]">
          <Image alt="" src="/icons/mood.svg" width={18} height={18} />
          <p className="text-body-3 text-gray-700">내부 분위기</p>
        </div>

        <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem]">
          {vibeFilterList.map((vibeFilter) => {
            const { name, value } = vibeFilter
            const pressed = selectedVibeValueMap[value] == true

            return (
              <div
                key={`vibe_filter_${value}_${name}`}
                onClick={() => {
                  setFilterTypeSelectMap({ type: "vibe", selectedValue: value })
                }}
              >
                <Toggle pressed={pressed}>{name}</Toggle>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col px-[2rem] py-[1.6rem]">
        <div className="flex items-center gap-x-[0.6rem] pb-[1.2rem]">
          <Image alt="" src="/icons/bell.svg" width={18} height={18} />
          <p className="text-body-3 text-gray-700">음식 종류</p>
        </div>

        {Object.keys(foodFilterListMap).map((foodFilterType) => {
          return (
            <div key={`${foodFilterType}`} className="flex flex-col gap-y-[1.2rem]">
              <p className="text-body-2 font-medium text-gray-800">{foodFilterType}</p>

              <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem] pb-[2.6rem]">
                {foodFilterListMap[foodFilterType as TSearchFoodFilterType].map((foodFilter) => {
                  const { name, value } = foodFilter
                  const pressed = selectedFoodValueMap[value] == true

                  return (
                    <div key={`food_filter_${value}_${name}`}>
                      <div
                        onClick={() => {
                          setFilterTypeSelectMap({ type: "food", selectedValue: value })
                        }}
                      >
                        <Toggle pressed={pressed}>{name}</Toggle>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchFilterSelectionSection

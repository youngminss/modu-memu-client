import { IconAdjustmentsHorizontal } from "@tabler/icons-react"
import useSearchBoundStore from "../store/search/useSearchBoundStore"
import Toggle from "./Toggle"

const SearchSelectedFilterSection = () => {
  const filterValueNameMap = useSearchBoundStore((state) => state.filterValueNameMap)
  const filterTypeSelectedMap = useSearchBoundStore((state) => state.filterTypeSelectedMap)

  const { food: selectedFoodMap, vibe: selectedVibeMap } = filterTypeSelectedMap
  const isFilterSelected = [...Object.values(selectedFoodMap), ...Object.values(selectedVibeMap)].some(
    (isSelected) => isSelected
  )

  const { setFilterTypeSelectMap, setIsFilterSettingsOpen } = useSearchBoundStore((state) => state.searchActions)

  return (
    <div className="sticky top-[12.6rem] flex items-center gap-x-[1rem] divide-x divide-solid border-b-[0.6rem] border-solid border-gray-100 bg-white py-[1.6rem] pl-[1.6rem]">
      <div onClick={setIsFilterSettingsOpen}>
        <Toggle
          className="!rounded-[0.4rem] !px-[0.8rem] !py-[0.8rem]"
          pressed={isFilterSelected}
          showCloseButton={false}
        >
          <IconAdjustmentsHorizontal />
        </Toggle>
      </div>

      <div className="scroll-hidden flex gap-x-[0.6rem] overflow-x-scroll px-[1rem]">
        {Object.keys(selectedVibeMap).map((vibe, index) => {
          if (selectedVibeMap[vibe]) {
            return (
              <div
                key={`${vibe}_${index}`}
                onClick={() => setFilterTypeSelectMap({ type: "vibe", selectedValue: vibe })}
              >
                <Toggle className="whitespace-nowrap" pressed showCloseButton>
                  {filterValueNameMap[vibe]}
                </Toggle>
              </div>
            )
          }
        })}

        {Object.keys(selectedFoodMap).map((food, index) => {
          if (selectedFoodMap[food]) {
            return (
              <div
                key={`${food}_${index}`}
                onClick={() => setFilterTypeSelectMap({ type: "food", selectedValue: food })}
              >
                <Toggle className="whitespace-nowrap" pressed showCloseButton>
                  {filterValueNameMap[food]}
                </Toggle>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default SearchSelectedFilterSection

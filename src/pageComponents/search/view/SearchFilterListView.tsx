import Toggle from "@/src/components/common/Toggle"
import { ISearchFilter, TSearchFilterType } from "../store/SearchFilterSlice"
import useSearchPageBoundStore from "../store/useSearchPageBoundStore"

const SearchFilterListView = ({
  filterType,
  filterList,
}: {
  filterType: TSearchFilterType
  filterList: ISearchFilter[]
}) => {
  const filterTypeSelectedMap = useSearchPageBoundStore((state) => state.filterTypeSelectedMap)

  const setFilterTypeSelectMap = useSearchPageBoundStore((state) => state.searchFilterActions.setFilterTypeSelectMap)

  const handleSearchFilterToggled = (filterId: number) => {
    setFilterTypeSelectMap({ type: filterType, selectedId: filterId })
  }

  return (
    <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[1.2rem]">
      {filterList.map((filter) => {
        const { id, name } = filter

        return (
          <div key={`${name}_${id}`} onClick={() => handleSearchFilterToggled(id)}>
            <Toggle pressed={filterTypeSelectedMap[filterType][id]}>
              <p>{name}</p>
            </Toggle>
          </div>
        )
      })}
    </div>
  )
}

export default SearchFilterListView

import Image from "next/image"
import useHover from "../../action/hooks/useHover"

const FilterButton = () => {
  const { iconStatus, handleMouseOver, handleMouseOut } = useHover()

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Image src={`/icons/${iconStatus}_filter.svg`} alt="filter" width={36} height={36} />
    </div>
  )
}

export default FilterButton

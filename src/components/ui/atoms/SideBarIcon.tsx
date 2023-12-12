import { ISideBarIcons } from "@/src/types/SideBarIcon"
import Image from "next/image"
import useHover from "../../action/hooks/useHover"

const SideBarIcon = ({ value, width, height, text }: ISideBarIcons) => {
  const { iconStatus, handleMouseOver, handleMouseOut } = useHover()

  return (
    <div
      className="grid h-[80px] w-[62px] place-content-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="ml-[2px] h-[22px] w-[22px]">
        <Image src={`/icons/${iconStatus}_${value}.svg`} alt={value} width={width} height={height} />
      </div>
      <div className="h-[22px] w-[21px] text-center">
        <span className="mt-[7px] text-detail">{text}</span>
      </div>
    </div>
  )
}

export default SideBarIcon

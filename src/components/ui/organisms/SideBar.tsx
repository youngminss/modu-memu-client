import SideBarIcon from "../atoms/SideBarIcon"

const SideBar = () => {
  return (
    <div className="max-w-wd-[100%] h-[full] w-[6rem] bg-gray-50">
      <SideBarIcon value="map" width={15} height={15} text="장소" />
      <SideBarIcon value="vote" width={15} height={15} text="투표" />
    </div>
  )
}

export default SideBar

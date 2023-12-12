import FilterSection from "../organisms/FilterSection"
import Header from "../organisms/Header"
import ListItem from "../organisms/ListItem"
import SideBar from "../organisms/SideBar"

const List = () => {
  return (
    <div className="h-[100vh] w-[45rem] overflow-hidden">
      <Header />
      <div className="h-[1px] bg-gray-50" />
      <div className="flex">
        <SideBar />
        <div className="w-[39rem] bg-gray-200">
          <FilterSection />
          <div className="ml-[1px] h-[100vh] w-[100rem] overflow-auto bg-white">
            <ListItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

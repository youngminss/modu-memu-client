import React from "react"
import { useTabStore } from "../store/useTabStore"

export interface ITabStore {
  isVoteClicked: boolean
  setPlaceClicked: () => void | undefined
  setVoteClicked: () => void | undefined
}

interface ITab {
  label: string
  onClick: () => void
  style: string
}

const SearchPageTab = () => {
  // isPlaceTabSelected가 true이면 place 탭이 선택, false면 vote 탭이 선택된 것이다.
  const { isVoteClicked, setPlaceClicked, setVoteClicked } = useTabStore() as ITabStore

  const selected = "border-b-2 border-primary-500 text-primary-500"
  const unSelected = "border-b-2 border-white text-gray-400"

  const tabStyle = {
    common: "w-[24rem] grid place-items-center",
    place: `${isVoteClicked ? unSelected : selected}`,
    vote: `${isVoteClicked ? selected : unSelected}`,
  }

  const TabButton = ({ label, onClick, style }: ITab) => {
    return (
      <button className={`${tabStyle.common} ${style}`} onClick={onClick}>
        <span className="text-body-3">{label}</span>
      </button>
    )
  }

  return (
    <div className="sticky top-[7.8rem] flex h-[4.8rem] w-full bg-white">
      <TabButton label="장소" onClick={setPlaceClicked} style={tabStyle.place} />
      <TabButton label="투표" onClick={setVoteClicked} style={tabStyle.vote} />
    </div>
  )
}

export default SearchPageTab

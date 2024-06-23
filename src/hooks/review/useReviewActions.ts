/* eslint-disable @typescript-eslint/no-unused-vars */
import { DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP } from "@/src/utils/constants/mock"
import { ChangeEvent, useCallback, useRef, useState } from "react"
import useSearchFilter from "../useSearchFilter"

const starList = new Array(5).fill(0)

const useReviewActions = (onCancelReview?: () => void) => {
  const [selectedStarIndex, setSelectedStarIndex] = useState<number | undefined>()
  const { selectedFilterMetaMap, vibeFilterList, onSelectedFilterChanged } = useSearchFilter({
    searchFilterListMap: DUMMY_SEARCH_FILTER_CATEGORY_LIST_MAP,
  })
  const [selectedPeopleCount, setSelectedPeopleCount] = useState<number | undefined>()
  const [selectedRoomValue, setSelectedRoomValue] = useState<string | undefined>()

  const textReviewRef = useRef<HTMLTextAreaElement>(null)

  const handleStarClicked = (selectedStarIndex: number) => {
    setSelectedStarIndex(selectedStarIndex)
  }

  const handleSelectedPeopleCountRangeInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setSelectedPeopleCount(Number(event.currentTarget.value))
    }
  }

  const handleSelectedRoomValueChanged = (selectedRoomValue: string) => {
    setSelectedRoomValue(selectedRoomValue)
  }

  const handleCancelReview = () => {
    if (onCancelReview) {
      onCancelReview()
    }
  }

  const handleSubmitReview = () => {
    const vibes = Object.entries(selectedFilterMetaMap.vibe)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)

    const params = {
      rating: selectedStarIndex,
      vibes: vibes,
      participants: selectedPeopleCount,
      hasRoom: selectedRoomValue,
      review: textReviewRef.current?.value,
    }

    console.log(params)
  }

  const isEnabled = useCallback(() => {
    return !!selectedStarIndex
  }, [selectedStarIndex])

  return {
    starList,
    selectedStarIndex,
    vibeFilterList,
    selectedFilterMetaMap,
    selectedPeopleCount,
    selectedRoomValue,
    textReviewRef,
    handleStarClicked,
    onSelectedFilterChanged,
    handleSelectedRoomValueChanged,
    handleSelectedPeopleCountRangeInputChanged,
    handleCancelReview,
    handleSubmitReview,
    isEnabled,
  }
}

export default useReviewActions

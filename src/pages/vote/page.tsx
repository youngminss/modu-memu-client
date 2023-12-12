"use client"

import KakaoMap from "@/src/components/ui/templates/KakaoMap"
import List from "@/src/components/ui/templates/List"
import { Position, useGeolocationPosition } from "@/src/store/useGeolocationPosition"
import { STORAGE_KEYS, getSessionStorageItem } from "@/src/utils/functions/storage"
import { useEffect } from "react"

const VotePage = () => {
  const setPosition = useGeolocationPosition((state) => state.actions.setPosition)

  useEffect(() => {
    const userPositionBySession: Position | null = getSessionStorageItem(STORAGE_KEYS.MODU_MEMU_USER_POSITION)

    if (userPositionBySession) {
      setPosition(userPositionBySession)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex h-[100svh]">
      <List />
      <div className="relative flex-1">
        <KakaoMap />
      </div>
    </div>
  )
}

export default VotePage

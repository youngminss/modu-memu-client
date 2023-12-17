"use client"

import KakaoMap from "@/src/components/KakaoMap"
import Header from "@/src/components/common/Header"
import Toggle from "@/src/components/common/Toggle"
import { Position, useGeolocationPosition } from "@/src/store/map/useGeolocationPosition"
import { STORAGE_KEYS, getSessionStorageItem } from "@/src/utils/functions/storage"
import { IconAdjustments } from "@tabler/icons-react"
import { useEffect } from "react"

const SearchPage = () => {
  const setPosition = useGeolocationPosition((state) => state.actions.setPosition)

  useEffect(() => {
    const userPositionBySession: Position | null = getSessionStorageItem(STORAGE_KEYS.MODU_MEMU_USER_POSITION)

    if (userPositionBySession) {
      setPosition(userPositionBySession)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTogglePressed = (isPressed: boolean) => {
    console.log(isPressed)
  }

  return (
    <div className="flex h-[100svh]">
      <div className="relative w-[45rem]">
        <Header />

        <div className="">
          <Toggle onPressedChange={handleTogglePressed} showCloseButton>
            <p>테스트 토글</p>
          </Toggle>

          <Toggle className="-rotate-90 !rounded-[0.4rem] !p-[1rem]" onPressedChange={handleTogglePressed}>
            <IconAdjustments size="1.5rem" />
          </Toggle>
        </div>
      </div>

      <div className="relative flex-1">
        <KakaoMap />
      </div>
    </div>
  )
}

export default SearchPage

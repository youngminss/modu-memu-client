"use client"

import Header from "@/src/components/common/Header"
import { useGeolocationPosition } from "@/src/store/useGeolocationPosition"

const MapPage = () => {
  const position = useGeolocationPosition((state) => state.position)
  const isPositionUpdating = useGeolocationPosition((state) => state.isPositionUpdating)

  return (
    <div className="flex">
      <div className="w-[45rem]">
        <Header />
      </div>

      <div className="flex-1">
        {isPositionUpdating ? (
          <p>Updating Position ....</p>
        ) : (
          <>
            <p>위도 : {position.latitude}</p>
            <p>경도 : {position.longitude}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default MapPage

import { Map } from "react-kakao-maps-sdk"
import { useGeolocationPosition } from "../store/useGeolocationPosition"

const KakaoMap = () => {
  const isPositionUpdating = useGeolocationPosition((state) => state.isPositionUpdating)
  const position = useGeolocationPosition((state) => state.position)

  return (
    <>
      {isPositionUpdating && <div className="absolute left-0 top-0 z-30 h-full w-full bg-slate-600 opacity-30" />}
      <Map className="h-full w-full" center={{ lat: position.latitude, lng: position.longitude }} />
    </>
  )
}

export default KakaoMap

// src/store/useGeolocationPosition.ts

// import { create } from "zustand"
// import { STORAGE_KEYS, setSessionStorageItem } from "../utils/functions/storage"

// export interface Position {
//   latitude: number
//   longitude: number
// }

// interface IGeolocationPositionState {
//   isPositionUpdating: boolean
//   position: Position
//   coords?: GeolocationCoordinates
// }

// interface IGeolocationPositionAction {
//   actions: {
//     setIsPositionUpdating: (isPositionUpdating: boolean) => void
//     setPosition: ({ latitude, longitude }: { latitude: number; longitude: number }) => void
//     setCoordinates: (coords: GeolocationCoordinates) => void
//     init: () => void
//   }
// }

// type TGeolocationPositionStore = IGeolocationPositionState & IGeolocationPositionAction

// export const POSITION_DEFAULT: Position = {
//   latitude: 37.498764,
//   longitude: 127.027492,
// }

// const initState: IGeolocationPositionState = {
//   isPositionUpdating: false,
//   position: POSITION_DEFAULT,
//   coords: undefined,
// }

// export const useGeolocationPosition = create<TGeolocationPositionStore>((set, get) => ({
//   ...initState,

//   actions: {
//     setIsPositionUpdating: (isPositionUpdating) => {
//       set({ isPositionUpdating: isPositionUpdating })
//     },
//     setCoordinates: (coords) => {
//       setSessionStorageItem(STORAGE_KEYS.MODU_MEMU_USER_POSITION, {
//         latitude: coords.latitude,
//         longitude: coords.longitude,
//       })

//       set({
//         coords: coords,
//         position: {
//           latitude: coords.latitude,
//           longitude: coords.longitude,
//         },
//         isPositionUpdating: false,
//       })
//     },
//     setPosition: ({ latitude, longitude }) => {
//       set({
//         position: {
//           latitude: latitude,
//           longitude: longitude,
//         },
//         isPositionUpdating: false,
//       })
//     },
//     init: () => {
//       const geolocationActions = get().actions

//       geolocationActions.setIsPositionUpdating(true)

//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           geolocationActions.setCoordinates(position.coords)
//         },
//         (positionError) => {
//           // TODO : logging user denied Geolocation
//           console.log(positionError)
//         }
//       )
//     },
//   },
// }))

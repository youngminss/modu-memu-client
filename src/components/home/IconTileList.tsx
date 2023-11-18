import Image from "next/image"

const iconArrowTile = "/icons/arrow_tile.svg"
const iconMapTile = "/icons/map_tile.svg"
const iconMarkerTile = "/icons/marker_tile.svg"
const iconSearchTile = "/icons/search_tile.svg"

const tileListRepeat1 = [iconArrowTile, iconMapTile, iconMarkerTile, iconSearchTile]
const tileListRepeat2 = [iconSearchTile, iconMarkerTile, iconArrowTile, iconMapTile]

const tileList = [
  ...tileListRepeat2,
  ...tileListRepeat2,
  ...tileListRepeat1,
  ...tileListRepeat1,
  ...tileListRepeat2,
  ...tileListRepeat2,
  ...tileListRepeat1,
  ...tileListRepeat1,
]

const tabletTileList = [
  ...tileListRepeat2,
  ...tileListRepeat2,
  ...tileListRepeat1,
  ...tileListRepeat1,
  ...tileListRepeat2,
  ...tileListRepeat2,
]

const mobileTileList = [
  ...tileListRepeat2,
  ...tileListRepeat1,
  ...tileListRepeat1,
  ...tileListRepeat2,
  ...tileListRepeat1,
  ...tileListRepeat2,
  ...tileListRepeat1,
]

const IconTileList = () => {
  return (
    <div className="fixed bottom-0 -z-20 grid grid-cols-8 gap-[3.2rem] max-md:grid-cols-6 max-[475px]:grid-cols-4">
      <div className="absolute left-0 top-0 h-full w-[100dvw] bg-gradient-to-b from-white via-white via-20%" />

      {tileList.map((tile, index) => {
        return (
          <div key={`${tile}_${index}`} className="!w-fit max-md:hidden">
            <Image src={tile} alt="" width={134} height={134} />
          </div>
        )
      })}

      {tabletTileList.map((tile, index) => {
        return (
          <div key={`${tile}_${index}`} className="!w-fit max-[475px]:hidden md:hidden">
            <Image src={tile} alt="" width={134} height={134} />
          </div>
        )
      })}

      {mobileTileList.map((tile, index) => {
        return (
          <div key={`${tile}_${index}`} className="!w-fit min-[475px]:hidden">
            <Image src={tile} alt="" width={134} height={134} />
          </div>
        )
      })}
    </div>
  )
}

export default IconTileList

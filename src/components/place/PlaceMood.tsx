"use client"

interface IPlaceMood {
  label: string
  textColor: string
  backgroundColor: string
}

const PlaceMood = ({ label, textColor, backgroundColor }: IPlaceMood) => {
  return (
    <div className={`flex h-[2.2rem] w-max items-center ${backgroundColor} rounded-sm px-[0.6rem]`}>
      <span className={`text-detail ${textColor}`}>{label}</span>
    </div>
  )
}

export default PlaceMood

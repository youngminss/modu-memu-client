import { useState } from "react"

const useHover = () => {
  const [iconStatus, setIconStatus] = useState<string>("unselected")

  const handleMouseOver = () => {
    setIconStatus("selected")
  }

  const handleMouseOut = () => {
    setIconStatus("unselected")
  }

  return {
    iconStatus,
    handleMouseOver,
    handleMouseOut,
  }
}

export default useHover

import * as RadixToggle from "@radix-ui/react-toggle"
import { IconX } from "@tabler/icons-react"
import { ReactNode } from "react"

const Toggle = ({
  className,
  children,
  showCloseButton = false,
  closeButtonSize = "1.6rem",
  pressed,
  onPressedChange,
}: {
  className?: string
  children: ReactNode
  showCloseButton?: boolean
  closeButtonSize?: string | number
  pressed: boolean
  onPressedChange?: (isPressed: boolean) => void
}) => {
  return (
    <RadixToggle.Root
      className={`flex items-center justify-center gap-x-[0.4rem] rounded-[10rem] border border-gray-300 bg-white px-[1.2rem] py-[0.8rem] text-body-5 text-gray-500 data-[state=on]:border-solid data-[state=on]:border-primary-500 data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 ${className}`}
      pressed={pressed}
      onPressedChange={onPressedChange}
    >
      {children}

      {showCloseButton && <IconX size={closeButtonSize} />}
    </RadixToggle.Root>
  )
}

export default Toggle

import { ReactNode } from "react"

const Modal = ({
  children,
  confirmClassName,
  cancelClassName,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: {
  children?: ReactNode
  confirmClassName?: string
  cancelClassName?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}) => {
  const showConfirm = !!onConfirm
  const showCancel = !!onCancel

  return (
    <div className="fixed left-0 top-0 z-[9998] flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col rounded-[1.2rem] bg-white px-[3rem] py-[2.4rem]">
        {children && children}

        <div className="flex flex-1 flex-col gap-y-[0.8rem]">
          {showConfirm && (
            <div
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-[0.4rem] bg-primary-500 py-[1.2rem] text-white ${confirmClassName}`}
              onClick={onConfirm}
            >
              <p className="text-body-1 font-bold">{confirmText}</p>
            </div>
          )}

          {showCancel && (
            <div
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-[0.4rem] bg-gray-300 py-[1.2rem] text-white ${cancelClassName}`}
              onClick={onCancel}
            >
              <p className="text-body-1 font-normal">{cancelText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal

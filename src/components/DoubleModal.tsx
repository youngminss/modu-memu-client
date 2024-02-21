import React, { useState, useEffect } from "react"

interface IDoubleButton {
  modalStyle: string
  buttonStyle: string
  modalText: string
  buttonText: string
}

interface IModal {
  onClose: () => void
  buttonClick: () => void
  isSingleButton: boolean
  doubleButtonProps?: IDoubleButton
}

const DoubleModal = ({ onClose, buttonClick, isSingleButton, doubleButtonProps }: IModal) => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    const layoutElement = document.getElementById("layout")
    if (isModalOpen && layoutElement) {
      layoutElement.style.overflow = "hidden"
    }

    return () => {
      if (layoutElement) {
        layoutElement.style.overflow = ""
      }
    }
  }, [isModalOpen])

  const closeModal = () => {
    setIsModalOpen(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className={`relative grid place-content-center rounded-xl bg-white leading-[1.8rem] shadow-lg ${doubleButtonProps?.modalStyle}`}
      >
        <div className="mb-[4rem] mt-[4.4rem] text-center">
          <span className="text-single-popup">{doubleButtonProps?.modalText.split(".")[0]}</span>
          <br />
          <span className="text-single-popup">{doubleButtonProps?.modalText.split(".")[1]}</span>
        </div>
        <div className="flex justify-around">
          {isSingleButton ? (
            <button
              className={`rounded text-body-1 text-white ${doubleButtonProps?.buttonStyle}`}
              onClick={buttonClick}
            >
              {doubleButtonProps?.buttonText}
            </button>
          ) : (
            <>
              <div className="flex w-[34.2rem] justify-between">
                <button className="h-[5.2rem] w-[16.3rem] bg-gray-300 text-body-1 text-white" onClick={closeModal}>
                  아니요
                </button>
                <button className="h-[5.2rem] w-[16.3rem] bg-primary-500 text-body-1 text-white" onClick={buttonClick}>
                  {doubleButtonProps?.buttonText}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoubleModal

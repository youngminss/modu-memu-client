import { IconCircleX, IconSearch } from "@tabler/icons-react"
import { useState } from "react"
import DaumPostcodeEmbed, { Address } from "react-daum-postcode"

const InputPostCode = ({
  address,
  onPostCodeInputCompleted,
}: {
  address?: string
  onPostCodeInputCompleted: (address: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onComplete = (postAddress: Address) => {
    let addr = ""
    let extraAddr = ""

    // Address.userSelectedType == 도로명 주소
    if (postAddress.userSelectedType === "R") {
      addr = postAddress.roadAddress
    } else {
      addr = postAddress.jibunAddress
    }

    if (postAddress.userSelectedType === "R") {
      // 법정동명이 있을 경우 추가한다.
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (postAddress.bname !== "" && /[동|로|가]$/g.test(postAddress.bname)) {
        extraAddr += postAddress.bname
      }

      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (postAddress.buildingName !== "" && postAddress.apartment === "Y") {
        extraAddr += extraAddr !== "" ? ", " + postAddress.buildingName : postAddress.buildingName
      }

      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddr !== "") {
        extraAddr = " (" + extraAddr + ")"
      }
    }

    onPostCodeInputCompleted(`${addr} ${extraAddr}`)
    setIsOpen(false)
  }

  return (
    <div className="flex-1">
      <div
        className="flex items-center gap-x-[0.4rem] rounded border-[1px] border-gray-200 bg-gray-50 p-[1.2rem]"
        onClick={() => setIsOpen(true)}
      >
        {address ? (
          <p className="text-body-3 text-gray-800">{address}</p>
        ) : (
          <>
            <IconSearch className="text-gray-400" size="1.8rem" />
            <p className="text-body-3 text-gray-400">클릭하여 주소 검색하기</p>
          </>
        )}
      </div>

      <div
        className={`${
          isOpen ? "fixed flex flex-col" : "hidden"
        } h-[calc(100vh - 7.8rem)] left-[50%] top-[7.8rem] mx-auto w-screen max-w-[48rem] -translate-x-[50%]`}
      >
        <div className="relative flex h-[4.6rem] items-center justify-between bg-gray-600 pl-[2rem] pr-[1.4rem]">
          <p className="text-[1.8rem] text-body-1 text-white">우편번호 찾기</p>
          <IconCircleX className="text-3xl text-white hover:cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <DaumPostcodeEmbed
          style={{
            width: "100%",
            height: "calc(100vh - 12.4rem)",
          }}
          onComplete={onComplete}
          autoClose={false}
        />
      </div>
    </div>
  )
}

export default InputPostCode

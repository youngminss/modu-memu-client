"use client"

import InputPostCode from "@/src/components/InputPostCode"
import { IconCurrentLocation } from "@tabler/icons-react"
import { useState } from "react"

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/Accordion"
import Modal from "@/src/components/Modal/Modal"
import Toggle from "@/src/components/Toggle"
import * as Accordion from "@radix-ui/react-accordion"
import axios from "axios"
import Image from "next/image"

type TCoord = {
  latitude?: number
  longitude?: number
}

type TLocation = TCoord & {
  address?: string
}

const DEFAULT_ADDRESS = "서울 강남구 역삼동 820-10 (강남역 11번 출구)"
const DEFAULT_LATITUDE = 37.498895
const DEFAULT_LONGITUDE = 127.02773

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [location, setLocation] = useState<TLocation>({})
  const [invalidAddress, setInvalidAddress] = useState<string | null>(null)

  const isSubmitAble = !!location.address

  const handlePostCodeInputCompleted = async (address: string) => {
    const isAvailableAddress = /강남구/.test(address)

    if (!isAvailableAddress) {
      setShowModal(true)
      setInvalidAddress(address)
      return
    }

    const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json`, {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        query: address,
      },
    })

    const { x: longitude, y: latitude } = response.data.documents[0]
    setLocation({
      address: address,
      latitude: Math.round(parseFloat(latitude) * 1e6) / 1e6,
      longitude: Math.round(parseFloat(longitude) * 1e6) / 1e6,
    })
  }

  const onSubmit = () => {
    if (isSubmitAble) {
      console.log(location)
    }
  }

  return (
    <div>
      <div className="flex flex-col bg-primary-500 px-[2rem]">
        <div className="pb-[3.85rem] pt-[4.4rem]">
          <p className="pb-[3rem] text-heading-2 text-white">
            아래 문항에 답변하면 모두가 원하는
            <br />
            강남구 내의 회식 장소를
            <br />
            1분만에 찾아드려요!
          </p>
          <div className="flex flex-col rounded bg-white px-[2rem] py-[2.4rem]">
            <div className="flex items-center pb-[0.4rem]">
              <IconCurrentLocation className="text-gray-700" size="1.8rem" />
              <span className="ml-[0.6rem] text-heading-4">원하는 지역을 검색해 주세요.</span>
            </div>
            <span className="flex-1 pb-[1.6rem] text-body-5 text-gray-500">
              선택한 위치에서 1km 이내의 가장 적합한 음식점 장소를 추천해줘요
            </span>

            <InputPostCode address={location.address} onPostCodeInputCompleted={handlePostCodeInputCompleted} />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[2rem] pb-[16rem]">
        <div className="flex flex-col pt-[4rem]">
          <div className="flex gap-x-[0.6rem] pb-[2.4rem]">
            <Image alt="" src="/icons/mood.svg" width={18} height={18} />
            <p className="text-heading-4 text-gray-700">원하는 음식점의 분위기를 선택해주세요.</p>
          </div>

          <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem]">
            {DUMMY_SEARCH_FILTER_TYPE_LIST_MAP["vibe"].map((vibe) => {
              const { id, name } = vibe
              return (
                <div key={`${id}_${name}`} onClick={() => {}}>
                  <Toggle>{name}</Toggle>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col pt-[4rem]">
          <div className="flex gap-x-[0.6rem] pb-[2.4rem]">
            <Image alt="" src="/icons/bell.svg" width={18} height={18} />
            <p className="text-heading-4 text-gray-700">원하는 음식점의 메뉴를 선택해주세요.</p>
          </div>

          <Accordion.Root className="flex flex-col gap-y-[1.2rem]" type="multiple">
            <AccordionItem value="한식">
              <AccordionTrigger>
                <p className="py-[1.2rem] text-body-2 text-gray-800">한식</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem]">
                  {DUMMY_SEARCH_FILTER_TYPE_LIST_MAP["food"].map((mood) => {
                    const { id, name } = mood
                    return (
                      <div key={`${id}_${name}`} onClick={() => {}}>
                        <Toggle>{name}</Toggle>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="중식">
              <AccordionTrigger>
                <p className="py-[1.2rem] text-body-2 text-gray-800">중식</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem]">
                  {DUMMY_SEARCH_FILTER_TYPE_LIST_MAP["food"].map((mood) => {
                    const { id, name } = mood
                    return (
                      <div key={`${id}_${name}`} onClick={() => {}}>
                        <Toggle>{name}</Toggle>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="일식">
              <AccordionTrigger>
                <p className="py-[1.2rem] text-body-2 text-gray-800">일식</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-x-[0.6rem] gap-y-[0.8rem]">
                  {DUMMY_SEARCH_FILTER_TYPE_LIST_MAP["food"].map((mood) => {
                    const { id, name } = mood
                    return (
                      <div key={`${id}_${name}`} onClick={() => {}}>
                        <Toggle>{name}</Toggle>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[48rem] bg-white px-[2rem] py-[3.2rem]">
        <div
          className={`rounded-[0.4rem] py-[2rem] ${
            isSubmitAble ? "cursor-pointer bg-primary-500 " : "cursor-not-allowed bg-gray-300"
          }`}
          onClick={onSubmit}
        >
          <p className="text-center text-body-1 text-white">회식 장소 찾기</p>
        </div>
      </div>

      {showModal && (
        <Modal
          children={
            <div className="flex flex-col gap-y-[0.8rem] whitespace-pre-wrap pb-[2.8rem] text-center text-body-1 font-medium text-gray-700">
              <p>
                {invalidAddress && `${invalidAddress} 은(는)`}
                <br />
                오픈 예정인 지역이에요.
              </p>

              <p className="font-bold">운영 중인 지역으로 설정할래요?</p>
            </div>
          }
          confirmText="설정할래요"
          cancelText="아니요"
          onConfirm={() => {
            setLocation({ address: DEFAULT_ADDRESS, latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE })
            setShowModal(false)
          }}
          onCancel={() => {
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

export default HomePage

export const DUMMY_SEARCH_FILTER_TYPE_LIST_MAP: { [key: string]: any[] } = {
  food: [
    {
      id: 1,
      name: "소고기",
      type: "한식",
    },
    {
      id: 2,
      name: "치킨",
      type: "기타",
    },
    {
      id: 3,
      name: "삼겹살",
      type: "한식",
    },
    {
      id: 4,
      name: "회/해물",
      type: "한식",
    },
    {
      id: 5,
      name: "샤브샤브",
      type: "한식",
    },
    {
      id: 6,
      name: "마라탕",
      type: "중식",
    },
    {
      id: 7,
      name: "양꼬치",
      type: "중식",
    },
    {
      id: 8,
      name: "베트남음식",
      type: "기타",
    },
  ],
  vibe: [
    {
      id: 1,
      name: "모던한",
    },
    {
      id: 2,
      name: "조용한",
    },
    {
      id: 3,
      name: "화려한",
    },
  ],
}

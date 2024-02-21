"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// 주석 부분은 카카오 로그인 버튼으로 운영 배포 이후에 설정
const Header = () => {
  const [isAllowedPath, setIsAllowedPath] = useState<boolean>(false)

  useEffect(() => {
    const allowPath = ["search"]
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      const allowedPath = allowPath.some((path) => url.pathname.includes(path))
      setIsAllowedPath(allowedPath)
    }
  }, [])

  return (
    <nav className={`sticky top-0 flex h-[7.8rem] w-screen max-w-[48rem] items-center justify-between bg-white`}>
      <div className="ml-[2rem]">
        <button>
          <Image src="/images/logo.svg" alt="logo" height={30} width={130} />
        </button>
      </div>
      {isAllowedPath && (
        <div className="mr-[1.8rem]">
          {/* eslint-disable-next-line prettier/prettier */}
          <button className="grid h-[3rem] w-[6rem] place-items-center rounded bg-yellow">
            <div className="flex w-[4.4rem] justify-between">
              <Image src="/images/kakaotalk-logo.svg" alt="kakaotalk-logo" height={11.2} width={12} />
              <span>로그인</span>
            </div>
          </button>
        </div>
      )}
    </nav>
  )
}

export default Header

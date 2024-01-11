import Image from "next/image"

// 카카오 로그인 버튼은 운영 배포 이후에 설정
const Header = () => {
  return (
    <nav className={`flex h-[78px] w-screen max-w-[480px] items-center`}>
      <div className="ml-[20px]">
        <Image src="/images/logo.svg" alt="logo" height={30} width={130} />
      </div>
    </nav>
  )
}

export default Header

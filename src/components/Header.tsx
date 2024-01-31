import Image from "next/image"

// 카카오 로그인 버튼은 운영 배포 이후에 설정
const Header = () => {
  return (
    <nav className={`flex h-[7.8rem] w-screen max-w-[48rem] items-center`}>
      <div className="ml-[2rem]">
        <Image src="/images/logo.svg" alt="logo" height={30} width={130} />
      </div>
    </nav>
  )
}

export default Header

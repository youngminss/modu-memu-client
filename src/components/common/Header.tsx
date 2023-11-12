import Image from "next/image"

const Header = ({ className }: { className?: string }) => {
  return (
    <header>
      <nav className={`px-[1.9rem] py-[2.4rem] ${className}`}>
        <Image src="/images/logo.png" alt="logo" height={30} width={130} />
      </nav>
    </header>
  )
}

export default Header

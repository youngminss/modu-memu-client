import Link from "next/link"
import Image from "next/image"

interface PlaceLinkProps {
  url: string
}

const PlaceUrl: React.FC<PlaceLinkProps> = ({ url }) => {
  return (
    <Link href={url}>
      <div className="mt-[0.4rem] flex cursor-pointer">
        <Image src="/images/naver-place-link.svg" alt="naver-place-link" height={11} width={11} />
        <span className="ml-[0.4rem] text-body-5 text-gray-500">네이버 지도로 보기</span>
      </div>
    </Link>
  )
}

export default PlaceUrl

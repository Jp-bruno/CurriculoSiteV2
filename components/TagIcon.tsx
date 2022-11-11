import Image from "next/image";

type Size = {
    size?: number | 2
}

const TagIcon = ({ size = 2 }:Size) => <Image src='/TagIcon.png' alt='Icon' width={126 / size} height={56 / size} layout='intrinsic' />

export default TagIcon
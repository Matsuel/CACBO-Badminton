import Image from 'next/image'
import { cn } from '@/utils/cn'

interface BannerProps {
    src: string;
    alt: string;
    className?: string;
}

// Image pleine largeur sous le Header (calque BANNIERE du Figma, 393×300).
const Banner = ({ src, alt, className }: BannerProps) => {
    return (
        <div className={cn('relative w-full aspect-[393/300]', className)}>
            <Image src={src} alt={alt} fill preload sizes="100vw" className="object-cover" />
        </div>
    )
}

export default Banner

import Image from 'next/image';
import Text from './Text';

interface CarousselProps {
    title: string;
    images: { src: string; alt: string }[];
}

const Caroussel = ({
    images,
    title
}: CarousselProps) => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-center gap-content'>
            <Text variant="h2" color="rouge">
                {title}
            </Text>
            <div className='w-full flex flex-row items-center justify-start gap-content overflow-x-auto snap-x snap-mandatory scrollbar-none'>
                {images.map(({ src, alt }) => (
                    <Image
                        key={src}
                        src={src}
                        alt={alt}
                        width={280}
                        height={360}
                        sizes="280px"
                        className='shrink-0 snap-start rounded-xl w-70 h-90 object-cover'
                    />
                ))}
            </div>
        </div>
    )
}

export default Caroussel

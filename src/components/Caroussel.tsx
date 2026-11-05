import Image from 'next/image';
import type React from 'react';
import Text from "@/components/Text";

interface CarousselProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    images: string[];
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
            <div className='w-full flex flex-row items-center justify-start gap-content overflow-x-auto whitespace-nowrap scrollbar-none'>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={280}
                        height={360}
                        className='shrink-0 rounded-xl'
                    />
                ))}
            </div>
        </div>
    )
}

export default Caroussel
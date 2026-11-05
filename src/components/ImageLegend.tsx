import Image from 'next/image';
import { cn } from '@/utils/cn';
import Text from './Text';

interface ImageLegendProps {
    src: string;
    description: string;
    className?: string;
}

// Photo arrondie + légende (Figma : PHOTO 353×460)
const ImageLegend = ({
    src,
    description,
    className
}: ImageLegendProps) => {
    return (
        <figure className={cn('w-full flex flex-col items-center justify-center gap-content', className)}>
            <div className='relative w-full aspect-[353/460] rounded-xl overflow-hidden'>
                <Image src={src} alt={description} fill sizes="100vw" className='object-cover' />
            </div>
            <Text as="figcaption" variant="secondaire" color="rouge-pale" className="text-center">
                {description}
            </Text>
        </figure>
    )
}

export default ImageLegend

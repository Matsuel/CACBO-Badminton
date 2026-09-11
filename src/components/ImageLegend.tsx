import Image from 'next/image';
import { textVariants } from '@/constantes/theme';
import { cn } from '@/utils/cn';

interface ImageLegendProps {
    src: string;
    description: string;
    className?: string;
}

const ImageLegend = ({
    src,
    description,
    className
}: ImageLegendProps) => {
    return (
        // TODO: mettre les phtos en vertical avec le contenu au centre
        <div className={cn('w-full h-115 flex flex-col items-center justify-center gap-content bg-transparent', className)}>
            <Image
                src={src}
                alt={description}
                className='rounded-xl h-full w-full object-cover'
                width={2000}
                height={2000}
            />
            <p className={`text-center text-redpale ${textVariants.secondary}`}>
                {description}
            </p>
        </div>
    )
}

export default ImageLegend
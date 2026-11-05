import Image from 'next/image';
import { cn } from '@/utils/cn';
import Text from "@/components/Text";

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
            <Text variant="secondaire" color="rouge-pale" className="text-center">
                {description}
            </Text>
        </div>
    )
}

export default ImageLegend
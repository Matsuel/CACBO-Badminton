import Image, {StaticImageData} from "next/image";


interface CustomImageProps {
    image: StaticImageData;
    description: string;
}

const CustomImage = ({
    description,
    image,
} : CustomImageProps) => {
    return (
        <div className="w-auto h-auto flex flex-col rounded-ten gap-4">
            <Image src={image} alt={description} className="w-auto h-auto rounded-ten"/>
            <p className="w-[100%] h-auto font-Inter font-light italic text-[15px] text-center">{description}</p>
        </div>
    )
}

export default CustomImage
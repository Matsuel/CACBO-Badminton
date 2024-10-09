interface SubtitleProps {
    content: string;
    className?: string;
}

const Subtitle = ({
    content,
    className
}: SubtitleProps) => {
    return (
        <h3 className={`font-Montserrat font-semibold text-black text-3xl ${className}`}>
            {content}
        </h3>
    )
}

export default Subtitle
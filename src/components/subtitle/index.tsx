interface SubtitleProps {
    content: string;
}

const Subtitle = ({
    content,
}: SubtitleProps) => {
    return (
        <h3 className="font-Montserrat font-semibold text-black text-3xl">
            {content}
        </h3>
    )
}

export default Subtitle
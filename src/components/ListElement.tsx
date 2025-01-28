
interface ListElementProps {
    children?: React.ReactNode;
}

const ListElement = ({
    children
}: ListElementProps) => {
    return (
        <div className="flex flex-row gap-3 xl:text-xl md:text-[18px] text-base ml-4">
            •
            <p className="font-Inter font-light xl:text-xl md:text-[18px] text-base">
                {children}
            </p>
        </div>
    )
}

export default ListElement
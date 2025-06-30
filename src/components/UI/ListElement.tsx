
interface ListElementProps {
    children?: React.ReactNode;
}

const ListElement = ({
    children
}: ListElementProps) => {
    return (
        <div className="flex flex-row gap-3 xl:text-paragraph text-paragraph-mobile ml-1">
            •
            <p className="font-Inter font-light xl:text-paragraph lg:text-paragraph-mobile">
                {children}
            </p>
        </div>
    )
}

export default ListElement
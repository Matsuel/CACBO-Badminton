
interface ListElementProps {
    children: React.ReactNode;
}

const listElement = ({
    children
}: ListElementProps) => {
    return (
        <div className="flex flex-row gap-3">
            •
            <p className="font-Inter font-light text-xl">
                {children}
            </p>
        </div>
    )
}

export default listElement
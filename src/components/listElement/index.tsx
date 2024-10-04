
interface ListElementProps {
    children: React.ReactNode;
}

const listElement = ({
    children
}: ListElementProps) => {
    return (
        <p className="font-Inter font-light text-xl">
            • {children}
        </p>
    )
}

export default listElement
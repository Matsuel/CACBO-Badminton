

interface ListTitleProps {
    children: React.ReactNode;
}

const ListTitle = ({
    children
}: ListTitleProps) => {
    return (
        <h4 className="font-Inter font-normal text-black text-paragraph flex flex-row items-center gap-1">
            {children}
        </h4>
    )
}

export default ListTitle
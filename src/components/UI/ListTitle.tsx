

interface ListTitleProps {
    children: React.ReactNode;
}

const ListTitle = ({
    children
}: ListTitleProps) => {
    return (
        <h4 className="font-Inter font-normal text-black text-paragraph flex flex-row gap-3 my-2">
            {children}
        </h4>
    )
}

export default ListTitle
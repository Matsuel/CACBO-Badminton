

interface ListTitleProps {
    children: React.ReactNode;
}

const ListTitle = ({
    children
}: ListTitleProps) => {
    return (
        <h4 className="font-Montserrat font-normal text-black text-xl">
            {children}
        </h4>
    )
}

export default ListTitle


interface ListTitleProps {
    children: React.ReactNode;
}

const ListTitle = ({
    children
}: ListTitleProps) => {
    return (
        <h4 className="font-Inter font-normal text-black xl:text-xl md:text-[18px] text-base flex flex-row gap-3 my-2">
            {children}
        </h4>
    )
}

export default ListTitle
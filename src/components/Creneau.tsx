interface CreaneauProps {
    children: React.ReactNode;
}

const Creaneau = ({
    children
}: CreaneauProps) => {
    return (
        <p className="font-Inter font-light xl:text-xl md:text-[18px] text-base flex flex-row gap-3">
            • {children}
        </p>
    )

}

export default Creaneau;
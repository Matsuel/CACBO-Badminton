interface CreaneauProps {
    children: React.ReactNode;
}

const Creaneau = ({
    children
}: CreaneauProps) => {
    return (
        <p className="font-Inter font-light text-paragraph flex flex-row gap-3">
            • {children}
        </p>
    )

}

export default Creaneau;
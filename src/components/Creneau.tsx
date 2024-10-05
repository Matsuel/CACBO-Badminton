interface CreaneauProps {
    children: React.ReactNode;
}

const Creaneau = ({
    children
}: CreaneauProps) => {
    return (
        <p className="font-Inter font-light text-xl">
            • {children}
        </p>
    )

}

export default Creaneau;